import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { SAVE_PROFILE } from "./redux/actions/authActions";
function App() {
  const authState = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch({
        type: SAVE_PROFILE,
        payload: { user },
      });
    }
  }
  , [dispatch]);


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
