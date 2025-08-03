import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          // Four-Blues inputs: Polar Ice surface, subtle Space Cadet border, Ocean Steel focus
          "flex h-10 w-full rounded-md border px-3 py-2 text-base md:text-sm",
          "bg-[var(--polarice)] text-[var(--text-body)]",
          "border-[color-mix(in_oklab,var(--spacecadet)_15%,transparent)]",
          "placeholder:text-[color-mix(in_oklab,var(--text-body)_60%,white)]",
          "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-[var(--text-body)]",
          "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--oceansteel)] focus-visible:ring-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
