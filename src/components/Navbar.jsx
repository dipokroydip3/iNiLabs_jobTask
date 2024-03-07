import { MdLanguage } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
// import { IoIosArrowDown } from "react-icons/io";

import { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
// import { FaAngleDown } from "react-icons/fa6";
// import { IoSearch } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
// import { Link } from "react-router-dom";

const Navbar = () => {

      const [showItem, setShowItem] = useState(false)
      const [anotherItem, setSearchBar] = useState(false)

      const toggleNavbar = () => {
            setShowItem(!showItem)
      }

      const toggleSearchBar = () => {
            setSearchBar(!anotherItem)
      }

      return (

            <div>
                  <div className=" rounded relative  flex items-center border-b shadow-lg justify-between px-10 md:px-20  py-4">
                        <Link className="text-4xl text-[#050038]" to={'/'}>miro</Link>
                        <div className={` md:flex items-center hover:bg-black list-none justify-between  md:gap-5 transition duration-1000 ${showItem ? 'block absolute transition duration-500 md:sticky top-[73px] left-0 text-center space-y-5 md:space-y-0 py-5 px-0 bg-amber-700 md:bg-amber-200  ease-in text-white md:text-black w-full md:w-auto' : 'hidden left-40'} `}>
                              <li className="cursor-pointer flex items-center hover:text-blue-900 justify-center font-semibold"><div><Link className="flex items-center gap-2" >Product <IoIosArrowDown /></Link></div></li>
                              <li className="cursor-pointer flex items-center hover:text-blue-900  justify-center"><Link className="flex items-center gap-2">Solutions  <IoIosArrowDown /></Link></li>
                              <li className="cursor-pointer flex items-center hover:text-blue-900  justify-center "><Link><div className="flex items-center gap-5">Resources  <IoIosArrowDown /></div></Link>

                                    <ul className="hidden text-center md:text-center">
                                          <li>sub service 1</li>
                                          <li>sub service 2</li>
                                          <li>sub service 3</li>
                                    </ul>

                              </li>
                              <li className="cursor-pointer hover:text-blue-900 "><Link>Enterprise</Link></li>
                              <li className="cursor-pointer hover:text-blue-900 "><Link>Pricing</Link></li>
                        </div>

                        <div className={` md:block   md:gap-5 transition duration-1000 ${anotherItem ? 'block absolute transition duration-500 md:sticky top-[75px] left-0 text-center space-y-5 md:space-y-0 py-5 px-0 bg-black md:bg-amber-200  ease-in text-white md:text-black w-full md:w-auto' : 'hidden left-40'} `}>
                              <ul className="flex gap-5 items-center text-lg  ">
                                    <li className="flex items-center "> <MdLanguage className="text-2xl" />EN</li>
                                    <li>Contact Sales</li>
                                    <li>Login</li>
                              </ul>
                              {/* <button className="bg-blue-600 flex items-center gap-2 text-white px-4 py-2 rounded-full">Sign up free<FaArrowRight /></button> */}
                        </div>
                        <Link to='/login' className="hidden  px-4 py-2 md:flex items-center gap-2 rounded-full bg-blue-600 text-white">Sign up free <FaArrowRight /></Link>
                        <div className=" flex items-center gap-5 md:hidden ">
                              <div>
                                    <MdLanguage onClick={toggleSearchBar} className="block text-xl md:hidden" />
                              </div>
                              <button onClick={toggleNavbar}>
                                    < IoMenuOutline className="text-2xl" />
                              </button>
                        </div>
                  </div>




            </div>

            // <div>
            //       <div className="flex items-center justify-between py-4 border-b px-10">
            //             <h1 className="font-bold text-[#050038] text-4xl">miro</h1>
            //             <ul className="flex items-center gap-5 text-lg">
            //                   <li className="flex items-center gap-1"> Product <IoIosArrowDown className="mt-1" /></li>
            //                   <li className="flex items-center gap-1">Solutions  <IoIosArrowDown className="mt-1" /></li>
            //                   <li className="flex items-center gap-1">Resources  <IoIosArrowDown className="mt-1" /></li>
            //                   <li>Enterprise</li>
            //                   <li>Pricing</li>
            //             </ul>
            //             <div className="flex gap-5">
            // <ul className="flex gap-5 items-center text-lg  ">
            //       <li className="flex items-center "> <MdLanguage className="text-2xl" />EN</li>
            //       <li>Contact Sales</li>
            //       <li>Login</li>
            // </ul>
            // <button  className="bg-blue-600 flex items-center gap-2 text-white px-4 py-2 rounded-full">Sign up free<FaArrowRight/></button>
            //             </div>
            //       </div>
            // </div>
      );
};

export default Navbar;