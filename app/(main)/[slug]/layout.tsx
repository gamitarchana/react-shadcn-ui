/*import FullwidthLayout from "@/components/layouts/fullwidth-layout"
import FullwidthBannerLayout from "@/components/layouts/fulwidth-banner-layout"
import SidebarLayout from "@/components/layouts/sidebar-layout"
import SidebarBannerLayout from "@/components/layouts/sidebar-banner-layout"*/

import { LAYOUTS } from '@/lib/constants/layout'; 

import { cache } from 'react'

export const getPage = cache(async (slug: string) => {
  console.log("getPage----------");
  const res = await fetch(`http://localhost:1337/api/${slug}?[populate]=*`, { next: { revalidate: 10 } });
  return res.json();
});

interface MainLayoutProps {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}

export default async function MainLayout({ children, params }: MainLayoutProps) {

  const { slug } = await params;


  const resp = await getPage(slug);
  if( null == resp || ( null == resp.data && null != resp.error ) ){
    if( null != resp && null != resp.error && 404 != resp.error.status ) {
      console.log("Error: getPage(): " + resp.error.status + ' - ' + resp.error.message);
      throw new Error("getPage(): " + resp.error.status + ' - ' + resp.error.message); 
    } else if( null == resp || ( null != resp.error && 404 == resp.error.status) ) {
      console.log("Page not found");
    }
  }

    const page = resp.data;
    type LayoutKey = keyof typeof LAYOUTS;
    let SelectedLayout = LAYOUTS['FULLWIDTH'].component;
    if(page.pageTemplate && page.pageTemplate.pageTemplate) {
        const template: LayoutKey = page.pageTemplate.pageTemplate as LayoutKey;
        SelectedLayout = LAYOUTS[template].component;
    }
  //const breadcrumbs = [{title: 'Home', link: '/'}]
  return (

        <>
            <SelectedLayout breadcrumbs={[{title: 'Home', link: '/'}]} title={page.title}>{children}</SelectedLayout>
          {/*
            ( null == page.pageTemplate || null == page.pageTemplate.pageTemplate || (
              page.pageTemplate && page.pageTemplate.pageTemplate && page.pageTemplate.pageTemplate === 'FULLWIDTH' ))
            && 
              <FullwidthLayout>{children}</FullwidthLayout>
            */}
          {/*
            page.pageTemplate && page.pageTemplate.pageTemplate && page.pageTemplate.pageTemplate === 'FULLWIDTH_BANNER' 
            && 
              <FullwidthBannerLayout>{children}</FullwidthBannerLayout>
          */}
          {/*
            page.pageTemplate && page.pageTemplate.pageTemplate && page.pageTemplate.pageTemplate === 'SIDEBAR' 
            && 
              <SidebarLayout>{children}</SidebarLayout>
          */}
          {/*
            page.pageTemplate && page.pageTemplate.pageTemplate && page.pageTemplate.pageTemplate === 'SIDEBAR_BANNER' 
            && 
              <SidebarBannerLayout>{children}</SidebarBannerLayout>
          */}
        </>
 
  )
}
