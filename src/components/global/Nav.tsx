import { MdSearch } from "react-icons/md";
import TimeComponent from "./TimeComponent";

type Props = {};

const Nav = (props: Props) => {
  return (
    <div>
      <div className="flex justify-between flex-col md:flex-row">
        <div className="bg-[#E3EBF3] flex items-center px-5 my-[11px] mr-4">
          <input
            type="text"
            className="h-[38px] py-[11px] bg-transparent w-full lg:min-w-[400px] rounded-md outline-none"
            placeholder="Search for anything here..."
          />
          <MdSearch size="20" />
        </div>
        <TimeComponent />
      </div>
    </div>
  );
};

export default Nav;
