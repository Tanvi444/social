import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

// const INITIAL_STATE = {
//   user:
//   {
//     "_id": "6300b6a1a5077f76a126e984",
//     "username": "tanvi2",
//     "email": "tanvi2@gmail.com",
//     "profilePicture": "person/3.jpeg",
//     "coverPicture": "",
//     "followers": [],
//     "followings": [],
//     "isAdmin": false,
//     "createdAt": "2022-08-20T10:25:37.868Z",
//     "__v": 0,
//     "desc": "Bonjour",
//     "city": "Ghaziabad",
//     "from": "up",
//     "relationship": 1
//   }
//   ,
//   isFetching: false,
//   error: false,
// };

const INITIAL_STATE = {
  user:JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
    
    useEffect(()=>{
      localStorage.setItem("user", JSON.stringify(state.user))
    },[state.user])
    
    return (
      <AuthContext.Provider
        value={{
          user: state.user,
          isFetching: state.isFetching,
          error: state.error,
          dispatch,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  };