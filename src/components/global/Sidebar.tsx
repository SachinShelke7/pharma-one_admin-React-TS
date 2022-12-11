import { useEffect, useState } from "react";
import {
  MdDashboard,
  MdInventory,
  MdStackedLineChart,
  MdMenuOpen,
  MdSupervisorAccount,
  MdNotificationsActive,
  MdOutlineChatBubbleOutline,
  MdOutlineSettings,
  MdCoronavirus,
  MdOutlineHelp,
  MdMoreVert,
} from "react-icons/md";
import Item from "./sidebar/Item";
import logo from "../../assets/icons/logo.svg";
import userImg from "../../assets/images/user.jpg";
import { IoMdArrowDropleft } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [isCollapse, setIsCollapse] = useState(false);
  const [activeTab, setActiveTab] = useState("Dashboard");
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/dashboard");
    }
  }, []);

  return (
    <div
      className={`text-white sticky top-0 bottom-0 transform transition-all duration-[200ms] flex-1 select-none max-h-screen overflow-y-scroll scrollbar-hide ${
        isCollapse ? "max-w-[64px]" : "max-w-[272px]"
      }`}
    >
      <div
        className={`absolute right-0 bg-[#1d242e] top-[90vh] h-10 flex items-center  cursor-pointer ${
          isCollapse ? "rotate-180 rounded-l-[8px]" : "rounded-r-[8px]"
        }`}
        onClick={() => setIsCollapse(!isCollapse)}
      >
        <IoMdArrowDropleft />
      </div>
      <div
        className={` bg-[#283342] min-h-screen flex flex-col justify-between ${
          isCollapse ? "w-12" : "max-w-[256px]"
        }`}
      >
        <div>
          {/* first */}
          <>
            <div className="">
              <div
                className={`bg-[#1d242e] ${
                  isCollapse
                    ? "p-2"
                    : "flex space-x-2 py-[9px] pl-[24px] items-center "
                }`}
              >
                <img src={logo} alt="logo" />
                {isCollapse ? null : <h2>Pharma One</h2>}
              </div>
            </div>
            {/* user */}
            <div
              className={`justify-between items-center pl-[24px] pr-4 py-[30px] ${
                isCollapse ? "hidden" : "flex"
              }`}
            >
              <div className="flex items-center space-x-2">
                <img src={userImg} alt="user" className="rounded-md" />
                <div>
                  <h4 className="text-sm font-medium">Sachin</h4>
                  <h6 className="text-xs text-yellow-400">Super Admin</h6>
                </div>
              </div>
              <MdMoreVert />
            </div>
          </>

          <div className={`flex flex-col ${isCollapse ? "space-y-2" : ""}`}>
            <Item
              title="Dashboard"
              icon={<MdDashboard />}
              slug="dashboard"
              isCollapse={isCollapse}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <Item
              title="Inventory"
              icon={<MdInventory />}
              slug="inventory"
              isCollapse={isCollapse}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <Item
              title="Reports"
              icon={<MdStackedLineChart />}
              slug="reports"
              isCollapse={isCollapse}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <Item
              title="Configuration"
              icon={<MdMenuOpen />}
              slug="configuration"
              isCollapse={isCollapse}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />

            <div className="pt-2 border-b border-white" />

            <Item
              title="Contact Management"
              icon={<MdSupervisorAccount />}
              slug="contact"
              isCollapse={isCollapse}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <Item
              title="Notification"
              icon={<MdNotificationsActive />}
              slug="notification"
              isCollapse={isCollapse}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <Item
              title="Chat with Visitors"
              icon={<MdOutlineChatBubbleOutline />}
              slug="chat"
              isCollapse={isCollapse}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />

            <div className="pt-2 border-b border-white" />

            <Item
              title="Application Settings"
              icon={<MdOutlineSettings />}
              slug="settings"
              isCollapse={isCollapse}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <Item
              title="Covid-19"
              icon={<MdCoronavirus />}
              slug="covid"
              isCollapse={isCollapse}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <Item
              title="Get Technical Help"
              icon={<MdOutlineHelp />}
              slug="help"
              isCollapse={isCollapse}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>
        </div>
        {isCollapse ? null : (
          <div className="flex justify-between items-center px-5 bg-[#1d242e] py-[10px] text-xs text-white">
            <p>Powered by sachin © 2022</p>
            <p>v 1.1.2</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
