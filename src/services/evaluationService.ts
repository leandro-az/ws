import {EvaluationRepository} from '../repository/evaluationRepository';
import {EvaluationModel} from '../model/evaluationModel';
import {Service} from 'typedi';

@Service()
export class EvaluationService{
    constructor(private evaluationRepository: EvaluationRepository){
    }

    public async findAll(): Promise<EvaluationModel[]> {
        const result: EvaluationModel[] = await this.evaluationRepository.findAll();
        return result;
    }
}
