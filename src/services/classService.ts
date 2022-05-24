import {ClassRepository} from '../repository/classRepository';
import {ClassModel} from '../model/classModel';
import {Service} from 'typedi';

@Service()
export class ClassService{

    constructor(private classRepository: ClassRepository){
    }

    public async findAll(): Promise<ClassModel[]> {
        const result: ClassModel[] = await this.classRepository.findAll();
        return result;
    }
}
