import Otp from "./Otp";
import "./Verification.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Verification = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="lgnContainerVer">
        <div className="loginContainerVer">
          <h2>Verify your email</h2>
          <p>enter the 8digit code you have recieved on</p>
          <p>anu***@gmail.com</p>
          <Otp></Otp>
          <button onClick={() => navigate("/login")}>VERIFY</button>
        </div>
      </div>
    </>
  );
};
export default Verification;
