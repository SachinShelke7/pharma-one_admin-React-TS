import React from "react";

type Props = { array: any };

const Card2 = ({ array }: Props) => {
  return (
    <div>
      <div>
        {array.map((item: any, key: any) => {
          return (
            <div key={key} className="flex space-x-2">
              <h3>{item}</h3>
              <button className="text-sm text-cyan-400"> +Add Sub Page</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card2;
