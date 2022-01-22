/**
 * @param login
 * @param password
 * @returns {boolean}
 */
export const useAuthLoginForm = (login, password) => {
    /**
     * @todo Password and login should be md5 hash!!!
     */
    if ( login == 'admin'  && password == '0000' ) {
        return true;
    }
    return false;
}