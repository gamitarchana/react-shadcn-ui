import Header from "../ui/header"
import Footer from "../ui/footer"

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
			  
            <main className="vd-main-container">
              {children}
            </main>
            <Footer />
          </>
   
    )
  }
  