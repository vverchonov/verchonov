import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import ToggleThemeButton from "./components/toggle-theme-button";

export type NavLink = {
  name: string; // should be unqiue
  url: string;
};

type Props = {
  links: NavLink[];
};

const linkClassSelected =
  "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500";

const linkClass =
  "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";

const Navbar = (props: Props) => {
  const navigate = useNavigate();
  const pathname = window.location.pathname;

  const onClick = React.useCallback(
    (link: NavLink) => {
      navigate(link.url);
    },
    [props, navigate]
  );

  const generateNavLinks = React.useCallback(() => {
    return props.links.map((link) => {
      return (
        <li>
          <a
            onClick={() => onClick(link)}
            className={pathname === link.url ? linkClassSelected : linkClass}
          >
            {link.name}
          </a>
        </li>
      );
    });
    //change to specific props in case extra props are added
  }, [props]);

  return (
    <nav className="fixed top-0 w-full bg-white border-gray-200 dark:bg-gray-900 shadow-sm dark:shadow-none">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white truncate">
            VERCH (o) NOV
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {generateNavLinks()}
          </ul>
        </div>
        <ToggleThemeButton />
      </div>
    </nav>
  );
};

export default Navbar;
