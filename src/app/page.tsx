import Component from "@/components/ecommerce-hero";
import { FeaturedProducts } from "@/components/featured-products";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";


export default function Home() {
return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <Component />
      <FeaturedProducts/>
      <Footer/>
    </ThemeProvider>
  )
}
