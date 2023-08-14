import Name from "./Name";
import Text from "./Text";

const Content = (props) => {
  return (
    <>
      <Name name={props.name} />
      <Text text={props.text} />
    </>
  );
};

export default Content;
