import {UserController} from '../controller/userController';
import 'source-map-support/register';
import 'reflect-metadata';
import {Container} from 'typedi';

let userController: UserController|undefined;

export async function findAll(event: any, context: any, callback: any): Promise<any> {
    console.log(event);
    console.log(context);
    console.log(callback);
    if(!userController){
        userController= Container.get(UserController);
    }

    const response = await userController.findAll();
    return response;
}

export async function createOne(event: any, context: any, callback: any): Promise<any> {
    console.log(event);
    console.log(context);
    console.log(callback);
    if(!userController){
        userController= Container.get(UserController);
    }

    const response = await userController.createOne(event.queryStringParameters.login,event.queryStringParameters.password);
    return response;
}

export async function deleteOne(event: any, context: any, callback: any): Promise<any> {
    console.log(event);
    console.log(context);
    console.log(callback);
    if(!userController){
        userController= Container.get(UserController);
    }

    const response = await userController.deleteOne(event.queryStringParameters.login);
    return response;
}

export async function updateOne(event: any, context: any, callback: any): Promise<any> {
    console.log(event);
    console.log(context);
    console.log(callback);
    if(!userController){
        userController= Container.get(UserController);
    }

    const response = await userController.updateOne(event.queryStringParameters.login,event.queryStringParameters.password);
    return response;
}
