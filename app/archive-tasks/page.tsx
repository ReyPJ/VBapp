import React from 'react';
import Link from 'next/link';
import ArchivedTaskComponent from "@/app/components/archiveTaskListComponent";

export default function TasksPage() {
    return (
        <main className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
            <div className="w-full">
                <Link href="/" className="underline text-red-600 hover:text-red-700 mb-8 block text-center">
                    Regresar
                </Link>
            </div>
            <ArchivedTaskComponent />
        </main>
    );
}
