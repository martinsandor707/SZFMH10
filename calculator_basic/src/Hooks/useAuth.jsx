import React, {useState, useEffect, useRef} from "react";
import Keycloak from 'keycloak-js';

const useAuth = () => {

    const isRun = useRef(false);
    const [isLogin, setLogin] = useState(false);

    useEffect(() => {
        if (isRun.current) return;

        isRun.current = true;
        const client = new Keycloak({
            url: "http://127.0.0.1:4000/",
            realm: "react-keycloak",
            clientId: "react-client",
        })

        client.init({onLoad: "login-required"}).then((res) => setLogin(res));
        }, []);

    return isLogin;
};

export default useAuth;