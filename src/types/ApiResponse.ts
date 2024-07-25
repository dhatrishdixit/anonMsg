import { Message } from "@/models/User";

export interface ApiResponse{
     success:boolean;
     message:string;
     isAcceptingMsg?:boolean;
     messages?:Array<Message>;
}
