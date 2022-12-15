import React,{ useState } from "react";
import Login from "../components/Login/Login";
import Loginv2 from "../components/Login/Loginv2";


const LogIn = () => {

    const [isCode, setIsCode] = useState(true);

    const ChangeScreen = () => {
        setIsCode(true);
    }

    

    return <div>
        { isCode? <Loginv2/>: <Login ChangeScreen = {ChangeScreen}/>}
    </div>
};

export default LogIn;