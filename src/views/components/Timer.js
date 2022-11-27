import useIntevalValue from "react";
const Timer = ({ startTime }) => {
  const currentTime = useIntevalValue(() => new Date() - new Date(startTime));
  return <div>{currentTime}</div>;
};

export default Timer;
