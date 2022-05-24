import {EvaluationController} from '../controller/evaluationController';
import 'source-map-support/register';
import 'reflect-metadata';
import {Container} from 'typedi';

let evaluationController: EvaluationController|undefined;

export async function findAll(event: any, context: any, callback: any): Promise<any> {
    console.log(event);
    console.log(context);
    console.log(callback);
    if(!evaluationController){
        evaluationController= Container.get(EvaluationController);
    }
    const response = await evaluationController.findAll();
    return response;
}
