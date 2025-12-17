import React, { useState } from 'react';
import { FileCode, Check, Copy } from './Icons';

const CodeBlock = ({ code, language = "markdown" }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        // Fallback for environments where Clipboard API is blocked or restricted (e.g. iframes)
        // We use document.execCommand('copy') which has broader support in these contexts
        const textArea = document.createElement("textarea");
        textArea.value = code;

        // Ensure textarea is not visible but part of DOM
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        textArea.style.top = "0";
        document.body.appendChild(textArea);

        textArea.focus();
        textArea.select();

        try {
            const successful = document.execCommand('copy');
            if (successful) {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            }
        } catch (err) {
            console.error('Fallback: Oops, unable to copy', err);
        }

        document.body.removeChild(textArea);
    };

    return (
        <div className="relative group rounded-md overflow-hidden border border-[#3c3c3c] mt-4 mb-6 bg-[#1e1e1e] shadow-inner">
            <div className="flex justify-between items-center bg-[#252526] px-4 py-2 border-b border-[#3c3c3c]">
                <span className="text-xs text-gray-400 font-mono flex items-center gap-1">
                    <FileCode size={12} /> {language}
                </span>
                <button onClick={handleCopy}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 text-xs">
                    {copied ? <span className="text-green-500 flex items-center gap-1">
                        <Check size={12} /> Copied
                    </span> : <span className="flex items-center gap-1">
                        <Copy size={12} /> Copy
                    </span>}
                </button>
            </div>
            <div className="p-4 overflow-x-auto">
                <pre className="!m-0 text-sm font-mono leading-relaxed whitespace-pre-wrap text-[#d4d4d4]">
                    {code}
                </pre>
            </div>
        </div>
    );
};

export default CodeBlock;
