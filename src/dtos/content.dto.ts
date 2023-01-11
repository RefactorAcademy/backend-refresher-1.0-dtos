import { ContentType } from "../enums/contentType.enum";
import { DtoBase } from "./dtoBase";
import { OptionDto } from "./option.dto";
import { UserDto } from "./user.dto";

export class ContentDto extends DtoBase {

    
    title?: string;
    type?: ContentType;   /// post and poll only
    body?: string;
    imageUrls?: string;
    videoUrl?: string;
    users?: UserDto[];
    options?: OptionDto[]

}