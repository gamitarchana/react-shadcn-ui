import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Heading } from "@/components/ui/heading"

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
  } from "@/components/ui/tooltip"

export default function Dialogpage() {
  return (
    <div className="w-full min-h-svh p-6">
    <div className="w-full">
        <h1 className="scroll-m-20 text-4xl tracking-tight lg:text-5xl font-heading">Dialogs & Tooltips</h1>
        <div className="py-8"> 
            <Heading as="h2" variant="h2" title="Dialogs" className="pb-4"/>
            <div className="py-4"> 
                <Dialog>
                <DialogTrigger render={<Button variant="outline">Open Dialog-1</Button>} />
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                    <DialogTitle>Dialog</DialogTitle>
                    <DialogDescription>
                        Defualt Dailog custom button.
                    </DialogDescription>
                    </DialogHeader>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <DialogFooter className="sm:justify-start">
                    <DialogClose render={<Button type="button">Close</Button>} />
                    </DialogFooter>
                </DialogContent>
                </Dialog>
                </div>
                <div className="py-4"> 
                    <Dialog>
                        <DialogTrigger render={<Button variant="outline">Sticky Footer</Button>} />
                        <DialogContent>
                            <DialogHeader>
                            <DialogTitle>Sticky Footer</DialogTitle>
                            <DialogDescription>
                                This dialog has a sticky footer that stays visible while the content
                                scrolls.
                            </DialogDescription>
                            </DialogHeader>
                            <div className="-mx-4 no-scrollbar max-h-[50vh] overflow-y-auto px-4">
                            {Array.from({ length: 10 }).map((_, index) => (
                                <p key={index} className="mb-4 leading-normal">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            ))}
                            </div>
                            <DialogFooter>
                            <DialogClose render={<Button variant="outline">Close</Button>} />
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
                <div className="py-4"> 
                    <Dialog>
                        <DialogTrigger render={<Button variant="outline">Scrollable Content</Button>} />
                        <DialogContent>
                            <DialogHeader>
                            <DialogTitle>Scrollable Content</DialogTitle>
                            <DialogDescription>
                                This is a dialog with scrollable content.
                            </DialogDescription>
                            </DialogHeader>
                            <div className="-mx-4 no-scrollbar max-h-[50vh] overflow-y-auto px-4">
                            {Array.from({ length: 10 }).map((_, index) => (
                                <p key={index} className="mb-4 leading-normal">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            ))}
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </div>
        <div className="py-8"> 
            <Heading as="h2" variant="h2" title="Tooltips" className="pb-4"/>
            <div className="py-4"> 
                <Tooltip>
                    <TooltipTrigger render={<Button variant="outline">Hover</Button>} />
                    <TooltipContent>
                        <p>Add to library</p>
                    </TooltipContent>
                </Tooltip>
            </div>
            <div className="py-4"> 
                <div className="flex flex-wrap gap-2">
                    {(["left", "top", "bottom", "right"] as const).map((side) => (
                        <Tooltip key={side}>
                        <TooltipTrigger render={<Button variant="outline" className="w-fit capitalize">{side}</Button>} />
                        <TooltipContent side={side}>
                            <p>Add to library</p>
                        </TooltipContent>
                        </Tooltip>
                    ))}
                </div>
            </div>
            <div className="py-4"> 
                <div className="flex flex-wrap gap-2">
                    {(["left", "top", "bottom", "right"] as const).map((side) => (
                        <Tooltip key={side}>
                        <TooltipTrigger render={<Button variant="outline" className="w-fit capitalize">{side}</Button>} />
                        <TooltipContent side={side}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        </TooltipContent>
                        </Tooltip>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}
