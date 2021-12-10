import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const NewPass = () => {
    const navigate = useNavigate();
const [code, setCode] = useState("");
  const [newPass, setNewPass] = useState("");
  const [message, setMessage] = useState("");

    const NewPassword = async () => {
        const pass = await axios.put(
          `${process.env.REACT_APP_BASE_URL}/users/NewPass`,
          { resetLink: code, newPassword: newPass }
        );
        if (result.status == 200) {
            //pass
            navigate(`/Login`);
          } else {
            setMessage(result.data);
          }
        };

        return (
            <div>
              <input
                type="text"
                placeholder="code"
                onChange={(e) => {
                   setCode(e.target.value);
                }}
              />
              <input
                type="password"
                placeholder="newPass"
                onChange={(e) => {
                    setNewPass(e.target.value);
                }}
              />
              <button onClick={NewPassword}> send email </button>
              {message}
            </div>
          );
        };
    



export default NewPass;