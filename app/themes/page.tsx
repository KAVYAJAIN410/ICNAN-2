"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView, useAnimation } from "framer-motion"
import { ArrowRight, ChevronRight, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Conference themes organized by categories
const themeCategories = [
  {
    id: "materials",
    name: "Materials & Characterization",
    themes: [
      "Advanced Nanomaterials and Characterization",
      "Thin Film Deposition Techniques",
      "Molecular Nanoscience, Catalysis, and Applications",
      "Semiconducting Materials and Devices",
      "Electronic Inks for Flexible and Printed Electronics",
      "Magnetic Nanomaterials and Their Applications",
      "Nanocoatings and Surface Modifications",
    ],
  },
  {
    id: "applications",
    name: "Applications & Devices",
    themes: [
      "Energy Harvesting (Solar Cells, Nanogenerators & self-powered devices)",
      "Energy Storage (Supercapacitors, Batteries)",
      "Energy Conversion (Fuel Cells)",
      "Environmental Applications (Water Purification, Adsorbents, CO2 Remediation)",
      "Sensor Technologies",
      "Food, Agriculture, and Healthcare Applications",
      "Automotive Applications",
      "Hydrogen Energy Solutions",
      "Nano-enabled Biomedical Systems and Devices",
      "Flexible Electronic Devices",
      "Additive Manufacturing for Energy and Electronic Devices",
    ],
  },
  {
    id: "advanced",
    name: "Advanced Techniques",
    themes: [
      "Nanophotonics and Plasmonics",
      "Nanoelectronics: Modelling, Simulation and Fabrication",
      "Artificial Intelligence and Machine Learning Techniques in Nanotechnology",
      "Density Functional Theory and Molecular Dynamics in Nanotechnology",
      "Quantum Computing Applications in Nanotechnology",
    ],
  },
]

// Images for the gallery section
const themeImages = [
  { id: 1, alt: "Nanomaterials visualization", category: "materials" },
  { id: 2, alt: "Thin film deposition process", category: "materials" },
  { id: 3, alt: "Solar cell nanomaterials", category: "applications" },
  { id: 4, alt: "Nanoscale sensors", category: "applications" },
  { id: 5, alt: "Quantum computing visualization", category: "advanced" },
  { id: 6, alt: "AI in nanotechnology", category: "advanced" },
  { id: 7, alt: "Nanophotonics research", category: "advanced" },
  { id: 8, alt: "Biomedical nanosystems", category: "applications" },
]

export default function ThemesPage() {
  const [activeCategory, setActiveCategory] = useState("materials")
  const themesRef = useRef(null)
  const galleryRef = useRef(null)
  const themesControls = useAnimation()
  const galleryControls = useAnimation()
  const isThemesInView = useInView(themesRef, { once: false, amount: 0.2 })
  const isGalleryInView = useInView(galleryRef, { once: false, amount: 0.2 })

  // Animate sections when they come into view
  useEffect(() => {
    if (isThemesInView) {
      themesControls.start("visible")
    }
    if (isGalleryInView) {
      galleryControls.start("visible")
    }
  }, [themesControls, galleryControls, isThemesInView, isGalleryInView])

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-900 to-navy-950 text-white">
      {/* Animated Hexagon Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-10 z-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              backgroundColor: `hsl(${Math.random() * 60 + 200}, 70%, 50%)`,
              animationDuration: `${Math.random() * 30 + 20}s`,
              animationDelay: `${Math.random() * 5}s`,
              animation: "float infinite ease-in-out alternate",
              opacity: 0.3,
            }}
          />
        ))}
      </div>

   

  

      {/* Themes Section */}
      <section ref={themesRef} className="container mx-auto py-16 relative z-10 ">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={themesControls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
        >
          <span className="text-primary">Themes</span>
        </motion.h2>

        <Tabs defaultValue="materials" onValueChange={setActiveCategory} className="w-full">
          <TabsList className="grid grid-cols-3 max-w-2xl mx-auto mb-8">
            <TabsTrigger value="materials">Materials</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="advanced">Advanced Techniques</TabsTrigger>
          </TabsList>

          {themeCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 gap-6"
              >
                {category.themes.map((theme, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <Card className="bg-navy-800/40 backdrop-blur-sm border-none hover:bg-navy-800/60 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-primary">{index + 1}</span>
                          </div>
                          <div>
                            <h3 className="text-lg font-medium mb-2">{theme}</h3>
                            <Button variant="ghost" size="sm" className="group/btn p-0 h-auto">
                              <span className="text-primary text-sm">Explore research</span>
                              <ArrowRight className="ml-1 h-3 w-3 text-primary group-hover/btn:translate-x-1 transition-transform" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* Visual Gallery Section */}
      <section ref={galleryRef} className="container mx-auto py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={galleryControls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="text-center mb-12"
        >
          {/* <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nanoscience <span className="text-primary">Visualized</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore the fascinating world of nanoscience and nanotechnology through these visual representations
          </p> */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={galleryControls}
          variants={{
            visible: { opacity: 1, transition: { duration: 0.8, delay: 0.2 } },
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {themeImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={galleryControls}
              variants={{
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 + index * 0.1,
                  },
                },
              }}
              className="relative group overflow-hidden rounded-lg"
              style={{
                height: index % 3 === 0 ? "300px" : "220px",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Image
                src={`/placeholder.svg?height=600&width=800`}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-medium">{image.alt}</p>
                <span className="text-xs text-gray-300 capitalize">{image.category}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

     

     
    

   
    </div>
  )
}
