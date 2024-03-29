import { FaArrowRight } from "react-icons/fa6";

const WorkTogether = () => {
      return (
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center w-10/12 py-16  m-auto">
                  <div className="">
                        <h2 className=" text-3xl lg:text-5xl text-[#050038] font-bold">Work together <br /> wherever you work</h2>
                        <p className="py-5 pr-40">In the office , remote, or a mix of the two, with Miro, your team cat connect, collaborate, and co-create in one space no matter where you are.</p>
                        <button className="text-blue-600 gap-3 underline flex items-center">Learn more <FaArrowRight className="mt-1"/> </button>
                  </div>
                  <img className="" src="https://i.ibb.co/41ZFcx0/32859f7f59a7acb6b154be2ff8bcd81f-removebg-preview.png" alt="" />
            </div>
      );
};

export default WorkTogether;