import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { RiSubtractFill } from "react-icons/ri";
const Footer = () => {
      return (
            <div className="bg-blue-900 ">
                  <div className="grid-cols-4 w-10/12 m-auto py-20 grid">
                        <div className="col-span-1">
                              <h3 className="text-3xl font-bold">Scan. Detect. Remove.</h3>
                              <div className="flex gap-5">
                                    <FaTwitterSquare />
                                    <FaFacebookSquare />
                                    <FaYoutube />
                              </div>
                              <ul className="flex gap-5">
                                    <li className="underline">Privacy Policy</li>
                                    <li className="underline">Terms of Service</li>
                              </ul>
                              <p>Copyright © 2022 Certo Software Limited | Registered in England & Wales No. 10072356</p>
                              <p>Designed & developed by Bigger Picture</p>
                        </div>
                        <div className="col-span-1">
                              <h3 className="text-3xl font-bold">Miro.</h3>
                              <ul className="text-orange-500">
                                    <li className="flex items-center gap-3"> <RiSubtractFill />iPhone</li>
                                    <li className="flex items-center gap-3"> <RiSubtractFill />Android</li>
                                    <li className="flex items-center gap-3"> <RiSubtractFill />Help</li>
                                    <li className="flex items-center gap-3"> <RiSubtractFill />About</li>
                                    <li className="flex items-center gap-3"> <RiSubtractFill />Insights</li>
                              </ul>
                        </div>
                        <div className="col-span-2">
                              <h2 className="text-3xl font-bold">Sign up to our newsletter</h2>
                              <p>Receive the latest mobile security news, exclusive discounts & offers straight to your inbox!</p>
                              <div className="flex w-full">
                                    <input type="text" />
                                    <button>Submit</button>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Footer;