import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {  Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { saveProfile } from "./redux/actions/authActions";
function App() {
  const authState = useSelector((state) => state.authState);
  
  const dispatch = useDispatch();
 

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return; 
    dispatch(saveProfile(token));  
    
  }, [authState.isLogedIn, dispatch]);


  return (
    <div> 
        <Routes>
          <Route path="/login" element={authState.isLogedIn ? <Navigate to="/" /> : <Login />} />
          <Route path="/signup" element={authState.isLogedIn ? <Navigate to="/" /> : <SignUp />} />
        </Routes>   
    </div>
  );
}

export default App;
