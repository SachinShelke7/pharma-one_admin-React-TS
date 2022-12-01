import Card from "../global/Card";

type Props = {};

const index = (props: Props) => {
  return (
    <div className="flex-1">
      {/* first */}
      <div>
        <h3>Dashboard</h3>
        <p>A quick data overview of the inventory</p>
      </div>
      {/* second */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 pr-5">
        <Card
          icon="test"
          heading="Good"
          detail="lorem ipsum"
          button="Report"
          color="red"
        />
        <Card
          icon="test"
          heading="Good"
          detail="lorem ipsum"
          button="Report"
          color="green"
        />
        <Card
          icon="test"
          heading="Good"
          detail="lorem ipsum"
          button="Report"
          color="blue"
        />
        <Card
          icon="test"
          heading="Good"
          detail="lorem ipsum"
          button="Report"
          color="#1d1f45"
        />
      </div>
      {/* third */}
    </div>
  );
};

export default index;
