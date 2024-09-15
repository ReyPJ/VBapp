'use client';
import React, { useRef, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';

interface SignaturePadProps {
    onSave: (signature: string) => void;
}

const SignaturePad: React.FC<SignaturePadProps> = ({ onSave }) => {
    const sigCanvas = useRef<any>();

    const clear = () => sigCanvas.current.clear();

    const save = () => {
        if (sigCanvas.current.isEmpty()) return;
        const url = sigCanvas.current.getTrimmedCanvas().toDataURL('image/png');
        onSave(url);
    };

    return (
        <div>
            <SignatureCanvas
                ref={sigCanvas}
                penColor="black"
                canvasProps={{ width: 400, height: 200, className: 'signature-canvas p-5 bg-gray-300 rounded my-5' }}
            />
            <div className='flex justify-between'>
                <button onClick={clear} className='bg-red-600 hover:bg-red-700 py-1 px-2 rounded text-white'>Borrar</button>
                <button onClick={save} className='bg-blue-600 hover:bg-blue-700 py-1 px-2 rounded text-white'>Guardar</button>
            </div>
        </div>
    );
};

export default SignaturePad;
