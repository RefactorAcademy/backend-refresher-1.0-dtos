import { ContentDto } from "./content.dto";
import { DtoBase } from "./dtoBase";

export class OptionDto extends DtoBase {

    title: string;
    body:string;
    content?: ContentDto;
}