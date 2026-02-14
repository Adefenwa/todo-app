import { useState } from "react";
import { Link } from "react-router-dom";
import { House, ListTodo, CircleEllipsis } from "lucide-react";
function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="flex justify-between mx-4 my-2">
        <div>
          <h2 className="font-bold text-black">TaskFlow</h2>
        </div>
        <div className="relative">
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            ☰
          </button>

          {isOpen && (
            <ul className="md:hidden mt-4 flex flex-col gap-4 absolute right-0 transition-all duration-300 ease-in-out bg-white p-4 rounded-md shadow-lg">
              <li className="bg-black hover:opacity-75 rounded-md px-5 py-2 text-white font-semibold text-sm ">
                <Link
                  className="flex justify-between items-center gap-2"
                  to="/"
                  onClick={() => setIsOpen(false)}
                >
                  <House size={14} strokeWidth={1.5} />
                  Home
                </Link>
              </li>
              <li className="bg-black hover:opacity-75 rounded-md px-5 py-2 text-white font-semibold text-sm">
                <Link
                  className="flex justify-between items-center gap-2"
                  to="/tasks"
                  onClick={() => setIsOpen(false)}
                >
                  <ListTodo size={14} strokeWidth={1.25} />
                  Todos
                </Link>
              </li>
              <li className="bg-black hover:opacity-75 rounded-md px-5 py-2 text-white font-semibold text-sm">
                <Link
                  className="flex justify-between items-center gap-2"
                  to="/about"
                  onClick={() => setIsOpen(false)}
                >
                  <CircleEllipsis size={14} strokeWidth={1.25} />
                  About
                </Link>
              </li>
            </ul>
          )}
          <ul className="hidden md:flex gap-6 justify-between">
            <li className="bg-black hover:opacity-75 rounded-md px-5 py-2 text-white font-semibold text-sm transition delay-150 duration-300 ease-in-out hover:translate-y-0.5 hover:scale-110 hover:color">
              <Link className="flex justify-between items-center gap-2" to="/">
                <House size={14} strokeWidth={1.5} />
                Home
              </Link>
            </li>
            <li className="bg-black hover:opacity-75 rounded-md px-5 py-2 text-white font-semibold text-sm transition delay-150 duration-300 ease-in-out hover:translate-y-0.5 hover:scale-110">
              <Link
                className="flex justify-between items-center gap-2"
                to="/tasks"
              >
                <ListTodo size={14} strokeWidth={1.25} />
                Todos
              </Link>
            </li>
            <li className="bg-black hover:opacity-75 rounded-md px-5 py-2 text-white font-semibold text-sm transition delay-150 duration-300 ease-in-out hover:translate-y-0.5 hover:scale-110">
              <Link
                className="flex justify-between items-center gap-2"
                to="/about"
              >
                <CircleEllipsis size={14} strokeWidth={1.25} />
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
