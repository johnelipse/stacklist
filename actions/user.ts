"use server";
import { db } from "@/prisma/db";
import { FormProps } from "@/types/type";
import { hashSync } from "bcrypt-ts";

export async function createUser(formData: FormProps) {
  const { email, password } = formData;
  try {
    const existingUser = await db.user.findUnique({
      where: {
        email,
      },
    });
    if (existingUser) {
      return {
        data: null,
        error: `User with this email ( ${email})  already exists in the Database`,
        status: 409,
      };
    }
    // Encrypt the Password =>bcrypt
    const hashedPassword = hashSync(password, 10);
    const newUser = await db.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });
    return {
      data: newUser,
      error: null,
      status: 200,
    };
  } catch (error) {
    console.log(error);
    return {
      error: "Something went wrong",
    };
  }
}
