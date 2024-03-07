import { FaArrowRight } from "react-icons/fa6";


const Ways = () => {
      return (
            <div className="relative m-auto py-5  w-10/12">
                  <img className="m-auto h-52 lg:h-0 lg:w-full" src="https://i.ibb.co/dpQfNZX/f35490d1795865569180d6af1ca0ada1-removebg-preview.png" alt="" />
                  <div className="absolute text-center top-14 lg:top-44 right-5 lg:right-20 ">
                        <h2 className="text-2xl font-semibold">The Ways We Work</h2>
                        <p className="py-2">How has our relationship with work changed</p>
                        <button className="flex m-auto items-center gap-1 bg-blue-600 text-white px-5 py-2 rounded-full">View the report <FaArrowRight className="mt-1"/></button>
                  </div>
            </div>
      );
};

export default Ways;