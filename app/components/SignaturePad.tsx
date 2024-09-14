'use client';
import React, { useRef, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';

const SignaturePad = ({ onSave }: { onSave: (signatureUrl: string) => void }) => {
    const sigCanvas = useRef<any>();
    const [signatureUrl, setSignatureUrl] = useState<string>('');

    const clear = () => sigCanvas.current.clear();

    const save = () => {
        if (sigCanvas.current.isEmpty()) return;
        const url = sigCanvas.current.getTrimmedCanvas().toDataURL('image/png');
        setSignatureUrl(url);
        onSave(url);
    };

    return (
        <div>
            <SignatureCanvas
                ref={sigCanvas}
                penColor="black"
                canvasProps={{ width: 500, height: 200, className: 'signature-canvas' }}
            />
            <button onClick={clear}>Borrar</button>
            <button onClick={save}>Guardar</button>
            {/* eslint-disable @next/next/no-img-element */}
            {signatureUrl && <img src={signatureUrl} alt="Signature"/>}
        </div>
    );
};

export default SignaturePad;
