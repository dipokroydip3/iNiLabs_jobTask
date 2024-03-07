import { FaArrowRight, FaCheck } from "react-icons/fa6";


const WayWork = () => {
      return (
            <div className="w-10/12 m-auto py-10 ">
                  <h1 className="text-3xl lg:text-5xl text-[#050038] font-bold">Built for all kinds of teams</h1>
                  <ul className="flex gap-10 flex-wrap items-center text-lg py-5">
                        <li className="hover:bg-purple-100 border py-1 px-3 transition duration-200 cursor-pointer rounded-full">UX & Design</li>
                        <li className="hover:bg-purple-100 border py-1 px-3 transition duration-200 cursor-pointer rounded-full">Marketing</li>
                        <li className="hover:bg-purple-100 border py-1 px-3 transition duration-200 cursor-pointer rounded-full">Product Management</li>
                        <li className="hover:bg-purple-100 border py-1 px-3 transition duration-200 cursor-pointer rounded-full">Engineering</li>
                        <li className="hover:bg-purple-100 border py-1 px-3 transition duration-200 cursor-pointer rounded-full">Consultants</li>
                        <li className="hover:bg-purple-100 border py-1 px-3 transition duration-200 cursor-pointer rounded-full">Agile Coaches</li>
                  </ul>
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
                        <div className="col-span-1 text-gray-400 space-y-5 mt-6">
                              <div className="flex items-center gap-2">
                                    <FaCheck />
                                    <span>Build low-fi wireframes</span>
                              </div>
                              <div className="flex items-center gap-2">
                                    <FaCheck />
                                    <span>Involve stakeholders in the design process</span>
                              </div>
                              <div className="flex items-center gap-2">
                                    <FaCheck />
                                    <span>Run engaging design workshops</span>
                              </div>
                              <div className="flex items-center gap-2 underline text-blue-600 my-5">
                                    <a href="#">Learn more</a>
                                    <FaArrowRight className="mt-1" />
                              </div>
                              <div>
                                    
                                    
                              </div>
                        </div>
                        <div className="col-span-3">
                              <img className="w-full " src="https://i.ibb.co/FzdFCkz/77d4d1d40cb5e066d6530c4bec450eda.png" alt="" />
                        </div>
                  </div>
            </div>
      );
};

export default WayWork;