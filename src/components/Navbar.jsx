import { MdLanguage } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
      return (
            <div>
                  <div className="flex items-center justify-between py-4 border-b px-10">
                        <h1 className="font-semibold text-4xl">miro</h1>
                        <ul className="flex items-center gap-5 text-lg">
                              <li className="flex items-center gap-1"> Product <IoIosArrowDown className="mt-1" /></li>
                              <li className="flex items-center gap-1">Solutions  <IoIosArrowDown className="mt-1" /></li>
                              <li className="flex items-center gap-1">Resources  <IoIosArrowDown className="mt-1" /></li>
                              <li>Enterprise</li>
                              <li>Pricing</li>
                        </ul>
                        <div className="flex gap-5">
                              <ul className="flex gap-5 items-center text-lg  ">
                                    <li className="flex items-center "> <MdLanguage className="text-2xl" />EN</li>
                                    <li>Contact Sales</li>
                                    <li>Login</li>
                              </ul>
                              <button  className="bg-blue-600 flex items-center gap-2 text-white px-4 py-2 rounded-full">Sign up free<FaArrowRight/></button>
                        </div>
                  </div>
            </div>
      );
};

export default Navbar;