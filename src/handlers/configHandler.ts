import {ConfigController} from '../controller/configController';
import 'source-map-support/register';
import 'reflect-metadata';
import {Container} from 'typedi';

let configController: ConfigController|undefined;

export async function findAll(event: any, context: any, callback: any): Promise<any> {
    console.log(event);
    console.log(context);
    console.log(callback);
    if(!configController){
        configController= Container.get(ConfigController);
    }
    const response = await configController.findAll();
    return response;
}
