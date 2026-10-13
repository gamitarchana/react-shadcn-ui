"use client"

import { Toggle as TogglePrimitive } from "@base-ui/react/toggle"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const headerVariants = cva(
  "group/header py-8 flex flex-align-center",
  {
    variants: {
      variant: {
        default: "bg-transparent text-primary",
        dark: "bg-primary text-primary-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Header({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof headerVariants>) {
  return (
    <header
      data-slot="header"
      className={cn(headerVariants({ variant, className }))}
    >
        <div className="w-full"><h2 className="text-center m-0 text-inherit">Header</h2></div>
    </header>
  )
}

export default Header
