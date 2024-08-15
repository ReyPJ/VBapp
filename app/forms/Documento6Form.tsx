import React, {useState} from "react";
import {Document6FormData} from "@/app/interfaces/templates";

interface Props {
    handleInputChange: (e: React.FormEvent<HTMLInputElement>) => void;
    formData: Document6FormData;
}

const Document6form: React.FC<Props> = ({ handleInputChange, formData }) => {
    const [currentSection, setCurrentSection] = useState<number>(1);

    const nextSection = () => {
        if (currentSection < 3) setCurrentSection(currentSection + 1);
    };

    const prevSection = () => {
        if (currentSection > 1) setCurrentSection(currentSection - 1);
    };

    const section1Fields: { name: keyof Document6FormData; placeholder: string }[] = [
        { name: 'num_consecutivo', placeholder: '# Consecutivo' },
        { name: 'dia', placeholder: 'Dia' },
        { name: 'mes', placeholder: 'Mes' },
        { name: 'year', placeholder: 'Año' },
        { name: 'nombre', placeholder: 'Nombre Dueño' },
        { name: 'cedula', placeholder: 'Cedula' },
    ];

    const section2Fields: { name: keyof Document6FormData; placeholder: string }[] = [
        { name: 'telefono', placeholder: 'Numero de Telefono del cliente' },
        { name: 'mascota', placeholder: 'Mascota' },
        { name: 'especie', placeholder: 'Especie' },
        { name: 'sexo', placeholder: 'Sexo' },
        { name: 'raza', placeholder: 'Raza' },
    ];

    const section3Fields: { name: keyof Document6FormData; placeholder: string }[] = [
        { name: 'edad', placeholder: 'Edad' },
        { name: 'color', placeholder: 'Color del Pelaje' },
        { name: 'medico_veterinario', placeholder: 'Nombre del Medico Veterinario' },
        { name: 'num_colegiado', placeholder: 'Numero de Colegiado' },
        { name: 'procedimiento', placeholder: 'Procedimiento a Realizar' },
    ];

    const renderFields = (fields: { name: keyof Document6FormData; placeholder: string }[]) => (
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