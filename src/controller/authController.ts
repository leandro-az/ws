import { AuthService } from '../services/authService';
import {authorize} from '../utils/auth.util';


export class AuthController {

    public async authorize(token: string): Promise<any> {
        let response;
        try {
            const authToken = token;
            if (!authToken) {
                throw new Error('Token não informado!');
            }
            authorize(authToken);
            response = {
                statusCode: 200,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true,
                    'Content-Type': 'application/json'
                },
                isBase64Encoded: false
            };
            console.log('info', '... @AuthController/authorize()');
            return response;
        } catch (error) {
            console.log('erro', '... @AuthController/authorize()', error);
            response = {
                statusCode: 406,
                body: JSON.stringify({erro:'erro ao authorizar usuário'}),
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true,
                    'Content-Type': 'application/json'
                },
                isBase64Encoded: false
            };
            return response;
        }
    }

    public async authenticate(login: string, password: string): Promise<any> {
        let response;
        try {
            const authService: AuthService = new AuthService();
            if (!login) {
                throw new Error('login não informado!');
            }
            if (!password) {
                throw new Error('password não informado!');
            }
            const userResult: any = await authService.authenticate(login, password);
            if (!userResult) {
                throw new Error('Não foi possível autenticar com as credenciais informadas!');
            }
            const token: string = await authService.createToken(login);
            const responseBody = {
                token
            };
            response = {
                statusCode: 200,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(responseBody),
                isBase64Encoded: false
            };
            console.log('info', '... @AuthController/authenticate()');
            return response;
        } catch (error) {
            console.log('erro', '... @AuthController/authenticate()', error);
            response = {
                statusCode: 406,
                body: JSON.stringify({erro:'erro ao autenticar usuário'}),
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true,
                    'Content-Type': 'application/json'
                },
                isBase64Encoded: false
            };
            return response;
        }
    }

}
