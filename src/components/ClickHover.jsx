import withCounter from "./withCounter";

function ClickCount({ count, increment }) {
  return (
    <div className="text-center my-4">
      <button onMouseOver={increment} className="bg-green-400 rounded py-4 px-8">Hover me</button>
      <p>Count: {count}</p>
    </div>
  );
}

export default withCounter(ClickCount);
