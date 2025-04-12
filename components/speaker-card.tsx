"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function SpeakerCard() {
  const [currentSpeaker, setCurrentSpeaker] = useState(0)

  const speakers = [
    {
      name: "Dr. Norman J Wagner",
      title:
        "Norman J Wagner is an American engineer, currently the Robert L. Pigford Chair of Chemical Engineering at the University of Delaware. He gained a Bachelor degree in Carnegie Mellon University in 1984.",
      image: "norman.png",
    },
    {
      name: "Dr. Jane Smith",
      title: "Professor of Nanomaterials at MIT with over 20 years of experience in the field of nanotechnology.",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      name: "Dr. Robert Chen",
      title: "Leading researcher in nanomedicine applications from Stanford University.",
      image: "/placeholder.svg?height=150&width=150",
    },
  ]

  const nextSpeaker = () => {
    setCurrentSpeaker((prev) => (prev + 1) % speakers.length)
  }

  const prevSpeaker = () => {
    setCurrentSpeaker((prev) => (prev - 1 + speakers.length) % speakers.length)
  }

  return (
    <section className="py-10 px-4  relative">
      <div className="absolute left-0 right-0 top-0 bottom-0 overflow-hidden">
        <div className="absolute -bottom-20 -left-20">
          <div className="w-40 h-40 border-4 border-blue-500 rounded-full opacity-10"></div>
        </div>
        <div className="absolute -top-20 -right-20">
          <div className="w-40 h-40 border-4 border-blue-500 rounded-full opacity-10"></div>
        </div>
      </div>
      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl font-bold text-center  mb-10">ICNAN '25 SPEAKERS</h2>

        <div className="flex items-center">
          <button onClick={prevSpeaker} className="bg-[#0a2240] text-white p-2 rounded-full mr-4">
            <ChevronLeft size={24} />
          </button>

          <div className="flex-1 bg-white rounded-lg shadow-lg p-6">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-4 md:mb-0 md:mr-6">
                <Image
                  src={speakers[currentSpeaker].image || "/placeholder.svg"}
                  alt={speakers[currentSpeaker].name}
                  width={150}
                  height={150}
                  className="rounded-full border-4 border-[#0a2240]"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0a2240] mb-2">{speakers[currentSpeaker].name}</h3>
                <p className="text-sm text-[#0a2240]">{speakers[currentSpeaker].title}</p>
              </div>
            </div>
          </div>

          <button onClick={nextSpeaker} className="bg-[#0a2240] text-white p-2 rounded-full ml-4">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}
