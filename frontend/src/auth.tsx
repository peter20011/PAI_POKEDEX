import { NavigateFunction } from "react-router-dom";


// const fetchUserUrl = `${import.meta.env.REACT_APP_BACKEND_URL}/app/Home`;
const loginUrl=`http://localhost:8080/auth/login`;
const logoutUrl=`http://localhost:8080/auth/logout`;
interface UserState {
    username: string;
    sessionStart: Date;
    role: Role;
}

enum Role {
    ADMIN,
    USER
}

interface User {
    username: string;
    role: Role;
}


export class InvalidSessionError extends Error {
    constructor() {
        super('Invalid session');
    }
}

export const removeSesionData = () => {
    sessionStorage.removeItem('userToken');
    sessionStorage.removeItem('USERSTATE');
};

export const logout = async () => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Authorization': "Bearer " + sessionStorage.getItem("userToken"),
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true'
        }
    };
    try {
        const response = await fetch(logoutUrl, requestOptions)
        if (response.ok) {
            removeSesionData();
            
            document.location.href = '/login';
        }
    } catch (err) {
        console.log("conn error");
    }
};


export const validateUserState = (userState: UserState): userState is UserState => {
    if (typeof userState !== 'object') return false;
    if (typeof userState.username !== 'string') return false;
    if (typeof userState.sessionStart !== 'string') return false;
    if (typeof userState.role !== 'number') return false;

    const date = new Date(userState.sessionStart);
    if (isNaN(date.getTime())) return false;

    userState.sessionStart = date;
    return true;
};

export const getUserstate = (): UserState | null => {
    const rawSession = sessionStorage.getItem('USERSTATE');
    if (rawSession === null) return null;

    try {
        const userState = JSON.parse(rawSession);
        if (!validateUserState(userState)) return null;

        return userState;
    } catch (err) {
        removeSesionData();
        return null;
    }
};

export const setUserState = (username: string, role: Role): void => {
    const userState: UserState = {
        username: username,
        sessionStart: new Date(),
        role,
    };

    sessionStorage.setItem('USERSTATE', JSON.stringify(userState));
};


export const isLoggedIn = (): boolean => {
    const userState = getUserstate();
    if (userState === null) return false;

    const now = new Date();
    const diff = now.getTime() - userState.sessionStart.getTime();

    if (diff > 1000 * 60 * 120) {
        removeSesionData();
        return false;
    }

    return true;
};

export const isAdmin = (): boolean => {
    if (!isLoggedIn()) return false;

    const userState = getUserstate();
    if (userState === null) return false;

    return userState.role === Role.ADMIN;
};

export const login = async (email: string, password: string, navigate: NavigateFunction): Promise<string | void> => {

    const body = {
        email: email,
        password: password
    };
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true'
        },
        body: JSON.stringify(body),
    };

    try {
        const response = await fetch(loginUrl, requestOptions)
            .then((response) => response.json())
            .then((body) => {
                console.log(body);
                sessionStorage.setItem("userToken", body.token);
                navigate("/app/Home");
            });

    } catch (err) {
            alert('Wrong login details. Please try again.');
        
    }
};

export const validateUser = (user: User): user is User => {
    if (typeof user !== 'object') return false;
    if (typeof user.username !== 'string') return false;
    if (typeof user.role !== 'string') return false;

    switch (user.role) {
        case Role[Role['USER']] as unknown as Role: user.role = Role.USER; break;
        case Role[Role['ADMIN']] as unknown as Role: user.role = Role.ADMIN; break;
        default: return false;
    }


    return true;
};

export const fetchUser = async (): Promise<User | null> => {
    const requestOptions = {
        method: 'GET',
    };

    try {
        const resp = await fetch(/*fetchUserUrl*/ "/app/Home", requestOptions);
        if (resp.status !== 200) return null;

        const user = await resp.json();
        if (!validateUser(user)) return null;

        return user;
    } catch (err) { }

    return null;
};


export const updateUserState = async (): Promise<void> => {
    const user = await fetchUser();
    if (user === null) return removeSesionData();

    setUserState(user.username, user.role);
};