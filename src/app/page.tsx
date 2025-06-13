import Component from "@/components/ecommerce-hero";
import { ThemeProvider } from "@/components/theme-provider";
import Image from "next/image";


export default function Home() {
return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <Component />
    </ThemeProvider>
  )
}
