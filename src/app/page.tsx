"use client";
import { Menu, X } from "lucide-react";
import { Network } from "lucide-react"

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import PricingModal from "@/components/Pricing-modal";
import WebsiteForm from "@/components/WebsiteForm";

export default function LandingPage() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Disable scrolling when the mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = ""; // Cleanup on unmount
    };
  }, [isMobileMenuOpen]);


  const [isPricingModalVisible, setIsPricingModalVisible] = useState(false);

  const togglePricingModal = () => {
    setIsPricingModalVisible(!isPricingModalVisible);
  };


  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-rose-50">
      <header className="border-b bg-white/50 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link className="flex items-center gap-2 font-semibold" href="/">
            <Network className="h-6 w-6 text-rose-600" />
            <span className="text-xl">WebRedesign</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden gap-6 md:flex">
            <Link className="text-sm font-medium text-rose-600" href="examples">
              Showcase
            </Link>
            <button
              onClick={togglePricingModal}
              className="text-sm font-medium text-muted-foreground transition hover:text-rose-600"
            >
              Pricing
            </button>
            <Link
              className="text-sm font-medium text-muted-foreground transition hover:text-rose-600"
              href="#"
            >
              Workflow
            </Link>
          </nav>

          {/* Get Started Button with Sign In Link */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              className="text-sm font-medium text-muted-foreground transition hover:text-rose-600"
              href="#"
            >
              Sign In
            </Link>
            <Button className="bg-rose-600 text-white hover:bg-rose-700">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-rose-600" />
            ) : (
              <Menu className="h-6 w-6 text-rose-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="flex flex-col justify-center text-center gap-4 p-4 bg-white md:hidden">
            <Link className="text-sm font-medium text-rose-600" href="examples">
              Showcase
            </Link>
            <Button
              className="text-sm shadow-none hover:bg-transparent outline-none bg-transparent font-medium text-muted-foreground transition hover:text-rose-600"
              onClick={togglePricingModal}
            >
              Pricing
            </Button>
            <Link
              className="text-sm font-medium text-muted-foreground transition hover:text-rose-600"
              href="#"
            >
              Workflow
            </Link>
            <Button className="w-full bg-rose-600 text-white hover:bg-rose-700">
              Get Started
            </Button>
          </nav>
        )}
      </header>


      <main className="container mx-auto px-4">
        {/* Main Content */}
        <div className="flex min-h-screen flex-col items-center justify-center gap-8 py-20">
          <div className="relative w-full max-w-4xl space-y-8 text-center">
            <div className="space-y-4">
              <h1 className="bg-gradient-to-r from-rose-600 to-yellow-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl md:text-7xl">
                Transform Your Website Design
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Enter your website URL below and let our AI analyze and generate a modern, optimized redesign in seconds
              </p>
            </div>
            {/* <form
              onSubmit={(e) => e.preventDefault()}
              className="group mx-auto flex max-w-3xl items-center gap-2 rounded-full bg-white p-2 shadow-2xl shadow-rose-100/50 ring-1 ring-rose-100 transition-shadow hover:shadow-rose-200/50 focus-within:ring-2 focus-within:ring-rose-200"
            >
              <input
                type="url"
                placeholder="Enter your website URL..."
                className="flex-1 bg-transparent px-4 py-3 text-lg outline-none placeholder:text-muted-foreground/60"
              />
              <button
                type="submit"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-600 text-white shadow-sm transition-colors hover:bg-rose-700"
              >
                <Search className="h-5 w-5" />
                <span className="sr-only">Analyze Website</span>
              </button>
            </form> */}
          </div>
          <WebsiteForm />




          {/* Pricing Modal */}
          {isPricingModalVisible && (
            <PricingModal
              onClose={() => setIsPricingModalVisible(false)}
            />
          )}

        </div>


      </main >
    </div >
  );
}
