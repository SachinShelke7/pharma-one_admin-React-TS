import React from "react";

type Props = {
  heading: any;
  button: any;
};

const DashboardCard = ({ heading, button }: Props) => {
  return (
    <div className="border">
      <div className="border-b">
        <div className="py-2 px-4 flex justify-between items-center">
          <h3 className="font-bold">Inventory</h3>
          <button>Go to Configuration</button>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/2 py-4 px-4">
          <h3 className="font-bold">298</h3>
          <p>Total no of Medicines</p>
        </div>
        <div className="w-1/2 py-4 px-4">
          <h3 className="font-bold">24</h3>
          <p>Medicine Groups</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
