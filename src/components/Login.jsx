import {useEffect,useState} from "react";
import PropTypes from "prop-types";
import { useNavigate } from 'react-router-dom';

function Login({ setAuthState, setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked,setChecked] = useState(false)
  useEffect(() => {
    document.title = 'Login';
    return () => {
      document.title = 'TidyCal';
    };
  }, []); 

  const navigate = useNavigate();
  const handleLogin = () => {
    setUser(email);
    setAuthState(true);
    navigate('/dashboard/booking-types');

  };

  return (
    
      <div className="container max-w-[480px]">
        <div className="row justify-center px-3">
          <div className="flex justify-center w-100 mt-6 mb-6 lg:mb-12 md:mb-12 xl:mb:12 font-light h5">
            <a className="h-[30px]">
              <img
                height="30px"
                width="110px"
                className="tc-logo ms-0 inline-block"
                src={`https://assets.tidycal.com/img/logo-black.svg`}
                alt="Tidycal"
              />
            </a>
          </div>
          <form onSubmit={handleLogin} className="rounded-md bg-white border border-[#dee2e6] ">
            <div className="p-4 border-b">
                <h1 className="text-[calc(1.3rem+.6vw)] leading-[1.2] text-[#212529] font-light mb-0 text-center ">Login</h1>
            </div>
           
            <div className="p-4 lg:p-6 md:p-6 xl-p-6 ">
              <div className="mb-6">
                <label className="inline-block font-bold text-gray-700 mb-2">Your email:</label>
                <input
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border px-3 py-1.5 border-[#ced4da] rounded-md text-[#212529] focus:border-[#4abbf4]-500 transition-all duration-300"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="inline-block font-bold text-gray-700 mb-2">Your password: </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-1.5 border border-[#ced4da] rounded-md focus:border-[#4abbf4]-500 transition-all duration-300 "
                  required
                />
              </div>
              <div className="mb-6">
                <div className="form-check">
                  <input type="checkbox" className="rounded cursor-pointer outline-0 border -ml-6 height-4 " id="remember"
                  onChange={()=>setChecked(!isChecked)}
                  checked={isChecked}
                   />
                  <label
                    className="ml-2 font-xl text-gray-700"
                    htmlFor="remember"
                  >
                    Remember me
                  </label>
                </div>

              </div>
              {/* <div className="mt- flex flex-col gap-y-4 mb-3"> */}
                <input
                  type="submit"
                  value={"Login →"}
                  
                  className="w-full cursor-pointer bg-[#1569ef] hover:bg-[#1154bf] rounded-md py-1.5 px-3 mb-6 text-white text-base border border-[#1569ef] font-normal"
                />
                  
                
                <div className="flex align-center mb-6">
                    <div className="relative h-[1px] w-full bg-[#dee2e6]">
                        <span className="absolute top-[-4px] left-1/2 pt-1 mb-1 transform -translate-x-1/2 -translate-y-1/2 bg-white text-gray-400 px-4"><i>Or:</i></span>
                    </div>

                </div>
                <button className="w-full border border-[#1569ef] rounded-md py-1.5 px-3 mb-6 flex justify-between items-center">
                  <svg
                    width="23"
                    height="23"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.26644 9.76453C6.19903 6.93863 8.85469 4.90909 12.0002 4.90909C13.6912 4.90909 15.2184 5.50909 16.4184 6.49091L19.9093 3C17.7821 1.14545 15.0548 0 12.0002 0C7.27031 0 3.19799 2.6983 1.24023 6.65002L5.26644 9.76453Z"
                      fill="#EA4335"
                    />
                    <path
                      d="M16.0406 18.0142C14.9508 18.718 13.5659 19.0926 11.9998 19.0926C8.86633 19.0926 6.21896 17.0785 5.27682 14.2695L1.2373 17.3366C3.19263 21.2953 7.26484 24.0017 11.9998 24.0017C14.9327 24.0017 17.7352 22.959 19.834 21.0012L16.0406 18.0142Z"
                      fill="#34A853"
                    />
                    <path
                      d="M19.8342 20.9978C22.0292 18.9503 23.4545 15.9019 23.4545 11.9982C23.4545 11.2891 23.3455 10.5255 23.1818 9.81641H12V14.4528H18.4364C18.1188 16.0119 17.2663 17.2194 16.0407 18.0108L19.8342 20.9978Z"
                      fill="#4A90E2"
                    />
                    <path
                      d="M5.27698 14.2663C5.03833 13.5547 4.90909 12.7922 4.90909 11.9984C4.90909 11.2167 5.03444 10.4652 5.2662 9.76294L1.23999 6.64844C0.436587 8.25884 0 10.0738 0 11.9984C0 13.918 0.444781 15.7286 1.23746 17.3334L5.27698 14.2663Z"
                      fill="#FBBC05"
                    />
                  </svg>
                  <span className=" text-[#212529] text-[16px] relative  ">Login with Google </span>
                  <span></span>
                </button>
                <div className="flex justify-between flex-wrap mb-2">
               
                  <a className="my-2 cursor-pointer text-[14px] leading-5 hover:text-[#1154bf]">Forgot your password?</a>
            
                <a
                  
                  className="cursor-pointer my-2 text-[14px] leading-[1.2] ml-2 hover:text-[#1154bf]"
                >
                  Not registered?
                </a>
                </div>
              </div>
             {/* </div> */}
          </form>
        </div>
      </div>
   
  );
}
Login.propTypes = {
  setUser: PropTypes.func.isRequired,
  setAuthState: PropTypes.func.isRequired,
};
export default Login;
