import { FaArrowRight } from "react-icons/fa6";
// import {webDeshboard} from "../assets/dashboard design.PNG"
// import grid1 from "../assets/office-605503_1280.jpg"
// import grid2 from "../assets/office-620822_1280.jpg"
// import grid3 from "../assets/teamwork-3213924_1280.jpg"
import { PiGraduationCapThin } from "react-icons/pi";
import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";


const Hero = () => {
      return (
            <div className="grid w-[1140px] h-[469px] m-auto grid-cols-2 py-10">
                  <div className="pr-24">
                        <div>
                              <h1 className="font-bold text-4xl">Take ideas from <br /> better to best</h1>
                              <p className="py-5">Miro is your teams visual platform to connect, collaborate, and create - together</p>
                              <div className="w-80 space-y-2">
                                    <input className="px-3 py-2 w-full block rounded-full outline-none border" type="text" placeholder="Enter your work email" />
                                    <button className="w-full flex items-center gap-2 rounded-full justify-center py-2 bg-blue-600 text-white">Sign up free <FaArrowRight /> </button>
                              </div>
                              <p className="py-2 text-gray-400">Collaborate with your team minutes</p>
                              <div className="bg-gray-300 my-8 px-5 rounded py-3 inline-flex gap-10">
                                    <div>
                                          <div className="flex text-xl text-orange-300">
                                                <IoMdStar />
                                                <IoMdStar />
                                                <IoMdStar />
                                                <IoMdStar />
                                                <IoMdStarHalf />
                                          </div>
                                          <h5>Based on 5149+ reviews:</h5>
                                    </div>
                                    <div className="flex  list-none items-center gap-2">
                                          <PiGraduationCapThin className="text-2xl" />
                                          <li>GetApp</li>
                                          <li>Capterra</li>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div>
                        <img className="mb-3 shadow-md" src="https://i.ibb.co/YtXmymb/dashboard-design.png" alt="" />
                        <div className="grid grid-cols-3 gap-3">
                              <img src="https://i.ibb.co/QKQVdL5/office-605503-1280.jpg" alt="" />
                              <img src="https://i.ibb.co/vmsRZq8/office-620822-1280.jpg" alt="" />
                              <img src="https://i.ibb.co/G5DLczr/teamwork-3213924-1280.jpg" alt="" />
                        </div>
                  </div>
            </div>
      );
};

export default Hero;