"use client"

import { Collapsible as CollapsiblePrimitive } from "@base-ui/react/collapsible"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const myCollapsibleTriggerVariants = cva(
 // "bg-transparent",
  "group/button inline-flex shrink-0 items-center justify-center rounded-full border border-transparent bg-clip-padding font-medium letter-spacing: var(--tracking-wide) leading-none whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 h-8 gap-1.5 px-3.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
  {
    variants: {
      variant: {
        default: "px-0",
        primary: "bg-primary text-primary-foreground hover:bg-primary/80",
        primary_outline:
          "border-primary text-primary bg-transparent shadow-xs hover:text-primary/80",
        line: "px-0 text-primary underline-offset-4 hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function MyCollapsible({ ...props }: CollapsiblePrimitive.Root.Props) {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />
}

function MyCollapsibleTrigger({  
  variant = "default", className, ...props }: CollapsiblePrimitive.Trigger.Props  & VariantProps<typeof myCollapsibleTriggerVariants>) {
  return (
    <CollapsiblePrimitive.Trigger 
      data-slot="collapsible-trigger" {...props} 
      data-variant={variant}
      className={cn(myCollapsibleTriggerVariants({ variant }), className)} />
  )
}

function MyCollapsibleContent({ ...props }: CollapsiblePrimitive.Panel.Props) {
  return (
    <CollapsiblePrimitive.Panel data-slot="collapsible-content" {...props} />
  )
}

export { MyCollapsible, MyCollapsibleTrigger, MyCollapsibleContent, myCollapsibleTriggerVariants }
