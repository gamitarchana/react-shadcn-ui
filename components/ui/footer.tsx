import { cn } from "cn"


function Footer({
  className,
  ...props
}: React.ComponentProps<"div">) {
    return (
        <footer
            data-slot="footer"
            className={cn(
                "bg-primary text-primary-foreground py-8 flex flex-align-center",
                className
            )}>
            <div className="w-full"><h2 className="text-inherit text-center m-0">Footer</h2></div>
          </footer>
      )
}

export default Footer
