import { MuiOtpInput } from "mui-one-time-password-input";
import { useState } from "react";
const Otp = () => {
  const [otp, setOtp] = useState("");
  const handleChange = (newValue) => {
    setOtp(newValue);
  };
  return <MuiOtpInput length={8} value={otp} onChange={handleChange} />;
};
export default Otp;
