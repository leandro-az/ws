import {PermissionController} from '../controller/permissionController';
import 'source-map-support/register';
import 'reflect-metadata';
import {Container} from 'typedi';

let permissionController: PermissionController|undefined;

export async function findAll(event: any, context: any, callback: any): Promise<any> {
    console.log(event);
    console.log(context);
    console.log(callback);
    if(!permissionController){
        permissionController= Container.get(PermissionController);
    }

    const response = await permissionController.findAll();
    return response;
}

export async function createOne(event: any, context: any, callback: any): Promise<any> {
    console.log(event);
    console.log(context);
    console.log(callback);
    if(!permissionController){
        permissionController= Container.get(PermissionController);
    }

    const response = await permissionController.createOne(event.queryStringParameters.description);
    return response;
}

export async function deleteOne(event: any, context: any, callback: any): Promise<any> {
    console.log(event);
    console.log(context);
    console.log(callback);
    if(!permissionController){
        permissionController= Container.get(PermissionController);
    }

    const response = await permissionController.deleteOne(event.queryStringParameters.id);
    return response;
}

export async function updateOne(event: any, context: any, callback: any): Promise<any> {
    console.log(event);
    console.log(context);
    console.log(callback);
    if(!permissionController){
        permissionController= Container.get(PermissionController);
    }

    const response = await permissionController.updateOne(event.queryStringParameters.id,event.queryStringParameters.description);
    return response;
}
