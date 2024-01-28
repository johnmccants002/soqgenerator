"use client";

import React, { useState } from "react";

interface ResultDisplayProps {
  generatedText: string;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ generatedText }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    });
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
      <h3 className="text-lg font-semibold mb-4">Generated Statement</h3>
      <div className="bg-gray-100 p-4 rounded-lg mb-4">
        <pre className="whitespace-pre-wrap text-gray-800">{generatedText}</pre>
      </div>
      <button
        className={`px-4 py-2 rounded font-semibold text-sm ${
          copied
            ? "bg-green-500 text-white"
            : "bg-blue-500 text-white hover:bg-blue-700"
        }`}
        onClick={copyToClipboard}
      >
        {copied ? "Copied!" : "Copy to Clipboard"}
      </button>
    </div>
  );
};

export default ResultDisplay;
