import { z } from "zod";

const schema = z.object({
  IDENTITY_SERVICE_BASE_URL: z.string().url(),
});

const data = {
  IDENTITY_SERVICE_BASE_URL: import.meta.env.VITE_IDENTITY_SERVICE_BASE_URL,
};

export const env = schema.parse(data);
