import * as React from "react";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type AppCardProps = React.ComponentProps<typeof Card>;

export default function AppCard({
  className,
  children,
  ...props
}: AppCardProps) {
  return (
    <Card
      className={cn(
        "rounded-none border-0 border-b border-dashed border-[var(--receipt-rule)] bg-transparent p-0 pb-4 shadow-none transition-all duration-300 last:border-b-0 last:pb-0",
        className
      )}
      {...props}
    >
      {children}
    </Card>
  );
}
