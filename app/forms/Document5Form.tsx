import React from "react";
import { Document5FormData} from "@/app/interfaces/templates";

interface Props {
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    formData: Document5FormData;
}

const Document5form: React.FC<Props> = ({ handleInputChange, formData }) => {
    return (
        <>
            <div className="space-y-4 py-8">
                <input
                    type="text"
                    name="dia"
                    value={formData.dia}
                    onChange={handleInputChange}
                    placeholder="Dia"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="mes"
                    value={formData.mes}
                    onChange={handleInputChange}
                    placeholder="Mes"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="year"
                    value={formData.year}
                    onChange={handleInputChange}
                    placeholder="Año"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    placeholder="Nombre Dueño"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="cedula"
                    value={formData.cedula}
                    onChange={handleInputChange}
                    placeholder="Cedula"
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
                    placeholder="Numero de Telefono del cliente"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="mascota"
                    value={formData.mascota}
                    onChange={handleInputChange}
                    placeholder="Mascota"
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
                    name="sexo"
                    value={formData.sexo}
                    onChange={handleInputChange}
                    placeholder="Sexo"
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
                    name="color"
                    value={formData.color}
                    onChange={handleInputChange}
                    placeholder="Color del Pelaje"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="medico_veterinario"
                    value={formData.medico_veterinario}
                    onChange={handleInputChange}
                    placeholder="Nombre del Medico Veterinario"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="num_colegiado"
                    value={formData.num_colegiado}
                    onChange={handleInputChange}
                    placeholder="Numero de Colegiado"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="diagnostico"
                    value={formData.diagnostico}
                    onChange={handleInputChange}
                    placeholder="Diagnostico"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <h2 className="font-semibold text-lg pb-10 pt-6">Vista previa del documento:</h2>
            <div id="document-5-template" className="w-full">
                <div className="flex flex-col font-semibold w-full text-base gap-5">
                    <h1 className="text-lg font-bold w-5/6 underline">AUTORIZACIÓN DE EUTANASIA</h1>
                    <p>{formData.dia} de {formData.mes} del {formData.year}.</p>
                    <p>
                        Yo, {formData.nombre}, con el número de indentificación {formData.cedula}, domicialiado en {formData.direccion},
                        con el número de telefono {formData.telefono}.
                    </p>
                    <p>
                        Propietario de (nombre del animal) {formData.mascota}, especie {formData.especie}, sexo {formData.sexo},
                        edad {formData.edad}, raza {formData.raza}, colo del pelaje {formData.color}.
                    </p>
                    <p>
                        Autorizo al Médico Veterinario {formData.medico_veterinario}, Número de Colegiado {formData.num_colegiado},
                        a practicar la Eutanasia Clínica de la mascota antes mencionada, de conformidad con la técnica profesional
                        habitual, bajo un método rápido, indoloro y sin crueldad, maltrato o agonía prolongada. La medida a adoptarse
                        es justificada a causa del diagnóstico {formData.diagnostico}.
                    </p>
                    <p>
                        Declaro bajo juramento que el animal a sacrificar, es de mi propiedad y he dado la autorización y consentimiento
                        paar dicho procedemiento.
                    </p>
                    <div className='flex flex-col text-base py-2'>
                        <span>______________________ {formData.telefono}</span>
                        <p>Firma del propietario / Teléfono</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Document5form;