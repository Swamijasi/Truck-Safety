const Navbar = ({ setSidebarOpen }) => {

  return (
    <nav className="bg-white border-b border-brandBorder-light h-20 px-2 md:px-6 relative">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">

        {/* Left side - Truck Safety */}
        <div className="flex-1 flex justify-center md:justify-start">
          <div className="flex items-center rounded-lg p-2 transition-all duration-300 ml-10 sm:ml-12 md:ml-0">
            <span className="text-blue-900 font-bold text-2xl md:text-3xl select-none transition-all duration-200">
              Truck Safety Dashboard
            </span>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
