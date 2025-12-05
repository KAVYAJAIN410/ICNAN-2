import Image from "next/image"

export default function SponsorGrid() {
  const mainSponsor = { src: "/Sinsil.png", alt: "Sinsil" }

  const sponsors = [
    { src: "/Nanotec.png", alt: "Nanotec" },
    { src: "/hind_high_vacuum_company_logo (1).jpg", alt: "Hind High Vacuum" },
    { src: "/SRS.jpg", alt: "SRS" },
    { src: "/ametek2.png", alt: "Ametek" },
    { src: "/nanoshel.png", alt: "Nanoshel" },
    { src: "/pl.png", alt: "PL" },
    { src: "/nss.jpg", alt: "NSS" },
    { src: "/holmarc.png", alt: "Holmarc" },
    { src: "/ika.png", alt: "IKA" },
    { src: "/harish.jpg", alt: "Harish" },
    { src: "/anrf.jpg", alt: "ANRF" },
    { src: "/DRDO.png", alt: "DRDO" },
  ]

  const mediaPartners = [
    { src: "/Media.png", alt: "Conference Alerts", href: "https://conferencealerts.co.in/" },
  ]

  return (
    <section className="py-10 px-4 relative">
      {/* Background circles (hide on very small screens) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-20 -left-20 hidden sm:block">
          <div className="w-40 h-40 border-4 border-blue-500 rounded-full opacity-10" />
        </div>
        <div className="absolute -top-20 -right-20 hidden sm:block">
          <div className="w-40 h-40 border-4 border-blue-500 rounded-full opacity-10" />
        </div>
      </div>

      <div className="container mx-auto relative z-10 max-w-6xl">
        <h2
          className="text-2xl sm:text-3xl font-bold text-center text-[#0a2240] mb-8 sm:mb-10"
          style={{ fontFamily: "Gill Sans Ultra Bold, sans-serif" }}
        >
          OUR SPONSORS
        </h2>

        {/* Main sponsor */}
        <div className="flex justify-center mb-8 sm:mb-10">
          <Image
            src={mainSponsor.src}
            alt={mainSponsor.alt}
            width={200}
            height={100}
            className="w-32 sm:w-40 md:w-48 h-auto object-contain"
          />
        </div>

        {/* All other sponsors in a responsive grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 justify-items-center">
          {sponsors.map((sponsor) => (
            <div key={sponsor.src} className="flex items-center justify-center">
              <Image
                src={sponsor.src}
                alt={sponsor.alt}
                width={180}
                height={90}
                className="w-28 sm:w-32 md:w-40 h-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* Media partner */}
        <h2
          className="text-lg sm:text-xl font-bold text-center text-[#0a2240] mt-12 mb-6"
          style={{ fontFamily: "Gill Sans Ultra Bold, sans-serif" }}
        >
          MEDIA PARTNER
        </h2>

        <div className="flex flex-wrap gap-6 justify-center">
          {mediaPartners.map((partner) => (
            <a
              key={partner.src}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                width={200}
                height={100}
                className="w-32 sm:w-40 md:w-48 h-auto object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
