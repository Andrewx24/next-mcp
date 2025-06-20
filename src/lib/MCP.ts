import { createMcpHandler } from "@vercel/mcp-adapter";

export const mcpHandler = createMcpHandler(
  () => {
    // Tools can be added here
  },
  {
    // Optional server options
  },
);
