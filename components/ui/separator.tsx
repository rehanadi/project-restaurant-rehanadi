"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

interface SeparatorProps extends React.ComponentProps<typeof SeparatorPrimitive.Root> {
  variant?: "solid" | "dashed"
}

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  variant = "solid",
  ...props
}: SeparatorProps) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "bg-neutral-300 shrink-0",
        variant === "solid" && "border-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        variant === "dashed" && [
          "bg-transparent border-neutral-300",
          "data-[orientation=horizontal]:border-t data-[orientation=horizontal]:border-dashed data-[orientation=horizontal]:w-full",
          "data-[orientation=vertical]:border-l data-[orientation=vertical]:border-dashed data-[orientation=vertical]:h-full"
        ],
        className
      )}
      {...props}
    />
  )
}

export { Separator }