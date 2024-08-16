import React from "react";
import { Document7FormData } from "@/app/interfaces/templates";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { MdPhoneInTalk } from "react-icons/md";
import { CiLocationArrow1 } from "react-icons/ci";

interface Props {
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    formData: Document7FormData;
}

const Document7form: React.FC<Props> = ({ handleInputChange, formData }) => {
    return (
        <>
            <div className="space-y-4 py-8">
                <input
                    type="text"
                    name="fecha"
                    value={formData.fecha}
                    onChange={handleInputChange}
                    placeholder="Fecha"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="nombre_cliente"
                    value={formData.nombre_cliente}
                    onChange={handleInputChange}
                    placeholder="Nombre del Cliente"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="cedula"
                    value={formData.cedula}
                    onChange={handleInputChange}
                    placeholder="Cédula del Cliente"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="medico_veterinario"
                    value={formData.medico_veterinario}
                    onChange={handleInputChange}
                    placeholder="Nombre del Médico Veterinario"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="recomendo_examenes"
                    value={formData.recomendo_examenes}
                    onChange={handleInputChange}
                    placeholder="Recomendo los siguientes exámenes"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <h2 className="font-semibold text-lg pb-10 pt-6">Vista previa del documento:</h2>
            <div id="document-7-template" className="w-full">
                <div className="w-full flex flex-col gap-4">
                    <div className='flex flex-col md:flex-row justify-between items-center'>
                        <div className="w-3/4 md:w-2/4">
                            <Image src="/logo1.png" alt="logo" layout="responsive" width={300} height={300}
                                   className="object-contain"/>
                        </div>
                        <div className='flex flex-col mt-4 md:mt-0'>
                            <span className="text-2xl flex items-center gap-1"><MdPhoneInTalk/>2100 2193</span>
                            <span className="text-2xl flex items-center gap-1"><FaWhatsapp/>6087 7912 </span>
                            <span
                                className="text-2xl flex items-center gap-1"><CiLocationArrow1/>Alajuela, El llano</span>
                        </div>
                    </div>
                    <div className="text-base px-6 text-justify font-semibold">
                        <p className='pb-2'>Fecha: {formData.fecha}</p>
                        <p className='pb-2'>
                            Yo: {formData.nombre_cliente}, cédula: {formData.cedula}, estoy consciente del riesgo que
                            corre
                            mi mascota al sacarla del internamiento sin medicación y sin
                            autorización del médico veterinario {formData.medico_veterinario}.
                        </p>
                        <p>
                            También soy consciente que me recomendó exámenes
                            complementarios como: {formData.recomendo_examenes}, los cuales he decidido no realizarlos.
                        </p>
                        <br/>
                        <br/>
                        <p className='pt-10'>____________________</p>
                        <p>Firma del tutor que retira al paciente</p>
                        <br/><br/>
                        <p className='pt-4'>____________________</p>
                        <p className='pb-4'>Firma del médico veterinario</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Document7form;