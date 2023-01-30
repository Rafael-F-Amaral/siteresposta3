import React, { useState } from "react";
import '../Pix/Pix.css'

export default function CopyBtnDemo({ textToCopy = '80e8d474-3373-41d9-9ba4-ce8e1acc0892' }) {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(textToCopy).then(
            () => {
                setCopied(true);
                // changing back to default state after 2 seconds.
                setTimeout(() => {
                    setCopied(false);
                }, 2000);
            },
            (err) => {
                console.log("failed to copy", err.mesage);
            }
        );
    };

    const btnStyle = copied ? "" : "";

    return (
        <div className="text-center my-5">
            <p>Clique para copiar</p>
            <button
                className="ButtonPix"
                onClick={copyToClipboard}
            >
                {copied ? "COPIADO COM SUCESSO! !" : "COPIAR PIX"}
            </button>
        </div>
    );
}
