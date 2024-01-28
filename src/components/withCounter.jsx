import { useState } from "react";

function withCounter(GivenComponent) {
  return function WithCounter(props) {
    const [count, setCount] = useState(0);

    return <GivenComponent count={count} increment={() => setCount((prev) => prev + 1)} {...props} />;
  };
}

export default withCounter;
