import fs from "fs";

export interface SaveFileUseCase {
    execute: (options: Options) => boolean,
}

export interface Options {
    fileContent: string,
    fileDestination: string,
    fileName: string,
}

export class SaveFile implements SaveFileUseCase {
    constructor(
        /*
         * StorageRepository 
         */
    ) { }

    execute({ fileContent, fileDestination, fileName }: Options) {
        try {
            //* Creacion del path
            fs.mkdirSync(fileDestination, { recursive: true });
            //* Creacion del archivo
            fs.writeFileSync(`${fileDestination}/${fileName}.txt`, fileContent);
            // console.log('File created');
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}