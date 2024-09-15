'use client';
import React, { useState, useEffect } from 'react';
import api from "@/app/utils/api";
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { TasksListInterface } from "@/app/interfaces/task_list";
import { UsersList } from "@/app/interfaces/user_list";
import Link from "next/link";

const CreateTaskPage: React.FC = () => {
    const now = new Date();

    now.setHours(now.getHours());

    const formatDate = (date: Date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${year}-${month}-${day}T${hours}:${minutes}`;
    };

    const [formData, setFormData] = useState<Omit<TasksListInterface, 'id' | 'created_date' | 'modified_date'>>({
        title: '',
        description: '',
        priority: 0,
        is_completed: false,
        help_image: undefined,
        is_recurrent: false,
        recurrent_period: '',
        recurrent_days: 1,
        is_archived: false,
        scheduled_time_start: formatDate(now),
        assigned_to: undefined,
    });

    const [errors, setErrors] = useState<{ recurrent_period?: string }>({});
    const [usersList, setUsersList] = useState<UsersList[]>([]);

    const router = useRouter();

    useEffect(() => {
        const token = Cookies.get("accessToken");

        const fetchUsers = async () => {
            try {
                const response = await api.get('/users/', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUsersList(response.data);
            } catch (error) {
                console.error('Error al obtener la lista de usuarios:', error);
            }
        };

        fetchUsers();
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;

        if (type === 'checkbox') {
            setFormData({
                ...formData,
                [name]: (e.target as HTMLInputElement).checked,
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }

        if (name === 'recurrent_period') {
            validateRecurrentPeriod(value);
        }
    };

    const handleGetSelectedUsernameId = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedUserId = Number(e.target.value);
        setFormData({
            ...formData,
            assigned_to: selectedUserId,
        });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFormData({
                ...formData,
                help_image: e.target.files[0],
            });
        }
    };

    const validateRecurrentPeriod = (value: string) => {
        const timeRegex = /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/;
        if (value && !timeRegex.test(value)) {
            setErrors({ recurrent_period: 'Formato inválido. Usa hh:mm:ss.' });
        } else {
            setErrors({});
        }
    };

    const formatRecurrentPeriod = (value: string | undefined) => {
        if (!value) return '00:00:00'; // Default value if undefined

        const parts = value.split(':');
        const hours = parts[0].padStart(2, '0');
        const minutes = parts[1] ? parts[1].padStart(2, '0') : '00';
        const seconds = parts[2] ? parts[2].padStart(2, '0') : '00';
        return `${hours}:${minutes}:${seconds}`;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const token = Cookies.get("accessToken");

        const form = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            if (value !== undefined) {
                form.append(key, value as string | Blob);
            }
        });

        try {
            await api.post('/tasks/', form, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            });
            router.push('/tasks');
        } catch (error) {
            console.error('Error al crear la tarea:', error);
        }
    };

    return (
        <main className="flex flex-col items-center justify-center p-8 bg-gray-100 min-h-screen">
            <Link href={"/tasks"} className="underline text-red-600 hover:text-red-700 mb-8 block text-center">
                Regresar
            </Link>
            <h1 className="text-3xl font-bold text-red-600 mb-8">Crear Nueva Tarea</h1>
            <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Título</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-2 rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Descripción</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-2 rounded"
                        rows={4}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Prioridad</label>
                    <select
                        name="priority"
                        value={formData.priority}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-2 rounded"
                    >
                        <option value={0}>No Importante</option>
                        <option value={1}>Importante</option>
                        <option value={2}>Muy Importante</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Asignado a</label>
                    <select
                        name="assigned_to"
                        value={formData.assigned_to || ''}
                        onChange={handleGetSelectedUsernameId}
                        className="w-full border border-gray-300 p-2 rounded"
                    >
                        <option value="">Escoge el usuario</option>
                        {usersList.map((user, index) => (
                            <option key={index} value={user.id}>
                                {user.username}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                        <input
                            type="checkbox"
                            name="is_recurrent"
                            checked={formData.is_recurrent}
                            onChange={handleInputChange}
                            className="mr-2"
                        />
                        Recurrente
                    </label>
                    {formData.is_recurrent && (
                        <>
                            <div className="mt-4">
                                <label className="block text-gray-700 font-bold mb-2">Cada cuántas horas?
                                    (hh:mm:ss)</label>
                                <input
                                    type="text"
                                    name="recurrent_period"
                                    value={formatRecurrentPeriod(formData.recurrent_period)}
                                    onChange={handleInputChange}
                                    className={`w-full border ${errors.recurrent_period ? 'border-red-500' : 'border-gray-300'} p-2 rounded`}
                                />
                                {errors.recurrent_period &&
                                    <p className="text-red-500 mt-1">{errors.recurrent_period}</p>}
                            </div>
                            <div className="mt-4">
                                <label className="block text-gray-700 font-bold mb-2">Por cuántos días?</label>
                                <input
                                    type="number"
                                    name="recurrent_days"
                                    value={formData.recurrent_days}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 p-2 rounded"
                                />
                            </div>
                        </>
                    )}
                </div>
                <div className="mb-5">
                    <label className="block text-gray-701 font-bold mb-2">Fecha y Hora de Inicio</label>
                    <input
                        type="datetime-local"
                        name="scheduled_time_start"
                        value={formData.scheduled_time_start}
                        onChange={handleInputChange}
                        className="w-full border border-gray-301 p-2 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Imagen de Ayuda</label>
                    <input
                        type="file"
                        name="help_image"
                        onChange={handleFileChange}
                        className="w-full border border-gray-300 p-2 rounded"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-red-600 text-white p-2 rounded hover:bg-red-700 transition-colors"
                >
                    Crear Tarea
                </button>
            </form>
        </main>
    );
};

export default CreateTaskPage;
