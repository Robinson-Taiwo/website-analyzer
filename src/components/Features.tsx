import { Network, Sparkles, Users } from 'lucide-react'
import React from 'react'

const Features = () => {
  return (
    <div className="grid w-full max-w-5xl gap-8 px-4 sm:grid-cols-3">
    <div className="group space-y-3 rounded-3xl bg-white p-8 shadow-xl shadow-rose-100/10 ring-1 ring-rose-100 transition-shadow hover:shadow-rose-200/20">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-600">
        <Network className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold text-rose-950">Instant Analysis</h3>
      <p className="text-muted-foreground">
        Advanced AI analysis identifies design issues and opportunities for improvement
      </p>
    </div>
    <div className="group space-y-3 rounded-3xl bg-white p-8 shadow-xl shadow-rose-100/10 ring-1 ring-rose-100 transition-shadow hover:shadow-rose-200/20">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-600">
        <Sparkles className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold text-rose-950">Smart Redesign</h3>
      <p className="text-muted-foreground">
        Get an AI-generated mockup that follows modern design principles and best practices
      </p>
    </div>
    <div className="group space-y-3 rounded-3xl bg-white p-8 shadow-xl shadow-rose-100/10 ring-1 ring-rose-100 transition-shadow hover:shadow-rose-200/20">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-600">
        <Users className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold text-rose-950">Detailed Report</h3>
      <p className="text-muted-foreground">
        Compare before and after designs with a comprehensive analysis report
      </p>
    </div>
  </div>
  )
}

export default Features
