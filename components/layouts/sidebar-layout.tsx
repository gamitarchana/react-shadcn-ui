import Header from "../ui/header"
import Footer from "../ui/footer"

export default function SidebarLayout({
    children,
  }: Readonly<{
    children: React.ReactNode
  }>) {
    return (
        <>
            <Header variant="dark"/>
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
  