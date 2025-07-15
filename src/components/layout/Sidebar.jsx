import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/maruti.png.jpg";

  const Sidebar = ({ isOpen, setIsOpen }) => {

  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    {
      path: "/fleet-safety",
      label: "Fleet Safety Status",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 15 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m9.97 4.88.953 3.811C10.159 8.878 9.14 9 8 9s-2.158-.122-2.923-.309L6.03 4.88C6.635 4.957 7.3 5 8 5s1.365-.043 1.97-.12m-.245-.978L8.97.88C8.718-.13 7.282-.13 7.03.88L6.275 3.9C6.8 3.965 7.382 4 8 4s1.2-.036 1.725-.098m4.396 8.613a.5.5 0 0 1 .037.96l-6 2a.5.5 0 0 1-.316 0l-6-2a.5.5 0 0 1 .037-.96l2.391-.598.565-2.257c.862.212 1.964.339 3.165.339s2.303-.127 3.165-.339l.565 2.257z"
          />
        </svg>
      ),
    },
    {
      path: "/audit-performance",
      label: "Audit Performance Trends",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 16 19"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4M3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707M2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10m9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5m.754-4.246a.39.39 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.39.39 0 0 0-.029-.518z"
          />
          <path
            fillRule="evenodd"
            d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A8 8 0 0 1 0 10m8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3"
          />
        </svg>
      ),
    },
    {
      path: "/truck-performance",
      label: "Truck Performance",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
        </svg>
      ),
    },
    {
      path: "/common-defects",
      label: "Common Defects",
      icon: (
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="3"
            y="3"
            width="7"
            height="4"
            rx="1"
            stroke="currentColor"
            strokeWidth="2"
          />
          <rect
            x="14"
            y="3"
            width="7"
            height="4"
            rx="1"
            stroke="currentColor"
            strokeWidth="2"
          />
          <rect
            x="14"
            y="17"
            width="7"
            height="4"
            rx="1"
            stroke="currentColor"
            strokeWidth="2"
          />
          <rect
            x="3"
            y="17"
            width="7"
            height="4"
            rx="1"
            stroke="currentColor"
            strokeWidth="2"
          />
          <rect
            x="8"
            y="10"
            width="8"
            height="4"
            rx="1"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M6.5 7V10M6.5 14V17M17.5 7V10M17.5 14V17M12 10V7H6.5M12 14V17H17.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      path: "/vendor-performance",
      label: "Vendor Performance",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
          />
        </svg>
      ),
    },
  ];

  return (
    <aside className="fixed md:relative w-[17rem] bg-white h-screen overflow-y-auto z-[100] border-r border-gray-200 transition-transform duration-300 -translate-x-full md:translate-x-0">
      <div className="h-24 flex items-center justify-center px-6 border-b border-gray-200 bg-white">
  <Link to="/">
    <img
      src={logo}
      alt="Full Logo"
      className="h-28 w-auto object-contain"
    />
  </Link>
</div>

      <div className="flex flex-col h-[calc(100%-5rem)] overflow-y-auto">
        <div className="p-4 flex-grow">
          <div className="mb-6">
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider px-4 mb-3">
              Priority Tools
            </div>
            <div className="space-y-2">
              {navItems.map((item) => {
                const isActive =
                (currentPath === "/" && item.path === "/fleet-safety") || currentPath === item.path;


                return (
                  <Link key={item.path} to={item.path}>
                      <button
                        className={`flex items-center gap-3 w-full text-sm font-medium py-3 px-4 rounded-xl transition-all duration-300 ${
                          isActive
                          ? "bg-blue-900 text-white"
                            : "text-gray-800 hover:bg-blue-100"
                              }`}
                              >
                      <div
                        className={`${
                          isActive ? "text-white" : "text-gray-800"
                        } flex-shrink-0`}
                      >
                        {item.icon}
                      </div>
                      <span className="font-semibold truncate">{item.label}</span>
                    </button>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

