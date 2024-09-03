"use client"
import React, {useEffect, useState} from "react";
import api from "@/app/utils/api";
import Cookies from "js-cookie";
import {Proof_list} from "@/app/interfaces/proof_list";
import Image from "next/image";
import Modal from "@/app/helpers/imageModal";

interface ProofListProps {
    task_id: number;
}

const ProofListComponent: React.FC<ProofListProps> = ({task_id}) => {
    const [proofs, setProofs] = useState<Proof_list[]>([]);
    const [isOpened, setIsOpened] = useState(false);
    const [isModelOpened, setIsModelOpened] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    useEffect(() => {
        const fetchProofs = async () => {
            try {
                const token = Cookies.get("accessToken");
                const response = await api.get(`tasks/proofs/?task_id=${task_id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                });
                setProofs((response.data))
            } catch (error) {
                console.error("Error al obtener las pruebas:", error);
            }
        }
        fetchProofs().catch(console.error);
    }, [task_id]);

    const handleImageClick = (src: string) => {
        setSelectedImage(src);
        setIsModelOpened(true);
    }

    const handleCloseModal = () => {
        setIsModelOpened(false);
        setSelectedImage(null);
    }

    return (
        <div className="relative w-full">
            <button
                onClick={() => setIsOpened(!isOpened)}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm bg-white flex justify-between items-center"
            >
                <span className="text-gray-500">Pruebas</span>
                <svg
                    className={`w-6 h-6 text-gray-500 transition-transform  duration-300 ${isOpened ? 'transform rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>
            <div
                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${isOpened ? "max-h-screen" : "max-h-0"}`}
            >
                <div className="mt-2 p-4 border border-gray-300 rounded-lg bg-white shadow-sm">
                    <ul className="space-y-4">
                        {proofs.map((proof) => (
                            <li key={proof.id} className="p-4 border border-gray-200 rounded-lg shadow-sm bg-gray-50">
                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                        <Image
                                            // @ts-ignore
                                            src={proof.proof_image}
                                            alt={"Prueba"}
                                            width={100}
                                            height={100}
                                            className="rounded-lg cursor-pointer"
                                            onClick={() => handleImageClick(proof.proof_image as string)}
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-semibold text-gray-800">Fecha de subida: <strong>{new Date(proof.completed_date).toLocaleDateString()}</strong></p>
                                        <p className="text-gray-700">Subida por: <strong>{proof.user}</strong></p>
                                        <p className="text-gray-600 mt-1">Nota: <strong>{proof.notes}</strong></p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <Modal
                    isOpened={isModelOpened}
                    onClose={handleCloseModal}
                    imageSrc={selectedImage as string || ""}
                />
            </div>
        </div>
    )
};

export default ProofListComponent