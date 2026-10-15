interface MainLayoutProps {
  children: React.ReactNode;
}

export default async function MainLayout({ children }: MainLayoutProps) {
  
  return (

        <>
          {children}
        </>
 
  )
}
