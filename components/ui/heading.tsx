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
        h1: "text-4xl lg:text-5xl leading-tight",
        h2: "text-3xl lg:text-4xl leading-tight",
        h3: "text-2xl lg:text-3xl leading-snug",
        h4: "text-xl lg:text-2xl leading-snug",
        h5: "text-lg lg:text-xl leading-normal",
        h6: "font-semibold leading-normal",
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
