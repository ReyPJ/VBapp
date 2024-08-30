'use client';
import Cookies from "js-cookie";
import {useRouter} from "next/navigation";
import api from "@/app/utils/api";

const DashboardButton = () => {
    const router = useRouter();

    const handleEnter = async () => {
        try {
            const token = Cookies.get('accessToken');
            const verify = await api.post('token/verify/', {token});

            if(verify.status === 200) {
                router.push('/dashboard');
            }
        } catch (error) {
            console.error('Error verifying token', error);
            Cookies.remove('accessToken');
            Cookies.remove('userRole');
            router.push('/login');
        }
    }

    return (
        <div>
            <button
                onClick={handleEnter}
                className="inline-block border border-red-500 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow bg-white hover:bg-red-100 text-center text-red-500 font-bold text-xl"
            >
                Panel de Administrador
            </button>
        </div>
    )
}

export default DashboardButton;