import * as React from "react";

import { cn } from "@/lib/utils";

export type AppInputProps = React.InputHTMLAttributes<HTMLInputElement>;

const AppInput = React.forwardRef<HTMLInputElement, AppInputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "block w-full border-0 bg-transparent p-0 text-right font-mono text-4xl font-black leading-none text-[var(--receipt-ink)] outline-none placeholder:text-[var(--receipt-muted)] focus:outline-none focus:ring-0 sm:text-5xl",
          className
        )}
        {...props}
      />
    );
  }
);

AppInput.displayName = "AppInput";

export default AppInput;
