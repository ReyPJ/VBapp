import Link from "next/link";
import React from "react";
import UserListComponent from "@/app/components/userlistComponent";
import CreateUserComponent from "@/app/components/createuserformComponent";

export default function DashboardPage() {
    return (
        <main className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
            <Link href={"/"} className="underline text-red-600 hover:text-red-700 mb-8">
                Regresar
            </Link>
            <h1 className="text-3xl font-bold mb-6 text-gray-800">
                Panel de administrador | Centro Veterinario VB
            </h1>
            <div className="flex flex-col gap-8 w-full max-w-4xl">
                <UserListComponent />
                <CreateUserComponent />
            </div>
        </main>
    );
}
