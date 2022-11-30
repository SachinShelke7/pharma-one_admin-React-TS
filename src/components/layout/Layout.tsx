import React, { Children } from "react";
import Sidebar from "../global/Sidebar";

interface Props {
  children: JSX.Element;
}
const Layout = ({ children }: Props) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default Layout;
