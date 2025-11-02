import { useState } from "react";
// import { cn } from "../lib/utils";

const Links = [
  { path: "#", name: "Home" },
  { path: "#", name: "About" },
];

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleShowMobileMenu = () => {
    console.log("toggle →", !showMobileMenu);
    setShowMobileMenu((p) => !p);
  };

  return (
    <header className="h-24 lg:h-30 bg-[#fefefe] shadow-md relative">
      <div className="mx-auto h-full w-[90%] lg:w-[75%] flex items-center justify-between">
        <a href="#" className="h-full">
          <div className="h-full overflow-hidden">
            <img
              src="/images/tls_logo.png"
              alt="tls logo"
              className="h-full w-auto object-contain"
            />
          </div>
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-10">
          <ul className="flex gap-6 lg:gap-10 text-lg font-semibold uppercase text-[#b69121]">
            {Links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.path}
                  className="block py-4 transition hover:font-bold"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <button className="rounded-md border border-[#b69121] bg-[#b69121] px-2 py-1 text-white transition hover:opacity-80">
            Register
          </button>
        </nav>

        {/* MOBILE NAVIGATION */}
        <div className="md:hidden relative z-50">
          <button
            type="button"
            onClick={toggleShowMobileMenu}
            className="grid h-8 w-8 place-items-center rounded-md bg-[rgba(0,0,0,0.5)] text-white"
            aria-label="Toggle menu"
          >
            <i className="ri-menu-line text-xl" />
          </button>

          {showMobileMenu && (
            <div
              className="fixed inset-0 bg-black/50"
              onClick={toggleShowMobileMenu}
            >
              <nav
                className="fixed right-0 top-0 h-full w-3/4 max-w-xs bg-white p-6 shadow-xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-center gap-4 bg-gray-200 py-4 text-2xl">
                  <i className="ri-youtube-fill" />
                  <i className="ri-facebook-fill" />
                  <i className="ri-instagram-fill" />
                  <i className="ri-twitter-x-fill" />
                </div>

                <ul className="mt-6 space-y-4 text-center">
                  {Links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.path}
                        className="block py-2 text-lg font-medium text-[#b69121]"
                        onClick={toggleShowMobileMenu}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex justify-center">
                  <button
                    className="w-[60%] rounded-md bg-[#b69121] py-2 text-white"
                    onClick={toggleShowMobileMenu}
                  >
                    Register
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
