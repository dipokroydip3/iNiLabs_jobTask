import { FaArrowRight, FaCheck } from "react-icons/fa6";


const Teams = () => {
      return (
            <div className="w-10/12 m-auto py-10 ">
                  <h1 className="text-5xl font-bold">Built for all kinds of teams</h1>
                  <ul className="flex gap-10 items-center text-lg py-5">
                        <li className="hover:bg-purple-100 border py-1 px-3 transition duration-200 cursor-pointer rounded-full">UX & Design</li>
                        <li className="hover:bg-purple-100 border py-1 px-3 transition duration-200 cursor-pointer rounded-full">Marketing</li>
                        <li className="hover:bg-purple-100 border py-1 px-3 transition duration-200 cursor-pointer rounded-full">Product Management</li>
                        <li className="hover:bg-purple-100 border py-1 px-3 transition duration-200 cursor-pointer rounded-full">Engineering</li>
                        <li className="hover:bg-purple-100 border py-1 px-3 transition duration-200 cursor-pointer rounded-full">Consultants</li>
                        <li className="hover:bg-purple-100 border py-1 px-3 transition duration-200 cursor-pointer rounded-full">Agile Coaches</li>
                  </ul>
                  <div className="grid grid-cols-4 gap-10">
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
                                    <h4>Integrate your favorite tools</h4>
                                    <div className="flex gap-5 py-5">
                                          <img src="https://i.ibb.co/XCqX1DL/icons8-diamond-48.png" alt="" />
                                          <img src="https://i.ibb.co/sFCpBrw/icons8-figma-48.png" alt="" />
                                          <img src="https://i.ibb.co/HXgbKHx/icons8-adobe-xd-48.png" alt="" />
                                          <img src="https://i.ibb.co/JR781Wb/icons8-n-key-50.png" alt="" />
                                    </div>
                              </div>
                        </div>
                        <div className="col-span-3">
                              <img className="w-full " src="https://i.ibb.co/XCXK1QG/1ea64d58add959141ee969b84cacf29d.png" alt="" />
                        </div>
                  </div>
            </div>
      );
};

export default Teams;