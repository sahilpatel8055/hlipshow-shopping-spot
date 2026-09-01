import { createFileRoute, redirect } from "@tanstack/react-router";

// Duplicate fee intent: /fees is permanently consolidated into /lpu-online-fees.
export const Route = createFileRoute("/fees")({
  loader: () => {
    throw redirect({ href: "/lpu-online-fees", statusCode: 301, throw: true });
  },
  component: () => null,
});
