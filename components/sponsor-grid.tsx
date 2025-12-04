import Image from "next/image"

export default function SponsorGrid() {
  // const sponsors = [
  //   { name: "LittleMORE", logo: "/placeholder.svg?height=60&width=120" },
  //   { name: "AMETEK", logo: "/placeholder.svg?height=60&width=120" },
  //   { name: "GreenTech", logo: "/placeholder.svg?height=60&width=120" },
  //   { name: "CTA", logo: "/placeholder.svg?height=60&width=120" },
  //   { name: "Quasar Tech", logo: "/placeholder.svg?height=60&width=120" },
  //   { name: "HORIBA", logo: "/placeholder.svg?height=60&width=120" },
  //   { name: "Anton Paar", logo: "/placeholder.svg?height=60&width=120" },
  //   { name: "Inkarr", logo: "/placeholder.svg?height=60&width=120" },
  //   { name: "Integrated Systems", logo: "/placeholder.svg?height=60&width=120" },
  // ]

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
        <h2 className="text-3xl font-bold text-center text-[#0a2240]  mb-10" style={{ fontFamily: 'Gill Sans Ultra Bold, sans-serif' }}>OUR SPONSORS</h2>
        <div className="flex gap-8 justify-center">
          <div>
           <img src="Sinsil.png" className="w-44"></img>
          </div>
        </div>
        <div className="flex justify-center gap-20 m-8 mt-10">
        <div > 
           <img src="/Nanotec.png" className="w-36"></img>
        </div>
         <div > 
           <img src="/hind_high_vacuum_company_logo (1).jpg"  className="w-36"></img>
        </div>
         <div > 
           <img src="/SRS.jpg"  className="w-36"></img>
        </div>
         <div > 
           <img src="/ametek2.png"  className="w-60"></img>
        </div>
        </div>
        <div className="flex justify-center gap-36">
        <div > 
           <img src="/nanoshel.png" className="w-60"></img>
        </div>
         <div className="mt-12"> 
           <img src="/pl.png"  className="w-36"></img>
        </div>
         <div > 
           <img src="/nss.jpg"  className="w-36"></img>
        </div>
       
        </div>
             <div className="flex justify-center gap-36">
              <div > 
           <img src="/holmarc.png" className="w-60 mt-12"></img>
        </div>
        <div > 
           <img src="/ika.png" className="w-60 mt-12"></img>
        </div>
         
         <div > 
           <img src="/harish.jpg"  className="w-36 mt-12"></img>
        </div>
       
        </div>
         <div className="flex justify-center gap-36">
            
        <div > 
           <img src="/anrf.jpg" className="w-60 mt-16"></img>
        </div>
         
         <div > 
           <img src="/DRDO.png"  className="w-36 mt-12"></img>
        </div>
       
        </div>
        <h2 className="text-xl font-bold text-center  text-[#0a2240]  mb-10 mt-10" style={{ fontFamily: 'Gill Sans Ultra Bold, sans-serif' }}>MEDIA PARTNER</h2>
     
          <div className="flex gap-8 justify-center">
         <a href="https://conferencealerts.co.in/ "> <img src="Media.png" className="w-44"></img></a>
        </div>
      </div>
    </section>
  )
}
