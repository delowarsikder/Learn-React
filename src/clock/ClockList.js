import Clock from "./Clock";

function ClockList({ quantities = [1] }) {
  return (
    <div>
      {quantities.map(() => (
        <Clock key={Math.random()} />
      ))}
    </div>
  );
}

export default ClockList;
