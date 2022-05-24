import {PersonRepository} from '../repository/personRepository';
import {PersonModel} from '../model/personModel';
import {Service} from 'typedi';

@Service()
export class PersonService{
    constructor(private personRepository: PersonRepository){
    }

    public async findAll(): Promise<PersonModel[]> {
        const result: PersonModel[] = await this.personRepository.findAll();
        return result;
    }
    public async createOne(name: string, last_name: string, under_age: boolean,
                           telfone: string, email: string, email_answerable: string, telfone_answerable: string): Promise<boolean> {
        const person: PersonModel = {name,last_name,under_age,telfone,email,email_answerable,telfone_answerable,create_on: new Date(),modifier_on: new Date()};
        const result: boolean = await this.personRepository.createOne(person);
        return result;
    }
    public async deleteOne(id: number): Promise<boolean> {
        const qry={where: {id}};
        const person: PersonModel | undefined = await this.personRepository.findOne(qry);
        if(person) {
            return await this.personRepository.deleteOne(person);
        } else {
            return false;
        }
    }
    public async updateOne(id: number,name: string, last_name: string, under_age: boolean,
                           telfone: string, email: string, email_answerable: string, telfone_answerable: string): Promise<boolean> {
        const qry={where: {id}};
        const person: PersonModel | undefined = await this.personRepository.findOne(qry);
        if (person) {
            person.name = name;
            person.last_name = last_name;
            person.under_age = under_age;
            person.telfone = telfone;
            person.email = email;
            person.email_answerable = email_answerable;
            person.telfone_answerable = telfone_answerable;
            person.modifier_on=new Date();
            return await this.personRepository.updateOne(person);
        } else {
            return false;
        }
    }
}
