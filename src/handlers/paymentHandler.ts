import {PaymentController} from '../controller/paymentController';
import 'source-map-support/register';
import 'reflect-metadata';
import {Container} from 'typedi';

let paymentController: PaymentController|undefined;

export async function findAll(event: any, context: any, callback: any): Promise<any> {
    console.log(event);
    console.log(context);
    console.log(callback);
    if(!paymentController){
        paymentController= Container.get(PaymentController);
    }

    const response = await paymentController.findAll();
    return response;
}

export async function createOne(event: any, context: any, callback: any): Promise<any> {
    console.log(event);
    console.log(context);
    console.log(callback);
    if(!paymentController){
        paymentController= Container.get(PaymentController);
    }

    const response = await paymentController.createOne(event.queryStringParameters.value,
        event.queryStringParameters.discount,
        event.queryStringParameters.due_date,
        event.queryStringParameters.due_payment,
        event.queryStringParameters.paid);
    return response;
}

export async function deleteOne(event: any, context: any, callback: any): Promise<any> {
    console.log(event);
    console.log(context);
    console.log(callback);
    if(!paymentController){
        paymentController= Container.get(PaymentController);
    }

    const response = await paymentController.deleteOne(event.queryStringParameters.id);
    return response;
}

export async function updateOne(event: any, context: any, callback: any): Promise<any> {
    console.log(event);
    console.log(context);
    console.log(callback);
    if(!paymentController){
        paymentController= Container.get(PaymentController);
    }

    const response = await paymentController.updateOne(event.queryStringParameters.id,
        event.queryStringParameters.value,
        event.queryStringParameters.discount,
        event.queryStringParameters.due_date,
        event.queryStringParameters.due_payment,
        event.queryStringParameters.paid);
    return response;
}
