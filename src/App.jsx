import {useState} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
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

            <Route path="/login" element={<Login1 setAuthState={setAuthState} setUser={setUser}/>} />
          
            <Route element={<PrivateRoute isAuth={authState} />} >             
              <Route path='/dashboard/booking-types' element={<Home user={user} setAuthState={setAuthState} setUser={setUser}/>} /> 
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    
    
 
  );
}

export default App;