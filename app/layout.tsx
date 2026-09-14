import { Quando, Reddit_Sans, Geist_Mono } from 'next/font/google'

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";

const quando = Quando({
  weight: '400',
  display: 'swap',
  variable:'--font-heading',
});

const reddit_sans = Reddit_Sans({
  weight: [ '400', '500', '600', '700'],
  display: 'swap',
  variable:'--font-sans',
});


const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", reddit_sans.variable, quando.variable)}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
