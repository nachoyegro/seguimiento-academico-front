import decode from 'jwt-decode';


/**
 * Devuelve el token guardado en el localStorage
 */
export const getJWT = () => {
    return localStorage.getItem('jwt');
}

export const logIn = token => {
    return localStorage.setItem('jwt', token);
}

/**
 * Saca el token del localStorage
 */
export const removeJWT = () => {
    localStorage.removeItem('jwt');
}

/**
 * 
 */
export const isLoggedIn = () => {
    const token = getJWT();
    return isValid(token);
}

/**
 * Solo chequea que exista y no este expirado
 */
export const isValid = (token) => {
    return token && !isTokenExpired(token)
}

/**
 * 
 * Si la fecha del token es menor a este momento, esta expirado 
 */
export const isTokenExpired = token => {
    const decoded = decode(token);
    return (decoded.exp < Date.now() / 1000);
}