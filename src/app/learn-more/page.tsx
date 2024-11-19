"use client"
import { Network, Search, Sparkles, PenTool, LayoutGrid, Zap, } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import PricingModal from "@/components/Pricing-modal"
import { useState } from "react"

export default function LearnMoreProcess() {
  const steps = [
    {
      icon: <Search className="h-6 w-6" />,
      title: "1. Website Analysis",
      description: "Our AI scans your current website, identifying design flaws and areas for improvement.",
    },
    {
      icon: <PenTool className="h-6 w-6" />,
      title: "2. Design Generation",
      description: "Based on the analysis, we create a new design that addresses the identified issues.",
    },
    {
      icon: <LayoutGrid className="h-6 w-6" />,
      title: "3. Layout Optimization",
      description: "We optimize the layout for better user experience and conversion rates.",
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "4. Visual Enhancement",
      description: "Colors, typography, and imagery are refined to create a modern, appealing look.",
    },
    {
      icon: <Network className="h-6 w-6" />,
      title: "5. Responsive Adaptation",
      description: "The new design is adapted to ensure perfect display on all devices.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "6. Performance Boost",
      description: "We optimize for speed and efficiency, ensuring your site loads quickly.",
    },
  ]

  const [isPricingModalVisible, setIsPricingModalVisible] = useState(false);

  const togglePricingModal = () => {
    setIsPricingModalVisible(!isPricingModalVisible);
  };


  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      <header className="border-b bg-white/50 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link className="flex items-center gap-2 font-semibold" href="/">
            <Network className="h-6 w-6 text-rose-600" />
            <span className="text-xl">WebRedesign</span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            <Link className="text-sm font-medium text-muted-foreground transition hover:text-rose-600" href="/">
              Home
            </Link>
            <Link className="text-sm font-medium text-rose-600" href="#">
              Examples
            </Link>
            <Link className="text-sm font-medium text-muted-foreground transition hover:text-rose-600" href="#">
              Pricing
            </Link>
            <Link className="text-sm font-medium text-muted-foreground transition hover:text-rose-600" href="#">

            </Link>
          </nav>
          <Button className="bg-rose-600 text-white hover:bg-rose-700">Get Started</Button>
        </div>
      </header>
      <main className="container mx-auto px-4 py-16">
        <section className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-rose-950 sm:text-5xl md:text-6xl">
            Our Website Redesign Process
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Discover how we transform your website from ordinary to extraordinary in six simple steps.
          </p>
        </section>
        <section className="mb-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <Card key={index} className="bg-white/50 backdrop-blur-sm transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                    {step.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-rose-950">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{step.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        <section className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-rose-950">Why Choose Our Redesign Process?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Our AI-powered process combines speed, precision, and creativity to deliver stunning results.
          </p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Lightning Fast",
                description: "Get your redesign in minutes, not weeks.",
              },
              {
                title: "Data-Driven Decisions",
                description: "Every change is backed by AI analysis and best practices.",
              },
              {
                title: "Customizable Results",
                description: "Fine-tune the redesign to match your brand perfectly.",
              },
            ].map((feature, index) => (
              <Card key={index} className="bg-white/50 backdrop-blur-sm transition-shadow hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-rose-950">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        <section className="text-center">
          <h2 className="mb-4 text-3xl font-bold text-rose-950">Ready to Transform Your Website?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Experience the power of AI-driven design and take your online presence to the next level.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="bg-rose-600 text-white hover:bg-rose-700">
              Start Your Redesign Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-rose-600 text-rose-600 hover:bg-rose-50"
              onClick={togglePricingModal}
            >
              See Pricing
            </Button>
          </div>
          {/* <Link
            href="#"
            className="mt-4 inline-flex items-center text-rose-600 hover:text-rose-700"
          >
            View pricing plans
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link> */}

          {/* Pricing Modal */}
          {isPricingModalVisible && (
            <PricingModal
              onClose={() => setIsPricingModalVisible(false)}
            />
          )}
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