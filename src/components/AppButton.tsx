import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type AppButtonProps = React.ComponentProps<typeof Button>;

export default function AppButton({
  className,
  children,
  ...props
}: AppButtonProps) {
  return (
    <Button
      className={cn(
        "h-14 w-full rounded-sm border border-[var(--receipt-ink)] bg-[var(--receipt-ink)] font-mono text-sm font-bold uppercase tracking-[0.18em] text-[var(--receipt-paper)] shadow-[0_10px_24px_rgb(47_36_25_/_0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--receipt-ink)]/90 hover:shadow-[0_16px_32px_rgb(47_36_25_/_0.22)] active:translate-y-0 active:scale-[0.99] disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
}
