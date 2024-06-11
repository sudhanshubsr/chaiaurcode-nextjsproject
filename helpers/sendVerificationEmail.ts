import { resend } from "@/lib/resend";
import VerificationEmail from "@/components/ui/VerificationEmail";
import { ApiResponseType } from "@/types/ApiResponse";


interface SendVerificationEmailType {
    email: string;
    username: string;
    validationCode: string;
}

export async function sendVerificationEmail({ email, username, validationCode }: SendVerificationEmailType): Promise<ApiResponseType> {
    try {
        await resend.emails.send({
            from: 'sudhanshubsr.dev@gmail.com',
            to: email,
            subject: 'Otp Verification',
            react: VerificationEmail({validationCode, username}),
          });
        return {success: true, message: 'Verification Email send Successfully'}
    } catch (error) {
        // Handle error
        console.error("Error sending verification Email", error)
        return {success: false, message: 'Failed to send verification email'}
    }
}
