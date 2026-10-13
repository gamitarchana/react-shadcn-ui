import Header from "../ui/header"
import Footer from "../ui/footer"

export default function SidebarBannerLayout({
    children,
  }: Readonly<{
    children: React.ReactNode
  }>) {
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
              <div className="flex flex-wrap">
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
  