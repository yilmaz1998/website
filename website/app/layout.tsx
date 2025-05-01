import { ReactNode } from "react";
import '../app/globals.css';
import { ThemeProvider } from "next-themes"

export const metadata = {
    title: "Sinan Yilmaz",
  }

  const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Englebert&family=News+Cycle:wght@400;700&display=swap"
          rel="stylesheet"/>
      </head>
        <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        </body>
    </html>
  )
}

export default Layout