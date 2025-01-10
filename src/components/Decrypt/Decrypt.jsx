import { useState } from "react";
import axios from "axios";

const Decrypt = () => {
  const [encryptedText, setEncryptedText] = useState("");
  const [decryptedValue, setDecryptedValue] = useState("");
  const [passphrase, setPassphrase] = useState("");

  const handleDecrypt = async () => {
    if (!encryptedText || !passphrase) {
      alert("Please enter encrypted text and a passphrase");
      return;
    }

    try {
      // Make API call to Django backend
      const response = await axios.post("http://localhost:8000/FernetDecrypt", {
        key: passphrase,
        data: encryptedText,
      });

      setDecryptedValue(response.data); // Assuming API response is just the decrypted string
    } catch (error) {
      console.error("Decryption failed:", error);
      alert("Error decrypting the data.");
    }
  };

  const pastePassphraseFromClipboard = async () => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      setPassphrase(clipboardText);
    } catch (error) {
      console.error("Failed to paste passphrase:", error);
      alert("Failed to paste passphrase");
    }
  };

  const pasteEncryptedContentFromClipboard = async () => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      setEncryptedText(clipboardText);
    } catch (error) {
      console.error("Failed to paste encrypted content:", error);
      alert("Failed to paste encrypted content");
    }
  };

  return (
    <div className="flex flex-col items-center p-4 space-y-4 bg-gray-100">
      <div className="grid grid-cols-2 gap-4 w-full max-w-4xl">
        {/* Encrypted Text Area */}
        <textarea
          className="border border-gray-400 rounded p-4 w-full h-40 break-words"
          placeholder="Enter encrypted text here"
          value={encryptedText}
          onChange={(e) => setEncryptedText(e.target.value)}
        />

        {/* Decrypted Text Display */}
        <div className="border border-gray-400 rounded p-4 w-full h-40 bg-gray-200 break-words">
          {decryptedValue || "Decrypted value will appear here"}
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
          className="border border-gray-400 rounded px-4 py-2 bg-gray-500 text-white hover:bg-gray-600"
          onClick={pastePassphraseFromClipboard}
        >
          Paste passphrase
        </button>
      </div>

      {/* Copy Decrypted Message, Paste Encrypted Content, and Decrypt Button Section */}
      <div className="flex items-center space-x-4">
        <button
          className="border border-gray-400 rounded px-8 py-2 bg-green-500 text-white hover:bg-green-600"
          onClick={handleDecrypt}
        >
          Decrypt
        </button>

        <button
          className="border border-gray-400 rounded px-4 py-2 bg-gray-500 text-white hover:bg-gray-600"
          onClick={pasteEncryptedContentFromClipboard}
        >
          Paste encrypted content
        </button>
      </div>
    </div>
  );
};

export default Decrypt;
