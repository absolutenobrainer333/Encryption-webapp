const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <p className="text-center text-sm md:text-base">
          &copy; {new Date().getFullYear()} MyApp. All rights reserved.
        </p>
      </footer>
    );
  };
  
  export default Footer;
  