'use client';
import React, { useState } from "react";
import html2pdf from "html2pdf.js";
import documentForms from "@/app/utils/documentForms";
import { formData } from "@/app/interfaces/templates";

const FormulariosPage: React.FC = () => {
    const [selectedDocument, setSelectedDocument] = useState<string>('')
    const [formData, setFormData] = useState<formData>({} as any)

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedDocument(e.target.value);
        setFormData({} as any);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        generatePDF();
    }

    const generatePDF = () => {
        const documentConfig = documentForms[selectedDocument];
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
        <div className="container mx-auto">
            <h1 className="text-2xl font-semibold">Documento a utilizar</h1>
            <select onChange={handleSelectChange} className="border p-2 mt-4">
                <option value="">...</option>
                {Object.keys(documentForms).map((key) => (
                    <option key={key} value={key}>{key}</option>
                ))}
            </select>
            <button type="submit" onClick={handleSubmit} className="bg-blue-500 text-white p-2 mt-4">Generar PDF</button>
            <form onSubmit={handleSubmit} className="mt-4">
                {renderForm()}
            </form>
        </div>
    )

};

export default FormulariosPage;