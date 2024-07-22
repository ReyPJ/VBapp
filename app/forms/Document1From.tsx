import React from "react";
import { Document1FormData} from "@/app/interfaces/templates";
import Image from "next/image";

interface Props {
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    formData: Document1FormData;
}

const Document1form: React.FC<Props> = ({ handleInputChange, formData }) => {
    return (
        <>
            <div className="space-y-4 py-8">
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Nombre"
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
                    name="examen"
                    value={formData.examen}
                    onChange={handleInputChange}
                    placeholder="Examen"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <h2 className="font-semibold text-lg pb-10 pt-6">Vista previa del documento:</h2>
            <div id="document-1-template" className="w-full">
                <div className="flex justify-between items-center w-full">
                    <Image src="/logo.jpg" alt="logo" width={300} height={300} className="w-1/6"/>
                    <h1 className="text-lg font-semibold w-5/6 text-center">Liberación de Responsabilidad de
                        Exámenes
                    </h1>
                </div>
                <div className="w-full py-10">
                    <div className="w-full text-sm">
                        <div className="flex text-justify">
                            <p className="text-base w-full">
                                Yo, {formData.name} con el documento de identidad {formData.cedula} declaro lo
                                siguiente:
                            </p>
                        </div>
                        <div className="p-6">
                            <p className="font-semibold">1. Negativa a Realizarme el Examen de {formData.examen}:</p>
                            <ul className="list-none text-justify list-inside">
                            <li className="px-3 py-1">
                                    ⚬ He sido informado/a por el personal médico del Centro Veterinario
                                    VB sobre
                                    la importancia y la necesidad de realizar un examen de sangre a mi mascota
                                    incluyendo los beneficios y los posibles riesgos de no someterlo a dicho
                                    examen.
                                </li>
                                <li className="px-3 py-1">
                                    ⚬ A pesar de la información proporcionada y de entender las posibles
                                    consecuencias de no realizarme el examen de {formData.examen}, he decidido
                                    voluntariamente no someterlo a dicho procedimiento.
                                </li>
                            </ul>
                            <p className="font-semibold">2. Entendimiento de Consecuencias:</p>
                            <ul className=" list-none list-inside text-justify">
                                <li className="px-3 py-1">
                                    ⚬ Reconozco que la negativa a realizarme el examen de {formData.examen} puede tener
                                    consecuencias para la salud de mi mascota, y que podrían no ser identificadas
                                    o tratadas condiciones médicas que el examen de {formData.examen} podría haber
                                    revelado.
                                </li>
                                <li className="px-3 py-1">
                                    ⚬ Acepto que no responsabilizo al Centro Veterinario VB, a sus empleados,
                                    agentes y representantes por cualquier consecuencia negativa para la salud de
                                    mi animal que pueda resultar de mi decisión de no realizarme el examen de
                                    {formData.examen}.
                                </li>
                            </ul>
                            <p className="font-semibold">3. Consentimiento y Liberación:</p>
                            <ul className=" list-none text-justify list-inside">
                                <li className="px-3 py-1">
                                    ⚬ Firmo esta liberación de responsabilidad para dejar constancia de que mi
                                    decisión de no realizar el examen de {formData.examen} es voluntaria y bien informada.
                                </li>
                                <li className="px-3 py-1">
                                    ⚬ Eximo al Centro Veterinario VB, a sus empleados, agentes y representantes
                                    de cualquier responsabilidad por daños, pérdidas o lesiones que puedan
                                    ocurrir como resultado de mi negativa a realizarme el examen de {formData.examen}.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full text-end mt-10">
                        <p className="text-base">Firma: _______________________________</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Document1form;
