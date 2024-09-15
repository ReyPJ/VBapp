"use client";
import React, {useState} from "react";
import { Document2FormData } from "@/app/interfaces/templates";
import SignaturePad from "@/app/components/SignaturePad";

interface Props {
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    formData: Document2FormData;
}

const Document2form: React.FC<Props> = ({ handleInputChange, formData }) => {
    const [signature, setSignature] = useState<string>('');

    const handleSaveSignature = (signature: string) => {
        setSignature(signature);
    };

    return(
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
                    name="dia"
                    value={formData.dia}
                    onChange={handleInputChange}
                    placeholder="Dia"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="hora"
                    value={formData.hora}
                    onChange={handleInputChange}
                    placeholder="Hora"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <h2 className="font-semibold text-lg pb-10 pt-6">Vista previa del documento:</h2>
            <SignaturePad onSave={handleSaveSignature} />
            <div id="document-2-template" className="w-full">
                <div className="flex justify-center items-center w-full">
                    <h1 className="text-base font-semibold w-5/6 text-center">
                        Documento de Aceptación de Servicios y Responsabilidad de Pago
                    </h1>
                </div>
                <div className="w-full py-10">
                    <div className="w-full text-sm">
                        <div className="flex text-base flex-col text-justify gap-5">
                            <p className="w-full">
                                Yo, {formData.name} mayor de edad, con cédula de identidad número {formData.cedula}, en
                                pleno uso de mis facultades
                                y con total conocimiento de las implicaciones legales de este documento,
                            </p>
                            <h2 className='font-semibold'>DECLARO Y MANIFIESTO:</h2>
                            <p>
                                1. Que acepto y autorizo a Centro Veterinario VB a proveerme todos los servicios
                                necesarios
                                para salvaguardar la vida de mi mascota. Que estoy plenamente informado de los costos
                                asociados a cada uno de los servicios.
                            </p>
                            <p>
                                2. Que me comprometo a pagar la totalidad de los costos y cargos asociados a los
                                servicios
                                proporcionados. Además, entiendo que en cualquier procedimiento pueden darse hallazgos o
                                complicaciones, que comprometan la vida de mi mascota, y en el acto autorizo que se
                                realice
                                cualquier procedimiento extra que sea necesario, y me comprometo a cancelar el costo de
                                este al momento de recoger a mi mascota.
                            </p>
                            <p>
                                3. Que asumo la responsabilidad total y absoluta por el pago de los servicios
                                contratados, sin
                                perjuicio de cualquier reclamo o controversia que pudiera surgir respecto a la calidad o
                                cumplimiento de estos.
                            </p>
                            <p>
                                4. Que, en caso de incumplimiento en los pagos acordados, Centro Veterinario VB está
                                facultado para tomar las medidas legales necesarias para el cobro de las deudas
                                pendientes,
                                incluyendo, pero no limitándose a la contratación de servicios de cobranza y la
                                inclusión en
                                registros de morosidad.
                            </p>
                            <p>
                                5. Que he leído, comprendido y aceptado los términos y condiciones generales de los
                                servicios
                                de Centro Veterinario VB, los cuales me informaron de manera detalla y anticipada.
                                Firmo el presente documento en señal de conformidad y aceptación, en el llano de
                                Alajuela, el
                                día {formData.dia} a las {formData.hora} -
                            </p>

                            <p>
                                [Nombre Completo del Cliente]<br/>
                                {formData.name}
                            </p>
                            <p className="mb-2">
                                [Firma del Cliente]<br/>
                            </p>
                            {/* eslint-disable @next/next/no-img-element */}
                            {signature && <img src={signature} alt="Signature" width={100} height={60}/>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Document2form;
