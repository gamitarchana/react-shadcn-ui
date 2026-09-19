"use client"

import { Toggle as TogglePrimitive } from "@base-ui/react/toggle"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const myToggleVariants = cva(
  "group/toggle inline-flex items-center justify-center gap-1 rounded-full font-medium whitespace-nowrap transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-transparent hover:bg-muted hover:text-foreground aria-pressed:bg-muted",
        outline: "border border-input bg-transparent shadow-xs hover:bg-muted hover:bg-muted hover:text-foreground aria-pressed:bg-muted",
        primary: "bg-primary text-primary-foreground hover:bg-primary/80 aria-pressed:bg-primary",
        primary_outline:
          "border-primary text-primary bg-transparent shadow-xs hover:text-primary/80 aria-expanded:text-primary/80",
      },
      size: {
        default:
          "h-8 min-w-8 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        sm: "h-7 min-w-7 px-2.5 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5",
        lg: "h-9 min-w-10 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-9 rounded-full",
        "icon-xs":
          "size-6",
        "icon-sm":
          "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function MyToggle({
  className,
  variant = "default",
  size = "default",
  ...props
}: TogglePrimitive.Props & VariantProps<typeof myToggleVariants>) {
  return (
    <TogglePrimitive
      data-slot="toggle"
      className={cn(myToggleVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { MyToggle, myToggleVariants }
