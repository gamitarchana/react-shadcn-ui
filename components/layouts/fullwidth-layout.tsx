import Header from "../ui/header"
import Footer from "../ui/footer"
export default function FullwidthLayout({
    children,
  }: Readonly<{
    children: React.ReactNode
  }>) {
    return (
  
        <>
            <Header variant="dark"/>
            <main className="vd-main-container">
              	{children}
            </main>
            <Footer />
        </>
   
    )
  }
  