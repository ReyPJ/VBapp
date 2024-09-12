'use client';
import React, { useState, useEffect } from 'react';
import { TasksListInterface } from "@/app/interfaces/task_list";
import { useParams, useRouter } from 'next/navigation';
import { PencilIcon } from "@heroicons/react/24/outline";
import Cookies from "js-cookie";
import api from "@/app/utils/api";
import DeleteTaskButton from "@/app/helpers/deleteTasksButtons";
import Image from "next/image";
import ProofListComponent from "@/app/components/proofListComponent";

export default function TaskDetailPage() {
    const { id } = useParams();
    const [task, setTask] = useState<TasksListInterface | null>(null);
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [editTaskData, setEditTaskData] = useState<Partial<TasksListInterface>>({});
    const [proofImage, setProofImage] = useState<File | null>(null);
    const [proofNote, setProofNote] = useState<string>('');
    const [err, setErr] = useState<boolean>(false);

    const router = useRouter();

    useEffect(() => {
        const fetchTaskData = async () => {
            try {
                const token = Cookies.get("accessToken");
                const response = await api.get<TasksListInterface>(`tasks/${id}/detail/`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                });
                setTask(response.data);
            } catch (error) {
                console.error("Error al obtener los detalles de la tarea:", error);
            }
        };

        fetchTaskData().catch((error) => {
            console.error('ErrorFetching:', error);
        });
    }, [id]);

    const handleEditClick = () => {
        setIsEditing(true);
        setEditTaskData({
            title: task?.title || '',
            description: task?.description || '',
            priority: task?.priority || 1,
        });
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setEditTaskData({...editTaskData, [e.target.name]: e.target.value});
    }

    const handleSave = async () => {
        try {
            const token = Cookies.get("accessToken");
            await api.patch(`tasks/${id}/update/`, editTaskData, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            });
            setIsEditing(false);
            setTask({...task, ...editTaskData } as TasksListInterface);
        } catch (error) {
            console.error('Error al actualizar la tarea:', error);
        }
    }

    const handleDelete = () => {
        router.push('/tasks');
    };

    const handleGoBack = () => {
        router.back();
    };

    const handleMarkAsCompleted = async () => {
        try {
            const token = Cookies.get("accessToken");
            const formData = new FormData();
            const instanceId = task?.instances?.find((instance) => !instance.is_completed)?.id;
            if(proofImage) {
                formData.append('proof_image', proofImage);
            }
            if(instanceId) {
                formData.append('instance_id', instanceId.toString());
            }
            if(proofNote) {
                formData.append('notes', proofNote);
            }
            const response = await api.post(`tasks/${id}/mark-as-completed/`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Response:', response);
            setErr(false);
            router.push('/tasks');
        } catch (error) {
            console.error('Error al marcar la tarea como completada:', error);
            setErr(true);
        }
    }

    if (!task) {
        return <p className="text-gray-600 text-center">Cargando detalles de la tarea...</p>;
    }

    const isAdminOrStaff = Cookies.get("userRole") === "admin" || Cookies.get("userRole") === "staff";
    // Inavilite mark-as-completed button if all the tasks are already completed
    const isCompletedInstances = task.instances?.every((instance) => instance.is_completed);
    // Check is it is at least one instance to mark as completed
    const isAtLeastOneInstance = task.instances?.some((instance) => instance.is_completed);

    // @ts-ignore
    return (
        <main className="flex items-center justify-center p-8 bg-gray-100 min-h-screen">
            <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8 space-y-6">
                <button
                    onClick={handleGoBack}
                    className="flex items-center text-blue-600 hover:underline mb-4"
                >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                    Regresar
                </button>
                <div className="flex justify-between">
                    <h2 className="text-3xl font-bold text-gray-600">{task.title}</h2>
                    {!isEditing && (
                        <button onClick={handleEditClick} className="flex items-center text-blue-600 hover:underline">
                            <PencilIcon className="w-6 h-6 mr-2"/>
                        </button>
                    )}
                </div>
                {isEditing ? (
                    <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 space-y-6">
                        <div>
                            <label htmlFor="title"
                                   className="block text-gray-700 text-sm font-medium mb-2">Título</label>
                            <input
                                type="text"
                                name="title"
                                value={editTaskData.title}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="description"
                                   className="block text-gray-700 text-sm font-medium mb-2">Descripción</label>
                            <textarea
                                name="description"
                                value={editTaskData.description}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="priority"
                                   className="block text-gray-700 text-sm font-medium mb-2">Prioridad</label>
                            <select
                                name="priority"
                                value={editTaskData.priority}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Selecciona una prioridad</option>
                                <option value={0}>No importante</option>
                                <option value={1}>Importante</option>
                                <option value={2}>Muy importante</option>
                            </select>
                        </div>
                        <div className="flex gap-4">
                            <button
                                onClick={handleSave}
                                className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                Guardar
                            </button>
                            <button
                                onClick={() => setIsEditing(false)}
                                className="bg-red-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                            >
                                Cancelar
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="bg-white border border-gray-300 rounded-lg shadow-sm p-6 space-y-4">
                        <p className="text-gray-600"><strong>Descripción:</strong> {task.description || 'No disponible'}
                        </p>
                        <p className="text-gray-600"><strong>Fecha de
                            creación:</strong> {new Date(task.created_date).toLocaleDateString()} a las {new Date(task.created_date).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</p>
                        <p className="text-gray-600"><strong>Última
                            modificación:</strong> {new Date(task.modified_date).toLocaleDateString()} a las {new Date(task.created_date).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</p>
                        <p className={`text-gray-600 font-semibold ${task.priority === 2 ? 'text-red-600' : task.priority === 1 ? 'text-yellow-600' : 'text-green-600'}`}>
                            {task.priority === 2 ? 'Muy importante' : task.priority === 1 ? 'Importante' : 'No importante'}
                        </p>
                        <p className={"text-gray-600"}><strong>Inicio programado:</strong> {new Date(task.scheduled_time_start).toLocaleDateString()} a las {new Date(task.scheduled_time_start).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</p>
                        {task.is_recurrent && task.recurrent_period ? (
                            <p className="text-gray-600"><strong>Repetir cada:</strong> {task.recurrent_period} horas
                            </p>
                        ) : (
                            <p className="text-gray-600"><strong>Frecuencia:</strong> Solo hacer 1 vez</p>
                        )}
                    </div>
                )}
                {task.help_image && (
                    <div className="space-y-4">
                        <h3 className="text-base font-semibold text-gray-800">Imagen de referencia:</h3>
                        <Image
                            // @ts-ignore
                            src={task.help_image}
                            alt="Imagen de la tarea"
                            width={600}
                            height={400}
                            className="w-96 h-auto rounded-lg border border-gray-300 shadow-sm"
                        />
                    </div>
                )}
                {task.instances && task.instances.length > 0 && (
                    <div className="space-y-4 border border-gray-300 p-6 rounded-lg">
                        <h3 className="text-base font-semibold text-gray-800">Repeticiones hasta completar la tarea:</h3>
                        <ul className="space-y-3">
                            {task.instances.map((instance) => (
                                <li key={instance.id} className="flex justify-between items-center">
                                    <p className="text-gray-600"><strong>Repetición-{instance.instance_number}</strong></p>
                                    <p className="text-gray-600"><strong>Fecha programada:</strong> {new Date(instance.scheduled_time).toLocaleDateString()} a las {new Date(instance.scheduled_time).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</p>
                                    <p className={`text-gray-600 font-semibold ${instance.is_completed ? 'text-green-600' : 'text-yellow-600'}`}>{instance.is_completed ? 'Completado' : 'En progreso'}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                <div className="flex justify-end">
                    {isAdminOrStaff && (
                        <DeleteTaskButton taskId={task.id} onDelete={handleDelete}/>
                    )}
                </div>
                <div className="flex flex-col space-y-4">
                    <label
                        htmlFor="proof_image"
                        className="block text-gray-700 text-sm font-medium"
                    >
                        Subir imagen como prueba de tarea completada:
                    </label>
                    <div className="relative w-full">
                        <input
                            type="file"
                            name="proof_image"
                            accept="image/*"
                            onChange={(e) => setProofImage(e.target.files?.[0] || null)}
                            className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <div
                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm bg-white cursor-pointer flex justify-between items-center">
                            <span className="text-gray-500">
                                {proofImage ? proofImage.name : 'Selecciona una imagen'}
                            </span>
                            <svg
                                className="w-6 h-6 text-gray-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 4v16m8-8H4"
                                />
                            </svg>
                        </div>
                    </div>
                    {err && (
                        <p className="text-red-600">Debes subir una imagen para poder marcarlo como completado.</p>
                    )}
                    <label
                        htmlFor="proof_note"
                        className="block text-gray-700 text-sm font-medium"
                    >
                        Notas adicionales:
                    </label>
                    <textarea
                        name="proof_note"
                        value={proofNote}
                        onChange={(e) => setProofNote(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {task.is_recurrent && (
                        <>
                            {!isCompletedInstances ? (
                                <button
                                    onClick={handleMarkAsCompleted}
                                    className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    Marcar como completada
                                </button>
                            ) : (
                                <p className="text-green-600 text-xl py-3">La tarea ya ha sido completada correctamente</p>
                            )}
                        </>
                    )}
                    {!task.is_recurrent && !task.is_completed && (
                        <button
                            onClick={handleMarkAsCompleted}
                            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Marcar como completada
                        </button>
                    )}
                    {!task.is_recurrent && task.is_completed && (
                        <p className="text-green-600 text-xl py-3">La tarea ya ha sido completada correctamente</p>
                    )}
                </div>
                {task.is_completed && !task.is_recurrent && (
                    <ProofListComponent task_id={task.id} />
                )}
                {task.is_recurrent && isAtLeastOneInstance && (
                    <ProofListComponent task_id={task.id} />
                )}
            </div>
        </main>
    );
}