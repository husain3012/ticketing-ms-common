import { FieldValidationError } from 'express-validator';
import { CustomError } from './custom-error';
export declare class RequestValidationError extends CustomError {
    errors: FieldValidationError[];
    statusCode: number;
    constructor(errors: FieldValidationError[]);
    serializeErrors(): {
        message: any;
        field: string;
    }[];
}
