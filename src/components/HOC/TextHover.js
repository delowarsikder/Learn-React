import withCounter from "./withCounter";

const TextHover = (props) => {
  const { count, incrementCount } = props;
  
  return (
    <h3 onMouseOver={incrementCount}> this text hover {count} times</h3>
  );
}

export default withCounter(TextHover);


