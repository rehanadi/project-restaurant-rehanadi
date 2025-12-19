import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-neutral-300 placeholder:text-neutral-500 field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50 text-sm md:text-md",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
