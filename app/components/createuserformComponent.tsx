'use client';
import api from "@/app/utils/api";
import React, { useState } from "react";
import Cookies from 'js-cookie';

const CreateUserComponent: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [first_name, setFirstName] = useState<string>('');
    const [last_name, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [selectedRole, setSelectedRole] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const token = Cookies.get('accessToken');
            const response = await api.post('users/', {
                username,
                password,
                first_name,
                last_name,
                email,
                role: selectedRole,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            });
            console.log(response.data);
            alert('Usuario creado correctamente');
        } catch (error) {
            console.error('Error al crear usuario:', error);
        }
    }

    return (
        <div className="w-full bg-white border border-gray-300 rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-4">Crear Usuario</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">Nombre de usuario</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-lg p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-lg p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">Nombre</label>
                    <input
                        type="text"
                        id="first_name"
                        name="first_name"
                        value={first_name}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-lg p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Apellido</label>
                    <input
                        type="text"
                        id="last_name"
                        name="last_name"
                        value={last_name}
                        onChange={(e) => setLastName(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-lg p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-lg p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700">Rol</label>
                    <select
                        id="role"
                        name="role"
                        value={selectedRole}
                        onChange={(e) => setSelectedRole(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-lg p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                        required
                    >
                        <option value="" disabled>Escoge el rol</option>
                        <option value="admin">Administrador</option>
                        <option value="staff">Staff</option>
                        <option value="member">Miembro</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                    Crear usuario
                </button>
            </form>
        </div>
    );
}

export default CreateUserComponent;
