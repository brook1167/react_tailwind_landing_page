import { navItems } from "../constants";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { useState } from "react";
const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleMobileDrawer = () => setMobileDrawerOpen(!mobileDrawerOpen);
  return (
    <nav className="sticky top-0 backdrop-blur-lg py-3 z-0 border-b border-neutral-700/80">
      <div className="container px-4 mx-auto realtive text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="w-10 h-10 mr-2" src={logo} alt="logo" />
            <span className="text-xl tracking-tighter">VirtualR</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <a key={index} href={item.href}>
                {item.label}
              </a>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center items-center space-x-12">
            <a className="border py-2 px-3 rounded-md ">Sign In</a>
            <a className="bg-gradient-to-l from-orange-500 to-orange-800 py-2 px-3 rounded-md">
              Create an account
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={() => toggleMobileDrawer()}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div
            className="fixed right-0 
           w-full p-12 flex flex-col justify-center items-center lg:hidden"
          >
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="space-x-6 p-2">
              <a className="border py-2 px-3 rounded-md ">Sign In</a>
              <a className="bg-gradient-to-l from-orange-500 to-orange-800 py-2 px-3 rounded-md">
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
