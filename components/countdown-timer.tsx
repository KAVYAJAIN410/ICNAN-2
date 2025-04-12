"use client"

import { useState, useEffect } from "react"

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 60,
    hours: 5,
    minutes: 21,
    seconds: 32,
  })

  useEffect(() => {
    const targetDate = new Date("2025-12-18T00:00:00")

    const interval = setInterval(() => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference <= 0) {
        clearInterval(interval)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-white py-4 px-4 ">
      <div className="container mx-auto">
        <div className="flex justify-center gap-4 md:gap-8">
          <div className="flex flex-col items-center">
            <div className="bg-[#0a2240] text-white text-3xl font-bold w-16 h-16 flex items-center justify-center rounded">
              {timeLeft.days}
            </div>
            <span className="text-sm mt-1">Days</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#0a2240] text-white text-3xl font-bold w-16 h-16 flex items-center justify-center rounded">
              {timeLeft.hours.toString().padStart(2, "0")}
            </div>
            <span className="text-sm mt-1">Hrs</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#0a2240] text-white text-3xl font-bold w-16 h-16 flex items-center justify-center rounded">
              {timeLeft.minutes.toString().padStart(2, "0")}
            </div>
            <span className="text-sm mt-1">Mins</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#0a2240] text-white text-3xl font-bold w-16 h-16 flex items-center justify-center rounded">
              {timeLeft.seconds.toString().padStart(2, "0")}
            </div>
            <span className="text-sm mt-1">Secs</span>
          </div>
        </div>
      </div>
    </div>
  )
}
