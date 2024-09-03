'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { TasksListInterface } from "@/app/interfaces/task_list";
import Cookies from "js-cookie";
import api from "@/app/utils/api";
import Link from "next/link";

const ArchivedTaskComponent: React.FC = () => {
    const [archiveTask, setArchiveTasks] = useState<TasksListInterface[]>([]);
    const router = useRouter();

    useEffect(() => {
        const fetchTasksData = async () => {
            try {
                const token = Cookies.get("accessToken");
                const response = await api.get<TasksListInterface[]>('tasks/?is_archived=true', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                });
                setArchiveTasks(response.data);
            } catch (error) {
                console.error("Error al obtener las tareas:", error);
                router.push('/login');
            }
        };

        fetchTasksData().catch((error) => {
            console.error('ErrorFetching:', error);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleTaskClick = (taskId: number) => {
        router.push(`tasks/${taskId}/`);
    };

    return (
        <div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
            <h2 className="text-3xl font-bold text-red-700 mb-6">Tareas Archivadas</h2>
            <Link href={'/tasks'} className="text-blue-600 hover:text-blue-800 underline text-lg mb-4">
                Volver a Tareas
            </Link>
            <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
                {archiveTask.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                        {archiveTask.map((task: TasksListInterface) => (
                            <div
                                key={task.id}
                                className="bg-white rounded-lg shadow-lg p-4 border border-gray-200 hover:bg-gray-100 transition-colors"
                            >
                                <div className="flex items-center mb-4">
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800">{task.title}</h3>
                                        <p className="text-sm text-gray-600">Creado: {new Date(task.created_date).toLocaleDateString()}</p>
                                    </div>
                                </div>
                                <p className="text-gray-700 mb-4">{task.description}</p>
                                <div className="flex items-center justify-between">
                                    <p className="text-sm text-gray-500">Archivado</p>
                                    <button
                                        className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700 transition-colors"
                                        onClick={() => handleTaskClick(task.id)}
                                    >
                                        Ver detalles
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-600 text-center p-6">No hay tareas archivadas disponibles.</p>
                )}
            </div>
        </div>
    );
};

export default ArchivedTaskComponent;
