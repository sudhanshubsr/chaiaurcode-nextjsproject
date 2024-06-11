import { sendVerificationEmail } from '@/helpers/sendVerificationEmail';
import dbConnect from '@/lib/dbConnect';
import UserModel from '@/model/user';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
  await dbConnect();
  try {
    const { username, email, password } = await request.json();
    const existignUserVerifiedByUsername = await UserModel.findOne({
      username,
      isVerified: true,
    });

    if (existignUserVerifiedByUsername) {
      return Response.json(
        {
          success: false,
          message: 'Username is already taken',
        },
        { status: 400 }
      );
    }

    const existingUserByEmail = await UserModel.findOne({
      email,
    });

    if(existingUserByEmail){
        true // TODO: BAck here
    }else{
        const hashedPassword = await bcrypt.hash(password, 10)
        const expiryDate = new Date()
        expiryDate.setHours(expiryDate.getHours()+1)
        newUserModel
    }



  } catch (error) {
    console.error('Error Registering User', error);
    return Response.json(
      {
        success: false,
        message: 'Error Registering User',
      },
      { status: 500 }
    );
  }
}
