import {DisciplineController} from '../controller/disciplineController';
import 'source-map-support/register';
import 'reflect-metadata';
import {Container} from 'typedi';

let disciplineController: DisciplineController|undefined;

export async function findAll(event: any, context: any, callback: any): Promise<any> {
    console.log(event);
    console.log(context);
    console.log(callback);
    if(!disciplineController){
        disciplineController= Container.get(DisciplineController);
    }
    const response = await disciplineController.findAll();
    return response;
}
