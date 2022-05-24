import { EnumUtil } from './enums.util';
import moment from 'moment';

export namespace Logger {
    export function log(
        logLevel: EnumUtil.LogLevel,
        logMessage: string, logErrorStack?: Error): void {
        let logStructure: any;
        const lodDateTime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');

        if (logLevel === EnumUtil.LogLevel.INFO) {
            logStructure = {
                DATE: lodDateTime,
                LEVEL: logLevel,
                MESSAGE: logMessage
            };
        } else {
            logStructure = {
                'DATE': lodDateTime,
                'LEVEL': logLevel,
                'MESSAGE': logMessage,
                'STACK TRACE': logErrorStack === undefined ? '' : logErrorStack.stack
            };
        }

        console.log(JSON.stringify(logStructure));
    }
}
