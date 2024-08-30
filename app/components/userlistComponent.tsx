'use client';
import api from "@/app/utils/api";
import { UsersList } from "@/app/interfaces/user_list";
import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

const UserListComponent: React.FC = () => {
    const [users, setUsers] = useState<UsersList[]>([]);
    const router = useRouter();

    useEffect(() => {
        const fetchUsersData = async () => {
            try {
                const token = Cookies.get('accessToken');
                const response = await api.get<UsersList[]>('users/', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                });
                setUsers(response.data);
            } catch (error) {
                console.error("Error al obtener los usuarios:", error);
            }
        };

        fetchUsersData().catch((error) => {
            console.error('ErrorFetching:', error);
        });
    }, []);

    const handleUserClick = (userId: number) => {
        router.push(`users/${userId}/`);
    };

    return (
        <div className="w-full bg-white border border-gray-300 rounded-lg shadow-md p-4 max-h-[500px] overflow-y-auto">
            <h2 className="text-xl font-semibold mb-4">Lista de Usuarios</h2>
            {users.map((user: UsersList) => (
                <div
                    key={user.id}
                    className="p-4 border-b last:border-b-0 border-gray-300 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleUserClick(user.id)}
                >
                    <p className="text-lg font-semibold">ID: {user.id}</p>
                    <p className="text-gray-600 mt-1">Usuario: {user.username}</p>
                </div>
            ))}
        </div>
    );
}

export default UserListComponent;
