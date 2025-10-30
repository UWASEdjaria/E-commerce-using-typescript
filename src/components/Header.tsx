

function Header() {
  return (
    <div className="flex flex-col items-center min-h-screen justify-center font-serif text-purple-700">
      <h1 className="text-5xl font-extrabold mb-4 hover:text-purple-600 transition-colors duration-300 text-center drop-shadow-lg">
        Hello, Friend! We're Glad You're Here 
      </h1>
      <p className="text-xl hover:text-purple-200 transition-colors duration-300 text-center max-w-xl drop-shadow-md">
        We're so happy to have you here! Explore our products and enjoy a warm, friendly experience as you navigate through our site.
      </p>
    </div>
  );
}

export default Header;
