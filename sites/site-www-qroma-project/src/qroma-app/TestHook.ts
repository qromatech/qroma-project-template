// import { useEffect, useState } from "react";


// const useInterval = (callback, delay: number) => {

//   useEffect(() => {
//     const id = setInterval(() => callback(), delay);
//     return () => clearInterval(id);
//   }, [callback, delay]);
// }


// export const useTestHook = ({onIntervalCallback}) => {
//   const [counter, setCounter] = useState(0);

//   console.log("CREATING TEST HOOK");

//   useInterval(() => {
//     console.log("SHOWING TEST HOOK DATA: " + counter);
//     setCounter(counter + 1);
//     onIntervalCallback();
//   }, 1000);
// }