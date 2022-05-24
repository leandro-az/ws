import {UserRepository} from '../repository/userRepository';
import {UserModel} from '../model/userModel';
import { createCipheriv } from 'crypto';
import {Service} from 'typedi';

@Service()
export class UserService{
    private authKey = process.env.authentication_key!;
    private authSalt = Buffer.from(process.env.authentication_salt!, 'base64');

    constructor(private userRepository: UserRepository){
    }

    private encryptPassword(password: string): string {
        const cipher = createCipheriv('DES-CBC', this.authKey, this.authSalt).setAutoPadding(true);
        return cipher.update(password, 'utf8', 'base64') + cipher.final('base64');
    }

    public async findAll(): Promise<UserModel[]> {
        const result: UserModel[] = await this.userRepository.findAll();
        return result;
    }
    public async createOne(login: string, password: string): Promise<boolean> {
        const passwordCrypto= this.encryptPassword(password);
        const user: UserModel = {login,password:passwordCrypto,create_on: new Date(),modifier_on: new Date()};
        const result: boolean = await this.userRepository.createOne(user);
        return result;
    }
    public async deleteOne(login: string): Promise<boolean> {
        const qry={where: {login}};
        const user: UserModel | undefined = await this.userRepository.findOne(qry);
        if (user) {
            return await this.userRepository.deleteOne(user);
        } else {
            return false;
        }
    }
    public async updateOne(login: string, password: string): Promise<boolean> {
        const qry={where: {login}};
        const passwordCrypto= this.encryptPassword(password);
        const user: UserModel | undefined = await this.userRepository.findOne(qry);
        if (user) {
            user.password=passwordCrypto;
            user.modifier_on=new Date();
            return await this.userRepository.updateOne(user);
        } else {
            return false;
        }
    }


}
