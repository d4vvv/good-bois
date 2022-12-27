import cs from "classnames";
import { useState } from "react";

const navItems = [
  { name: "Intro", link: "#intro" },
  { name: "Quote 1", link: "#quote1" },
  { name: "Quote 2", link: "#quote2" },
  { name: "Quote 3", link: "#quote3" },
  { name: "Outro", link: "#outro" },
];

interface NavbarProps {
  active: string;
}

export const Navbar: React.FC<NavbarProps> = ({ active }) => {
  const [isMenuToggled, setMenuToggled] = useState(false);

  return (
    <>
      <nav className="w-full ml-auto max-h-[40px] flex font-Lexend pl-4 pr-6 py-2 text-zinc-700 fixed bg-white top-0 z-50">
        <button
          className="flex items-center font-medium text-xl"
          onClick={() =>
            document
              .querySelector("#intro")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 0C3.89543 0 3 0.895431 3 2V3C3 4.10457 3.89543 5 5 5C6.10457 5 7 4.10457 7 3V2C7 0.895431 6.10457 0 5 0Z"
              fill="#000000"
            />
            <path
              d="M10 0C8.89543 0 8 0.895431 8 2V3C8 4.10457 8.89543 5 10 5C11.1046 5 12 4.10457 12 3V2C12 0.895431 11.1046 0 10 0Z"
              fill="#000000"
            />
            <path
              d="M2 5C0.895431 5 0 5.89543 0 7V7.5C0 8.60457 0.895431 9.5 2 9.5C3.10457 9.5 4 8.60457 4 7.5V7C4 5.89543 3.10457 5 2 5Z"
              fill="#000000"
            />
            <path
              d="M13 5C11.8954 5 11 5.89543 11 7V7.5C11 8.60457 11.8954 9.5 13 9.5C14.1046 9.5 15 8.60457 15 7.5V7C15 5.89543 14.1046 5 13 5Z"
              fill="#000000"
            />
            <path
              d="M9.61273 7.77893C8.51793 6.44953 6.48207 6.44953 5.38727 7.77893L2.46943 11.322C1.2614 12.7889 2.30486 15 4.20516 15C4.47668 15 4.74447 14.9368 4.98732 14.8154L5.34699 14.6355C6.70234 13.9578 8.29766 13.9578 9.65301 14.6355L10.0127 14.8154C10.2555 14.9368 10.5233 15 10.7948 15C12.6951 15 13.7386 12.7889 12.5306 11.322L9.61273 7.77893Z"
              fill="#000000"
            />
          </svg>
          <p className="pl-4">Good bois</p>
        </button>
        <button
          className="items-left ml-auto lg:hidden"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setMenuToggled(!isMenuToggled)}
        >
          <div
            className={cs("tham tham-e-squeeze tham-w-6", {
              "tham-active": isMenuToggled,
            })}
          >
            <div className="tham-box">
              <div className="tham-inner bg-zinc-700" />
            </div>
          </div>
        </button>

        <ul className="max-lg:hidden ml-auto justify-end flex font-medium items-center gap-4">
          {navItems.map((item) => (
            <li key={item.link + item.name}>
              <button
                className={cs({ "text-orange-500": active === item.link })}
                onClick={() =>
                  document
                    .querySelector(item.link)
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <nav
        className={cs(
          "font-medium text-center z-40 fixed bg-white w-full transition-all duration-300 pt-8",
          {
            "-translate-y-full": !isMenuToggled,
            "translate-y-0": isMenuToggled,
          }
        )}
      >
        <ul className="py-8 flex flex-col gap-8">
          {navItems.map((item) => (
            <li key={item.link + item.name}>
              <button
                onClick={() => {
                  document
                    .querySelector(item.link)
                    ?.scrollIntoView({ behavior: "smooth" });
                  setMenuToggled(false);
                }}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
