"use client"

import { useEffect, useState } from "react"

interface TimelineItem {
  id: number
  title: string
  subtitle?: string
  date: string
  status?: "closed" | "active" | "upcoming"
  position: "top" | "bottom"
}

export default function ResponsiveTimeline() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const timelineItems: TimelineItem[] = [
    {
      id: 1,
      title: "Abstract Submission",
      subtitle: "Extended Abstract (2 pages, 1000 words)",
      date: "20.09.2025",
      status: "closed",
      position: "top",
    },
    {
      id: 2,
      title: "Early Bird",
      subtitle: "Registration",
      date: "20.09.2025",
      position: "bottom",
    },
    {
      id: 3,
      title: "Early Bird",
      subtitle: "Registration",
      date: "20.09.2025",
      position: "top",
    },
    {
      id: 4,
      title: "Early Bird",
      subtitle: "Registration",
      date: "20.09.2025",
      position: "bottom",
    },
    {
      id: 5,
      title: "Early Bird",
      subtitle: "Registration",
      date: "20.09.2025",
      position: "top",
    },
    {
      id: 6,
      title: "Early Bird",
      subtitle: "Registration",
      date: "20.09.2025",
      position: "bottom",
    },
  ]

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">


      {isMobile ? <MobileTimeline items={timelineItems} /> : <DesktopTimeline items={timelineItems} />}
    </div>
  )
}

function DesktopTimeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative">
      <div className="flex items-center">
        {items.map((item, index) => (
          <div key={item.id} className="flex-1 relative" style={{ zIndex: items.length - index }}>
            {/* Label */}
            <div
              className={`absolute ${item.position === "top" ? "-top-24" : "bottom-[-6.5rem]"} ${index === 0 ? "left-0" : index === items.length - 1 ? "right-0" : "left-1/2 transform -translate-x-1/2"} w-48 text-center`}
            >
              <div className={`flex flex-col items-center`}>
                <div className={`text-center ${item.status === "closed" ? "text-red-600" : ""}`}>
                  <div className="font-medium">{item.title}</div>
                  {item.subtitle && <div className="text-sm">{item.subtitle}</div>}
                </div>
                <div className="h-12 w-1 bg-[#1e3a8a] mt-2"></div>
              </div>
            </div>

            {/* Timeline segment */}
            <div
              className={`h-16 relative ${index === 0 ? "rounded-l-full" : ""} ${index === items.length - 1 ? "rounded-r-full" : ""}`}
            >
              <div
                className={`absolute inset-0 ${item.status === "closed" ? "bg-[#1e3a8a]" : "bg-[#2563eb]"} ${index === 0 ? "rounded-l-full" : ""} ${index === items.length - 1 ? "rounded-r-full" : ""}`}
              >
                {index < items.length - 1 && (
                  <div className="absolute right-0 top-0 bottom-0 w-6 bg-white transform translate-x-3 skew-x-[20deg] z-10"></div>
                )}
                {index > 0 && (
                  <div className="absolute left-0 top-0 bottom-0 w-6 bg-white transform -translate-x-3 -skew-x-[20deg] z-10"></div>
                )}
                <div className="h-full flex items-center justify-center text-white font-medium">
                  {item.status === "closed" ? "CLOSED" : item.date}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function MobileTimeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative pl-8">
      {/* Vertical line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#1e3a8a]"></div>

      <div className="space-y-12">
        {items.map((item) => (
          <div key={item.id} className="relative">
            {/* Circle marker */}
            <div className="absolute left-[-1.75rem] top-0 w-4 h-4 rounded-full bg-[#1e3a8a] border-4 border-white"></div>

            {/* Content */}
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
              <div className={`font-medium ${item.status === "closed" ? "text-red-600" : ""}`}>
                {item.title}
                {item.subtitle && <div className="text-sm">{item.subtitle}</div>}
              </div>
              <div className="mt-2 text-sm font-medium">
                {item.status === "closed" ? (
                  <span className="inline-block px-2 py-1 bg-[#1e3a8a] text-white rounded">CLOSED</span>
                ) : (
                  item.date
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
