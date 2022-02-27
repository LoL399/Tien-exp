import { useEffect, useState } from "react";

/**
 * Hook
 *
 */
export function ContentFucntion(props) {
  /**
   * state: value
   * cap nhat bien state cua value: increase
   */
  const [value, increase] = useState(999);
  const [value2, increase1] = useState(0);
  //   const componentDidMount = () => {
  //     console.log("hello func" );
  //   };

  // componentDidMount, componentDidUnMount, componentDidUpdate
  useEffect(() => {
  }, [value]);

  useEffect(()=>{
      increase(props.value)
  }, [props])

  return (
    <div>
      function
      <button onClick={() => increase(value + 1)}>Add</button>
      <div>{value}</div>
    </div>
  );
}
