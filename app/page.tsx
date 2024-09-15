import Link from 'next/link';
import React from "react";
import {cookies} from "next/headers";
import LogoutButton from "@/app/helpers/logoutButton";
import DashboardButton from "@/app/helpers/dashboardButton";

interface MenuItem {
    id: number;
    title: string;
    description: string;
    link: string;
}

const menuItems: MenuItem[] = [
    {id: 1, title: 'Documentos', description: 'Generacion de decumentos para clientes', link: '/formularios'},
    {id: 3, title: 'Tareas', description: 'En progreso de desarrollo', link: '/tasks'},
];

const Home: React.FC = () => {

    const token = cookies().get('accessToken')?.value;
    const isLogged = token && token.trim() !== '';
    const isAdmin = cookies().get('userRole')?.value === 'admin';

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100">
            {isLogged && (
                <LogoutButton />
            )}
            <div className="mb-8">
                {isAdmin && (
                    <DashboardButton />
                )}
            </div>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
                {menuItems.map((item) => (
                    <Link key={item.id} href={item.link}>
            <span
                className="block border border-red-500 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow bg-white hover:bg-red-100">
              <h2 className="text-2xl font-bold text-red-500 mb-2">{item.title}</h2>
              <p className="text-gray-700">{item.description}</p>
            </span>
                    </Link>
                ))}
            </div>
        </main>
    );
};

export default Home;
