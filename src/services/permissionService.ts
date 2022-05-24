import {PermissionRepository} from '../repository/permissionRepository';
import {PermissionModel} from '../model/permissionModel';
import {Service} from 'typedi';

@Service()
export class PermissionService{
    constructor(private permissionRepository: PermissionRepository){
    }

    public async findAll(): Promise<PermissionModel[]> {
        const result: PermissionModel[] = await this.permissionRepository.findAll();
        return result;
    }
    public async createOne(description: string): Promise<boolean> {
        const permission: PermissionModel = {description,create_on: new Date(),modifier_on: new Date()};
        const result: boolean = await this.permissionRepository.createOne(permission);
        return result;
    }
    public async deleteOne(id: number): Promise<boolean> {
        const qry={where: {id}};
        const permission: PermissionModel | undefined = await this.permissionRepository.findOne(qry);
        if (permission) {
            return await this.permissionRepository.deleteOne(permission);
        } else {
            return false;
        }
    }
    public async updateOne(id: number,description: string): Promise<boolean> {
        const qry={where: {id}};
        const permission: PermissionModel | undefined = await this.permissionRepository.findOne(qry);
        if (permission) {
            permission.description=description;
            permission.modifier_on=new Date();
            return await this.permissionRepository.updateOne(permission);
        } else {
            return false;
        }
    }
}
