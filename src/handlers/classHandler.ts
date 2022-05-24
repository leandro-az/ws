import {ClassController} from '../controller/classController';
import 'source-map-support/register';
import 'reflect-metadata';
import {Container} from 'typedi';
import {validateToken} from '../utils/auth.util';

let classController: ClassController|undefined;

export async function findAll(event: any, context: any, callback: any): Promise<any> {
    console.log(event);
    console.log(context);
    console.log(callback);
    validateToken(event);
    if(!classController){
        classController= Container.get(ClassController);
    }
    const response = await classController.findAll();
    return response;
}
