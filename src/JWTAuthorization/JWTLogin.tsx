import React, {
  FormEventHandler,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { useJwt } from "react-jwt";
import { useNavigate } from "react-router-dom";
import "./typeProps";
import { decodeProps, loginProps } from "./typeProps";
type logprops = {
  loginarr: loginProps[];
};
const JWTLogin = (props: logprops) => {
  let emailRef = useRef<HTMLInputElement>(null);
  let passwordRef = useRef<HTMLInputElement>(null);
  const [massage, setMessage] = useState("");
  let [dataToken, setDatatoken] = useState<loginProps>({
    eml: " ",
    pwd: " ",
    token: " ",
  });
  const { decodedToken ,isExpired} = useJwt<decodeProps>(dataToken.token);
  console.log(decodedToken);
  const navigate = useNavigate();

  const login = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.loginarr.map((item) => {
      if (emailRef.current !== null && passwordRef.current !== null) {
        if (
          emailRef.current?.value !== "" &&
          passwordRef.current.value !== ""
        ) {
          if (
            item.eml === emailRef.current.value &&
            item.pwd === passwordRef.current.value
          ) {
            // if(!isExpired){
              dataToken = item;
            alert("Login successfully");
            setMessage(" ");
            // }
            
          }
          if (
            item.eml !== emailRef.current.value &&
            item.pwd !== passwordRef.current.value
          ) {
            setMessage("User not found");
          }
        } else {
          alert("fill all details");
        }
      }
    });
    setDatatoken(dataToken);
    e.currentTarget.reset();
  };
  useEffect(() => {
    if (decodedToken !== null) {
      if (decodedToken.rol == "admin") {
        console.log(isExpired);
       if(!isExpired){
        navigate("/dashboard");
      }
      else{
        setMessage("Token expired");
      }
      }
       if (decodedToken.rol == "user"){
        if(!isExpired){
        alert("User Token is not expired")
        }
        else{
          setMessage("Token expired");
        }
      }
    }
  }, [decodedToken]);
  return (
    <div className="p-4">
      <h3 className="text-center mt-4">Login Account</h3>
      <div className="col-lg-4 col-md-6 col-sm-6 col-xm-8 p-4 m-auto border mt-4 shadow mb-5 bg-body rounded">
        <form onSubmit={login}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              ref={emailRef}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <div className="form-floating">
              <input
                type="password"
                ref={passwordRef}
                className="form-control"
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
      <div className="text-center fs-2 text-danger">{massage}</div>
    </div>
  );
};

export default JWTLogin;
