export interface Document1FormData {
    name: string;
    cedula: string;
    examen: string;
}

export interface Document2FormData {
    name: string;
    cedula: string;
    dia: string;
    hora: string;
}

export interface Document3FormData {
    paciente: string;
    especie: string;
    raza: string;
    edad: string;
    sexo: string;
    color: string;
    num_historia_clinica: string;
    propietario: string;
    direccion: string;
    telefono: string;
    email: string;
    fecha_admision: string;
    fecha_salida: string;
    motivo_admision: string;
    diagnostico: string;
    tratamiento: string;
    condiciones_salida: string;
}

export interface Document4FormData {
    fecha: string;
    name: string;
    cedula: string;
    mascota: string;
    pago: string;
    email: string;
    telefono: string;
}

export interface Document5FormData {
    dia: string;
    mes: string;
    year: string;
    nombre: string;
    cedula: string;
    direccion: string;
    telefono: string;
    mascota: string;
    especie: string;
    sexo: string;
    raza: string;
    edad: string;
    color: string;
    medico_veterinario: string;
    num_colegiado: string;
    diagnostico: string;
}

export interface Document6FormData {
    num_consecutivo: string;
    dia: string;
    mes: string;
    year: string;
    nombre: string;
    cedula: string;
    telefono: string;
    mascota: string;
    especie: string;
    sexo: string;
    edad: string;
    raza: string;
    color: string;
    medico_veterinario: string;
    num_colegiado: string;
    procedimiento: string;
    fecha_salida: string;
}

export interface Document7FormData {
    fecha: string;
    cedula: string;
    nombre_cliente: string;
    medico_veterinario: string;
    recomendo_examenes: string;
}

export type formData = Document1FormData | Document2FormData | Document3FormData | Document4FormData | Document5FormData | Document6FormData | Document7FormData;