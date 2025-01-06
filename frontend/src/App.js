import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { saveProfile } from "./redux/actions/authActions";
function App() {
  const authState = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return; 
    dispatch(saveProfile(JSON.parse(token)));  
    
  }, [authState.isLogedIn, dispatch]);


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={authState.isLogedIn ? <Navigate to="/" /> : <Login />} />
          <Route path="/signup" element={authState.isLogedIn ? <Navigate to="/" /> : <SignUp />} />
        </Routes>
      </BrowserRouter>    
    </div>
  );
}

export default App;
