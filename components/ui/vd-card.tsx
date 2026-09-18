import React, { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "cn"

// 1. Define the props that our button always accepts
type VdCardOwnProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
};

// 2. Combine own props with the native props of the chosen element, omitting overlapping props
type VdCardProps<T extends ElementType> = VdCardOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof VdCardOwnProps<T>>;

// 3. The React 19 Polymorphic VdCard Component
function VdCard<T extends ElementType = "button">({
  as,
  className,
  size = "default",
  ...props
}: VdCardProps<T> & { size?: "default" | "sm" }) {
  // Fallback to "button" if no 'as' prop is provided
  const Component = as || "div";

  return (
    <Component
      data-slot="card"
      data-size={size}
      className={cn(
        "w-full border-0 text-left group/card flex flex-col gap-(--card-spacing) overflow-hidden rounded-xl bg-card py-(--card-spacing) text-sm text-card-foreground [--card-spacing:--spacing(6)] has-[>img:first-child]:pt-0 data-[size=sm]:[--card-spacing:--spacing(4)] *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl",
        className
      )}
      {...props}
    ></Component>
  );
}

function VdCardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto]",
        className
      )}
      {...props}
    />
  )
}

function VdCardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "font-heading text-base leading-normal font-medium group-data-[size=sm]/card:text-sm",
        className
      )}
      {...props}
    />
  )
}

function VdCardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

function VdCardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function VdCardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("flex flex-col gap-3", className)}
      {...props}
    />
  )
}

function VdCardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center rounded-b-xl",
        className
      )}
      {...props}
    />
  )
}

export {
  VdCard,
  VdCardHeader,
  VdCardFooter,
  VdCardTitle,
  VdCardAction,
  VdCardDescription,
  VdCardContent,
}
