"use client"

import { useRef, useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import { Dialog, DialogContent } from "@/components/ui/dialog2"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { motion, useInView, useAnimation } from "framer-motion"

type Speaker = {
  id: number
  name: string
  institution: string
  country: string
  image: string
  description?: string
}

const speakers: Speaker[] = [
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

export default function SpeakerGallery() {
  const [selectedImage, setSelectedImage] = useState<(typeof speakers)[0] | null>(null)
  
  const [positions, setPositions] = useState<number[]>(Array.from({ length: speakers.length }, (_, i) => i))
  const [isAutoRotating, setIsAutoRotating] = useState(true)
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [inView, controls])

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isAutoRotating) {
      interval = setInterval(() => {
        setPositions((prevPositions) => {
          const newPositions = [...prevPositions]
          const heroIndex = newPositions.indexOf(0)
          const nextHeroIndex = (heroIndex + 1) % speakers.length
          ;[newPositions[heroIndex], newPositions[nextHeroIndex]] = [
            newPositions[nextHeroIndex],
            newPositions[heroIndex],
          ]
          return newPositions
        })
      }, 3000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isAutoRotating])

  const handleCardClick = (index: number) => {
    
    // Pause auto-rotation for 10 seconds when a user interacts
    setIsAutoRotating(false)
   setSelectedImage(speakers[index])

    setPositions((prevPositions) => {
      const newPositions = [...prevPositions]
      const heroIndex = newPositions.indexOf(0)
      ;[newPositions[heroIndex], newPositions[index]] = [newPositions[index], newPositions[heroIndex]]
      return newPositions
    })

    // Resume auto-rotation after 10 seconds
    setTimeout(() => setIsAutoRotating(true), 10000)
  }

  return (
    <>
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-b from-slate-50 to-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-[#0b1c2f]">
            ICNAN '25 SPEAKERS
          </h2>
          <p className="text-base sm:text-lg text-slate-700 max-w-3xl mx-auto">
            Meet our distinguished speakers from leading institutions around the world
          </p>
        </motion.div>

        <div className="speaker-gallery">
          {/* Featured Speaker (Hero Position) */}
          <div className="mb-8 sm:mb-12">
          <AnimatePresence mode="wait">
  {positions.map((pos, index) =>
    pos === 0 ? (
      <motion.div
        key={`featured-${speakers[index].id}`}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
                    <div className="bg-gradient-to-br from-[#0b1c2f] to-[#1a365d] rounded-2xl shadow-xl overflow-hidden">
                      <div className="flex flex-col lg:flex-row">
                        <div className="lg:w-2/5 p-6 flex justify-center items-center">
                          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 overflow-hidden rounded-xl border-4 border-blue-400 shadow-lg transform transition-transform duration-500 hover:scale-105">
                            <Image
                              src={speakers[index].image || "/placeholder.svg?height=400&width=400"}
                              alt={speakers[index].name}
                              fill
                              className="object-cover"
                              sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, 256px"
                              priority={true}
                            />
                          </div>
                        </div>
                        <div className="lg:w-3/5 p-6 lg:p-8 text-white">
                         
                          <h3 className="text-2xl sm:text-3xl font-bold mb-2">{speakers[index].name}</h3>
                          <p className="text-blue-300 text-lg mb-4">
                            {speakers[index].institution}
                            {speakers[index].country !== "N/A" && `, ${speakers[index].country}`}
                          </p>
                          <p className="text-slate-300 leading-relaxed">
                            {speakers[index].description ||
                              "Distinguished speaker with expertise in advanced materials and nanotechnology."}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ):null
            )}
            </AnimatePresence>
          </div>

          {/* Grid of Other Speakers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          
          >
            {positions.map(
              (pos, index) =>
                pos !== 0 && (
                  <motion.div
                    key={`grid-${speakers[index].id}`}
                    className="cursor-pointer"
                    onClick={() => handleCardClick(index)}
                    transition={{
                      type: "spring",
                      stiffness: 600,
                      damping: 30,
                      layout: { duration: 1 },
                    }}
                    
                  >
                    <div className="bg-gradient-to-br from-[#0b1c2f] to-[#1a365d] rounded-xl shadow-lg h-full border border-blue-500/30 flex flex-col transition-all duration-300 hover:shadow-xl group">
                      <div className="relative w-full pt-[100%] rounded-t-xl overflow-hidden">
                        <Image
                          src={speakers[index].image || "/placeholder.svg?height=400&width=400"}
                          alt={speakers[index].name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1c2f]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-4 flex-grow">
                        <h3 className="text-lg font-semibold text-white mb-1 line-clamp-1">{speakers[index].name}</h3>
                        <p className="text-sm text-blue-300 line-clamp-1">{speakers[index].institution}</p>
                        <p className="text-xs text-slate-400 mt-1">
                          {speakers[index].country !== "N/A" ? speakers[index].country : ""}
                        </p>
                      </div>
                      <div className="p-4 pt-0">
                        <span className="inline-flex items-center justify-center rounded-full bg-blue-900/30 px-3 py-1 text-xs font-medium text-blue-200">
                          View Details
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ),
            )}
          </div>
        </div>
      </div>
     
    </section>
     <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
     <DialogContent className="max-w-4xl p-0 overflow-hidden bg-background">
       {selectedImage && (
   
           <div className="bg-gradient-to-br from-[#0b1c2f] to-[#1a365d] rounded-2xl shadow-xl overflow-hidden">
                      <div className="flex flex-col lg:flex-row">
                        <div className="lg:w-2/5 p-6 flex justify-center items-center">
                          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 overflow-hidden rounded-xl border-4 border-blue-400 shadow-lg transform transition-transform duration-500 hover:scale-105">
                            <Image
                              src={selectedImage.image || "/placeholder.svg?height=400&width=400"}
                              alt={selectedImage.name}
                              fill
                              className="object-cover"
                              sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, 256px"
                              priority={true}
                            />
                          </div>
                        </div>
                        <div className="lg:w-3/5 p-6 lg:p-8 text-white">
                         
                          <h3 className="text-2xl sm:text-3xl font-bold mb-2">{selectedImage.name}</h3>
                          <p className="text-blue-300 text-lg mb-4">
                            {selectedImage.institution}
                            {selectedImage.country !== "N/A" && `, ${selectedImage.country}`}
                          </p>
                          <p className="text-slate-300 leading-relaxed">
                            {selectedImage.description ||
                              "Distinguished speaker with expertise in advanced materials and nanotechnology."}
                          </p>
                        </div>
                      </div>
                    </div>
 
       )}
     </DialogContent>
   </Dialog>
   </>
  )
}
