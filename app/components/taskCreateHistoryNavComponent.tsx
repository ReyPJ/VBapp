import React from 'react';
import Link from 'next/link';

const TaskNav: React.FC = () => {
    return (
        <nav className=" bg-gray-100">
            <div className="flex items-center gap-10 w-fit justify-between p-4 text-base underline">
                <Link href={'/create-task'} className="text-blue-500 hover:text-blue-700">
                    Crear Nueva Tarea
                </Link>
                <Link href={'/archive-tasks'} className="text-blue-500 hover:text-blue-700">
                    Historial de Tareas
                </Link>
            </div>
        </nav>
    );
}

export default TaskNav;