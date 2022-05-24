import {ConfigRepository} from '../repository/configRepository';
import {ConfigModel} from '../model/configModel';
import {Service} from 'typedi';

@Service()
export class ConfigService{
    constructor(private configRepository: ConfigRepository){
    }

    public async findAll(): Promise<ConfigModel[]> {
        const result: ConfigModel[] = await this.configRepository.findAll();
        return result;
    }
}
