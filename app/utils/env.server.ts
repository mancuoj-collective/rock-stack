import { type TypeOf, z } from 'zod'

const envSchema = z.object({
  SESSION_SECRET: z.string().min(1),
  DOMAIN_NAME: z.string().min(1),
})

declare global {
  namespace NodeJS {
    interface ProcessEnv extends TypeOf<typeof envSchema> {}
  }
}

try {
  envSchema.parse(process.env)
} catch (err) {
  if (err instanceof z.ZodError) {
    console.error(err.flatten())
    const { fieldErrors } = err.flatten()
    const errorMessage = Object.entries(fieldErrors)
      .map(([field, errors]) => (errors ? `${field}: ${errors.join(', ')}` : field))
      .join('\n  ')
    throw new Error(`Missing environment variables:\n  ${errorMessage}`)
  }
}
