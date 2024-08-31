'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import { TasksListInterface } from "@/app/interfaces/task_list";
import Cookies from "js-cookie";
import api from "@/app/utils/api";
import TaskNav from "@/app/components/taskCreateHistoryNavComponent";

const TasksListComponent: React.FC = () => {
    const [tasks, setTasks] = useState<TasksListInterface[]>([]);
    const router = useRouter();

    useEffect(() => {
        const fetchTasksData = async () => {
            try {
                const token = Cookies.get("accessToken");
                const response = await api.get<TasksListInterface[]>('tasks/', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                });
                setTasks(response.data);
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

    const getPriorityLabel = (priority: number) => {
        switch (priority) {
            case 2:
                return { text: 'Muy Importante', color: 'bg-red-100 text-red-600' };
            case 1:
                return { text: 'Importante', color: 'bg-yellow-100 text-yellow-600' };
            case 0:
                return { text: 'No Importante', color: 'bg-green-100 text-green-600' };
            default:
                return { text: 'Desconocido', color: 'bg-gray-100 text-gray-600' };
        }
    };


    const handleTaskClick = (taskId: number) => {
        router.push(`tasks/${taskId}/`);
    };
 return (
        <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Lista de Tareas</h2>
            <TaskNav />
            <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg p-4">
                {tasks.length > 0 ? (
                    tasks.map((task: TasksListInterface) => {
                        const completedInstancesCount = task.instances?.filter(instance => instance.is_completed).length || 0;

                        return (
                            <div
                                key={task.id}
                                className="flex justify-between items-center p-2 mb-2 border-b border-gray-200 hover:bg-gray-200 transition-colors"
                            >
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-800">
                                        {task.title}
                                    </h3>
                                    <p className="text-xs text-gray-600 px-1">Creado: {new Date(task.created_date).toLocaleDateString()}</p>
                                    <div className="flex gap-2">
                                        <p className={`text-xs font-semibold rounded px-2 py-1 mt-1 inline-block ${getPriorityLabel(task.priority).color}`}>
                                            {getPriorityLabel(task.priority).text}
                                        </p>
                                        {/*@ts-ignore*/}
                                        {!task.is_completed && task.instances && task.instances.length === 0 && (
                                            <p className="text-xs font-semibold rounded px-2 py-1 mt-1 inline-block bg-yellow-100 text-yellow-600">
                                                En Progreso
                                            </p>
                                        )}
                                        {!task.is_completed && task.instances && task.instances.length > 0 && (
                                            <p className="text-xs font-semibold rounded px-2 py-1 mt-1 inline-block bg-yellow-100 text-yellow-600">
                                                En Progreso [{completedInstancesCount}/{task.instances.length}]
                                            </p>
                                        )}
                                        {task.is_completed && (
                                            <p className="text-xs font-semibold rounded px-2 py-1 mt-1 inline-block bg-green-100 text-green-600">
                                                Completado
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <button
                                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
                                    onClick={() => handleTaskClick(task.id)}
                                >
                                    Ver detalles
                                </button>
                            </div>
                        );
                    })
                ) : (
                    <p className="text-gray-600 text-center">No hay tareas disponibles.</p>
                )}
            </div>
        </div>
 );
};

export default TasksListComponent;
