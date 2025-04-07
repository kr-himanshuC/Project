import { z } from "zod";

const passwordValidation = new RegExp(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
  );

export const schema = z.object({
    fullname: z.string().trim().nonempty("Fullname is required").min(4, "Fullname must have more than 3 characters").max(50, "Fullname is too long").regex(/^[A-Za-z\s]+$/, "Fullname must only contain letters and spaces"),
    email: z.string().trim().email("Invalid email address"),
    phoneNumber: z.string().trim().max(10, "Phone number must be 10 digits").min(10, "Phone number must be 10 digits"),
    password: z.string().nonempty("Password is required").regex(passwordValidation, {
        message: 'Your password is not valid',
      }),
    bio: z.string().trim().nonempty("Bio is required"),
    resume: z.any(),
    profileImg: z.any(),
    skills: z.string().trim().nonempty("Skills are required"),
    companyName: z.string().trim().nonempty("Company name is required"),
    Cdesc: z.string().trim().nonempty("Description is required"),
    logo: z.any(),
    website: z.string().nonempty("Url is required").url("Invalid URL"),
})

