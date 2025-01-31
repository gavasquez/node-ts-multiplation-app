
export interface CreateTableUseCase {
    execute: (options: CreateTableOptions) => string,
}


export interface CreateTableOptions {
    base: number,
    limit?: number,
}



export class CreateTable implements CreateTableUseCase {
    constructor(
        /*  
         DI - Dependency injection
         */
    ) { }

    execute({ base, limit = 10 }: CreateTableOptions) {
        let outputMessage: string = '';
        for (let index = 1; index <= limit; index++) {
            outputMessage += `${base} X ${index} = ${base * index}\n`;
        }
        return outputMessage;
    }
}