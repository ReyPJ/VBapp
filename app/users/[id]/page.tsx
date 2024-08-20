'use client';
import api from "@/app/utils/api";
import { UsersList } from "@/app/interfaces/user_list";
import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { useRouter, useParams } from 'next/navigation';
import { PencilIcon, KeyIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const UserDetailPage: React.FC = () => {
    const [user, setUser] = useState<UsersList | null>(null);
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [isChangingPassword, setIsChangingPassword] = useState<boolean>(false);
    const [editData, setEditData] = useState<Partial<UsersList>>({});
    const [newPassword, setNewPassword] = useState<string>('');
    const { id } = useParams();
    const router = useRouter();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = Cookies.get('accessToken');
                const response = await api.get<UsersList>(`users/${id}/`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                });
                setUser(response.data);
            } catch (error) {
                console.error("Error al obtener los detalles del usuario:", error);
                router.push('/');
            }
        };

        fetchUserData().catch((error) => {
            console.error('ErrorFetching:', error);
        });
    }, [id, router]);

    const handleEditClick = () => {
        setIsEditing(true);
        setEditData({
            username: user?.username || '',
            email: user?.email || '',
            first_name: user?.first_name || '',
            last_name: user?.last_name || '',
            role: user?.role || ''
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setEditData({ ...editData, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        try {
            const token = Cookies.get('accessToken');
            await api.patch(`users/${id}/`, editData, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            });
            setUser({ ...user, ...editData } as UsersList);
            setIsEditing(false);
        } catch (error) {
            console.error("Error al actualizar los detalles del usuario:", error);
        }
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewPassword(e.target.value);
    };

    const handlePasswordSave = async () => {
        try {
            const token = Cookies.get('accessToken');
            await api.patch(`users/${id}/change-password/`, { new_password: newPassword }, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            });
            setNewPassword('');
            setIsChangingPassword(false);
            alert('Contraseña cambiada con éxito');
        } catch (error) {
            console.error("Error al cambiar la contraseña:", error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-2xl bg-white border border-gray-300 rounded-lg shadow-md p-6">
                <div className="mb-6">
                    <Link
                        href="/"
                        className="inline-flex items-center text-sm px-4 py-2 border border-gray-300 rounded-lg bg-white text-red-600 hover:bg-gray-100 hover:border-red-600 transition-colors"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                        Regresar al inicio
                    </Link>
                </div>
                {user ? (
                    <div>
                        <div className="flex items-center mb-4">
                            <h1 className="text-2xl font-bold flex-1">Detalles del Usuario</h1>
                            {!isEditing && !isChangingPassword && (
                                <button
                                    onClick={handleEditClick}
                                    className="p-2 ml-4 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none"
                                >
                                    <PencilIcon className="h-6 w-6 text-gray-700"/>
                                </button>
                            )}
                            {!isEditing && !isChangingPassword && (
                                <button
                                    onClick={() => setIsChangingPassword(true)}
                                    className="p-2 ml-4 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none"
                                >
                                    <KeyIcon className="h-6 w-6 text-gray-700"/>
                                </button>
                            )}
                        </div>
                        {isEditing ? (
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">Nombre
                                        de usuario</label>
                                    <input
                                        type="text"
                                        id="username"
                                        name="username"
                                        value={editData.username}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border border-gray-300 rounded-lg p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email"
                                           className="block text-sm font-medium text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={editData.email}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border border-gray-300 rounded-lg p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="first_name"
                                           className="block text-sm font-medium text-gray-700">Nombre</label>
                                    <input
                                        type="text"
                                        id="first_name"
                                        name="first_name"
                                        value={editData.first_name}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border border-gray-300 rounded-lg p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="last_name"
                                           className="block text-sm font-medium text-gray-700">Apellido</label>
                                    <input
                                        type="text"
                                        id="last_name"
                                        name="last_name"
                                        value={editData.last_name}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border border-gray-300 rounded-lg p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="role"
                                           className="block text-sm font-medium text-gray-700">Rol</label>
                                    <select
                                        id="role"
                                        name="role"
                                        value={editData.role}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border border-gray-300 rounded-lg p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                                    >
                                        <option value="admin">Administrador</option>
                                        <option value="staff">Staff</option>
                                        <option value="member">Miembro</option>
                                    </select>
                                </div>
                                <div className="flex justify-end space-x-4">
                                    <button
                                        onClick={handleSave}
                                        className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                                    >
                                        Guardar
                                    </button>
                                    <button
                                        onClick={() => setIsEditing(false)}
                                        className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                                    >
                                        Cancelar
                                    </button>
                                </div>
                            </div>
                        ) : isChangingPassword ? (
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="new_password" className="block text-sm font-medium text-gray-700">Nueva
                                        Contraseña</label>
                                    <input
                                        type="password"
                                        id="new_password"
                                        name="new_password"
                                        value={newPassword}
                                        onChange={handlePasswordChange}
                                        className="mt-1 block w-full border border-gray-300 rounded-lg p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                                    />
                                </div>
                                <div className="flex justify-end space-x-4">
                                    <button
                                        onClick={handlePasswordSave}
                                        className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                                    >
                                        Cambiar Contraseña
                                    </button>
                                    <button
                                        onClick={() => setIsChangingPassword(false)}
                                        className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                                    >
                                        Cancelar
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <p><strong>ID:</strong> {user.id}</p>
                                <p><strong>Nombre de usuario:</strong> {user.username}</p>
                                <p><strong>Nombre:</strong> {user.first_name}</p>
                                <p><strong>Apellido:</strong> {user.last_name}</p>
                                <p><strong>Email:</strong> {user.email}</p>
                                <p><strong>Rol:</strong> {user.role}</p>
                            </div>
                        )}
                    </div>
                ) : (
                    <p>Cargando...</p>
                )}
            </div>
        </div>
    );
};

export default UserDetailPage;
