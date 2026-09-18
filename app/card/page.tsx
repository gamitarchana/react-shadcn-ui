"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"

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

export default function CardPage() {
  const myCardClikHandler = () => {
    console.log("MyCard Clicked");
  }

  return (
    <div className="flex min-h-svh p-6">
        <div className="flex min-w-0 flex-col gap-4 text-sm leading-loose">
            <h1 className="scroll-m-20 text-4xl tracking-tight lg:text-5xl font-heading">Cards</h1>
            <div>
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
  )
}
