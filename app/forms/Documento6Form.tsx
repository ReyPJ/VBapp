import React from "react";
import { Document6FormData } from "@/app/interfaces/templates";

interface Props {
    handleInputChange: (e: React.FormEvent<HTMLInputElement>) => void;
    formData: Document6FormData;
}

const Document6form: React.FC<Props> = ({ handleInputChange, formData }) => {
    return (
        <>
            <div className="space-y-4 py-8">
                <input
                    type="text"
                    name="num_consecutivo"
                    value={formData.num_consecutivo}
                    onChange={handleInputChange}
                    placeholder="# Consecutivo"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
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
                    name="procedimiento"
                    value={formData.procedimiento}
                    onChange={handleInputChange}
                    placeholder="Procedimiento a Realizar"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {/*<input*/}
                {/*    type="text"*/}
                {/*    name="fecha_salida"*/}
                {/*    value={formData.fecha_salida}*/}
                {/*    onChange={handleInputChange}*/}
                {/*    placeholder="Fecha de salida"*/}
                {/*    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"*/}
                {/*/>*/}
            </div>
            <h2 className="font-semibold text-lg pb-10 pt-6">Vista previa del documento:</h2>
            <div id="document-6-template" className="w-full">
                <div className="flex flex-col gap-5 text-sm">
                    <p className="text-end"># Consecutivo: {formData.num_consecutivo}</p>
                    <h2>
                        AUTORIZACIÓN PARA SEDACION / ANESTESIA / CIRUGÍA / PROCEDIMIENTO
                    </h2>
                    <div className="text-justify flex flex-col pb-4 gap-4">
                        <p>{formData.dia} de {formData.mes} del {formData.year}.</p>
                        <p>Yo, {formData.nombre}, con el número de identificación {formData.cedula}, y el número de
                            contacto teléfonico {formData.telefono}.
                        </p>
                        <p>En calidad de propietario de (nombre del animal) {formData.mascota},
                            Especie: {formData.especie}, Sexo: {formData.sexo}, Edad: {formData.edad},
                            Raza: {formData.raza}, Color: {formData.color}.
                        </p>
                        <p>
                            Autorizo al Médico Veterinario {formData.medico_veterinario}, Número de
                            Colegiado {formData.num_colegiado}, a realizar el procedimiento de {formData.procedimiento},
                            destinado a procurar salvaguardar la vida del paciente y/o procurar mejorar la salud de esta.
                        </p>
                        <p>
                            Dejo constancia y acepto, que el profesional responsable me ha explicado personalmente, y
                            entiendo los riesgos asociados al procedimiento, que pueden afectar tanto a la fase anestésica, la
                            fase quirúrgica, como el post operatorio, que puede incluir, entre otros, el fallecimiento del paciente
                            y posibles complicaciones diferentes de los resultados esperados, así como complicaciones médicas
                            inesperadas donde el médico deberá actuar según el procedimiento adecuado del caso. Así mismo
                            que se recomienda realizar exámenes laboratoriales pertinentes previo a la cirugía. Además,
                            entiendo que en cualquier procedimiento pueden darse hallazgos o complicaciones, que
                            comprometan la vida de mi mascota, y en el acto autorizo que se realice cualquier procedimiento
                            extra que sea necesario, y me comprometo a cancelar el costo del mismo al momento de recoger a
                            mi mascota.
                        </p>
                        <p>
                            Me comprometo a seguir las indicaciones, tratamientos y prácticas que el Médico Veterinario
                            considere conveniente.
                        </p>
                        <p>
                            Certifico con mi firma que he leído y comprendido la presente autorización, prestando su
                            consentimiento para el procedimiento.
                        </p>
                        <div>
                            <p>______________________{formData.cedula}</p>
                            <p>Firma del propietario / Cedula</p>
                        </div>
                        <p>Yo {formData.nombre}, cédula: {formData.cedula}, dueño de la
                            mascota {formData.mascota}, he recibido de parte de Estética y Salud integral VB a
                            mi mascota en buenas condiciones y despierto de la anestesia. Me comprometo a velar porque no
                            consuma ningún alimento ni agua, en las próximas horas hasta que el efecto haya pasado
                            totalmente.
                        </p>
                        <p>Fecha: ______________________.</p>
                        <p>Firma: ______________________.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Document6form