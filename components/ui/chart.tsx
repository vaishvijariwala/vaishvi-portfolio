import * as React from "react";
import type { TooltipContentProps } from "recharts";

import { cn } from "@/lib/utils";

export type ChartConfig = Record<
  string,
  {
    label: string;
    color: string;
  }
>;

function ChartContainer({
  className,
  children,
  style,
}: React.ComponentProps<"div"> & { config: ChartConfig }) {
  return (
    <div className={cn("w-full", className)} style={style}>
      {children}
    </div>
  );
}

function ChartTooltip(props: { content?: React.ReactNode }) {
  return <>{props.content}</>;
}

function ChartTooltipContent({ active, payload }: TooltipContentProps<number, string>) {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-md border bg-background px-2 py-1 text-xs shadow-sm">
      {payload.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <span
            className="inline-block h-2 w-2 rounded-full"
            style={{ background: item.color ?? "#8884d8" }}
          />
          <span>{String(item.name ?? item.dataKey ?? "")}</span>
          <span className="font-semibold">{String(item.value ?? "")}</span>
        </div>
      ))}
    </div>
  );
}

export { ChartContainer, ChartTooltip, ChartTooltipContent };
