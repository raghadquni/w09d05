const initialState = {
    role: "",
    token: ""
  };
  
  const signIn = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case "LOGIN":
        const { role, token } = payload;
        localStorage.setItem("token", token);
        localStorage.setItem("role", role);
        return { role, token };
  
      case "LOGOUT":
        localStorage.clear();
        return payload
  
      default:
        return state;
    }
  };
  
  export default signIn;
  
  export const logIn = (data) => {
    return {
      type: "LOGIN",
      payload: data,
    };
  };
  
  export const logout = (data) => {
    return { 
        type: "LOGOUT", 
        payload: {} 
    };
  };