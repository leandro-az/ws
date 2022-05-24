import {PersonController} from '../controller/personController';
import 'source-map-support/register';
import 'reflect-metadata';
import {Container} from 'typedi';

let personController: PersonController|undefined;

export async function findAll(event: any, context: any, callback: any): Promise<any> {
    console.log(event);
    console.log(context);
    console.log(callback);
    if(!personController){
        personController= Container.get(PersonController);
    }

    const response = await personController.findAll();
    return response;
}

export async function createOne(event: any, context: any, callback: any): Promise<any> {
    console.log(event);
    console.log(context);
    console.log(callback);
    if(!personController){
        personController= Container.get(PersonController);
    }

    const response = await personController.createOne(event.queryStringParameters.name,
        event.queryStringParameters.last_name,
        event.queryStringParameters.under_age,
        event.queryStringParameters.telfone,
        event.queryStringParameters.email,
        event.queryStringParameters.email_answerable,
        event.queryStringParameters.telfone_answerable);
    return response;
}

export async function deleteOne(event: any, context: any, callback: any): Promise<any> {
    console.log(event);
    console.log(context);
    console.log(callback);
    if(!personController){
        personController= Container.get(PersonController);
    }

    const response = await personController.deleteOne(event.queryStringParameters.id);
    return response;
}

export async function updateOne(event: any, context: any, callback: any): Promise<any> {
    console.log(event);
    console.log(context);
    console.log(callback);
    if(!personController){
        personController= Container.get(PersonController);
    }

    const response = await personController.updateOne(event.queryStringParameters.id,
        event.queryStringParameters.name,
        event.queryStringParameters.last_name,
        event.queryStringParameters.under_age,
        event.queryStringParameters.telfone,
        event.queryStringParameters.email,
        event.queryStringParameters.email_answerable,
        event.queryStringParameters.telfone_answerable);
    return response;
}
