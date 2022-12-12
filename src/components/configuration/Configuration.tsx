import React from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";

type Props = {};

const Configuration = (props: Props) => {
  return (
    <div className="flex-1">
      <div>
        <h3 className="font-bold text-2xl pt-[30px] pb-[11px]">
          Configurations
        </h3>
        <p className="text-[#1D242E] text-sm pb-[26px]">
          Configure your pharmacy application.
        </p>
      </div>
      <div className="flex space-x-5 justify-between pr-5">
        <Card1
          heading="Branding"
          name="Test Name"
          name2="Pharmacy Name"
          id="PH349TY228"
          name3="Pharm_ID"
        />
        <Card1
          heading="Owner"
          name="Test Name"
          name2="Owner Name"
          id="user@mail.com"
          name3="Email"
        />
      </div>
      <Card2
        array={[
          "Dashboard",
          "Inventory",
          "Reports",
          "Configuration",
          "Contact Management",
          "Notifications",
        ]}
      />
    </div>
  );
};

export default Configuration;
