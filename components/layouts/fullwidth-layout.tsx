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


export default function FullwidthLayout({
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
				<main className="vd-content-entry">
					{children}
				</main>
            </div>
            <Footer />
        </>
   
    )
  }
  