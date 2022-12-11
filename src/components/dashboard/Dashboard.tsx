import Card from "../global/Card";
import cd1 from "../../assets/images/dashboard/1.png";
import cd2 from "../../assets/images/dashboard/2.png";
import cd3 from "../../assets/images/dashboard/3.png";
import cd4 from "../../assets/images/dashboard/4.png";
import DashboardCard from "./DashboardCard";

type Props = {};

const index = (props: Props) => {
  return (
    <div className="flex-1">
      {/* first */}
      <div>
        <h3 className="font-bold text-2xl pt-[30px] pb-[11px]">Dashboard</h3>
        <p className="text-[#1D242E] text-sm pb-[26px]">
          A quick data overview of the inventory
        </p>
      </div>
      {/* second */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 pr-5">
        <Card
          icon={cd1}
          heading="Good"
          detail="Inventory Status"
          button="View Detailed Report"
          color="#01A768"
          bg="rgba(1, 167, 104, 0.3)"
        />
        <Card
          icon={cd2}
          heading="Rs. 8,55,875"
          detail="Revenue : Jan 2022"
          button="View Detailed Report"
          color="#FED600"
          bg="rgba(254, 214, 0, 0.3)"
        />
        <Card
          icon={cd3}
          heading="298"
          detail="Medicines Available"
          button="Visit Inventory"
          bg="rgba(3, 169, 245, 0.3)"
          color="#03A9F5"
        />
        <Card
          icon={cd4}
          heading="01"
          detail="Medicine Shortage"
          button="Resolve Now"
          color="#F0483E"
          bg="rgba(240, 72, 62, 0.3)"
        />
      </div>
      {/* third */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pr-5 py-10">
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
      </div>
    </div>
  );
};

export default index;
