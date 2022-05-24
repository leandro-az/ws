import {UserRepository} from '../repository/userRepository';
import {UserModel} from '../model/userModel';
import {encryptPassword,generateToken} from '../utils/auth.util';


export class AuthService {
    private userRepository: UserRepository;

    constructor(){
        this.userRepository = new UserRepository();
    }

    public async authenticate(login: string, password: string): Promise<boolean> {

        const qry ={
            login
        };

        const user: UserModel|undefined = await this.userRepository.findOne(qry);

        if (!user) {
            throw new Error('Login inválido!');
        }
        const passwordCrypto= encryptPassword(password);

        if (passwordCrypto !== user.password) {
            throw new Error('Senha Inválida');
        }

        return true;

    }

    public async createToken(username: string): Promise<string> {
        return generateToken(username);
    }

}
