import withCounter from "./withCounter";

function ClickCount({ count, increment }) {
  return (
    <div className="text-center">
      <button onClick={increment} className="bg-red-400 rounded py-4 px-8">Click me</button>
      <p>Count: {count}</p>
    </div>
  );
}

export default withCounter(ClickCount);
