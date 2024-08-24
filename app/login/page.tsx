'use client'
import React, { useState, useEffect } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import api from '@/app/utils/api';
import Cookies from "js-cookie";

export default function LoginPage() {
    const [usernames, setUsernames] = useState<{ username: string }[]>([]);
    const [username, setSelectedUsername] = useState<string>('');
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUsernames = async () => {
            try {
                const response = await api.get('/usernames');
                setUsernames(response.data);
            } catch (error) {
                console.error('Error fetching usernames', error);
            }
        };

        fetchUsernames().catch((error) => {
            console.error('Unhandled error in fetchUsernames:', error);
        });
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await api.post('token/', { username, password });
            const { access } = response.data;

            Cookies.set('accessToken', access, { expires: 1 });

            if (username === 'admin' || username === 'dev') {
                try {
                    const responseCookie = await api.get('set-admin-cookie/');
                    console.log('Cookie de administrador establecida:', responseCookie);
                } catch (error) {
                    console.error('Error al establecer la cookie de administrador:', error);
                }
            } else {
                Cookies.remove('isAdmin');
            }

            window.location.href = '/';

        } catch (err) {
            setError('Contraseña incorrecta');
        }
    }

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-100">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Bienvenido</h1>
                <form onSubmit={handleSubmit}>
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    <input type="text" name="username" autoComplete="username" className="hidden" />
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700 text-sm font-medium mb-2">Usuario</label>
                        <select
                            name="username"
                            id="username"
                            className="w-full border border-gray-300 rounded-lg p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                            value={username}
                            onChange={(e) => setSelectedUsername(e.target.value)}
                        >
                            <option value="">Escoge el usuario</option>
                            {usernames.map((user, index) => (
                                <option key={index} value={user.username}>
                                    {user.username}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">Contraseña</label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                autoComplete="current-password"
                                placeholder='Tu contraseña'
                                className="w-full border border-gray-300 rounded-lg p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400 focus:outline-none"
                            >
                                {showPassword ? <AiOutlineEyeInvisible size={20}/> : <AiOutlineEye size={20}/>}
                            </button>
                        </div>
                    </div>

                    <button type="submit"
                            className="w-full bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
                    >
                        Iniciar sesión
                    </button>
                </form>
            </div>
        </main>
    );
}
