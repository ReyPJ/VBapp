'use client'
import React, { useState } from 'react';
import api from "@/app/utils/api";
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { TasksListInterface } from "@/app/interfaces/task_list";
import Link from "next/link";

const CreateTaskPage: React.FC = () => {
    const [formData, setFormData] = useState<Omit<TasksListInterface, 'id' | 'created_date' | 'modified_date'>>({
        title: '',
        description: '',
        priority: 0,
        is_completed: false,
        help_image: undefined,
        is_recurrent: false,
        recurrent_period: undefined,
    });

    const router = useRouter();

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
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFormData({
                ...formData,
                help_image: e.target.files[0],
            });
        }
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
            <Link href="/" className="underline text-red-600 hover:text-red-700 mb-8 block text-center">
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
                        <div className="mt-2">
                            <label className="block text-gray-700 font-bold mb-2">Cada cuanto? (hh:mm:ss)</label>
                            <input
                                type="text"
                                name="recurrent_period"
                                value={formData.recurrent_period || ''}
                                onChange={handleInputChange}
                                step="1"
                                className="w-full border border-gray-300 p-2 rounded"
                            />
                        </div>
                    )}
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
