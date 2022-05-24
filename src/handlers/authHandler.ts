import 'source-map-support/register';
import 'reflect-metadata';
import {AuthController} from '../controller/authController';

export async function authenticate(event: any, context: any, callback: any): Promise<any> {
    const authController = new AuthController();
    console.log(event);
    console.log(context);
    console.log(callback);
    const response = await authController.authenticate(event.queryStringParameters.login,event.queryStringParameters.password);
    return response;
}
