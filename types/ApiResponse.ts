import {Message} from '@/model/user'

export interface ApiResponseType{
    success: boolean;
    message: string;
    isAcceptingMessage?:boolean;
    messages?: Array<Message>
}

