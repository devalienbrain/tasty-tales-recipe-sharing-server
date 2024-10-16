import { z } from 'zod';

export const userValidation = {
  registerUser: z.object({
    body: z.object({
      name: z.string().min(1, 'Name is required'),
      email: z.string().email('Invalid email'),
      password: z.string().min(6, 'Password must be at least 6 characters long'),
    }),
  }),

  loginUser: z.object({
    body: z.object({
      email: z.string().email('Invalid email'),
      password: z.string().min(6, 'Password must be at least 6 characters long'),
    }),
  }),

  updateProfile: z.object({
    body: z.object({
      name: z.string().optional(),
      password: z.string().min(6).optional(),
    }),
  }),
};
