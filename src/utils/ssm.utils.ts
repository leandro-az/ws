import {SSM} from 'aws-sdk';
import { LogDecorator } from '../utils/log.decorator';
import { Logger } from '../utils/logger';
import { EnumUtil } from '../utils/enums.util';

export class SSMAWS {
    @LogDecorator.LogAsync(true)
    async  getEnvValueFromSSM(pathName: string,WithDecryption=true): Promise<any>{
        console.log('antes region');
        const ssm = new SSM({region:process.env.region!});
        console.log('depois region');
        try {
            console.log('antes resp');
            const resp = await ssm.getParameter(
                {
                    Name:pathName,
                    WithDecryption
                }).promise();
            console.log('depois resp');
            return resp.Parameter?.Value;
        } catch (error) {
            Logger.log(EnumUtil.LogLevel.ERROR, '... @SSMAWS/getEnvValueFromSSM');
            Logger.log(EnumUtil.LogLevel.ERROR,error);
            return '';
        }
    }
}
