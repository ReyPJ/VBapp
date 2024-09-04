'use client'
import React from 'react';
import api from "@/app/utils/api";
import Cookies from "js-cookie";

interface DeleteTaskButtonProps {
    taskId: number;
    onDelete: (taskId: number) => void;
}

const DeleteTaskButton: React.FC<DeleteTaskButtonProps> = ({ taskId, onDelete }) => {
    const handleDelete = async () => {
        try {
            const token = Cookies.get("accessToken");
            await api.delete(`tasks/${taskId}/delete/`, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            });
            onDelete(taskId);
        } catch (error) {
            console.error("Error al eliminar la tarea:", error);
        }
    };

    return (
        <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
        >
            Eliminar
        </button>
    );
}

export default DeleteTaskButton;
