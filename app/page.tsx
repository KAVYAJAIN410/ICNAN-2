import Image from "next/image"
import Link from "next/link"
import { Clock } from "lucide-react"
import CountdownTimer from "@/components/countdown-timer"
import SpeakerCard from "@/components/speaker-card"
import SponsorGrid from "@/components/sponsor-grid"
import ResponsiveTimeline from "@/components/timeline"


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navigation Bar */}
      <header className="bg-[#0a2240] text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image src="VITLOGO.png" alt="VIT Logo" width={120} height={120} className="mr-2" />
          </div>
          <nav className="hidden md:flex space-x-4 text-sm">
            <Link href="#" className="hover:underline">
              Home
            </Link>
            <span>|</span>
            <Link href="#" className="hover:underline">
              Conference info
            </Link>
            <span>|</span>
            <Link href="#" className="hover:underline">
              Organisers
            </Link>
            <span>|</span>
            <Link href="#" className="hover:underline">
              Call for papers
            </Link>
            <span>|</span>
            <Link href="#" className="hover:underline">
              Gallery
            </Link>
            <span>|</span>
            <Link href="#" className="hover:underline">
              Contact
            </Link>
            <span>|</span>
            <Link href="#" className="hover:underline">
              FAQ
            </Link>
            <span>|</span>
            <Link href="#" className="hover:underline">
              Login
            </Link>
          </nav>
        </div>
      </header>

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
     
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between relative z-10 min-h-[600px]">
          <div className="flex-shrink-0 mb-6 md:mb-0 ">
            
             
                  <Image
                    src={`Logo.png`}
                    alt={`Icon `}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                
           
          </div>
          <div className="text-center md:text-right h-[500px] md:h-auto  text-white">
            <h1 className="text-4xl font-bold mb-2">ICNAN '25</h1>
            <h2 className="text-xl mb-4">
              3<sup>rd</sup> International Conference on
              <br />
              Nanoscience And Nanotechnology
            </h2>
            <div className="flex items-center justify-center md:justify-end mb-4">
              <Clock className="mr-2" />
              <span>December 18-20, 2025</span>
            </div>
            <p className="mb-4">ORGANISED BY</p>
            <p className="text-sm mb-6">
              Centre for Nanoscience and Technology
              <br />
              Institute of Technology-Vellore, TN, India
            </p>
            <div className="flex gap-4 justify-center md:justify-end">
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

      <h2 className="text-3xl font-bold text-center mt-8  bold">IMPORTANT DATES</h2>
      <div className=" md:py-12 md:m-10 ">
      <div className="container mx-auto">
  
        <ResponsiveTimeline />
      </div>
    </div>

      {/* Themes and Journals */}
      <section className="py-10 px-4">
        <div className="container mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-center">Themes</h3>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li>Materials and Nanoscience (Advanced Materials)</li>
              <li>Nanomaterials and Nanotechnology</li>
              <li>Advanced Nanomaterials (Nanomedicine)</li>
              <li>Nanomaterials for Energy Applications</li>
              <li>Polymer Blends and Nanocomposites</li>
              <li>Nanoscience and Nanotechnology Applications</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-center">Journals and Publications</h3>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li>Journal of Nanoscience and Nanotechnology</li>
              <li>Advanced Materials and Interfaces</li>
              <li>Advanced Nanomaterials (Nanomedicine)</li>
              <li>Journal of Nanomaterials and Nanotechnology</li>
              <li>Polymer Composites and Nanocomposites</li>
              <li>Journal of Nanoscience and Nanotechnology Applications</li>
            </ul>
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
      <h2 className="text-3xl font-bold text-center mb-8">ABOUT ICNAN '25</h2>
      
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="overflow-hidden rounded-lg">
            <Image
              src="about.png"
              alt="Conference Image"
              width={400}
              height={200}
              className="w-full h-auto"
            />
          </div>
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
  <SpeakerCard />

  {/* Sponsors Section */}
  <SponsorGrid />

  {/* Footer */}
  <footer className=" text-white py-8 px-4 bg-[#0a2240]">
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="mr-4">
            <Image src="logo.png" alt="ICNAN Logo" width={140} height={140} />
          </div>
          <div>
            <h3 className="text-lg font-bold">ICNAN-25</h3>
          </div>
        </div>
        <div className="text-sm text-right">
          <p>Centre for Nanoscience and Technology</p>
          <p>Institute of Technology-Vellore, TN, India</p>
          <p>December 18-20, 2025</p>
          <p>Email: contact@icnan25.org</p>
          <p>Phone: +91 123 456 7890</p>
        </div>
      </div>
      <div className="text-center text-xs">
        <p>© 2025 ICNAN. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
</section>

    </div>
    
  )
}
