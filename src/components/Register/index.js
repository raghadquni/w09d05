import React , { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";



const Register = () => {
  const navigate = useNavigate();
  const [userNme, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("61a870ba74e9f1058cb9ebb6");

  
  useEffect(() => {
    // getData();
  }, []);

  const register = async () => {
    try {
      const users = await axios.post(`${process.env.REACT_APP_BASE_URL}/users/signup` , {
      userNme,
      email,
      password,
      role
  })
  console.log(users);
      
} catch (error) {
  console.log(error);

}
} 

const login = () => {
      navigate("/Login");
}

  return (
    <div>
      <h1> Register </h1>
      <input
        type="text"
        name="userNme"
        placeholder="username"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <input
        type="submit"
        value="Register"
        className="btn btn-primary"
        onClick={register}
      />
      <p onClick={login}>Already have an account? Click <Link to="/Login"> HERE </Link></p>
    </div>
  );
};
export default Register;