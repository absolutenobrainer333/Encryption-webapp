import React from "react";
import './Header.css';

const Header = () => {
  return (
    <header className="header-gradient text-white py-12 px-6 md:px-12 text-center">
      <h1 className="text-3xl font-bold mb-4 sm:text-4xl md:text-5xl">
        Symmetric Encryption
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto">
        Symmetric encryption uses the same key for both encryption and decryption. It is fast and efficient for encrypting large amounts of data.
      </p>
    </header>
  );
};

export default Header;
