"use client"
import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Mail } from "lucide-react"
import { NewWindow } from "@/components/icons/new-window"

import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"

import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
	MyCard,
	MyCardDescription,
	MyCardFooter,
	MyCardHeader,
	MyCardTitle,
  } from "@/components/ui/my-card"

import {
  VdCard,
  VdCardAction,
  VdCardDescription,
  VdCardOverline,
  VdCardTagline,
  VdCardFooter,
  VdCardHeader,
  VdCardTitle,
} from "@/components/ui/vd-card"

import { Badge } from "@/components/ui/badge"

export default function Page() {
  const myCardClikHandler = () => {
    console.log("MyCard Clicked");
  }


  return (
    <div className="flex min-h-svh p-6">
      <div className="flex min-w-0 flex-col gap-4 text-sm leading-loose">
        <h1 className="scroll-m-20 text-4xl tracking-tight lg:text-5xl font-heading">shadcn ui</h1>
        <div>
          <div className="py-8">  
            <h2 className="scroll-m-20 text-3xl tracking-tight lg:text-4xl font-heading">Typography</h2> 
            <div className="py-4">        
              <Heading as="h1" variant="h1" title="Custom Heading H1"/>
              <Heading as="h2" variant="h2" title="Custom Heading H2"/>
              <Heading as="h3" variant="h3" title="Custom Heading H3"/>
              <Heading as="h4" variant="h4" title="Custom Heading H4"/>
              <Heading as="h5" variant="h5" title="Custom Heading H5"/>
              <Heading as="h6" variant="h6" title="Custom Heading H6"/>
			        <Heading variant="h2" title="Custom Default Heading H2"/>
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
              <div className="py-8"> 
                <h2 className="scroll-m-20 text-3xl tracking-tight lg:text-4xl font-heading">Buttons Link</h2>
                <div className="py-2">
                  <div className="py-2">
                    <Link href="/dashboard" className={buttonVariants({ variant: "default", size: "xs" })}>
                      Primary XS Button Link
                    </Link>      
                    <Link href="/dashboard" className={buttonVariants({ variant: "default", size: "sm" })}>
                      Primary SM Button Link
                    </Link>
                    <Link href="/dashboard" className={buttonVariants({ variant: "default" })}>
                      Primary Default Button Link
                    </Link>
                    <Link href="/dashboard" className={buttonVariants({ variant: "default", size: "lg" })}>
                      Primary LG Button Link
                    </Link>    
                  </div>
                  <div className="py-2">
                    <Link href="/dashboard" className={buttonVariants({ variant: "default", size: "xs" })}>
                      <NewWindow  /> Primary XS Button Link
                    </Link>      
                    <Link href="/dashboard" className={buttonVariants({ variant: "default", size: "sm" })}>
                      <NewWindow  />  Primary SM Button Link
                    </Link>
                    <Link href="/dashboard" className={buttonVariants({ variant: "default" })}>
                      <NewWindow  /> Primary Default Button Link
                    </Link>
                    <Link href="/dashboard" className={buttonVariants({ variant: "default", size: "lg" })}>
                      <NewWindow  /> Primary LG Button Link
                    </Link> 
                  </div>
                  <div className="py-2">
                    <Link href="/dashboard" className={buttonVariants({ variant: "default", size: "xs" })}>
                      Primary XS Button Link <NewWindow  />
                    </Link>      
                    <Link href="/dashboard" className={buttonVariants({ variant: "default", size: "sm" })}>
                      Primary SM Button Link <NewWindow  /> 
                    </Link>
                    <Link href="/dashboard" className={buttonVariants({ variant: "default" })}>
                      Primary Default Button Link <NewWindow  />
                    </Link>
                    <Link href="/dashboard" className={buttonVariants({ variant: "default", size: "lg" })}>
                      Primary LG Button Link <NewWindow  />
                    </Link> 
                  </div>
                </div>
              </div>
              <div className="py-8">  
                <h2 className="scroll-m-20 text-3xl tracking-tight lg:text-4xl font-heading">Cards - Default Shadcn Componet, Custom styling</h2> 
                <div className="py-4"> 
                  <div className="flex flex-wrap -m-4 xl: -m-5">
                    <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4 xl: p-5">
                      <Card className="relative pt-0">
                        <div className="absolute inset-0 z-30 aspect-video bg-black/35 " />
                        <img
                          src="https://avatar.vercel.sh/shadcn1"
                          alt="Event cover"
                          className="relative z-20 aspect-video w-full object-cover "
                        />
                        <CardHeader>
                          <CardAction>
                            <Badge variant="secondary">Featured</Badge>
                          </CardAction>
                          <CardTitle>Design systems meetup</CardTitle>
                          <CardDescription>
                            A practical talk on component APIs, accessibility, and shipping
                            faster.
                          </CardDescription>
                        </CardHeader>
                        <CardFooter>
                          <Button className="w-full">View Event</Button>
                        </CardFooter>
                      </Card>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4 xl: p-5">
                                <Card className="relative pt-0">
                                  <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
                                  <img
                                    src="https://avatar.vercel.sh/shadcn1"
                                    alt="Event cover"
                                    className="relative z-20 aspect-video w-full object-cover "
                                  />
                                  <CardHeader>
                                    <CardAction>
                                      <Badge variant="secondary">Featured</Badge>
                                    </CardAction>
                                    <CardTitle>Design systems meetup</CardTitle>
                                    <CardDescription>
                                      A practical talk on component APIs, accessibility, and shipping
                                      faster.
                                    </CardDescription>
                                  </CardHeader>
                                  <CardFooter>
                                    <Button className="w-full">View Event</Button>
                                  </CardFooter>
                                </Card>
                              </div>
                    <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4 xl: p-5">
                                <Card className="relative pt-0">
                                  <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
                                  <img
                                    src="https://avatar.vercel.sh/shadcn1"
                                    alt="Event cover"
                                    className="relative z-20 aspect-video w-full object-cover "
                                  />
                                  <CardHeader>
                                    <CardAction>
                                      <Badge variant="secondary">Featured</Badge>
                                    </CardAction>
                                    <CardTitle>Design systems meetup</CardTitle>
                                    <CardDescription>
                                      A practical talk on component APIs, accessibility, and shipping
                                      faster.
                                    </CardDescription>
                                  </CardHeader>
                                  <CardFooter>
                                    <Button className="w-full">View Event</Button>
                                  </CardFooter>
                                </Card>
                              </div>
                    <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4 xl: p-5">
                                <Card className="relative pt-0">
                                  <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
                                  <img
                                    src="https://avatar.vercel.sh/shadcn1"
                                    alt="Event cover"
                                    className="relative z-20 aspect-video w-full object-cover "
                                  />
                                  <CardHeader>
                                    <CardAction>
                                      <Badge variant="secondary">Featured</Badge>
                                    </CardAction>
                                    <CardTitle>Design systems meetup</CardTitle>
                                    <CardDescription>
                                      A practical talk on component APIs, accessibility, and shipping
                                      faster.
                                    </CardDescription>
                                  </CardHeader>
                                  <CardFooter>
                                    <Button className="w-full">View Event</Button>
                                  </CardFooter>
                                </Card>
                              </div>
                    <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4 xl: p-5">
                      <Card className="relative pt-0">
                        <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
                        <img
                          src="https://avatar.vercel.sh/shadcn1"
                          alt="Event cover"
                          className="relative z-20 aspect-video w-full object-cover "
                        />
                        <CardHeader>
                          <CardAction>
                            <Badge variant="secondary">Featured</Badge>
                          </CardAction>
                          <CardTitle>Design systems meetup</CardTitle>
                          <CardDescription>
                            A practical talk on component APIs, accessibility, and shipping
                            faster.
                          </CardDescription>
                        </CardHeader>
                        <CardFooter>
                          <Button className="w-full">View Event</Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
			        <div className="py-8">  
                <h2 className="scroll-m-20 text-3xl tracking-tight lg:text-4xl font-heading">My Cards - Custom - BUTTON, LINK</h2> 
                <div className="py-4"> 
                  <div className="flex flex-wrap -m-4 xl: -m-5">
                    <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4 xl: p-5">
                      <MyCard className="relative pt-0 border-0" onClick={myCardClikHandler}>
                        <div className="absolute inset-0 z-30 aspect-video bg-black/35 rounded-lg" />
                        <img
                          src="https://avatar.vercel.sh/shadcn1"
                          alt="Event cover"
                          className="relative z-20 aspect-video w-full object-cover rounded-lg"
                        />
                        <MyCardHeader className="border-0">
                          <MyCardTitle>Design systems meetup</MyCardTitle>
                        </MyCardHeader>
                        <MyCardFooter>
                        </MyCardFooter>
                      </MyCard>
                    </div>
					          <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4 xl: p-5">
                      <MyCard className="relative pt-0">
                        <div className="absolute inset-0 z-30 aspect-video bg-black/35 rounded-lg" />
                        <img
                          src="https://avatar.vercel.sh/shadcn1"
                          alt="Event cover"
                          className="relative z-20 aspect-video w-full object-cover rounded-lg"
                        />
                        <MyCardHeader>
                          <MyCardTitle>Design systems meetup</MyCardTitle>
                        </MyCardHeader>
                        <MyCardFooter>
                        </MyCardFooter>
                      </MyCard>
                    </div>
					          <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4 xl: p-5">
                      <MyCard className="relative pt-0">
                        <div className="absolute inset-0 z-30 aspect-video bg-black/35 rounded-lg" />
                        <img
                          src="https://avatar.vercel.sh/shadcn1"
                          alt="Event cover"
                          className="relative z-20 aspect-video w-full object-cover rounded-lg"
                        />
                        <MyCardHeader>
                          <MyCardTitle>Design systems meetup</MyCardTitle>
                        </MyCardHeader>
                        <MyCardFooter>
                        </MyCardFooter>
                      </MyCard>
                    </div>
					          <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4 xl: p-5">
                      <MyCard className="relative pt-0">
                        <div className="absolute inset-0 z-30 aspect-video bg-black/35 rounded-lg" />
                        <img
                          src="https://avatar.vercel.sh/shadcn1"
                          alt="Event cover"
                          className="relative z-20 aspect-video w-full object-cover rounded-lg"
                        />
                        <MyCardHeader>
                          <MyCardTitle>Design systems meetup</MyCardTitle>
                        </MyCardHeader>
                        <MyCardFooter>
                        </MyCardFooter>
                      </MyCard>
                    </div>
					          <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4 xl: p-5">
                      <MyCard className="relative pt-0" as={Link} href="\dashboard">
                        <div className="absolute inset-0 z-30 aspect-video bg-black/35 rounded-lg" />
                        <img
                          src="https://avatar.vercel.sh/shadcn1"
                          alt="Event cover"
                          className="relative z-20 aspect-video w-full object-cover rounded-lg"
                        />
                        <MyCardHeader>
                          <MyCardTitle>Design systems meetup</MyCardTitle>
                        </MyCardHeader>
                        <MyCardFooter>
                        </MyCardFooter>
                      </MyCard>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-8">  
                <h2 className="scroll-m-20 text-3xl tracking-tight lg:text-4xl font-heading">Vd Cards - Custom - DIV, BUTTON, LINK</h2> 
                <div className="py-4"> 
                  <div className="flex flex-wrap -m-4 xl: -m-5">
                    <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4 xl: p-5">
                      <VdCard className="relative pt-0">
                        <div className="absolute inset-0 z-30 aspect-square md:aspect-video bg-black/35 " />
                        <img
                          src="https://avatar.vercel.sh/shadcn1"
                          alt="Event cover"
                          className="relative z-20 aspect-square md:aspect-video w-full object-cover "
                        />
                        <VdCardHeader>
                          <VdCardAction>
                            <Badge variant="secondary">Featured</Badge>
                          </VdCardAction>
                          <VdCardTitle>Responsive image</VdCardTitle>
                          <VdCardDescription>
                            Apsect Ratio - square for mobile, video for iPad and Desktop
                          </VdCardDescription>
                        </VdCardHeader>
                        <VdCardFooter>
                          <Button className="w-full">View Event</Button>
                        </VdCardFooter>
                      </VdCard>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4 xl: p-5">
                      <VdCard as="button" className="relative pt-0">
                        <div className="absolute inset-0 z-30 aspect-square md:aspect-[4/3] bg-black/35 " />
                        <img
                          src="https://avatar.vercel.sh/shadcn1"
                          alt="Event cover"
                          className="relative z-20 aspect-square md:aspect-[4/3] w-full object-cover "
                        />
                        <VdCardHeader>
                          <VdCardAction>
                            <Badge variant="secondary">Featured</Badge>
                          </VdCardAction>
                          <VdCardTitle>Responsive image</VdCardTitle>
                          <VdCardDescription>
                            Apsect Ratio - square for mobile, 4/3 for iPad and Desktop
                          </VdCardDescription>
                        </VdCardHeader>
                        <VdCardFooter>
                          <p>Button Component - Nested Button/Link not allowed</p>
                        </VdCardFooter>
                      </VdCard>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4 xl: p-5">
                      <VdCard as={Link} href="/dashboard" className="relative pt-0">
                        <div className="absolute inset-0 z-30 aspect-square md:aspect-[12/5] bg-black/35 " />
                        <img
                          src="https://avatar.vercel.sh/shadcn1"
                          alt="Event cover"
                          className="relative z-20 aspect-square md:aspect-[12/5] w-full object-cover "
                        />
                        <VdCardHeader>
                          <VdCardAction>
                            <Badge variant="secondary">Featured</Badge>
                          </VdCardAction>
                          <VdCardTitle>Responsive image</VdCardTitle>
                          <VdCardDescription>
                            Apsect Ratio - square for mobile, 12/5 for iPad and Desktop
                          </VdCardDescription>
                        </VdCardHeader>
                        <VdCardFooter>
                          <p>Link Component - Nested Button/Link not allowed</p>
                        </VdCardFooter>
                      </VdCard>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4 xl: p-5">
                      <VdCard className="relative pt-0">
                        <div className="absolute inset-0 z-30 aspect-square md:aspect-video bg-black/35 " />
                        <img
                          src="https://avatar.vercel.sh/shadcn1"
                          alt="Event cover"
                          className="relative z-20 aspect-square md:aspect-video w-full object-cover "
                        />
                        <VdCardHeader>
                          <VdCardAction>
                            <Badge variant="secondary">Featured</Badge>
                          </VdCardAction>
                          <VdCardTitle>Default Div header, Responsive image</VdCardTitle>
                          <VdCardDescription>
                            Title - Default div
                            Apsect Ratio - square for mobile, video for iPad and Desktop
                          </VdCardDescription>
                        </VdCardHeader>
                        <VdCardFooter>
                          <Button className="w-full">View Event</Button>
                        </VdCardFooter>
                      </VdCard>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4 xl: p-5">
                      <VdCard className="relative pt-0">
                        <div className="absolute inset-0 z-30 aspect-square md:aspect-video bg-black/35 " />
                        <img
                          src="https://avatar.vercel.sh/shadcn1"
                          alt="Event cover"
                          className="relative z-20 aspect-square md:aspect-video w-full object-cover "
                        />
                        <VdCardHeader>
                          <VdCardAction>
                            <Badge variant="secondary">Featured</Badge>
                          </VdCardAction>
                          <VdCardTitle as='h1'>H1 title, Responsive image</VdCardTitle>
                          <VdCardDescription>
                            Title - H1<br></br>
                            Apsect Ratio - square for mobile, video for iPad and Desktop
                          </VdCardDescription>
                        </VdCardHeader>
                        <VdCardFooter>
                          <Button className="w-full">View Event</Button>
                        </VdCardFooter>
                      </VdCard>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4 xl: p-5">
                      <VdCard className="relative pt-0">
                        <div className="absolute inset-0 z-30 aspect-square md:aspect-video bg-black/35 " />
                        <img
                          src="https://avatar.vercel.sh/shadcn1"
                          alt="Event cover"
                          className="relative z-20 aspect-square md:aspect-video w-full object-cover "
                        />
                        <VdCardHeader>
                          <VdCardAction>
                            <Badge variant="secondary">Featured</Badge>
                          </VdCardAction>
                          <VdCardTitle as='h2'>H2 title, Responsive image</VdCardTitle>
                          <VdCardDescription>
                            Title - H2<br></br>
                            Apsect Ratio - square for mobile, video for iPad and Desktop
                          </VdCardDescription>
                        </VdCardHeader>
                        <VdCardFooter>
                          <Button className="w-full">View Event</Button>
                        </VdCardFooter>
                      </VdCard>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4 xl: p-5">
                      <VdCard className="relative pt-0">
                        <div className="absolute inset-0 z-30 aspect-square md:aspect-video bg-black/35 " />
                        <img
                          src="https://avatar.vercel.sh/shadcn1"
                          alt="Event cover"
                          className="relative z-20 aspect-square md:aspect-video w-full object-cover "
                        />
                        <VdCardHeader>
                          <VdCardAction>
                            <Badge variant="secondary">Featured</Badge>
                          </VdCardAction>
                          <VdCardTitle as='h3'>H3 title, Responsive image</VdCardTitle>
                          <VdCardDescription>
                            Title - H3<br></br>
                            Apsect Ratio - square for mobile, video for iPad and Desktop
                          </VdCardDescription>
                        </VdCardHeader>
                        <VdCardFooter>
                          <Button className="w-full">View Event</Button>
                        </VdCardFooter>
                      </VdCard>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4 xl: p-5">
                      <VdCard className="relative pt-0">
                        <div className="absolute inset-0 z-30 aspect-square md:aspect-video bg-black/35 " />
                        <img
                          src="https://avatar.vercel.sh/shadcn1"
                          alt="Event cover"
                          className="relative z-20 aspect-square md:aspect-video w-full object-cover "
                        />
                        <VdCardHeader>
                          <VdCardAction>
                            <Badge variant="secondary">Featured</Badge>
                          </VdCardAction>
                          <VdCardTitle as='h4'>H4 title, Responsive image</VdCardTitle>
                          <VdCardDescription>
                            Title - H4<br></br>
                            Apsect Ratio - square for mobile, video for iPad and Desktop
                          </VdCardDescription>
                        </VdCardHeader>
                        <VdCardFooter>
                          <Button className="w-full">View Event</Button>
                        </VdCardFooter>
                      </VdCard>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4 xl: p-5">
                      <VdCard className="relative pt-0">
                        <div className="absolute inset-0 z-30 aspect-square md:aspect-video bg-black/35 " />
                        <img
                          src="https://avatar.vercel.sh/shadcn1"
                          alt="Event cover"
                          className="relative z-20 aspect-square md:aspect-video w-full object-cover "
                        />
                        <VdCardHeader>
                        <VdCardOverline>
                            Title - H4 | Overline | Responsive Image
                          </VdCardOverline>
                          <VdCardTitle as='h4'>H4 title, Responsive image</VdCardTitle>
                        </VdCardHeader>
                        <VdCardFooter>
                          <Button className="w-full">View Event</Button>
                        </VdCardFooter>
                      </VdCard>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4 xl: p-5">
                      <VdCard className="relative pt-0">
                        <div className="absolute inset-0 z-30 aspect-square md:aspect-video bg-black/35 " />
                        <img
                          src="https://avatar.vercel.sh/shadcn1"
                          alt="Event cover"
                          className="relative z-20 aspect-square md:aspect-video w-full object-cover "
                        />
                        <VdCardHeader>
                          <VdCardOverline>
                            Title - H4 | Overline | Responsive Image
                          </VdCardOverline>
                          <VdCardTitle as='h4'>H4 title, Responsive image</VdCardTitle>
                          <VdCardTagline>
                              Tagline...
                            </VdCardTagline>
                        </VdCardHeader>
                        <VdCardFooter>
                          <Button className="w-full">View Event</Button>
                        </VdCardFooter>
                      </VdCard>
                    </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
