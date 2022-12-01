type Props = {
  icon: any;
  heading: any;
  detail: any;
  button: any;
  color: any;
};

const Card = ({ icon, heading, detail, button, color }: Props) => {
  const theme = color;
  return (
    <div className={`border-2`} style={{ borderColor: `${theme}` }}>
      <p> {icon}</p>
      <p> {heading}</p>
      <p>{detail}</p>
      <button className="w-full" style={{ backgroundColor: `${theme}` }}>
        {button}
      </button>
    </div>
  );
};

export default Card;
