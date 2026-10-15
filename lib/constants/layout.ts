/*import FullwidthLayout from "@/components/layouts/fullwidth-layout"
import FullwidthBannerLayout from "@/components/layouts/fulwidth-banner-layout"
import SidebarLayout from "@/components/layouts/sidebar-layout"
import SidebarBannerLayout from "@/components/layouts/sidebar-banner-layout"*/

import { 
    FullwidthLayout,
    FullwidthBannerLayout,
    SidebarLayout,
    SidebarBannerLayout
} from "@/components/layouts/layout"

export const LAYOUTS = {
    FULLWIDTH: { name: 'Full Width', component: FullwidthLayout },
    FULLWIDTH_BANNER: { name: 'Full Width with Banner', component: FullwidthBannerLayout },
    SIDEBAR: { name: 'Sidebar Navigation', component: SidebarLayout },
    SIDEBAR_BANNER: { name: 'Sidebar Navigation with Banner', component: SidebarBannerLayout },
} as const;