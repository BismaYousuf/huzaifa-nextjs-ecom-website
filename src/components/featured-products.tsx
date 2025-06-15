"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Star, Heart, ShoppingCart } from "lucide-react"
import Image from "next/image"

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "$99.99",
    originalPrice: "$129.99",
    rating: 4.5,
    reviews: 128,
    image: "/watch.jpg",
    discount: "23% OFF",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "$199.99",
    originalPrice: "$249.99",
    rating: 4.8,
    reviews: 256,
    image: "/watch.jpg",
    discount: "20% OFF",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: "$79.99",
    originalPrice: "$99.99",
    rating: 4.3,
    reviews: 89,
    image: "/watch.jpg",
    discount: "20% OFF",
  },
  {
    id: 4,
    name: "Laptop Stand",
    price: "$49.99",
    originalPrice: "$69.99",
    rating: 4.6,
    reviews: 167,
    image: "/watch.jpg",
    discount: "29% OFF",
  },
  {
    id: 5,
    name: "USB-C Hub",
    price: "$39.99",
    originalPrice: "$59.99",
    rating: 4.4,
    reviews: 203,
    image: "/watch.jpg",
    discount: "33% OFF",
  },
  {
    id: 6,
    name: "Wireless Mouse",
    price: "$29.99",
    originalPrice: "$39.99",
    rating: 4.7,
    reviews: 145,
    image: "/watch.jpg",
    discount: "25% OFF",
  },
  {
    id: 7,
    name: "Phone Case",
    price: "$19.99",
    originalPrice: "$29.99",
    rating: 4.2,
    reviews: 312,
    image: "/watch.jpg",
    discount: "33% OFF",
  },
  {
    id: 8,
    name: "Power Bank",
    price: "$59.99",
    originalPrice: "$79.99",
    rating: 4.5,
    reviews: 189,
    image: "/watch.jpg",
    discount: "25% OFF",
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Badge at top left */}
        <div className="mb-8">
          <Badge variant="secondary" className="text-sm font-medium bg-red-500 text-white rounded-sm hover:bg-red-600">
            Featured Products
          </Badge>
        </div>

        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">Best Selling Products</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Discover our most popular items loved by thousands of customers worldwide
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {products.map((product) => (
              <CarouselItem key={product.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                  <CardContent className="p-0">
                    {/* Product Image */}
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={200}
                        height={200}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />

                      {/* Discount Badge */}
                      <Badge className="absolute top-3 left-3 bg-red-500 hover:bg-red-600">{product.discount}</Badge>

                      {/* Action Buttons */}
                      <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button size="sm" variant="secondary" className="w-8 h-8 p-0">
                          <Heart className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="secondary" className="w-8 h-8 p-0">
                          <ShoppingCart className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-2 line-clamp-1">{product.name}</h3>

                      {/* Rating */}
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">({product.reviews})</span>
                      </div>

                      {/* Price */}
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-xl font-bold text-primary">{product.price}</span>
                        <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                      </div>

                      {/* Add to Cart Button */}
                      <Button className="w-full" size="sm">
                        Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  )
}
