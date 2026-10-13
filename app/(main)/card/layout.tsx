import FullwidthLayout from "@/components/layouts/fullwidth-layout"
import FullwidthBannerLayout from "@/components/layouts/fulwidth-banner-layout"
import SidebarLayout from "@/components/layouts/sidebar-layout"
import SidebarBannerLayout from "@/components/layouts/sidebar-banner-layout"

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (

        <>
          <SidebarLayout>{children}</SidebarLayout>
        </>
 
  )
}
