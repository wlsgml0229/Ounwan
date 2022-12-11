import useIntevalValue from "react";
import RunCircleOutlinedIcon from "@mui/icons-material/RunCircleOutlined";
const Timer = ({ userId, userNm, time, status }) => {
  // const currentTime = useIntevalValue(() => new Date() - new Date(startTime));

  return (
    <div className="user-timer">
      <div className="icon-wrap">
        {status && (
          <RunCircleOutlinedIcon className="run-icon" color="warning" />
        )}
        {!status && <RunCircleOutlinedIcon className="run-icon" />}
      </div>
      <div className="time">{time}</div>
      <div className="user-name">{userNm}</div>
    </div>
  );
};

export default Timer;
