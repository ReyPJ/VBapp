"use client";
import React, {useState} from "react";
import { Document5FormData } from "@/app/interfaces/templates";
import SignaturePad from "@/app/components/SignaturePad";

interface Props {
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    formData: Document5FormData;
}

const Document5form: React.FC<Props> = ({ handleInputChange, formData }) => {
    const [signature, setSignature] = useState<string>('');

    const [currentSection, setCurrentSection] = useState<number>(1);

    const nextSection = () => {
        if (currentSection < 3) setCurrentSection(currentSection + 1);
    }

    const prevSection = () => {
        if (currentSection > 1) setCurrentSection(currentSection - 1);
    }

    const handleSaveSignature = (signature: string) => {
        setSignature(signature);
    };

    const section1Fields: { name: keyof Document5FormData; placeholder: string }[] = [
        { name: 'dia', placeholder: 'Dia'},
        { name: 'mes', placeholder: 'Mes'},
        { name: 'year', placeholder: 'Año'},
        { name: 'nombre', placeholder: 'Nombre del Dueño'},
        { name: 'cedula', placeholder: 'Cedula'}
    ]

    const section2Fields: { name: keyof Document5FormData; placeholder: string }[] = [
        { name: 'direccion', placeholder: 'Direccion'},
        { name: 'telefono', placeholder: 'Telefono'},
        { name: 'mascota', placeholder: 'Mascota'},
        { name: 'especie', placeholder: 'Especie'},
        { name: 'sexo', placeholder: 'Sexo'}
    ]

    const section3Fields: { name: keyof Document5FormData; placeholder: string }[] = [
        { name: 'raza', placeholder: 'Raza'},
        { name: 'edad', placeholder: 'Edad'},
        { name: 'color', placeholder: 'Color'},
        { name: 'medico_veterinario', placeholder: 'Medico Veterinario'},
        { name: 'num_colegiado', placeholder: 'Num de Colegiado'},
        { name: 'diagnostico', placeholder: 'Diagnostico'}
    ]

    const renderFields = (fields: { name: keyof Document5FormData; placeholder: string }[]) => (
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

    return (
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
            <h2 className="font-semibold text-lg pb-10 pt-6">Vista previa del documento:</h2>
            <SignaturePad onSave={handleSaveSignature} />
            <div id="document-5-template" className="w-full">
                <div className="flex flex-col font-semibold w-full text-base gap-5">
                    <h1 className="text-lg font-bold w-5/6 underline">AUTORIZACIÓN DE EUTANASIA</h1>
                    <p>{formData.dia} de {formData.mes} del {formData.year}.</p>
                    <p>
                        Yo, {formData.nombre}, con el número de indentificación {formData.cedula}, domicialiado
                        en {formData.direccion},
                        con el número de telefono {formData.telefono}.
                    </p>
                    <p>
                        Propietario de (nombre del animal) {formData.mascota}, especie {formData.especie},
                        sexo {formData.sexo},
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
                        {/* eslint-disable @next/next/no-img-element */}
                        {signature && <img src={signature} alt="Signature" width={100} height={60}/>}
                        <p>Firma del propietario</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Document5form;
