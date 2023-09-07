import { init as initApm } from "@elastic/apm-rum";
import { env } from "../environment";

initApm({
  serviceName: env.ELASTIC_APM_SERVICE_NAME,
  serverUrl: env.ELASTIC_APM_SERVER_URL,
  serviceVersion: "",
  logLevel: "trace",
  pageLoadTransactionName: '/',
  distributedTracing: true,
  propagateTracestate: true,
  breakdownMetrics: true,
  distributedTracingOrigins: env.ELASTIC_APM_DISTRIBUTED_TRACE_ORIGINS?.split(
    ","
  ).map((origin) => new RegExp(origin)),
});
