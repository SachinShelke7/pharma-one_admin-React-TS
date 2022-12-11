import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface props {
  title: string;
  icon: any;
  slug: string;
  isCollapse: boolean;
  activeTab: string;
  setActiveTab: any;
}

const Item = ({
  title,
  icon,
  slug,
  isCollapse,
  activeTab,
  setActiveTab,
}: props) => {
  const [count, setCount] = useState(95);
  const navigate = useNavigate();

  useEffect(() => {
    if (count >= 99) {
      setCount(99);
    }
  }, [count]);

  const location = useLocation();
  useEffect(() => {
    window.scroll(0, 0);
  }, [location.pathname]);

  const handleActiveTab = () => {
    setActiveTab(title);
  };
  return (
    <div onClick={handleActiveTab}>
      <Link
        to={slug}
        className={`flex space-x-2 items-center pl-4 py-[13px] ${
          activeTab === title ? "bg-[#009099]" : ""
        } ${slug === "notification" ? "relative" : ""}`}
      >
        {icon}
        <p
          className={`transform transition-all duration-[1000ms] ${
            isCollapse ? "hidden w-0" : "block w-auto"
          }`}
        >
          {title}
        </p>
        {slug === "notification" ? (
          <div onClick={() => setCount(count + 1)}>
            <div className="bg-red-500 " />
            <p
              className={`absolute bg-red-500 rounded-full text-[9px] px-[5px] ${
                isCollapse ? "top-[2px] right-[1px]" : "top-5 right-6"
              }`}
            >
              {count >= 99 ? "99+" : count}
            </p>
          </div>
        ) : null}
      </Link>
    </div>
  );
};

export default Item;
