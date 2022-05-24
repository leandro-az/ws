import {HistoricalAuditRepository} from '../repository/historicalAuditRepository';
import {HistoricalAuditModel} from '../model/historicalAuditModel';
import {Service} from 'typedi';

@Service()
export class HistoricalAuditService{
    constructor(private historicalAuditRepository: HistoricalAuditRepository){
    }

    public async findAll(): Promise<HistoricalAuditModel[]> {
        const result: HistoricalAuditModel[] = await this.historicalAuditRepository.findAll();
        return result;
    }
    public async createOne(function_name: string, description: string, input_data: string, output_data: string): Promise<boolean> {
        const historicalAudit: HistoricalAuditModel = {function_name,description,input_data,output_data,create_on: new Date(),modifier_on: new Date()};
        const result: boolean = await this.historicalAuditRepository.createOne(historicalAudit);
        return result;
    }
    public async deleteOne(id: number): Promise<boolean> {
        const qry={where: {id}};
        const historicalAudit: HistoricalAuditModel | undefined = await this.historicalAuditRepository.findOne(qry);
        if (historicalAudit) {
            return await this.historicalAuditRepository.deleteOne(historicalAudit);
        } else {
            return false;
        }
    }
    public async updateOne(id: number,function_name: string, description: string, input_data: string, output_data: string): Promise<boolean> {
        const qry={where: {id}};
        const historicalAudit: HistoricalAuditModel | undefined = await this.historicalAuditRepository.findOne(qry);
        if (historicalAudit) {
            historicalAudit.function_name=function_name;
            historicalAudit.description=description;
            historicalAudit.input_data=input_data;
            historicalAudit.output_data=output_data;
            historicalAudit.modifier_on=new Date();
            return await this.historicalAuditRepository.updateOne(historicalAudit);
        } else {
            return false;
        }
    }
}
