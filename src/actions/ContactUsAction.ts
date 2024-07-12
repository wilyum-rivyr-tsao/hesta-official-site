'use server';
import { mapObjectValues } from '@/helper';
import prisma from '@/prisma';
import { isUSPhoneNumber } from '@/validations/rules';
import * as z from 'zod';

const contactUsSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z
    .string()
    .nullable()
    .refine((value) => isUSPhoneNumber(value), {
      message: 'Invalide phone number',
    }),
  company: z.string().optional(),
  consultation: z.string().optional(),
});

type ContactUsSchema = z.infer<typeof contactUsSchema>;

export async function createContactUs(data: ContactUsSchema) {
  const parsedData = contactUsSchema.safeParse(data);
  if (!parsedData.success) {
    return { success: false, error: 'Failed to create user. Incorrect field' };
  }

  try {
    const data = mapObjectValues(parsedData.data, (value: any) => (value === '' ? null : value));
    console.log('data', data);
    const user = await prisma.contact_us.create({
      data,
    });
    return { success: true, user };
  } catch (error) {
    console.log('error', error);
    return { success: false, error: 'Failed to create user' };
  }
}
