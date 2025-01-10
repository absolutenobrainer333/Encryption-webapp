import { useState } from "react";
import axios from "axios";

const Encrypt = () => {
  const [textToEncrypt, setTextToEncrypt] = useState("");
  const [encryptedValue, setEncryptedValue] = useState("");
  const [passphrase, setPassphrase] = useState("");

  const handleEncrypt = async () => {
    if (!textToEncrypt || !passphrase) {
      alert("Please enter text and a passphrase");
      return;
    }

    try {
      // Make API call to Django backend
      const response = await axios.post("http://localhost:8000/FernetEncrypt", {
        key: passphrase,
        data: textToEncrypt,
      });

      setEncryptedValue(response.data); // Assuming API response is just the encrypted string
    } catch (error) {
      console.error("Encryption failed:", error);
      alert("Error encrypting the data.");
    }
  };

  const generatePassphrase = () => {
    const newPassphrase = Math.random().toString(36).slice(-8);
    setPassphrase(newPassphrase);
  };

  const copyPassphraseToClipboard = () => {
    navigator.clipboard.writeText(passphrase);
    alert("Passphrase copied to clipboard");
  };

  const copyEncryptedValueToClipboard = () => {
    navigator.clipboard.writeText(encryptedValue);
    alert("Encrypted value copied to clipboard");
  };

  return (
    <div className="flex flex-col items-center p-4 space-y-4 bg-gray-100">
      <div className="grid grid-cols-2 gap-4 w-full max-w-4xl">
        {/* Input Text Area */}
        <textarea
          className="border border-gray-400 rounded p-4 w-full h-40 break-words"
          placeholder="Enter text to encrypt here"
          value={textToEncrypt}
          onChange={(e) => setTextToEncrypt(e.target.value)}
        />

        {/* Encrypted Text Display */}
        <div className="border border-gray-400 rounded p-4 w-full h-40 bg-gray-200 break-words">
          {encryptedValue || "Encrypted value will appear here"}
        </div>
      </div>

      {/* Passphrase Section */}
      <div className="flex items-center space-x-4 w-full max-w-4xl">
        <input
          type="text"
          className="border border-gray-400 rounded p-2 flex-grow"
          placeholder="Passphrase"
          value={passphrase}
          onChange={(e) => setPassphrase(e.target.value)}
        />
        <button
          className="border border-gray-400 rounded px-4 py-2 bg-blue-500 text-white hover:bg-blue-600"
          onClick={generatePassphrase}
        >
          Generate passphrase
        </button>
        <button
          className="border border-gray-400 rounded px-4 py-2 bg-gray-500 text-white hover:bg-gray-600"
          onClick={copyPassphraseToClipboard}
        >
          Copy passphrase
        </button>
      </div>

      {/* Copy Encrypted Message and Encrypt Button Section */}
      <div className="flex items-center space-x-4">
        <button
          className="border border-gray-400 rounded px-8 py-2 bg-green-500 text-white hover:bg-green-600"
          onClick={handleEncrypt}
        >
          Encrypt
        </button>
        <button
          className="border border-gray-400 rounded px-4 py-2 bg-gray-500 text-white hover:bg-gray-600"
          onClick={copyEncryptedValueToClipboard}
        >
          Copy encrypted value
        </button>
      </div>
    </div>
  );
};

export default Encrypt;
