import { getJWT } from './jwt';

export const isAuthenticated = () => {
    const jwt = getJWT();
    return jwt !== undefined;
}
