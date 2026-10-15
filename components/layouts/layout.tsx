import Header from "../ui/header"
import Footer from "../ui/footer"
import Link from "next/link"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

interface BreadcrumbProps {
  title: string;
  link: string;
}

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  breadcrumbs? : BreadcrumbProps[];
}

const FullwidthLayout = ({
    children,
    title,
    breadcrumbs
  }: LayoutProps) => {
    return (
  
        <>
            <Header variant="dark"/>
            <div className="vd-main-container">
              <div className="pt-4">
                { breadcrumbs && breadcrumbs.length > 0 && 
                    <Breadcrumb>
                        <BreadcrumbList>
                            {breadcrumbs.map( (breadcrumb: BreadcrumbProps) =>
                            <>
                                <BreadcrumbItem>
                                <BreadcrumbLink render={<Link className="no-underline" href={breadcrumb.link}>{breadcrumb.title}</Link>} />
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                            </>
                            ) 
                            }
                            <BreadcrumbItem>
                            <BreadcrumbPage>{title}</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                }
              </div>
				<main className="vd-content-entry">
					{children}
				</main>
            </div>
            <Footer />
        </>
   
    )
}
  
const FullwidthBannerLayout = ({
    children,
    title,
    breadcrumbs
}: LayoutProps) => {
    return (

        <>
            {/*<header className="px-4 py-2 fixed top-0 right-0 left-0 bg-primary text-primary-foreground z-30"><h2 className="m-0 text-primary-foreground">Fullwidth Banner Header</h2></header>*/}
            <Header/>
            <div className="h-svh w-full z-20">
                <img
                    src="https://avatar.vercel.sh/shadcn1"
                    alt="Event cover"
                    className="h-full w-full object-cover "
                />
            </div>
            
            <div className="vd-main-container">
                <div className="pt-4">
                    { breadcrumbs && breadcrumbs.length > 0 && 
                        <Breadcrumb>
                            <BreadcrumbList>
                                {breadcrumbs.map( (breadcrumb: BreadcrumbProps) =>
                                <>
                                    <BreadcrumbItem>
                                    <BreadcrumbLink render={<Link className="no-underline" href={breadcrumb.link}>{breadcrumb.title}</Link>} />
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                </>
                                ) 
                                }
                                <BreadcrumbItem>
                                <BreadcrumbPage>{title}</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb> 
                    }
                </div>
                <main className="vd-content-entry">
                    {children}
                </main>
            </div>
            <Footer />
        </>
    
    )
}


const SidebarLayout = ({
    children,
    title,
    breadcrumbs
}: LayoutProps) => {
    return (
        <>
            <Header variant="dark"/>
            <div className="vd-main-container">
                <div className="pt-4">
                { breadcrumbs && breadcrumbs.length > 0 && 
                    <Breadcrumb>
                        <BreadcrumbList>
                            {breadcrumbs.map( (breadcrumb: BreadcrumbProps) =>
                            <>
                                <BreadcrumbItem>
                                <BreadcrumbLink render={<Link className="no-underline" href={breadcrumb.link}>{breadcrumb.title}</Link>} />
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                            </>
                            ) 
                            }
                            <BreadcrumbItem>
                            <BreadcrumbPage>{title}</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb> 
                }
                </div>
                <div className="vd-content-entry flex flex-wrap">
                    <main className="w-full lg:w-3/4">
                        {children}
                    </main>
                    <aside className="w-full lg:w-1/4"><h2 className="m-0">Sidebar</h2></aside>
                </div>
            </div>
            <Footer />
        </>
    )
}

const SidebarBannerLayout = ({
    children,
    title,
    breadcrumbs
}: LayoutProps) => {
    return (
        <>
            <Header/>
            <div className="h-svh w-full z-20">
                    <img
                        src="https://avatar.vercel.sh/shadcn1"
                        alt="Event cover"
                        className="h-full w-full object-cover "
                    />
                </div>
            <div className="vd-main-container">
                <div className="pt-4">
                    { breadcrumbs && breadcrumbs.length > 0 && 
                        <Breadcrumb>
                            <BreadcrumbList>
                                {breadcrumbs.map( (breadcrumb: BreadcrumbProps) =>
                                <>
                                    <BreadcrumbItem>
                                    <BreadcrumbLink render={<Link className="no-underline" href={breadcrumb.link}>{breadcrumb.title}</Link>} />
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                </>
                                ) 
                                }
                                <BreadcrumbItem>
                                <BreadcrumbPage>{title}</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb> 
                    }
                </div>
                <div className="vd-content-entry flex flex-wrap">
                    <main className="w-full lg:w-3/4">
                        {children}
                    </main>
                    <aside className="w-full lg:w-1/4"><h2 className="m-0">Sidebar</h2></aside>
                </div>
            </div>
            <Footer />
        </>
    )
}
  
export {
    FullwidthLayout,
    FullwidthBannerLayout,
    SidebarLayout,
    SidebarBannerLayout
}