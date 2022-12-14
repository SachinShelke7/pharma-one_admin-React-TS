import Nav from "../global/Nav";
import Sidebar from "../global/Sidebar";

interface Props {
  children: JSX.Element;
}
const Layout = ({ children }: Props) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Nav />
        {children}
      </div>
    </div>
  );
};

export default Layout;
