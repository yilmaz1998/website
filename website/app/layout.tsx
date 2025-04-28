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