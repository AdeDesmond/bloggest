import nodemailer from "nodemailer";
import { User } from "@/models/user-model";
import bcrypt from "bcryptjs";
import { connectDb } from "@/lib/db/dbConfig/connect-db";

interface SendEmailProps {
  email: string;
  emailType: string;
  userId: string;
}

connectDb();
export const sendEmail = async ({
  email,
  emailType,
  userId,
}: SendEmailProps) => {
  try {
    //create hashtoken
    const hashToken = await bcrypt.hash(userId.toString(), 10);

    //
    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(
        userId,
        { verifyToken: hashToken, verifyTokenExpiry: Date.now() + 360000 },
        { new: true }
      );
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(
        userId,
        {
          forgotPasswordToken: hashToken,
          forgotPasswordTokenExpiry: Date.now() + 360000,
        },
        { new: true }
      );
    }
    const transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.NODEMAIL_USER,
        pass: process.env.NODEMAIL_PASS,
      },
    });
    const routeNames = emailType === "VERIFY" ? "verifyemail" : "resetpassword";
    const mailOptions = {
      from: "test2@email.com",
      to: email,
      subject:
        emailType === "VERIFY" ? "verify password" : "reset your password",
      html: `<p> Click <a href="${
        process.env.DOMAIN
      }/${routeNames}?token=${hashToken}">here </a> to ${
        emailType === "verify" ? "verify your email" : "reset your password"
      } </p>`,
    };

    const mailResponse = await transporter.sendMail(mailOptions);
    return mailResponse;
  } catch (err: any) {}
};
