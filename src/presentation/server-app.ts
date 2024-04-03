import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunnOptions {
    base: number,
    limit: number,
    showTable: boolean,
    fileName: string,
    fileDestination: string,
}


export class ServerApp {

    static run({ base, limit, showTable, fileName, fileDestination }: RunnOptions) {
        const table = new CreateTable().execute({ base, limit });
        const wasSaved = new SaveFile()
            .execute({ fileContent: table,  fileName: fileName, fileDestination: fileDestination });
        if (showTable) console.log(table)
        wasSaved ? console.log('File created') : console.log('File not created');

    }
}