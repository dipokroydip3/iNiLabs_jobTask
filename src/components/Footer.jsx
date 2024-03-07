import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { RiSubtractFill } from "react-icons/ri";
const Footer = () => {
      return (
            <div className="bg-[#050038] ">
                  <div className=" grid-cols-1  lg:grid-cols-7 w-10/12 m-auto py-20 grid">
                        <div className="lg:col-span-2 text-white">
                              <h3 className="text-3xl font-bold">Scan. Detect. Remove.</h3>
                              <div className="flex items-center gap-5 py-5">
                                    <FaTwitterSquare className="text-4xl" />
                                    <FaFacebookSquare className="text-4xl" />
                                    <FaYoutube className="text-5xl"/>
                              </div>
                              <ul className="flex gap-5 py-5">
                                    <li className="underline">Privacy Policy</li>
                                    <li className="underline">Terms of Service</li>
                              </ul>
                              <p className="py-5">Copyright © 2022 Certo Software Limited | Registered in England & Wales No. 10072356</p>
                              <p>Designed & developed by Bigger Picture</p>
                        </div>
                        <div className="lg:col-span-2 pl-20">
                              <h3 className="text-4xl font-bold text-white">Miro.</h3>
                              <ul className="text-yellow-400 py-5 space-y-3">
                                    <li className="flex items-center gap-3"> <RiSubtractFill />iPhone</li>
                                    <li className="flex items-center gap-3"> <RiSubtractFill />Android</li>
                                    <li className="flex items-center gap-3"> <RiSubtractFill />Help</li>
                                    <li className="flex items-center gap-3"> <RiSubtractFill />About</li>
                                    <li className="flex items-center gap-3"> <RiSubtractFill />Insights</li>
                              </ul>
                        </div>
                        <div className="lg:col-span-3 h-fit bg-yellow-400 text-white px-5 lg:px-16 py-5 lg:py-10 rounded-xl">
                              <h2 className="text-3xl text-[#02033b] font-bold">Sign up to our newsletter</h2>
                              <p className="py-5">Receive the latest mobile security news, exclusive discounts & offers straight to your inbox!</p>
                              <div className="lg:flex lg:w-full">
                                    <input placeholder="Type here" className="text-black px-2 py-1 rounded-full lg:rounded-l-full outline-none border" type="text" />
                                    <button className="bg-[#02033b] block m-auto rounded-full my-5 lg:rounded-r-full px-3">Submit</button>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Footer;