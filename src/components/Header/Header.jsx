const Header = () => {
    return (
      <header className="bg-gray-900 text-white py-12 px-6 md:px-12">
        <h1 className="text-3xl font-bold mb-4 text-center sm:text-4xl md:text-5xl">
          Symmetric Encryption
        </h1>
        <p className="text-lg text-center sm:text-xl md:text-2xl max-w-4xl mx-auto">
          Symmetric encryption uses the same key for both encryption and decryption. It is fast and efficient for encrypting large amounts of data.
        </p>
      </header>
    );
  };
  
  export default Header;
  