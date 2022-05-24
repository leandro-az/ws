import {HistoricalAuditController} from '../controller/historicalAuditController';
import 'source-map-support/register';
import 'reflect-metadata';
import {Container} from 'typedi';

let historicalAuditController: HistoricalAuditController|undefined;

export async function findAll(event: any, context: any, callback: any): Promise<any> {
    console.log(event);
    console.log(context);
    console.log(callback);
    if(!historicalAuditController){
        historicalAuditController= Container.get(HistoricalAuditController);
    }
    const response = await historicalAuditController.findAll();
    return response;
}

export async function createOne(event: any, context: any, callback: any): Promise<any> {
    console.log(event);
    console.log(context);
    console.log(callback);
    if(!historicalAuditController){
        historicalAuditController= Container.get(HistoricalAuditController);
    }
    const response = await historicalAuditController.createOne(
        event.queryStringParameters.function_name,
        event.queryStringParameters.description,
        event.queryStringParameters.input_data,
        event.queryStringParameters.output_data);
    return response;
}

export async function deleteOne(event: any, context: any, callback: any): Promise<any> {
    console.log(event);
    console.log(context);
    console.log(callback);
    if(!historicalAuditController){
        historicalAuditController= Container.get(HistoricalAuditController);
    }

    const response = await historicalAuditController.deleteOne(event.queryStringParameters.id);
    return response;
}

export async function updateOne(event: any, context: any, callback: any): Promise<any> {
    console.log(event);
    console.log(context);
    console.log(callback);
    if(!historicalAuditController){
        historicalAuditController= Container.get(HistoricalAuditController);
    }

    const response = await historicalAuditController.updateOne(event.queryStringParameters.id,
        event.queryStringParameters.function_name,
        event.queryStringParameters.description,
        event.queryStringParameters.input_data,
        event.queryStringParameters.output_data);
    return response;
}
