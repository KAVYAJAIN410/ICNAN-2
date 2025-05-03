"use client"
import Image from "next/image"
import Link from "next/link"
import { Clock } from "lucide-react"
import CountdownTimer from "@/components/countdown-timer"
import useMediaQuery from "@/components/useMediaQuery"
import SpeakerCard2 from "@/components/temp"
import SpeakerCard from "@/components/speaker-card"
import SponsorGrid from "@/components/sponsor-grid"
import ResponsiveTimeline from "@/components/timeline"
import { useRef,useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion";


export default function Home() {
  const isMobile = useMediaQuery("(max-width: 800px)");
    const controls = useAnimation();
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, amount: 0.5 }); // 👈 important
      useEffect(() => {
        if (inView) {
          controls.start("visible");
        }
      }, [inView, controls]);
      const themes = [
        'Advanced Nanomaterials and Characterization',
        'Thin Film Deposition Techniques',
        'Molecular Nanoscience, Catalysis, and Applications',
        'Semiconducting Materials and Devices',
        'Electronic Inks for Flexible and Printed Electronics',
        'Nanomaterials and Devices for Energy Harvesting (Solar Cells, Nanogenerators & self-powered devices - triboelectric, piezoelectric and thermoelectric)',
        'Nanomaterials and Devices for Energy Storage (Supercapacitors, Batteries) and Energy Conversion (Fuel Cells)',
        'Nanomaterials and Devices for Environmental Applications (Water Purification, Adsorbents, CO₂ Remediation)',
        'Sensor Technologies',
        'Food, Agriculture, and Healthcare Applications',
        'Automotive Applications',
        'Hydrogen Energy Solutions',
        'Nano-enabled Biomedical Systems and Devices',
        'Nanophotonics and Plasmonics',
        'Magnetic Nanomaterials and Their Applications',
        'Nanocoatings and Surface Modifications',
        'Flexible Electronic Devices',
        'Additive Manufacturing for Energy and Electronic Devices',
        'Nanoelectronics: Modelling, Simulation and Fabrication',
        'Artificial Intelligence and Machine Learning Techniques in Nanotechnology',
        'Density Functional Theory and Molecular Dynamics in Nanotechnology',
        'Quantum Computing Applications in Nanotechnology'
      ];
      
    
      const journals = [
        'Journal of Nanoscience and Nanotechnology',
        'Advanced Materials and Interfaces',
        'Advanced Nanomaterials (Nanomedicine)',
        'Journal of Nanomaterials and Nanotechnology',
        'Polymer Composites and Nanocomposites',
        'Journal of Nanoscience and Nanotechnology Applications',
      ];
    
    
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navigation Bar */}


      {/* Hero Section */}
      <section className="relative w-full  overflow-hidden">
      
      <div
        className="absolute inset-0 bg-no-repeat bg-bottom bg-cover"
        style={{ backgroundImage: "url('Ellipse.png')"}}
      ></div>
      <Image
  src="/molecule.png"
  alt="Vector"
  fill
  className="object-cover absolute inset-0 z-10 opacity-80"
/>
     
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center  relative z-10 md:min-h-[600px]">
          <div className="flex-shrink-0 mb-6 md:mb-0 ">
            
             
                  <Image
                    src={`Logo.png`}
                    alt={`Icon `}
                    width={200}
                    height={200}
                    className="lg:w-full lg:h-full object-cover"
                  />
                
           
          </div>
          <div className="text-center  h-[500px] md:h-auto  text-white">
            <h1 className="text-5xl font-bold mb-2 " style={{ fontFamily: 'Gill Sans Ultra Bold, sans-serif' }}>ICNAN '25</h1>
            <h2 className="text-xl mb-4">
              3<sup>rd</sup> International Conference on
              <br />
              Nanoscience And Nanotechnology
            </h2>
            <div className="flex items-center justify-center  mb-4">
              <Clock className="mr-2" />
              <span>December 18-20, 2025</span>
            </div>
            <div className="flex items-center mb-4">
  <hr className="flex-grow border-t border-gray-300" />
  <span className="mx-4 text-sm font-semibol">ORGANISED BY</span>
  <hr className="flex-grow border-t border-gray-300" />
