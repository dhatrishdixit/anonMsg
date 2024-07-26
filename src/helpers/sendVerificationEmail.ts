import { resend } from "@/lib/resend";
import VerificationEmail from "../../email/verificationEmail";
import { ApiResponse } from "@/types/ApiResponse";


export const sendVerificationEmail = async(
    email:string,
    username:string,
    verificationCode:string
):Promise<ApiResponse>=>{
     try {
        
           await resend.emails.send({
            from: 'Dhatrish <auth@whispr.dhatrish.online>',
            to: email,
            subject: 'Whispr | verification email',
            react: VerificationEmail({username,otp:verificationCode}),
          });

        return {
            success:true,
            message:"verification email send successfully",
        }
     } catch (error) {
        console.error("error while sending verification email",error);
        return {
            success:false,
            message:"error while sending verification email",
        }
     }
}