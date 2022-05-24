import {DisciplineRepository} from '../repository/disciplineRepository';
import {DisciplineModel} from '../model/disciplineModel';
import {Service} from 'typedi';

@Service()
export class DisciplineService{
    constructor(private disciplineRepository: DisciplineRepository){
    }

    public async findAll(): Promise<DisciplineModel[]> {
        const result: DisciplineModel[] = await this.disciplineRepository.findAll();
        return result;
    }
}
