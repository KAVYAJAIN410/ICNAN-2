"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function SpeakerCard2() {
  const [currentSpeaker, setCurrentSpeaker] = useState(0)

  const speakers = [
    {
      id: 1,
      name: "Dr. Adam Lee",
      institution: "Griffith University",
      country: "Australia",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQF24LOl0trhMg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1693871092651?e=1750896000&v=beta&t=YQBXiGgh3hPazG7i0_WHTCRcuEUK92awEJIhX6SFPwk",
      description:
        "Dr. Adam Lee is a renowned researcher in the field of materials science with over 15 years of experience in nanomaterials and their applications.",
    },
    {
      id: 2,
      name: "Dr. Karen Wilson",
      institution: "Griffith University",
      country: "Australia",
      image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=pt4w-Y4AAAAJ&citpid=3",
      description:
        "Dr. Karen Wilson specializes in catalysis and sustainable chemistry, with particular focus on biomass conversion technologies.",
    },
    {
      id: 3,
      name: "Dr. Roland Kádár",
      institution: "Chalmers University of Technology",
      country: "Sweden",
      image:
        "https://chalmers.se/_next/image/?url=https%3A%2F%2Fcms.www.chalmers.se%2FMedia%2Fwywh3s2i%2Fkroland.jpeg%3Fwidth%3D600%26height%3D600%26v%3D1db814c106c6b40%26quality%3D60%26format%3Dwebp&w=640&q=90",
      description:
        "Dr. Roland Kádár is a leading expert in rheology and polymer processing with significant contributions to the field of complex fluids.",
    },
    {
      id: 4,
      name: "Dr. Seiichi Takamatsu",
      institution: "State University of New York at Binghamton",
      country: "USA",
      image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=ewqJgAsAAAAJ&citpid=1",
      description:
        "Dr. Seiichi Takamatsu has pioneered work in flexible electronics and sensor technologies with applications in healthcare and IoT.",
    },
    {
      id: 5,
      name: "Dr. Manoj Gupta",
      institution: "National University of Singapore",
      country: "Singapore",
      image: "https://vit.ac.in/VCAN2020/images/Manoj.jpg",
      description:
        "Dr. Manoj Gupta is internationally recognized for his contributions to lightweight materials and metal matrix composites.",
    },
    {
      id: 6,
      name: "Dr. John V Kennedy",
      institution: "GNS Science",
      country: "New Zealand",
      image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=mxbbX1cAAAAJ&citpid=5",
      description:
        "Dr. John V Kennedy specializes in ion beam technology and its applications in materials modification and analysis.",
    },
    {
      id: 7,
      name: "Prof. Marc-Olivier Coppen",
      institution: "University College London",
      country: "UK",
      image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=ZnvGMSIAAAAJ&citpid=2",
      description:
        "Prof. Marc-Olivier Coppen is a leader in chemical engineering with focus on process intensification and sustainable manufacturing.",
    },
    {
      id: 8,
      name: "Dr. Chamil Abeykoon",
      institution: "University of Manchester",
      country: "UK",
      image: "https://www.steconf.org/wp-content/uploads/2022/07/Dr.-Chamil-Abeykoon.jpg.webp",
      description:
        "Dr. Chamil Abeykoon's research spans polymer processing, sustainable manufacturing, and Industry 4.0 technologies.",
    },
    {
      id: 9,
      name: "Dr. Kornelius Nielsch",
      institution: "IFW Dresden",
      country: "Germany",
      image: "/placeholder.svg?height=400&width=400",
      description:
        "Dr. Kornelius Nielsch has made significant contributions to thermoelectric materials and nanostructured systems.",
    },
    {
      id: 10,
      name: "Dr. Nanasaheb D. Thorat",
      institution: "N/A",
      country: "N/A",
      image: "https://vit.ac.in/VCAN2020/images/Thorat.jpg",
      description: "Dr. Nanasaheb D. Thorat is known for his work in nanomedicine and targeted drug delivery systems.",
    },
    {
      id: 11,
      name: "Dr. Alberto Vomiero",
      institution: "Luleå University of Technology",
      country: "Sweden",
      image: "https://premc.org/wp-content/uploads/2016/01/Avatar-Alberto-Vomiero-150.jpg.webp",
      description:
        "Dr. Alberto Vomiero specializes in nanomaterials for energy applications, particularly in photovoltaics and energy storage.",
    },
    {
      id: 12,
      name: "Prof. Lorenzo Pavesi",
      institution: "University of Trento",
      country: "Italy",
      image: "/placeholder.svg?height=400&width=400",
      description:
        "Prof. Lorenzo Pavesi is a pioneer in silicon photonics and integrated optical devices for quantum applications.",
    },
    {
      id: 13,
      name: "Prof. Wim Deferme",
      institution: "Hasselt University",
      country: "Belgium",
      image:
        "https://media.licdn.com/dms/image/v2/C4D03AQFNFrh-d5hJKw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1605901869410?e=1750896000&v=beta&t=Fjib9nQW_wd54OdmJluSZVulpponzvw9A6kfCoP4c-w",
      description:
        "Prof. Wim Deferme's research focuses on printed electronics and smart materials with applications in wearable technology.",
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
                <p className="text-sm text-[#0a2240]">{speakers[currentSpeaker].institution}</p>
                <p className="text-sm text-[#0a2240]">{speakers[currentSpeaker].country}</p>
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