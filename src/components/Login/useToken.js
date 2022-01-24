import { useState } from 'react';

export default function useToken() {
  
    //OM session ska dö som kan testa request
    const [token, setToken] = useState();
    

    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken?.token
    };

    //OBS om session ska sparas ta fram detta
    //const [token, setToken] = useState(getToken());

    const saveToken = userToken => {
        sessionStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken.token);
    };

    return {
        setToken: saveToken,
        token
      }

}