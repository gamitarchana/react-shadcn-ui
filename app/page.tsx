import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"

export default function Page() {
  return (
    <div className="flex min-h-svh p-6">
      <div className="flex min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl font-heading">shadcn ui</h1>
          <Heading component="h1" variant="h1" title="Custom Heading H1"/>
          <Heading component="h2" variant="h2" title="Custom Heading H2"/>
          <Heading component="h3" variant="h3" title="Custom Heading H3"/>
          <Heading component="h4" variant="h4" title="Custom Heading H4"/>
          <Heading component="h5" variant="h5" title="Custom Heading H5"/>
          <Heading component="h6" variant="h6" title="Custom Heading H6"/>
          <Button variant='default' >Primary</Button>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </div>
      </div>
    </div>
  )
}
