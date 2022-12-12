import React from "react";

type Props = {
  heading: string;
  name: string;
  name2: string;
  id: string;
  name3: string;
};

const Card1 = ({ heading, name, name2, id, name3 }: Props) => {
  return (
    <div className="border w-1/2">
      <h1 className="w-full border-b py-2 px-4">{heading}</h1>
      <div className="p-4 flex space-x-5 pb-5">
        <div>
          <h2 className="font-bold">{name}</h2>
          <p className="text-xs">{name2}</p>
        </div>
        <div>
          <h2 className="font-bold">{id}</h2>
          <p className="text-xs">{name3}</p>
        </div>
      </div>
    </div>
  );
};

export default Card1;
