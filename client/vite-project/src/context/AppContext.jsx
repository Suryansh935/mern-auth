import { createContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";
export const AppContent = createContext(null);

export const AppContextProvider = ({ children }) => {
  axios.defaults.withCredentials=true;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  console.log("Checking Backend URL:", backendUrl);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
   
  const getAuthState=async()=>{
      try{
        const {data}=await axios.get(backendUrl+'/api/auth/is-auth')
        if(data.success){
          setIsLoggedIn(true)
          getUserData()
        }
      }catch(error){
         toast.error(error.message)
      }
  }
  useEffect(()=>{
    getAuthState();
  },[])
  const getUserData = async () => {
    if (!backendUrl) {
      toast.error("Backend URL not configured");
      return;
    }

    try {
      const { data } = await axios.get(`${backendUrl}/api/user/data`, {
        withCredentials: true, // important if using cookies/JWT
      });

      if (data.success) {
        setUserData(data.userData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to fetch user data"
      );
    }
  };

  const value = {
    backendUrl,
    isLoggedIn,
    setIsLoggedIn,
    userData,
    setUserData,
    getUserData,
  };

  return (
    <AppContent.Provider value={value}>
      {children}
    </AppContent.Provider>
  );
};
