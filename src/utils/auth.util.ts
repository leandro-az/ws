import { createCipheriv } from 'crypto';
import * as jwt from 'jsonwebtoken';

const authKey = process.env.authentication_key!;
const authSalt = Buffer.from(process.env.authentication_salt!, 'base64');
const jwtSecret = process.env.jwt_secret!;

export function authorize(token: string): void{
    try {
        jwt.verify(token, jwtSecret);
    } catch (error) {
        throw new Error('Token inválido ou expirado');
    }
}

export function encryptPassword(password: string): string {
    const cipher = createCipheriv('DES-CBC', authKey, authSalt).setAutoPadding(true);
    return cipher.update(password, 'utf8', 'base64') + cipher.final('base64');
}


function getAuthorizationFromEvent(event: any): string {
    return event.request.headers.authorization;
}

export function  validateToken(event: any) {
    const token = getAuthorizationFromEvent(event);
    authorize(token);
}

export function generateToken(username: string){
    return jwt.sign({ username }, jwtSecret, {
        expiresIn: '1h'
    });
}
