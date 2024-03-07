import { FaArrowRight } from "react-icons/fa6";

const Tools = () => {
      return (
            <div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center w-10/12 justify-between m-auto">
                        <img className="" src="https://i.ibb.co/Nxq502v/6a9b1a555d15b5769a5ec2b1870f5af7-removebg-preview.png" alt="" />
                        <div className="">
                              <h2 className="text-3xl lg:text-5xl font-bold text-[#050038]">Connect<br />your tools, <br />close your tabs</h2>
                              <p className="py-5 lg:pr-40">Whether you want to edit your Google Docs, resolve Jira issues, or collaborate over Zoom, Miro has 100
                                    + integrations with tools you already use and love.</p>
                              <button className="text-blue-600 gap-3 underline flex items-center">Learn more <FaArrowRight className="mt-1" /> </button>
                        </div>
                  </div>
            </div>
      );
};

export default Tools;