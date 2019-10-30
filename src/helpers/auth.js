import { getJWT } from './jwt';

export const isAuthenticated = () => {
    const jwt = getJWT();
    return jwt !== null & jwt !== undefined;
}
