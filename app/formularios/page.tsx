'use client';
import React, { useState } from "react";
import documentForms from "@/app/utils/documentForms";
import { formData } from "@/app/interfaces/templates";
import Link from 'next/link';

const FormulariosPage: React.FC = () => {
    const [selectedDocument, setSelectedDocument] = useState<string>('');
    const [formData, setFormData] = useState<formData>({} as any);

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedDocument(e.target.value);
        setFormData({} as any);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        generatePDF();
    }

    const generatePDF = async() => {
        const documentConfig = documentForms[selectedDocument];
        const html2pdf = (await import('html2pdf.js')).default;

        setTimeout(() => {
            const element = document.getElementById(documentConfig.templateId);
            if (element) {
                html2pdf().from(element).set({
                    margin: 1,
                    filename: `${selectedDocument}.pdf`,
                    html2canvas: { scale: 1 },
                    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
                }).save();
            } else {
                console.error('Element not found or is null');
            }
        }, 1000);
    };

    const renderForm = () => {
        const documentConfig = documentForms[selectedDocument];
        if (documentConfig) {
            const FormComponent = documentConfig.component;
            return <FormComponent handleInputChange={handleInputChange} formData={formData as any} />;
        }
        return null;
    };

    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-8 bg-gray-100">
            <Link href="/" className="underline text-red-600 hover:text-red-700 mb-8">Regresar</Link>
            <h1 className="text-4xl font-bold text-red-600 mb-8">Seleccionar Documento</h1>
            <select
                onChange={handleSelectChange}
                className="border border-red-500 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            >
                <option value="">Seleccionar...</option>
                {Object.keys(documentForms).map((key) => (
                    <option key={key} value={key}>{key}</option>
                ))}
            </select>
            <button
                type="submit"
                onClick={handleSubmit}
                className="bg-red-500 text-white p-2 rounded-md mt-4 hover:bg-red-600 transition-colors"
            >
                Generar PDF
            </button>
            <form onSubmit={handleSubmit} className="mt-8 w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
                {renderForm()}
            </form>
        </div>
    );
};

export default FormulariosPage;
