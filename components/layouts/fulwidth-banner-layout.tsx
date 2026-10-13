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

export default function FullwidthBannerLayout({
    children,
  }: Readonly<{
    children: React.ReactNode
  }>) {
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
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink render={<Link className="no-underline" href="/">Home</Link>} />
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbPage>Cards</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
                </div>
                <main className="vd-content-entry">
                	{children}
                </main>
            </div>
            <Footer />
          </>
   
    )
  }
  