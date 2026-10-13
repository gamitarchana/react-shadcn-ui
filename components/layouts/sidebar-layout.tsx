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

export default function SidebarLayout({
    children,
  }: Readonly<{
    children: React.ReactNode
  }>) {
    return (
        <>
            <Header variant="dark"/>
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
  