</div>

           
            <p className="text-sm mb-6">
            Centre for Nanotechnology Research, Vellore Institute of Technology, Vellore, TN, India
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">Schedule</button>
              <button className="bg-transparent border border-white hover:bg-white/10 text-white px-6 py-2 rounded">
                Brochure
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Timer */}
      <CountdownTimer />

      <h2 className="text-5xl font-bold text-center mt-8  bold text-[#0a2240]" style={{ fontFamily: 'Gill Sans Ultra Bold, sans-serif' }}>IMPORTANT DATES</h2>
      <div className=" md:py-12 md:m-10 ">
      <div className="container mx-auto">
  
        <ResponsiveTimeline />
      </div>
    </div>

      {/* Themes and Journals */}
      
      <section className="py-10 px-4">
      <div className="container mx-auto grid md:grid-cols-2 gap-8">

{/* Themes Box with Scrolling List */}
<div>
  <h3 className="text-xl font-semibold mb-4 text-center">Themes</h3>
  <div className="border rounded-xl p-4 bg-white shadow h-64 overflow-hidden relative">
    <ul className="animate-verticalScroll space-y-2 text-sm text-gray-700">
      {themes.concat(themes).map((theme, index) => (
        <li key={index} className="list-disc list-inside">{theme}</li>
      ))}
    </ul>
  </div>
</div>

{/* Journals Box with Scrolling List */}
<div>
  <h3 className="text-xl font-semibold mb-4 text-center">Journals and Publications</h3>
  <div className="border rounded-xl p-4 bg-white shadow h-64 overflow-hidden relative">
    <ul className="animate-verticalScroll space-y-2 text-sm text-gray-700">
      {journals.concat(journals).map((journal, index) => (
        <li key={index} className="list-disc list-inside">{journal}</li>
      ))}
    </ul>
  </div>
</div>

</div>

      
        <div className="flex justify-center gap-4 mt-8">
          <button className="border border-[#0a2240] text-[#0a2240] px-6 py-2 rounded hover:bg-gray-200">
            Full Paper
          </button>
          <button className="border border-[#0a2240] text-[#0a2240] px-6 py-2 rounded hover:bg-gray-200">
            ICNAN Proceedings
          </button>
          <button className="border border-[#0a2240] text-[#0a2240] px-6 py-2 rounded hover:bg-gray-200">
            Oral / Poster
          </button>
        </div>
      </section>
      <section
  className="relative bg-cover bg-center bg-no-repeat text-white"
  style={{ backgroundImage: "url('image.png')" }}
>

      {/* Statistics */}
      <section className="py-10 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-4 gap-4 text-center">
            <div>
              <h3 className="text-4xl font-bold ">25+</h3>
              <p className="text-sm">
                Participating
                <br />
                Countries
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-bold ">60+</h3>
              <p className="text-sm">
                Appointed
                <br />
                Speakers
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-bold ">400+</h3>
              <p className="text-sm">
                Registered
                <br />
                Participants
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-bold ">525+</h3>
              <p className="text-sm">
                Research
                <br />
                Papers
              </p>
            </div>
          </div>
        </div>
      </section>

 
  {/* Overlay to darken the bg a bit if needed */}
  <div className=" py-10 px-4 text-white">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8" style={{ fontFamily: 'Gill Sans Ultra Bold, sans-serif' }}>ABOUT ICNAN '25</h2>
      
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {[1, 2, 3].map((i) => (
           <motion.div
                  ref={ref}
                  variants={{
                    hidden: { opacity: 0, x: -200 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  initial="hidden"
                  animate={controls}
                  transition={{ duration: 1 }}
                >
          <div key={i} className="overflow-hidden rounded-lg">
            <Image
              src="about.png"
              alt="Conference Image"
              width={400}
              height={200}
              className="w-full h-auto"
            />
          </div>
          </motion.div>
        ))}
      </div>

      <p className="text-sm leading-relaxed">
        ICNAN '2025 aims to bring together Indian and International communities (students, scientists, engineers and
        stakeholders) from all of the government, academics, industry and private research organizations. The
        conference will provide a platform to exchange and discuss new and exciting advances in the field.
      </p>
    </div>
  </div>

  {/* Speakers Section */}
  {isMobile ? <SpeakerCard2 /> : <SpeakerCard />}

  {/* Sponsors Section */}
  <SponsorGrid />


</section>

    </div>
    
  )
}
