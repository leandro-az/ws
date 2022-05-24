import { Logger } from './logger';
import { EnumUtil } from './enums.util';

function tryJSONStringify(data: any) {
    try {
        return JSON.stringify(data);
    } catch (error) {
        return '[CIRCULAR JSON]';
    }
}

export namespace LogDecorator {
    export function Log(logParams = true) {
        return (target: object, propertyName: string, propertyDesciptor: PropertyDescriptor): PropertyDescriptor => {
            const method = propertyDesciptor.value;
            propertyDesciptor.value = function (...args: any[]) {
                let params = '';
                if (logParams) {
                    params = tryJSONStringify(args);
                }
                Logger.log(EnumUtil.LogLevel.INFO, `...# @${target.constructor.name}/${propertyName}(${params})`);

                return method.apply(this, args);
            };
            return propertyDesciptor;
        };
    }
    export function LogAsync(logParams = true) {
        return (target: object, propertyName: string, propertyDesciptor: PropertyDescriptor): PropertyDescriptor => {
            const method = propertyDesciptor.value;
            propertyDesciptor.value = async function (...args: any[]) {
                let params = '';
                if (logParams) {
                    params = tryJSONStringify(args);
                }
                Logger.log(EnumUtil.LogLevel.INFO, `...# @${target.constructor.name}/${propertyName}(${params})`);

                return await method.apply(this, args);
            };
            return propertyDesciptor;
        };
    }
}
