import Document2form from "@/app/forms/Document2Form";
import Document4form from "@/app/forms/Document4Form";
import Document3form from "@/app/forms/Document3Form";
import Document1form from "@/app/forms/Document1From";
import Document5form from "@/app/forms/Document5Form";
import Documento6form from "@/app/forms/Documento6Form";
import Document7form from "@/app/forms/Document7Form";
import React from "react";

type DocumentFormConfig = {
    component: React.ComponentType<any>;
    templateId: string;
}
const documentForms: Record<string, DocumentFormConfig>  = {
    Liberacion_de_Responsabilidad_de_Examenes: {
        component: Document1form,
        templateId: "document-1-template",
    },
    Servicios_y_Responsabilidad_de_Pago: {
        component: Document2form,
        templateId: "document-2-template",
    },
    Salida_Condicionada: {
        component: Document3form,
        templateId: "document-3-template",
    },
    Hoja_Internamiento: {
        component: Document4form,
        templateId: "document-4-template",
    },
    Autorizacion_de_Eutanasia: {
        component: Document5form,
        templateId: "document-5-template",
    },
    Autorizacion_Anestesia_y_Cirugia: {
        component: Documento6form,
        templateId: "document-6-template",
    },
    Salida_Sin_Autorizacion: {
        component: Document7form,
        templateId: "document-7-template"
    },
}

export default documentForms;
