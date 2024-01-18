import {useState} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Login1 from './components/Login'
import Home from './components/Home';
import PrivateRoute from "./helpers/privateRoute";

function App() {
  const [authState, setAuthState] =useState(false)
  const [user, setUser] = useState(null);
  console.log(authState)
  return (
      <div className="min-h-[100vh] position-relative w-100 flex flex-col justify-between">
        <BrowserRouter>
         
          <Routes>

            <Route path="/tidycal-clone0/login" element={<Login1 setAuthState={setAuthState} setUser={setUser}/>} />
          
            <Route element={<PrivateRoute isAuth={authState} />} >             
              <Route path='/tidycal-clone0/dashboard/booking-types' element={<Home user={user} setAuthState={setAuthState} setUser={setUser}/>} /> 
            </Route>
            <Route path="/*" element={<Navigate to="/tidycal-clone0/login" />} />
          </Routes>
        </BrowserRouter>
      </div>
    
    
 
  );
}

export default App;