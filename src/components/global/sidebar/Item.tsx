import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

type Props = {
  title: string;
  icon: any;
  slug: string;
  isCollapse: boolean;
};

const Item = ({ title, icon, slug, isCollapse }: Props) => {
  const location = useLocation();
  useEffect(() => {
    window.scroll(0, 0);
  }, [location.pathname]);

  return (
    <div>
      <Link
        to={slug}
        className={`flex space-x-2 items-center pl-4 py-[13px] ${
          location.pathname === `/${slug}` ? "bg-[#009099]" : ""
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
          <div>
            <div className="bg-red-500 " />
            <p
              className={`absolute bg-red-500 rounded-full text-[9px] px-[5px] ${
                isCollapse ? "top-[2px] right-[1px]" : "top-5 right-6"
              }`}
            >
              01
            </p>
          </div>
        ) : null}
      </Link>
    </div>
  );
};

export default Item;
