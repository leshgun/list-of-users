

export default class LoginService {

    static check_login ([ login, password ]) {
        if (!login || !password)
            return false
        return true
    }

}
