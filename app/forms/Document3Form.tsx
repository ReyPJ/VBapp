"use client";
import React, {useState} from "react";
import { Document3FormData } from "@/app/interfaces/templates";
import Image from "next/image";
import SignaturePad from "@/app/components/SignaturePad";

interface Props {
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    formData: Document3FormData;
}

const Document3form: React.FC<Props> = ({ handleInputChange, formData }) => {
    const [currentSection, setCurrentSection] = useState<number>(1);
    const [signature, setSignature] = useState<string>('');

    const nextSection = () => {
        if (currentSection < 3) setCurrentSection(currentSection + 1);
    };

    const prevSection = () => {
        if (currentSection > 1) setCurrentSection(currentSection - 1);
    };


    const handleSaveSignature = (signature: string) => {
        setSignature(signature);
    };

    const section1Fields: { name: keyof Document3FormData; placeholder: string }[] = [
        { name: 'paciente', placeholder: 'Paciente' },
        { name: 'especie', placeholder: 'Especie' },
        { name: 'raza', placeholder: 'Raza' },
        { name: 'edad', placeholder: 'Edad' },
        { name: 'sexo', placeholder: 'Sexo' },
        { name: 'color', placeholder: 'Color' },
    ];

    const section2Fields: { name: keyof Document3FormData; placeholder: string }[] = [
        { name: 'num_historia_clinica', placeholder: 'Número de Historia Clínica' },
        { name: 'propietario', placeholder: 'Propietario' },
        { name: 'direccion', placeholder: 'Dirección' },
        { name: 'telefono', placeholder: 'Teléfono' },
        { name: 'email', placeholder: 'Correo Electrónico' },
        { name: 'fecha_admision', placeholder: 'Fecha de Admisión' },
    ];

    const section3Fields: { name: keyof Document3FormData; placeholder: string }[] = [
        { name: 'fecha_salida', placeholder: 'Fecha de Salida' },
        { name: 'motivo_admision', placeholder: 'Motivo de Admisión' },
        { name: 'diagnostico', placeholder: 'Diagnóstico' },
        { name: 'tratamiento', placeholder: 'Tratamiento' },
        { name: 'condiciones_salida', placeholder: 'Condiciones de Salida' },
    ];

    const renderFields = (fields: { name: keyof Document3FormData; placeholder: string }[]) => (
        fields.map((field) => (
            <input
                key={field.name}
                type="text"
                name={field.name}
                value={formData[field.name] || ''}
                onChange={handleInputChange}
                placeholder={field.placeholder}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200 ease-in-out"
            />
        ))
    );
    return(
        <>
            <div className="space-y-4 py-8">
                {currentSection === 1 && renderFields(section1Fields)}
                {currentSection === 2 && renderFields(section2Fields)}
                {currentSection === 3 && renderFields(section3Fields)}

                <div className="flex justify-between mt-4">
                    {currentSection > 1 && (
                        <button
                            type="button"
                            onClick={prevSection}
                            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
                        >
                            Anterior
                        </button>
                    )}
                    {currentSection < 3 && (
                        <button
                            type="button"
                            onClick={nextSection}
                            className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                        >
                            Siguiente
                        </button>
                    )}
                </div>
            </div>
            <SignaturePad onSave={handleSaveSignature} />
            <h2 className="font-semibold text-lg pb-10 pt-6">Vista previa del documento:</h2>
            <div id="document-3-template" className="w-full">
                <div className="flex flex-col mb-3 gap-3 pt-0 justify-center items-center w-full">
                    <div className="w-1/3 md:w-1/6">
                        <Image src="/logo.jpg" alt="logo" layout="responsive" width={100} height={100}
                               className="object-contain"/>
                    </div>
                    <h1 className="text-base font-semibold w-5/6 text-center">Centro Veterinario VB</h1>
                </div>
                <div className="text-xs flex py-2 flex-col gap-2">
                    <p>Dirección: de la iglesia del llano 25 metros este</p>
                    <p>Teléfono: 2100-2193 / 6087-7912</p>
                    <p>Correo Electrónico: administracion@esteticaysaludvb.com</p>
                </div>
                <div className="text-xs flex pb-3 flex-col gap-2">
                    <h2 className="text-sm font-semibold">DOCUMENTO DE SALIDA CONDICIONADA</h2>
                    <ul className="list-none text-sm list-inside">
                        <li className="px-3 py-1">
                            ⚬ Paciente: {formData.paciente}
                        </li>
                        <li className="px-3 py-1">
                            ⚬ Especie: {formData.especie}
                        </li>
                        <li className="px-3 py-1">
                            ⚬ Raza: {formData.raza}
                        </li>
                        <li className="px-3 py-1">
                            ⚬ Edad: {formData.edad}
                        </li>
                        <li className="px-3 py-1">
                            ⚬ Sexo: {formData.sexo}
                        </li>
                        <li className="px-3 py-1">
                            ⚬ Color: {formData.color}
                        </li>
                        <li className="px-3 py-1">
                            ⚬ Número de Historia Clínica: {formData.num_historia_clinica}
                        </li>
                        <li className="px-3 py-1">
                            ⚬ Propietario: {formData.propietario}
                        </li>
                        <li className="px-3 py-1">
                            ⚬ Dirección: {formData.direccion}
                        </li>
                        <li className="px-3 py-1">
                            ⚬ Teléfono: {formData.telefono}
                        </li>
                        <li className="px-3 py-1">
                            ⚬ Correo Electrónico: {formData.email}
                        </li>
                    </ul>
                    <p className="text-xs">Fecha de Admisión: {formData.fecha_admision}</p>
                    <p className="text-xs">Fecha de Salida Condicionada: {formData.fecha_salida}</p>
                </div>
                <div className="text-xs flex pb-3 flex-col gap-2">
                    <h2 className="text-sm font-semibold">Resumen Clínico:</h2>
                    <ul className="list-none text-sm list-inside">
                        <li className="px-3 py-1">
                            1. Motivo de Admisión: {formData.motivo_admision}
                        </li>
                        <li className="px-3 py-1">
                            2. Diagnóstico: {formData.diagnostico}
                        </li>
                        <li className="px-3 py-1">
                            3. Tratamiento: {formData.tratamiento}
                        </li>
                        <li className="px-3 py-1">
                            4. Condiciones para la Salida: {formData.condiciones_salida}
                        </li>
                    </ul>
                </div>
                <div className="text-xs flex pb-3 flex-col gap-2">
                    <h2 className="text-sm font-semibold">Aprobación de Salida Condicionada:</h2>
                    <p className='text-xs'>
                        Yo {formData.propietario}, confirmo que he recibido y entiendo las
                        instrucciones proporcionadas por el personal del Hospital Veterinario VB. Estoy de acuerdo en
                        seguir
                        todas las indicaciones y contactar al hospital si hay algún problema o duda.
                    </p>
                </div>
                <div className="w-full flex justify-between pb-2 gap-2 text-xs text-center mt-6">
                    <p>Firma: </p>
                    {/* eslint-disable @next/next/no-img-element */}
                    {signature && <img src={signature} alt="Signature" width={100} height={60}/>}
                    <p>Fecha: {formData.fecha_salida}</p>
                </div>
            </div>
        </>
    )
}

export default Document3form;
