import { Link } from "react-router-dom";
type Props = {
  icon: any;
  heading: any;
  detail: any;
  button: any;
  color: any;
  bg: any;
};

const Card = ({ icon, heading, detail, button, color, bg }: Props) => {
  const theme = color;
  return (
    <div
      className="border rounded-[4px] select-none flex flex-col"
      style={{ borderColor: `${theme}` }}
    >
      <div className="flex-1">
        <div className="flex w-full justify-center py-[19px]">
          <img src={icon} alt="heading" />
        </div>
        <p className="text-center font-bold text-lg">{heading}</p>
        <p className="text-center text-sm pt-[8px] pb-[14px]">{detail}</p>
      </div>
      <div style={{ borderTop: `1px solid ${theme}` }}>
        <Link to={detail.toLowerCase().replace(/\s/g, "")}>
          <button
            className="w-full text-sm py-1"
            style={{
              backgroundColor: `${bg}`,
            }}
          >
            {button}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
