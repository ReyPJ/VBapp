import React from 'react';
import Image from 'next/image';

interface ModalProps {
    isOpened: boolean;
    onClose: () => void;
    imageSrc: string;
}

const Modal: React.FC<ModalProps> = ({isOpened, onClose, imageSrc}) =>{
    if(!isOpened) return null;

    return(
        <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={onClose}
        >
            <div
                className="relative bg-white p-4 rounded-lg shadow-lg"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute text-black top-2 right-2 px-2 text-2xl font-bold"
                    onClick={onClose}
                >
                    &times;
                </button>
                <Image
                    src={imageSrc}
                    alt="Imagen grande"
                    layout="intrinsic"
                    width={800}
                    height={800}
                    className="rounded-lg"
                />
            </div>
        </div>
    );
};

export default Modal;