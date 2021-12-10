import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillGoogleSquare } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { logIn  } from "../../reducers/login";
// import Posts from "../Posts";




const Login = () => {
    const navigate = useNavigate();
    const [emailOrUser, setEmailOrUser] = useState(""); 
    const [password, setPassword] = useState("");

    const state = useSelector((state) => {
        return state
      });
      const dispatch = useDispatch();

      useEffect(() => {
        const token = localStorage.getItem("token");
        // setToken(token);
      }, []);

    const Posts = () => {
        navigate("/Posts");
  }
  
    const log = async () => {
        const users = await axios.post(`${process.env.REACT_APP_BASE_URL}/users/login`, {
          emailOrUser,
          password,
        });

        const data = {
            user: users.data.result,
            token: users.data.token,
        }
        console.log(data);
        dispatch(logIn(data));
        
      
    }

    const google = () => {
        window.open("http://localhost:5000/auth/google", "_self");
      };

    const facebook = () => {
        window.open("http://localhost:5000/auth/facebook", "_self");
      };


    return (
        <>
        {!state.signIn.token ? (
          <div className="login">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={(val) => setEmailOrUser(val.target.value)}
            />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={(val) => setPassword(val.target.value)}
            />
            <button onClick={log , Posts}> Login </button>
            <div>
                <ul>
                <li>
                <AiFillGoogleSquare onClick={google}/>
                </li>
                <li>
                <AiFillFacebook onClick={facebook}/>
                </li>
                </ul>
            </div>
          </div>
        ) : (
          null
        )}
      </>
    )
  }

export default Login;