import { createContext, useContext } from "react";
export const UserContext = createContext({
    userId : "",
    role:"",
    setRole:()=>{},
    setUserId:()=>{},
});
export const UserProvider = UserContext.Provider;
export default function useUser (){
    return useContext(UserContext);
}