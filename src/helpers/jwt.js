import jwt_decode from 'jwt-decode';

export const getJWT = () => {
    return localStorage.getItem('jwt');
}

export const getCarreras = () => {
    var token = localStorage.getItem('jwt');
    var decoded = jwt_decode(token);
    var carreras = decoded['carreras_label'];
    return carreras;
}