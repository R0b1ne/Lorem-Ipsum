import Title from "./Title";
import Description from "./Description";

const Content = (props) => {
  return (
    <section>
      <Title name={props.name} />
      <Description text={props.text} />
    </section>
  );
};

export default Content;
