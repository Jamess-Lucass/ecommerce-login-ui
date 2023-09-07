import { z } from "zod";

const schema = z.object({
  IDENTITY_SERVICE_BASE_URL: z.string().url(),
  ELASTIC_APM_SERVER_URL: z.string().url().optional(),
  ELASTIC_APM_SERVICE_NAME: z.string().optional(),
  ELASTIC_APM_DISTRIBUTED_TRACE_ORIGINS: z.string().optional(),
});

const data = {
  IDENTITY_SERVICE_BASE_URL: import.meta.env.VITE_IDENTITY_SERVICE_BASE_URL,
  ELASTIC_APM_SERVER_URL: import.meta.env.VITE_ELASTIC_APM_SERVER_URL,
  ELASTIC_APM_SERVICE_NAME: import.meta.env.VITE_ELASTIC_APM_SERVICE_NAME,
  ELASTIC_APM_DISTRIBUTED_TRACE_ORIGINS: import.meta.env
    .VITE_ELASTIC_APM_DISTRIBUTED_TRACE_ORIGINS,
};

export const env = schema.parse(data);
