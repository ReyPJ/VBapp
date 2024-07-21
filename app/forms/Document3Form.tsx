import React from "react";
import { Document3FormData } from "@/app/interfaces/templates";
import Image from "next/image";

interface Props {
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    formData: Document3FormData;
}

const Document3form: React.FC<Props> = ({ handleInputChange, formData }) => {
    return(
        <>
            <div className="space-y-4 py-8">
                <input
                    type="text"
                    name="paciente"
                    value={formData.paciente}
                    onChange={handleInputChange}
                    placeholder="Paciente"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="especie"
                    value={formData.especie}
                    onChange={handleInputChange}
                    placeholder="Especie"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="raza"
                    value={formData.raza}
                    onChange={handleInputChange}
                    placeholder="Raza"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="edad"
                    value={formData.edad}
                    onChange={handleInputChange}
                    placeholder="Edad"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="sexo"
                    value={formData.sexo}
                    onChange={handleInputChange}
                    placeholder="Sexo"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="color"
                    value={formData.color}
                    onChange={handleInputChange}
                    placeholder="Color"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="num_historia_clinica"
                    value={formData.num_historia_clinica}
                    onChange={handleInputChange}
                    placeholder="Numero de Historia Clinica"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="propietario"
                    value={formData.propietario}
                    onChange={handleInputChange}
                    placeholder="Propietario"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="direccion"
                    value={formData.direccion}
                    onChange={handleInputChange}
                    placeholder="Direccion"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    placeholder="Telefono"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Correo Electronico"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="fecha_admision"
                    value={formData.fecha_admision}
                    onChange={handleInputChange}
                    placeholder="Fecha de Admision"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="fecha_salida"
                    value={formData.fecha_salida}
                    onChange={handleInputChange}
                    placeholder="Fecha de Salida"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="motivo_admision"
                    value={formData.motivo_admision}
                    onChange={handleInputChange}
                    placeholder="Motivo de Admisíon"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="diagnostico"
                    value={formData.diagnostico}
                    onChange={handleInputChange}
                    placeholder="Diagnóstico"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="tratamiento"
                    value={formData.tratamiento}
                    onChange={handleInputChange}
                    placeholder="Tratamiento"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="condiciones_salida"
                    value={formData.condiciones_salida}
                    onChange={handleInputChange}
                    placeholder="Condiciones de Salida"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <h2 className="font-semibold text-lg pb-10 pt-6">Vista previa del documento:</h2>
            <div id="document-3-template" className="w-full">
                <div className="flex flex-col mb-3 gap-3 pt-0 justify-center items-center w-full">
                    <Image src="/logo.jpg" alt="logo" width={100} height={100} className="w-1/6"/>
                    <h1 className="text-base font-semibold w-5/6 text-center">Centro Veterinario VB</h1>
                </div>
                <div className="text-xs flex py-3 flex-col gap-2">
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
                    <p>
                        Yo {formData.propietario}, confirmo que he recibido y entiendo las
                        instrucciones proporcionadas por el personal del Hospital Veterinario VB. Estoy de acuerdo en seguir
                        todas las indicaciones y contactar al hospital si hay algún problema o duda.
                    </p>
                </div>
                <div className="w-full flex justify-between pb-3 gap-2 text-xs text-center mt-6">
                    <p>Firma: _______________________________</p>
                    <p>Fecha: {formData.fecha_salida}</p>
                </div>
            </div>
        </>
    )
}

export default Document3form;