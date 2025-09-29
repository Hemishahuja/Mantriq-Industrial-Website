import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background ripple transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--oceansteel)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Primary Button: Ocean Steel solid with white text
        default: "bg-[var(--oceansteel)] text-white hover:brightness-110 active:brightness-95 shadow-[var(--shadow-ink)]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        // Secondary: transparent with Ocean Steel border/text
        outline:
          "border-2 border-[var(--oceansteel)] text-[var(--oceansteel)] bg-transparent hover:bg-[color-mix(in_oklab,var(--oceansteel)_8%,transparent)]",
        hero: "glass border-white/20 text-white hover:bg-white/20 hover:text-white",
        glass: "glass hover:glass-hover border-0",
        // Secondary (filled subtle) on Polar Ice surfaces
        secondary:
          "text-[var(--text-body)] bg-[var(--polarice)] hover:brightness-110",
        ghost: "text-[var(--oceansteel)] hover:bg-[color-mix(in_oklab,var(--oceansteel)_6%,transparent)]",
        link: "text-[var(--oceansteel)] underline-offset-4 hover:underline hover:brightness-110",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-lg px-3",
        lg: "h-12 rounded-lg px-6",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
