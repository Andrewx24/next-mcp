// app/api/[transport]/route.ts
import { createMcpHandler } from "@vercel/mcp-adapter";

const handler = createMcpHandler(
  () => {
    // Tools can be added here
  },
  {
    // Optional server options
  },
  {
    // Optional redis config
    redisUrl: process.env.REDIS_URL,
    basePath: "/api", // this needs to match where the [transport] is located.
    maxDuration: 60,
    verboseLogs: true,
  }
);
export { handler as GET, handler as POST };
