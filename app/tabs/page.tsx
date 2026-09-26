"use client"

import * as React from "react"
import { Heading } from "@/components/ui/heading"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MyTabs, MyTabsContent, MyTabsList, MyTabsTrigger } from "@/components/ui/my-tabs"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"

import {
    MyCollapsible,
    MyCollapsibleContent,
    MyCollapsibleTrigger,
  } from "@/components/ui/my-collapsible"

export default function Tabspage() {
    const [open, setOpen] = React.useState(false)

  return (
    <div className="w-full min-h-svh p-6">
    <div className="w-full">
        <h1 className="scroll-m-20 text-4xl tracking-tight lg:text-5xl font-heading">Tabs & Collapsible</h1>
        <div className="py-8"> 
            <Heading as="h2" variant="h2" title="Default Shadcn Tabs" className="pb-4"/>
                <div className="py-4"> 
                    <Tabs defaultValue="account" className="w-[400px]">
                        <TabsList>
                            <TabsTrigger value="account">Account</TabsTrigger>
                            <TabsTrigger value="password">Password</TabsTrigger>
                        </TabsList>
                        <TabsContent value="account">Make changes to your account here.</TabsContent>
                        <TabsContent value="password">Change your password here.</TabsContent>
                    </Tabs>
                </div>
                <div className="py-4"> 
                    <Tabs defaultValue="account" className="w-[400px]">
                        <TabsList variant="line">
                            <TabsTrigger value="account">Account</TabsTrigger>
                            <TabsTrigger value="password">Password</TabsTrigger>
                        </TabsList>
                        <TabsContent value="account">Make changes to your account here.</TabsContent>
                        <TabsContent value="password">Change your password here.</TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
        <div className="py-8"> 
            <Heading as="h2" variant="h2" title="My Tabs" className="pb-4"/>
                <div className="py-4"> 
                    <MyTabs defaultValue="account" className="w-[400px]">
                        <MyTabsList>
                            <MyTabsTrigger value="account">Account</MyTabsTrigger>
                            <MyTabsTrigger value="password">Password</MyTabsTrigger>
                        </MyTabsList>
                        <MyTabsContent value="account">Make changes to your account here.</MyTabsContent>
                        <MyTabsContent value="password">Change your password here.</MyTabsContent>
                    </MyTabs>
                </div>
                <div className="py-4"> 
                    <MyTabs defaultValue="account" className="w-[400px]">
                        <MyTabsList variant="line">
                            <MyTabsTrigger value="account">Account</MyTabsTrigger>
                            <MyTabsTrigger value="password">Password</MyTabsTrigger>
                        </MyTabsList>
                        <MyTabsContent value="account">Make changes to your account here.</MyTabsContent>
                        <MyTabsContent value="password">Change your password here.</MyTabsContent>
                    </MyTabs>
                </div>
            </div>
            <div className="py-8"> 
                <Heading as="h2" variant="h2" title="Default Collapsible" className="pb-4"/>
                <div className="py-4"> 
                    <Collapsible>
                        <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
                        <CollapsibleContent>
                            Yes. Free to use for personal and commercial projects. No attribution
                            required.
                        </CollapsibleContent>
                    </Collapsible>
                </div>
                <div className="py-4"> 
                    <Collapsible open={open} onOpenChange={setOpen}>
                        <p>Can I use this in my project?</p>
                        <CollapsibleTrigger >
                        { !open ? <span>Read More</span> : <span>Read Less</span>}</CollapsibleTrigger>
                        <CollapsibleContent>
                            Yes. Free to use for personal and commercial projects. No attribution
                            required.
                        </CollapsibleContent>
                    </Collapsible>
                </div>
            </div>
            <div className="py-8"> 
                <Heading as="h2" variant="h2" title="Customs Collapsible" className="pb-4"/>
                <div className="py-4"> 
                    <MyCollapsible>
                        <MyCollapsibleTrigger>Can I use this in my project?</MyCollapsibleTrigger>
                        <MyCollapsibleContent>
                            Yes. Free to use for personal and commercial projects. No attribution
                            required.
                        </MyCollapsibleContent>
                    </MyCollapsible>
                </div>
                <div className="py-4"> 
                    <MyCollapsible open={open} onOpenChange={setOpen}>
                        <p>Can I use this in my project?</p>
                        <MyCollapsibleTrigger  variant='primary'>
                        { !open ? <span>Read More</span> : <span>Read Less</span>}</MyCollapsibleTrigger>
                        <MyCollapsibleContent>
                            Yes. Free to use for personal and commercial projects. No attribution
                            required.
                        </MyCollapsibleContent>
                    </MyCollapsible>
                </div>
                <div className="py-4"> 
                    <MyCollapsible open={open} onOpenChange={setOpen}>
                        <p>Can I use this in my project?</p>
                        <MyCollapsibleTrigger  variant='primary_outline'>
                        { !open ? <span>Read More</span> : <span>Read Less</span>}</MyCollapsibleTrigger>
                        <MyCollapsibleContent>
                            Yes. Free to use for personal and commercial projects. No attribution
                            required.
                        </MyCollapsibleContent>
                    </MyCollapsible>
                </div>
                <div className="py-4"> 
                    <MyCollapsible open={open} onOpenChange={setOpen}>
                        <p>Can I use this in my project?</p>
                        <MyCollapsibleTrigger  variant='line'>
                        { !open ? <span>Read More</span> : <span>Read Less</span>}</MyCollapsibleTrigger>
                        <MyCollapsibleContent>
                            Yes. Free to use for personal and commercial projects. No attribution
                            required.
                        </MyCollapsibleContent>
                    </MyCollapsible>
                </div>
            </div>
        </div>
    )
}
