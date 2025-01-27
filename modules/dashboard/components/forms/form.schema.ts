import { z } from 'zod'

export const skillSchema = z.object({
  name: z.string(),
  logo: z.string(),
  category: z.string(),
  level: z.string(),
  description: z.string(),
})

export const portfolioSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }).max(100, { message: 'Name cannot exceed 100 characters' }),
  category: z.string().min(1, { message: 'Category is required' }),
  description: z.string().min(10, { message: 'Description must be at least 10 characters' }).max(1000, { message: 'Description cannot exceed 1000 characters' }),
  images: z.array(z.union([z.instanceof(File), z.string().url()]).or(z.string())).min(1, { message: 'At least one image is required' }),
  github_link: z.string().optional(),
  live_demo: z.string().url({ message: 'Live demo link must be a valid URL' }).min(1, { message: 'Live demo link is required' }),
  page: z.number().min(0, { message: 'Page number must be at least 1' }),
  skills: z.array(skillSchema).min(1).max(15),
  video_url: z.string().optional(),
  type: z.string().min(1, { message: 'Type is required' }),
  isPublic: z.boolean(),
})

export const editPortfolioSchema = z.object({
  name: z.string(),
  category: z.string(),
  description: z.string().min(10, { message: 'Description must be at least 10 characters' }).max(1000, { message: 'Description cannot exceed 1000 characters' }),
  images: z.array(z.union([z.instanceof(File), z.string().url()]).or(z.string())).min(1, { message: 'At least one image is required' }),
  github_link: z.string().optional(),
  live_demo: z.string().url({ message: 'Live demo link must be a valid URL' }).min(1, { message: 'Live demo link is required' }),
  page: z.number().min(0, { message: 'Page number must be at least 1' }),
  skills: z.array(skillSchema).min(1).max(15),
  video_url: z.string().optional(),
  type: z.string().min(1, { message: 'Type is required' }),
  isPublic: z.boolean(),
})
