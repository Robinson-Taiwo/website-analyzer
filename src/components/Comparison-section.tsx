import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, MessageSquare, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ComparisonSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-rose-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-rose-950 mb-16">
          Witness the Transformation
        </h2>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="relative aspect-[9/16] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=1600&width=900"
                alt="Original website design"
                layout="fill"
                objectFit="cover"
                className="transition-all duration-300 hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-rose-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Before
              </div>
            </div>
            <Card className="bg-white/80 backdrop-blur-sm border-rose-100">
              <CardHeader>
                <CardTitle className="text-2xl text-rose-950">Design Challenges</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  "Outdated visual aesthetics diminishing brand perception",
                  "Cluttered layout impeding user navigation and engagement",
                  "Lack of mobile responsiveness alienating smartphone users",
                  "Inconsistent branding diluting the company's identity",
                ].map((issue, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center">
                      !
                    </div>
                    <p className="text-rose-950">{issue}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
          <div className="space-y-8">
            <div className="relative aspect-[9/16] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=1600&width=900"
                alt="Redesigned website"
                layout="fill"
                objectFit="cover"
                className="transition-all duration-300 hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                After
              </div>
            </div>
            <Card className="bg-white/80 backdrop-blur-sm border-emerald-100">
              <CardHeader>
                <CardTitle className="text-2xl text-emerald-950">Transformative Improvements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  "Modern, sleek design elevating brand image and user trust",
                  "Intuitive layout enhancing user experience and conversion rates",
                  "Fully responsive design ensuring seamless mobile interactions",
                  "Cohesive branding reinforcing company identity across all elements",
                ].map((improvement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                      ✓
                    </div>
                    <p className="text-emerald-950">{improvement}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="mt-20 text-center space-y-8">
          <h3 className="text-3xl font-bold text-rose-950">Ready to Elevate Your Online Presence?</h3>
          <p className="text-xl text-rose-800 max-w-2xl mx-auto">
            Transform your website from ordinary to extraordinary. Choose your path to digital excellence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/" >

              <Button size="lg" className="bg-rose-600 text-white hover:bg-rose-700 shadow-lg hover:shadow-xl transition-all duration-300">
                <Download className="mr-2 h-5 w-5" />
                Get Your Redesign Now
              </Button>
            </Link>


            <Button size="lg" variant="outline" className="border-rose-600 text-rose-600 hover:bg-rose-50 shadow-lg hover:shadow-xl transition-all duration-300">
              <MessageSquare className="mr-2 h-5 w-5" />
              Consult Our Design Experts
            </Button>
          </div>
          <Link href="learn-more" className="inline-flex items-center text-rose-600 hover:text-rose-700 font-medium">
            Learn more about our process
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}