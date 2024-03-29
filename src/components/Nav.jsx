import { Fragment } from "react";
import "../css/index.css";
import Logo from "../images/everglo-logo.png";
import ProfilePitc from "../images/bannerlulus.png";
import { useCart } from "../context/CartContext";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/useAuth";

// const navigation = [
//   { name: "Home", href: "/", current: true },
//   { name: "Product", href: "/product", current: false },
//   { name: "Wishlist", href: "/wishlist", current: false },
//   { name: "Order", href: "/order", current: false }, //gak jadi make
// ];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const navigate = useNavigate();
  const { toggleCart } = useCart();
  const { logout } = useAuth();

  function handleNavigate(e, params) {
    e.preventDefault();
    navigate(`/${params}`);
  }

  const handleLogout = () => {
    // Panggil fungsi logout dari context
    logout();

    // Redirect ke halaman login setelah logout
    navigate("/");
  };

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const name = userInfo && userInfo.name;
  const email = userInfo && userInfo.email;

  return (
    <Disclosure
      as="nav"
      className="bg-slate-900 fixed w-full top-0 z-10 relative"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex w-auto h-9 items-center jutify-center">
                  <img
                    className="h-16 w-24 sm:w-56 md:w-56 lg:w-56 xl:w-56 object-cover mt-3 sm:mt-8 lg:mt-8 lg:mt-8 xl:mt-8"
                    src={Logo}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <button
                      onClick={(e) => handleNavigate(e, "")}
                      className="bg-gray-90 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      Home
                    </button>
                    <button
                      onClick={(e) => handleNavigate(e, "product")}
                      className="bg-gray-90 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      Product
                    </button>
                    <button
                      onClick={(e) => handleNavigate(e, "wishlist")}
                      className="bg-gray-90 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      Wishlist
                    </button>
                    <button
                      onClick={(e) => handleNavigate(e, "order")}
                      className="bg-gray-90 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      Order
                    </button>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="mx-2 w-8 h-8 bg-gray-800 rounded-full focus:ring-offset-2 focus:ring-offset-gray-800"
                  onClick={toggleCart}
                >
                  <span>
                    <i className="fa-solid fa-cart-shopping text-gray-400 hover:text-white"></i>
                  </span>
                </button>
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={ProfilePitc}
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {name && email ? (
                        <>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700 w-full"
                                )}
                              >
                                {name}
                              </button>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700 w-full"
                                )}
                              >
                                {email}
                              </button>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <div>
                                <button
                                  href="/"
                                  onClick={handleLogout}
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700 w-full"
                                  )}
                                >
                                  Logout
                                </button>
                              </div>
                            )}
                          </Menu.Item>
                        </>
                      ) : (
                        <Menu.Item>
                          {({ active }) => (
                            <div>
                              <button
                                onClick={(e) => handleNavigate(e, "login")}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700 w-full"
                                )}
                              >
                                Login
                              </button>
                            </div>
                          )}
                        </Menu.Item>
                      )}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Disclosure.Button>
                <button
                  onClick={(e) => handleNavigate(e, "")}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                >
                  Home
                </button>
                <button
                  onClick={(e) => handleNavigate(e, "product")}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                >
                  Product
                </button>
                <button
                  onClick={(e) => handleNavigate(e, "wishlist")}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                >
                  Wishlist
                </button>
                <button
                  onClick={(e) => handleNavigate(e, "order")}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                >
                  Order
                </button>
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
export default Navbar;
