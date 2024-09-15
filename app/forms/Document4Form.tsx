"use client";
import React, {useState} from "react";
import { Document4FormData } from "@/app/interfaces/templates";
import SignaturePad from "@/app/components/SignaturePad";

interface Props {
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    formData: Document4FormData;
}

const Document4form: React.FC<Props> = ({ handleInputChange, formData }) => {
    const [signature, setSignature] = useState<string>('');

    const handleSaveSignature = (signature: string) => {
        setSignature(signature);
    };

    const toUpperCase = (str: string) => {
        return str?.toUpperCase() ? str?.toUpperCase() : '';
    }

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
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Nombre del cliente"
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
                    value={formData.mascota}
                    onChange={handleInputChange}
                    placeholder="Dueño de"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="pago"
                    value={formData.pago}
                    onChange={handleInputChange}
                    placeholder="Suma de: ₡"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Correo Electrónico"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    placeholder="Numero de Teléfono"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <SignaturePad onSave={handleSaveSignature} />
            <div id="document-4-template" className="w-full">
                <div className="flex flex-col text-xs gap-4">
                    <p>Fecha: {formData.fecha}</p>
                    <h1 className="font-semibold text-base">HOJA DE INTERNAMIENTO</h1>
                    <p>Yo {toUpperCase(formData.name)} CEDULA {formData.cedula} PROPIETARIO DE: {formData.mascota}</p>
                    <p>
                        EXPRESO TOTAL AUTORIZACION PARA QUE MI MASCOTA QUEDE INTERNADO EN EL CENTRO
                        VETERINARIO Y SALUD INTEGRAL VB. EN CARÁCTER DEPROPIETARIO.
                    </p>
                    <p>
                        ESTE PROCEDIMIENTO SE ACEPTA BAJO LA ACEPTACION PREVIA DE LAS SIGUIENTES CLAUSULAS:
                    </p>
                    <p>
                        <span className="font-semibold">PRIMERA:</span> PRACTICADA LA VALORACION CLINICA PRELEMINAR DEL CASO, EFECTUARE UN DEPOSITO
                        POR LA SUMA DE: <span className="font-semibold">₡{formData.pago}</span>, CUYO MONTO SERA ABONADO A LA CUENTA TOTAL A LA QUE
                        ASCIENDA EL TRATAMIENTO DEL PACIENTE. EN LA CLINICA TRATAREMOS DE DISMINUIR EN LO MAYOR
                        POSIBLE EL DOLOR DE SU MASCOTA, Y REALIZAREMOS INICIALMENTE PROCEDIMIENTOS COMO:
                        CANALIZACION PARA HIDRATACION, APLICACIÓN DE ANALGESICOS, ANTIFLAMATORIOS,
                        ANTIBIOTICOS, ANTIDOTOS, EXAMENES LABORATORIOS, PRUEBAS RAPIDAS SEGÚN SEA EL CASO POR
                        TRATAR.
                    </p>
                    <p>
                        <span className="font-semibold">SEGUNDA:</span> DECLARO QUE ASUMO EN SU TOTALIDAD LOS COSTOS DE HOSPITALIZACION,
                        ALIMENTACION, EXAMENES PARA CLINICOS, TRATAMIENTO Y PROCEDIMIENTOS MEDICOS
                        QUIRURGICOS QUE SE DERIVEN A LA APLICACIÓN DE CONDUCTAS EXTRICTAMENTE RELACIONADAS
                        CON EL CASO.
                    </p>
                    <p>
                        <span className="font-semibold">TERCERA:</span> EXPRESO MI CONSENTIMIENTO DE QUE EL PACIENTE SEA OBJETO DE LA APLICACIÓN DE
                        LAS TECNICAS AL ALCANCE DE LA CIENCIA MEDICA VETERINARIA Y ASUME EL RIESGO DE LA
                        PRESENTACION DE EVENTUALIDADES, COMPLICACIONES DURANTE LOS PROCESOS MEDICOS,
                        PREQUIRURGICOS, QUIRURGICOS, Y POSTOPERATORIOS.
                    </p>
                    <p>
                        <span className="font-semibold">CUARTA:</span> DEJO CONSTANCIA DE QUE EXIMO DE TODA RESPONSABILIDAD A LA CLINICA VETERINARIIA Y
                        A LOS MEDICOS TRATANTES POR LAS EVENTUALIDADES QUE SOBRE EL ESTADO DE SALUD DEL
                        PACIENTE PUEDAN SOBREVENIR COMO CONSECUENCIAS DE MANIOBRAS MEDICAS O MEDICO
                        QUIRURGICAS APLICADAS BAJO LAS CONDICIONES RUTINARIAS DE ATENCION AL PACIENTE
                    </p>
                    <p>
                        <span className="font-semibold">QUINTA:</span> SI DESPUES DE DOS (2) DIAS HABILES DE HABER SIDO DE ALTA EL PACIENTE, Y EN ESE LAPSO
                        NO HA CANCELADO LOS COSTOS OCASIONADOS, O NO HA RETIRADO AL PACIENTE DE LAS
                        INSTALACIONES DE LA CLINICA, AUTORIZO EXPRESAMENTE A LA CLINICA VETERINARIA, PARA QUE
                        DISPONGA DE EL, SEGÚN LO CONSIDERE CONVENIENTE.
                    </p>
                    <p className="text-xs">Exámenes autorizados en caso de ser necesario-Rx, imunofluorescencia, otros</p>
                </div>
                <div className="flex flex-col text-xs py-8 gap-4">
                    <p>PODRE SER NOTIFICADO DE LOS ASUNTOS RELACIONADOS AL SIGUIENTE CORREO ELECTRONICO:</p>
                    <p>{formData.email}</p>
                    <p>NUMERO DE TELEFONO: {formData.telefono}</p>
                    <p>FIRMA:</p>
                    {/* eslint-disable @next/next/no-img-element */}
                    {signature && <img src={signature} alt="Signature" width={100} height={60}/>}
                </div>
            </div>
        </>
    )
}

export default Document4form;
