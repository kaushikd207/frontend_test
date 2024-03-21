import Otp from "./Otp";
import "./Verification.css";
import { useEffect } from "react";

const Verification = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <>
        <div className="lgnContainer">
          <div className="loginContainer">
            <h2>Verify your email</h2>
            <p>enter the 8digit code you have recieved on</p>
            <p>anu***@gmail.com</p>
            <Otp></Otp>

            <button type="submit">VERIFY</button>
          </div>
        </div>
      </>
    </>
  );
};
export default Verification;
