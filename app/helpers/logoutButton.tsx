'use client';
import Cookies from "js-cookie";
import {useRouter} from "next/navigation";

const LogoutButton = () => {
    const router = useRouter();
    const handleLogout = () => {
        Cookies.remove('accessToken');
        if (Cookies.get('isAdmin')) {
            Cookies.remove('isAdmin');
        }
        router.push('/login');
    }

    return (
        <div>
            <button
                onClick={handleLogout}
                className="underline text-red-600 hover:text-red-700 mb-8"
            >
                Cerrar Sesión
            </button>
        </div>
    )
}

export default LogoutButton;