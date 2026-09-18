'use client'
 
import * as React from 'react';
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn"

interface HeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const headingVariants = cva(
  "font-heading",
  {
    variants: {
      variant: {
        h1: "text-4xl lg:text-5xl",
        h2: "text-3xl lg:text-4xl",
        h3: "text-2xl lg:text-3xl",
        h4: "text-xl lg:text-2xl",
        h5: "text-lg lg:text-xl",
        h6: "font-semibold",
      },
    },
    defaultVariants: {
      variant: "h2",
    },
  }
)


function Heading({
    title, 
    as = "h2",
    className,
    variant = "h2",
    ...props
}: HeadingProps) {
    const Component = as; //variant
  return (
    <Component
      className={cn(headingVariants({ variant, className }))}
      {...props}
    >{title}</Component>
  )
}

export { Heading, headingVariants }
