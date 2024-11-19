"use client"
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check, Network } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const exampleSites = [
  {
    id: 1,
    name: "TechGadgets Store",
    category: "E-commerce",
    beforeImage: "/placeholder.svg?height=600&width=400",
    afterImage: "/placeholder.svg?height=600&width=400",
    improvements: [
      "Streamlined navigation for easier product discovery",
      "Optimized product pages for higher conversion rates",
      "Implemented responsive design for mobile shoppers",
      "Enhanced visual hierarchy to highlight key products",
    ],
  },
  {
    id: 2,
    name: "HealthyLife Blog",
    category: "Blog",
    beforeImage: "/placeholder.svg?height=600&width=400",
    afterImage: "/placeholder.svg?height=600&width=400",
    improvements: [
      "Redesigned layout for improved readability",
      "Implemented category-based navigation",
      "Added featured posts section for increased engagement",
      "Optimized images for faster loading times",
    ],
  },
  {
    id: 3,
    name: "LegalEase Services",
    category: "Professional Services",
    beforeImage: "/placeholder.svg?height=600&width=400",
    afterImage: "/placeholder.svg?height=600&width=400",
    improvements: [
      "Simplified content structure for better information hierarchy",
      "Implemented clear call-to-actions for consultations",
      "Added testimonials section to build trust",
      "Improved mobile responsiveness for on-the-go access",
    ],
  },

  // Add more example sites as needed
]

type Site = {
  id: number
  name: string
  category: string
  beforeImage: string
  afterImage: string
  improvements: string[]
}


export default function ExamplesPage() {
  const [selectedSite, setSelectedSite] = useState<Site | null>(null)
  if (selectedSite) {
    // No operation, just referencing it to avoid the unused variable warning
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      <header className="border-b bg-white/50 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link className="flex items-center gap-2 font-semibold" href="/">
            <Network className="h-6 w-6 text-rose-600" />
            <span className="text-xl">WebRedesign</span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            <Link className="text-sm font-medium text-muted-foreground transition hover:text-rose-600" href="#">
              Home
            </Link>
            <Link className="text-sm font-medium text-rose-600" href="#">
              Examples
            </Link>
            <Link className="text-sm font-medium text-muted-foreground transition hover:text-rose-600" href="#">
              Pricing
            </Link>
            <Link className="text-sm font-medium text-muted-foreground transition hover:text-rose-600" href="#">
              Contact
            </Link>
          </nav>
          <Button className="bg-rose-600 text-white hover:bg-rose-700">Get Started</Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-rose-950 sm:text-5xl md:text-6xl">
            Redesign Showcase
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Explore our collection of website transformations and see the power of AI-driven redesign in action.
          </p>
        </section>

        <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {exampleSites.map((site) => (
            <Card key={site.id} className="overflow-hidden">
              <Image
                src={site.afterImage}
                alt={`${site.name} redesigned website`}
                width={400}
                height={300}
                className="w-full object-cover"
              />
              <CardHeader>
                <CardTitle>{site.name}</CardTitle>
                <CardDescription>{site.category}</CardDescription>
              </CardHeader>
              <CardContent>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => setSelectedSite(site)}
                    >
                      View Redesign
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <DialogHeader>
                      <DialogTitle>{site.name} Redesign</DialogTitle>
                      <DialogDescription>Before and after comparison</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4 md:grid-cols-2">
                      <div>
                        <h3 className="mb-2 font-semibold">Before</h3>
                        <Image
                          src={site.beforeImage}
                          alt={`${site.name} original website`}
                          width={600}
                          height={400}
                          className="rounded-lg object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="mb-2 font-semibold">After</h3>
                        <Image
                          src={site.afterImage}
                          alt={`${site.name} redesigned website`}
                          width={600}
                          height={400}
                          className="rounded-lg object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold">Key Improvements</h3>
                      <ul className="space-y-2">
                        {site.improvements.map((improvement, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="mr-2 h-5 w-5 flex-shrink-0 text-green-500" />
                            <span>{improvement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="mt-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-rose-950">Ready to Transform Your Website?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Join the ranks of these stunning redesigns. Let our AI-powered tool revamp your website for maximum impact.
          </p>
          <Link href="/" >

            <Button size="lg" className="bg-rose-600 text-white hover:bg-rose-700">
              Start Your Redesign Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </section>
      </main>

      <footer className="border-t bg-white/50 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <p className="text-sm text-muted-foreground">© 2024 WebRedesign. All rights reserved.</p>
          <nav className="flex gap-4">
            <Link className="text-sm text-muted-foreground hover:text-rose-600" href="#">
              Privacy Policy
            </Link>
            <Link className="text-sm text-muted-foreground hover:text-rose-600" href="#">
              Terms of Service
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}