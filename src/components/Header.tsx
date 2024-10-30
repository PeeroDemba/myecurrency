import { useContext } from "react";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import { TC } from "../contexts/ToggleContext";

function Header() {
  const toggleContext = useContext(TC);

  return (
    <nav className="relative flex items-center justify-between md:items-start md:justify-start">
      <img src="/images/logo.png" alt="SleepStiq Logo" />
      <RxHamburgerMenu
        onClick={() => toggleContext?.setToggle(true)}
        size="1.5rem"
        color="#12305b"
        className="md:hidden"
      />
      {toggleContext?.toggle ? (
        <div
          className={
            toggleContext?.toggle
              ? "absolute -left-[20px] -top-6 z-10 flex h-screen w-screen flex-col gap-8 bg-white p-8 md:hidden"
              : "hidden"
          }
        >
          <IoClose
            onClick={() => toggleContext?.setToggle(false)}
            size="1.5rem"
            color="#12305b"
            className="self-end"
          />
          <ul className="flex w-[90px] flex-col justify-between gap-4 text-[18px] text-[#12305b]">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "font-bold" : "font-normal"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="cursor-pointer">About</li>
            <li>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  isActive ? "font-bold" : "font-normal"
                }
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/faqs"
                className={({ isActive }) =>
                  isActive ? "font-bold" : "font-normal"
                }
              >
                FAQs
              </NavLink>
            </li>
          </ul>
        </div>
      ) : undefined}

      <ul className="ml-[171px] hidden w-[391px] justify-between text-[18px] text-[#12305b] md:flex">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "font-bold" : "font-normal"
            }
          >
            Home
          </NavLink>
        </li>
        <li className="cursor-pointer">About</li>
        <li>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive ? "font-bold" : "font-normal"
            }
          >
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/faqs"
            className={({ isActive }) =>
              isActive ? "font-bold" : "font-normal"
            }
          >
            FAQs
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
