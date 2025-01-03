import { Button } from "./ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const NavBar = () => {
  return (
    <div className="mt-5">
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-0">
        <nav className="max-w-[85rem] w-full mx-auto px-4 flex flex-wrap basis-full items-center justify-between">
          <a
            className="sm:order-1 flex items-center gap-2 text-2xl font-semibold focus:outline-none focus:opacity-80"
            href="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="blue"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-briefcase-business"
            >
              <path d="M12 12h.01" />
              <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
              <path d="M22 13a18.15 18.15 0 0 1-20 0" />
              <rect width="20" height="14" x="2" y="6" rx="2" />
            </svg>
            <h1 className="font-semibold text-xl text-gray-600 ">
              Career <span className="font-normal text-primary">Connect</span>
            </h1>
          </a>

          {/* Toggle button visible only on small screens */}
          <Sheet>
            <SheetTrigger asChild>
              <button
                type="button"
                className="sm:hidden hs-collapse-toggle relative size-7 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                id="hs-navbar-alignment-collapse"
                aria-expanded="false"
                aria-controls="hs-navbar-alignment"
                aria-label="Toggle navigation"
                data-hs-collapse="#hs-navbar-alignment"
              >
                <svg
                  className="hs-collapse-open:hidden shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
                <span className="sr-only">Toggle</span>
              </button>
            </SheetTrigger>

            {/*Sheet Content to be displayed when the toggle is clicked*/}
            <SheetContent className="bg-white ">
              <SheetHeader>
                <SheetTitle className="">Sheet Content</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5">
              <a
                className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none"
                href="/"
                aria-current="page"
              >
                Find Jobs
              </a>
              <a
                className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400"
                href="/"
              >
                Browse Companies
              </a>
            </div>
              
              <SheetFooter>
                <SheetClose asChild><div className=" sm:flex ml-2 sm:order-3 items-center justify-center gap-x-2">
                <a
                  href="/login"
                  type="button"
                  className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg  text-gray-800"
                >
                  <Button>Login</Button>
                </a>

                <a href="/register">
                  <Button>Sign Up</Button>
                </a>
              </div></SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>

          {/* Buttons visible only on larger screens */}
          <div className="hidden sm:flex sm:order-3 items-center gap-x-2">
            <a
              href="/login"
              type="button"
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
            >
              Login
            </a>

            <div className="justify-between">
              <a href="/register">
                <Button>Sign Up</Button>
              </a>
            </div>
          </div>

          <div
            id="hs-navbar-alignment"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2"
            aria-labelledby="hs-navbar-alignment-collapse"
          >
            <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5">
              <a
                className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none"
                href="/"
                aria-current="page"
              >
                Find Jobs
              </a>
              <a
                className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400"
                href="/"
              >
                Browse Companies
              </a>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;