import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Mail } from "lucide-react"
import { NewWindow } from "@/components/icons/new-window"

export default function Page() {
  return (
    <div className="flex min-h-svh p-6">
      <div className="flex min-w-0 flex-col gap-4 text-sm leading-loose">
        <h1 className="scroll-m-20 text-4xl tracking-tight lg:text-5xl font-heading">shadcn ui</h1>
        <div>
          <div className="py-8">  
            <h2 className="scroll-m-20 text-3xl tracking-tight lg:text-4xl font-heading">Typography</h2> 
            <div className="py-4">        
              <Heading component="h1" variant="h1" title="Custom Heading H1"/>
              <Heading component="h2" variant="h2" title="Custom Heading H2"/>
              <Heading component="h3" variant="h3" title="Custom Heading H3"/>
              <Heading component="h4" variant="h4" title="Custom Heading H4"/>
              <Heading component="h5" variant="h5" title="Custom Heading H5"/>
              <Heading component="h6" variant="h6" title="Custom Heading H6"/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
          </div>
          <div className="py-8">  
            <h2 className="scroll-m-20 text-3xl tracking-tight lg:text-4xl font-heading">Buttons</h2>
            <div className="py-2">
              <div className="py-2">
                <Button variant='default' size='xs'>Primary XS</Button>   
                <Button variant='default' size='sm'>Primary SM</Button>         
                <Button variant='default' >Primary Default</Button>  
                <Button variant='default' size='lg'>Primary LG</Button>     
              </div>
              <div className="py-2">
                <Button variant='outline' size='xs'>Primary Outline XS</Button>   
                <Button variant='outline' size='sm'>Primary Outline SM</Button>         
                <Button variant='outline' >Primary Outline Default</Button>  
                <Button variant='outline' size='lg'>Primary Outline LG</Button>     
              </div>
              <div className="py-2">
                <Button variant='link' size='xs'>Primary Link XS</Button>   
                <Button variant='link' size='sm'>Primary Link SM</Button>         
                <Button variant='link' >Primary Link Default</Button>  
                <Button variant='link' size='lg'>Primary Link LG</Button>     
              </div>
              <div className="py-2">
                <Button variant='secondary' size='xs'>Secondary XS</Button>   
                <Button variant='secondary' size='sm'>Secondary SM</Button>         
                <Button variant='secondary' >Secondary Default</Button>  
                <Button variant='secondary' size='lg'>Secondary LG</Button>     
              </div>
              <div className="py-2">
                <Button variant='secondary_outline' size='xs'>Secondary Outline XS</Button>   
                <Button variant='secondary_outline' size='sm'>Secondary Outline SM</Button>         
                <Button variant='secondary_outline' >Secondary Outline Default</Button>  
                <Button variant='secondary_outline' size='lg'>Secondary Outline LG</Button>     
              </div>
              <div className="py-2">
                <Button variant='secondary_link' size='xs'>Secondary Link XS</Button>   
                <Button variant='secondary_link' size='sm'>Secondary Link SM</Button>         
                <Button variant='secondary_link' >Secondary Link Default</Button>  
                <Button variant='secondary_link' size='lg'>Secondary Link LG</Button>     
              </div>
              <div className="py-2">
                <Button size='xs'>
                  <NewWindow  /> Primary XS Login with Email
                </Button>
                <Button size='sm'>
                  <NewWindow  /> Primary SM Login with Email
                </Button> 
                <Button>
                  <NewWindow  /> Primary Default Login with Email
                </Button>
                <Button size='lg'>
                  <NewWindow  /> Primary LG Login with Email
                </Button> 
              </div>
              <div className="py-2">
                <Button variant='outline' size='xs'>
                  <NewWindow  /> Primary Oultine XS Login with Email
                </Button>
                <Button variant='outline' size='sm'>
                  <NewWindow  /> Primary Oultine SM Login with Email
                </Button> 
                <Button variant='outline'>
                  <NewWindow  /> Primary Oultine Default Login with Email
                </Button>
                <Button variant='outline' size='lg'>
                  <NewWindow  /> Primary Oultine LG Login with Email
                </Button> 
              </div>
              <div className="py-2">
                <Button variant='link' size='xs'>
                  <NewWindow  /> Primary Link XS Login with Email
                </Button>
                <Button variant='link' size='sm'>
                  <NewWindow  /> Primary Link SM Login with Email
                </Button> 
                <Button variant='link'>
                  <NewWindow  /> Primary Link Default Login with Email
                </Button>
                <Button variant='link' size='lg'>
                  <NewWindow  /> Primary Link LG Login with Email
                </Button> 
              </div>
              <div className="py-2">
                <Button variant='secondary' size='xs'>
                  <NewWindow  /> Secondary XS Login with Email
                </Button>
                <Button variant='secondary' size='sm'>
                  <NewWindow  /> Secondary SM Login with Email
                </Button> 
                <Button variant='secondary'>
                  <NewWindow  /> Secondary Default Login with Email
                </Button>
                <Button variant='secondary' size='lg'>
                  <NewWindow  /> Secondary LG Login with Email
                </Button> 
              </div>
              <div className="py-2">
                <Button size='xs'>
                  Primary XS Login with Email
                  <NewWindow  />
                </Button>
                <Button size='sm'>
                  Primary SM Login with Email
                  <NewWindow  />
                </Button> 
                <Button>
                  Primary Default Login with Email
                  <NewWindow  />
                </Button>
                <Button size='lg'>
                  Primary LG Login with Email<NewWindow  />
                </Button> 
              </div>
              <div className="py-2">
                <Button size='icon-xs'>
                  <NewWindow  />
                </Button>
                <Button size='icon-sm'>
                  <NewWindow  />
                </Button> 
                <Button size='icon'>
                  <NewWindow  />
                </Button>
                <Button size='icon-lg'>
                  <NewWindow  />
                </Button> 
              </div>
              <div className="py-2">
                <Button variant="outline" size='icon-xs'>
                  <NewWindow  />
                </Button>
                <Button variant="outline"  size='icon-sm'>
                  <NewWindow  />
                </Button> 
                <Button variant="outline" size='icon'>
                  <NewWindow  />
                </Button>
                <Button variant="outline" size='icon-lg'>
                  <NewWindow  />
                </Button> 
              </div>
              <div className="py-2">
                <Button variant="link" size='icon-xs'>
                  <NewWindow  />
                </Button>
                <Button variant="link"  size='icon-sm'>
                  <NewWindow  />
                </Button> 
                <Button variant="link" size='icon'>
                  <NewWindow  />
                </Button>
                <Button variant="link" size='icon-lg'>
                  <NewWindow  />
                </Button> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
