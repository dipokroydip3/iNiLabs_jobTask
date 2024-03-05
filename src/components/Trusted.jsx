import { SiWalmart } from "react-icons/si";
import { SiCisco } from "react-icons/si";
import { SiVolvo } from "react-icons/si";

const Trusted = () => {
      return (
            <div>
                  <p className="text-center py-5">Trusted by 45m+ users</p>
                  <div className="flex px-12 flex-wrap justify-between list-none w-[1140px] m-auto items-center">
                        <SiWalmart className=" text-9xl" />
                        <SiCisco className=" text-6xl" />
                        <SiVolvo className=" text-6xl" />
                        <li className="font-bold text-2xl">Deloitte.</li>
                        <li className="font-bold text-2xl">okta</li>
                  </div>
            </div>
      );
};

export default Trusted;