"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog2"

export default function SpeakerCard2() {
  const [currentSpeaker, setCurrentSpeaker] = useState(0)
  const [selectedImage, setSelectedImage] = useState<(typeof speakers)[0] | null>(null)
  const [autoScroll, setAutoScroll] = useState(true)

  type Speaker = {
    id: number
    name: string
    institution: string
    country: string
    image: string
    description?: string
  }
  
  const handleCardClick = (index: number) => {
    setSelectedImage(speakers[index])
    // Pause auto-scroll when user interacts
    setAutoScroll(false)
    // Resume auto-scroll after 10 seconds
    setTimeout(() => setAutoScroll(true), 10000)
  }

  const nextSpeaker = useCallback(() => {
    setCurrentSpeaker((prev) => (prev + 1) % speakers.length)
  }, [])

  const prevSpeaker = () => {
    setCurrentSpeaker((prev) => (prev - 1 + speakers.length) % speakers.length)
    // Pause auto-scroll when user interacts
    setAutoScroll(false)
    // Resume auto-scroll after 10 seconds
    setTimeout(() => setAutoScroll(true), 10000)
  }

  // Auto-scroll effect
  useEffect(() => {
    if (!autoScroll) return

    const interval = setInterval(() => {
      nextSpeaker()
    }, 3000) // Change speaker every 3 seconds

    return () => clearInterval(interval)
  }, [autoScroll, nextSpeaker])

  



const speakers: Speaker[] = [
  {
    id: 1,
    name: "Dr. Moungi Bawendi",
    institution: "Massachusetts Institute of Technology, USA",
    country: "Nobel Laureate in Chemistry (2023)",
    image: "nobel.jpg",
    description:
      "",
  },

  {
    id: 2,
    name: "Dr. Adam Lee",
    institution: "Griffith University",
    country: "Australia",
    image: "speak/1.jpg",
    description:
      "Dr. Adam Lee is a researcher in nanomaterials and catalysis, with over 15 years of experience in materials science.",
  },
  {
    id: 3,
    name: "Dr. Ajay Thakur",
    institution: "IIT Patna",
    country: "India",
    image: "speak/2.jpg",
    description:
      "Dr. Ajay Thakur is a researcher from IIT Patna with contributions in material science and condensed matter physics.",
  },
  {
    id: 4,
    name: "Dr. Alberto Vomiero",
    institution: "Luleå University of Technology",
    country: "Sweden",
    image: "speak/3.jpeg",
    description:
      "Alberto Vomiero holds the UNESCO chair “Technologies and Materials for Green and Energy Applications”, the chair of Experimental Physics at the Luleå University of Technology, Sweden, and the chair of Industrial Engineering at Ca’ Foscari University of Venice, Italy. He holds a PhD in Electronic Engineering and a Master’s Degree in Physics. His research interests are in composite nanomaterials for energy and environmental applications. He published more than 290 papers in international Journals and 6 book chapters (h-index: 69, citations>15.000). He is a fellow of several Societies, an Alumnus of the Global Young Academy, an associate editor of Nano Energy and an editorial board member of several Journals.",
  },

  {
    id: 5,
    name: "Dr. Ashish Arora",
    institution: "IISER Pune",
    country: "India",
    image: "speak/4.jpg",
    description:
      "Ashish did his PhD from TIFR, Mumbai in the Department of Condensed Matter Physics and Materials Science in 2014. He was a CNRS postdoctoral researcher in National High Magnetic Field Laboratory (LNCMI-CNRS), Grenoble, France for a year (2014-15). He won the prestigious A. v. Humboldt grant for a postdoc in the University of Muenster, Germany (2015-17). Thereafter, he won the highly competitive German Research Foundation (DFG) grant and stayed as a junior group leader in the University of Muenster until August 2021. He joined IISER Pune as an Assistant Professor in September 2021. Ashish has won the European Magnetic Field Laboratory EMFL prize 2019 ‘for his ground-breaking discoveries using the excellent infrastructure at the EMFL facilities’, Young Achiever Award 2023 in 67th DAE Solid State Physics Symposium ‘in recognition for his contribution in Condensed Matter Physics’ and Young Physicist Award at the National Physicists’ Conclave 2024. Starting 2025, Ashish has been elected as a member of Indian National Young Academy of Science (INYAS-INSA).",
  },
  
  {
    id: 6,
    name: "Dr.Chamil Abeykoon",
    institution: "University of Manchester",
    country: "United Kingdom",
    image: "speak/5.jpg",
    description:
      "Chamil Abeykoon is an Associate Professor at the Department of Materials at the University of Manchester and his work is affiliated with the Aerospace Research Institute, the Northwest Composites Centre, Henry Royce Institute for Advanced Materials, and the National Graphene Institute. Chamil received the B.Sc. (Hons.) degree in mechanical engineering from the University of Peradeniya, Sri Lanka, in 2007, with the award of best performance in mechanical engineering, and the Ph.D. degree in mechanical engineering from the Queens University Belfast, U.K., in 2011, with several publications, in which one of his publications received the Young Author Best Paper Award from the IEEE in 2011. So far, he has authored 100+ peer-reviewed journals/conference papers. Moreover, he has authored a monograph, “Polymer Extrusion: A Study on Thermal Monitoring Techniques and Melting Issues.” His current research interests include: process monitoring, modeling, and control; soft sensors and soft sensing; process instrumentation; renewable energy technologies; 3D printing, phase change materials; and heat transfer. He is a Chartered Engineer and an Associate Member of the professional bodies, including IESL, IMechE, IOM3 and ICPM; and also a Fellow of the Higher Education Academy, U.K. Moreover, he is currently serving as an Associate Editor of 5 academic journals including Composites Communications and Journal of Fluid Flow, Heat and Mass Transfer. Also, he has been serving as a visiting professor of Southwest University, China, and He has been served on scientific committees, and he has also been invited for keynote speeches at several international conferences.",
  },
  {
    id: 7,
    name: "Dr. Christopher Shuck",
    institution: "Rutgers University",
    country: "USA",
    image: "speak/6.png",
    description:
      "Dr. Christopher Shuck conducts research in advanced materials and energy systems at Rutgers University.",
  },
  {
    id: 8,
    name: "Dr. D.D. Sarma",
    institution: "IISc",
    country: "India",
    image: "speak/7.jpg",
    description:
      "Dr. D.D. Sarma works in solid-state chemistry and condensed matter physics at IISc Bangalore.",
  },
  {
    id: 9,
    name: "Dr. David Jenkins",
    institution: "University of Plymouth",
    country: "UK",
    image: "speak/8.jpg",
    description:
      "Dr. David Jenkins specializes in sustainable chemistry and catalysis at the University of Plymouth.",
  },
  {
    id: 10,
    name: "Dr Garima Agarwal",
    institution: "IIT Mandi",
    country: "India",
    image: "speak/garima.JPG",
    description:`Garima Agrawal did her M.Tech. in polymer science & technology at the Indian Institute of Technology Delhi, India. During her M.Tech., she received the DAAD Fellowship to carry out a research project at RWTH-Aachen University in Germany. After completing her Ph.D. at DWI Leibniz Institute for Interactive Materials - RWTH Aachen University, Germany in 2015, she joined postdoc at the University of Ghent, Belgium. In 2016, she was appointed as DST Inspire Faculty at Indian Institute of Technology Roorkee, India. Currently, she is working as an associate professor at School of Chemical Sciences, Indian Institute of Technology Mandi, India.
She is the recipient of several prestigious awards including NASI Platinum Jubilee Young Scientist Award (2022) from National Academy of Sciences, India and DST Inspire Faculty Award (2016) from Government of India and Young Achiever’s Award (2023) from IIT Mandi.
Her research interests include the synthesis of functional polymers based novel micro/nanomaterials and using them for designing interactive materials with active properties for targeted applications.
 `
      ,
  },
  {
    id: 11,
    name: "Dr. G. Arthanareeswaran",
    institution: "NIT Trichy",
    country: "India",
    image: "speak/9.jpg",
    description:
      "Dr. G. Arthanareeswaran conducts research on membrane technology and water purification at NIT Trichy.",
  },
  {
    id: 12,
    name: "Dr. John V Kennedy",
    institution: "GNS Science",
    country: "New Zealand",
    image: "speak/10.jpg",
    description:
      "Dr John V Kennedy is a Principal Scientist, Group Leader, Advanced Materials and Nanotechnology at National Isotope Centre, GNS Science (Institute of Geological and Nuclear Science), New Zealand Govt owned crown research institute.   Dr. Kennedy is a Physicist who works on the new materials development for low carbon energy technologies. He uses ion beam technologies pioneered by Lord Rutherford to develop functional materials and to provide key information about the materials structure-property relationship. The results are used across the materials science community for the design of a new product, surface engineering, catalytic materials for hydrogen production and storage, Thermoelectric materials for waste heat to energy conversion, energy storage materials, magnetic materials and energy efficient systems. He has published more than 250 journal papers (h-index of 65) demonstrating ion implantation into polymers, semiconductors, superconductors, nanostructures and 20 international patents. John is programme director. Aotearoa: Green Hydrogen Technology Platform.  He is an Adjunct Professor, Victoria University of Wellington and Honorary Professor, Faculty of Science and Engineering, University of Waikato. He is a Fellow of Royal Society of Chemistry, UK and a Fellow of Royal Society New Zealand.",
  },
  {
    id: 13,
    name: "Dr.Karen Wilson",
    institution: "Griffith University",
    country: "Australia",
    image: "speak/11.jpg",
    description:
      "",
  },

  {
    id: 14,
    name: "Dr. K. S. Narayan",
    institution: "Jawaharlal Nehru Centre for Advanced Scientific Research",
    country: "India",
    image: "speak/12.jpg",
    description:
      "Dr. K. S. Narayan is a Sir J. C. Bose National Fellow and works on optoelectronic materials at JNCASR Bangalore.",
  },
  {
    id: 15,
    name: "Dr. Kornelius Nielsch",
    institution: "Technische Universität Dresden (TUD)",
    country: "Germany",
    image: "speak/13.jpg",
    description:
      "Dr. Kornelius Nielsch has made significant contributions to thermoelectric materials and nanostructured systems.",
  },
  {
    id: 16,
    name: "Dr. Lorenzo Pavesi",
    institution: "University of Trento",
    country: "Italy",
    image: "speak/Lorenzo.jpg",
    description:
      "Lorenzo Pavesi is a Professor of Experimental Physics at the Department of Physics of the University of Trento (Italy). Born on the 21st of November 1961, he received his PhD in Physics in 1990 at the Ecole Polytechnique Federale of Lausanne (Switzerland). In 1990 he became an Assistant Professor, an Associate Professor in 1999 and Full Professor in 2002 at the University of Trento. He leads the Nanoscience Laboratory (25 people), and teaches several classes at the Department of Physics of the University of Trento. He founded the research activity in semiconductor optoelectronics at the University of Trento and started several laboratories of photonics, growth and advanced treatment of materials. He was the first president and founder of the IEEE Italian chapter on Nanotechnology. He was the head of the Department in Physics and the first director of the quantum at Trento Q@TN joint lab. He has directed 42 PhD students and more than 48 Master thesis students. His research activity concerned the optical properties of semiconductors. During the last years, he concentrated on Silicon-based photonics where he looks for the convergence between photonics and electronics. He is interested in active photonic devices which can be integrated into silicon by using optical nonlinearities and modified material properties. His interests encompass also optical sensors or biosensors and solar cells. A recent development is toward integrated quantum photonics and neuromorphic photonics. In silicon photonics, he is one of the worldwide recognized experts, he organized several international conferences, workshops and schools and is a frequently invited speaker. He manages several research projects, both national and international. He is an ERC grantee. He is a frequently invited reviewer, monitor or referee for photonics projects by several grant agencies. He is an author or co-author of more than 500 papers, author of several reviews, editor of more than 15 books, author of 2 books and holds 9 patents. He is chief speciality editor of the section Optics and Photonics of Frontiers in Physics and founding editor of the series Photonic Materials and Applications, a joint initiative of SPIE and Elsevier. Moreover, he sits on the editorial board of the ETRI Journal. He is in the advisory board of Glass-to-Power, an Italian start-up. In 2001 he was awarded the title of Cavaliere by the Italian President for scientific merit. In 2010 and 2011 he was elected distinguished speaker of the IEEE- Photonics society. He is a fellow of the IEEE, of SPIE, of AAIA and of the SIF. He holds an H-number of 65 according to Scopus and of 63 for Web of Science, and of 79 according to Google Scholar.",
  },
  {
    id: 17,
    name: "Dr. Manoj Gupta",
    institution: "National University of Singapore",
    country: "Singapore",
    image: "speak/15.jpg",
    description:
      "Provost Chair Professor Manoj Gupta was a former Head of Materials Division of the Mechanical Engineering Department. He did his Ph.D. from University of California, Irvine, USA (1992), and postdoctoral research at University of Alberta, Canada (1992). He has worked for about 40 years in the area of metallic materials with particular focus on metallic composites of different types. He has taken multiple consultancy work related to failure of materials besides teaching many people in corporate sectors on the same topic. He is currently among top 1% researchers as per Stanford’ List, The Universal Scientific Education and Research Network and ResearchGate. He has published over 730 peer reviewed journal papers and owns two US patents and two Trade Secrets.  His h-index is 89 and citations over 29500. He has also co-authored eight books, published by John Wiley, Springer and MRF - USA. A multiple award winner, he actively collaborate/visit Japan, France, Saudi Arabia, Qatar, China, USA and India as a visiting researcher, professor and chair professor.",
  },
  {
    id: 18,
    name: "Dr. Marc-Olivier Coppen",
    institution: "University College London",
    country: "UK",
    image: "speak/Olivier.jpg",
    description:
      "Marc-Olivier Coppens is the Ramsay Memorial Professor in Chemical Engineering at University College London (UCL), where he directs the Centre for Nature-Inspired Engineering (CNIE). He previously served as Head of Department and Vice-Dean Engineering. Professor Coppens is recognised for pioneering Nature-Inspired Chemical Engineering (NICE), with applications in process intensification, functional materials and devices for sustainable manufacturing, energy, water, and health. He is Fellow of RSC, IChemE, AIChE, and member of the Saxon Academy of Sciences (Germany).",
  },
  {
    id: 19,
    name: "Dr. Michael Naguib",
    institution: "Associate Professor",
    country: "N/A",
    image: "speak/17.jpg",
    description:
      "Dr. Michael Naguib works on advanced materials and nanostructures for energy applications.",
  },
  {
    id: 20,
    name: "Dr. Nanasaheb Devappa Thorat",
    institution: "University of Limerick",
    country: "Ireland",
    image: "speak/18.jpg",
    description:
      "Dr. Nanasaheb Devappa Thorat is known for his work in nanomedicine and targeted drug delivery systems.",
  },
  {
    id: 21,
    name: "Dr. Pranab Goswami",
    institution: "IIT Guwahati",
    country: "India",
    image: "speak/19.jpg",
    description:
      "Prof. Pranab Goswami received a Ph.D. degree in 1994 in chemical biology from Gauhati University. He was a BOYSCAST fellow of DST, India, at the University of Massachusetts Boston. He joined as a scientist at NEIST, CSIR India, in 1990, moved to IIT Guwahati, India, in 2002, attained the level of Professor in 2009, and then HAG Professor in 2015. Prof. Goswami also served as Head of the Department of Biosciences and Bioengineering from 2006-2009, Head of the Centre for Energy from 2014-2017, and Founder Head of the Central Instrument Facility from 2004-2006 at IIT Guwahati. He was a visiting Professor at the University of Alberta, Canada, in 2018. Prof. Goswami received many accolades, served as an editorial board member of many international scientific journals, and was chairman and expert member in many academic, research, and administrative bodies in India. He served as Senate nominee to the BoG, IIT Guwahati. The primary research area of Prof. Goswami is the biosensors and biofuel cells, focusing on developing novel biorecognition systems and signal transduction platforms for malaria, myocardial infarction, Shiga toxin, and alcohols. His group explores biofuel cells as biosensing platforms and green power-generating devices. A couple of proofs-of-concept developed in his lab have already been translated into portable kits, and two of these prototype kits were dedicated to the nation by the honorable HRD minister of India. Prof. Goswami has published over 135 peer-reviewed scientific papers, filed 11 patent applications, edited one book in biosensors, supervised more than 40 research students in Ph.D. and MTech programs, and 25 students have received Ph.D. degrees",
  },
  {
    id: 22,
    name: "Dr. R. Kothandaraman",
    institution: "IIT Madras",
    country: "India",
    image: "speak/20.jpg",
    description:
      "Dr. R. Kothandaraman works in electrochemical energy storage systems and sustainable energy materials at IIT Madras.",
  },
  {
    id: 23,
    name: "Dr. Raghumani Singh Ningthoujam",
    institution: "BARC (Bhabha Atomic Research Centre), Mumbai",
    country: "India",
    image: "speak/21.jpg",
    description:
      "Dr. Raghumani Singh Ningthoujam works as a Scientific Officer (D) at BARC Mumbai specializing in nanomaterials.",
  },
  {
    id: 24,
    name: "Dr. Raman Singh",
    institution: "Monash University",
    country: "Australia",
    image: "speak/22.jpg",
    description:`Professor Raman Singh’s primary research interests are in the relationship of Nano-/microstructure and Environment-assisted degradation and fracture of metallic and composite materials, and Nanotechnology for Advanced Mitigation of such Degradations. He has also worked extensively on use of advanced materials (e.g., graphene) for corrosion mitigation, stress corrosion cracking, and corrosion and corrosion-mitigation of magnesium alloys (including for the use of magnesium alloys for aerospace, energy, defence and bioimplant applications).  
Prof Singh is a senior professor at Monash University, Australia.  He is/was a Guest Professor at ETH Zurich, Switzerland (2020, 2023, 2024, 2026), US Naval Research Lab, Indian Institute of Science, University of Connecticut, Indian Institute of Technology, Kharagpur. He worked as a scientist at Indian Atomic Energy and as a post-doc fellow at University of New South Wales, Australia.
Prof Singh’s professional distinctions and recognitions include: Guest Professor of ETH Zurich, Editor of a book on Cracking of Welds (CRC Press), Lead Editor of a book on Non-destructive Evaluation of Corrosion (Wiley), Editor-in-Chief of an Elsevier and an MDPI journals, leader/chairperson of a few international conferences and numerous plenary/keynote lectures at international conferences, over 285 peer-reviewed international journal publications and 15 book chapter, and several competitive research grants (that includes 4 Discovery, 7 Linkage and one ITRH grants of Australian Research Council).
Prof Singh has supervised 61 PhD students.  His vibrant research group at Monash University comprises of PhD students from different disciplines (Mechanical, Chemical, Materials and Mining Engineering, and Science) as well as from different cultural backgrounds (Australian, Middle-eastern, Chinese, Malaysian, Indian, African, North American and Israeli).
 `
      ,
  },
  {
    id: 25,
    name: "Dr. Roland Kádár",
    institution: "Chalmers University of Technology",
    country: "Sweden",
    image: "speak/23.jpg",
    description:
      "Dr. Roland Kádár is a leading expert in rheology and polymer processing with significant contributions to the field of complex fluids.",
  },
  {
    id: 26,
    name: "Dr. S Anandan",
    institution: "NIT Trichy",
    country: "India",
    image: "speak/24.jpg",
    description:
      "Dr. S Anandan specializes in photocatalysis, solar cells, nanomaterials and environmental remediation technologies.",
  },

  {
    id: 27,
    name: "Dr.S.Balakumar",
    institution: "University of Madras",
    country: "India",
    image: "speak/25m.jpg",
    description:
      "",
  },
  {
    id: 28,
    name: "Dr. Saikat Talapatra",
    institution: "Southern Illinois University, Carbondale",
    country: "USA",
    image: "speak/25.jpg",
    description:
      "Dr. Saikat Talapatra conducts research on nanomaterials, carbon nanostructures, and their applications in energy devices.",
  },
  {
    id: 29,
    name: "Dr. Santanu Das",
    institution: "IIT BHU",
    country: "India",
    image: "speak/26.jpg",
    description:
      "Dr. Santanu Das works in the area of materials chemistry and nanotechnology at IIT BHU.",
  },
  {
    id: 30,
    name: "Dr. Seiichi Takamatsu",
    institution: "State University of New York at Binghamton",
    country: "USA",
    image: "speak/27.jpg",
    description:
      "Dr. Seiichi Takamatsu has pioneered work in flexible electronics and sensor technologies with applications in healthcare and IoT.",
  },
  {
    id: 31,
    name: "Dr. Sudhagar Pitchaimuthu",
    institution: "Heriott Watt University",
    country: "UK",
    image: "speak/28.jpg",
    description:
      "Dr. Sudhagar Pitchaimuthu specializes in solar energy materials, thin films, and nanostructured coatings.",
  },
  {
    id: 32,
    name: "Dr. Unyong Jeong",
    institution: "Pohang University of Science and Technology",
    country: "Korea",
    image: "speak/29.jpg",
    description:
      "Dr. Unyong Jeong works on nanomaterials and their applications in flexible electronics and energy devices.",
  },
  {
    id: 33,
    name: "Dr Venkata Krishnan",
    institution: "IIT Mandi",
    country: "India",
    image: "speak/venkata.JPG",
    description:
      "Prof. Venkata Krishnan completed his Ph.D. in Chemistry in 2006 from University of Stuttgart, Germany after completing his B.Sc. and M.Sc. degrees from PSG College of Technology, Coimbatore, Tamil Nadu, India. Subsequently, he worked as a postdoctoral researcher at University of Pennsylvania, U.S.A. from 2006 to 2010 and then as a research associate at National Institute for Materials Science (NIMS), Tsukuba, Japan from 2010 to 2012. He joined as a faculty at the Indian Institute of Technology (IIT) Mandi in April 2012 and is currently a full professor. His research group is mainly working in the field of Green Chemistry and Heterogeneous Catalysis for Energy and Environment Applications. He has successfully guided 12 Ph.D. and 26 M.Sc. students and is currently guiding 9 Ph.D. and 7 M.Sc. students, in addition to several short-term research interns. He has published more than 180 articles in well reputed international journals and is also a reviewer for several scientific journals. He has been bestowed with several awards, including DST INSPIRE faculty award, IIT Mandi foundation day award for excellence in teaching, MANA research fellowship, DoE postdoctoral fellowship, DFG doctoral fellowship, DAAD visiting scholar fellowship, etc. In addition to teaching and research, he has also served IIT Mandi in various administrative positions, such as first warden of the main hostel in permanent campus, founding coordinator of Advanced Materials Research Center (AMRC), Associate Dean Research and most recently as Dean of Sponsored Research, Industrial Consultancy, and International Relations (SRIC & IR), Director of IIT Mandi iHub and HCi foundation (a technology innovation hub) and Director of IIT Mandi Catalyst (a technology business incubator), besides being on several scientific and administrative committees at institute, national and international levels. Apart from academics, he likes reading books and is interested in linguistics.",
  },
  
  {
    id: 34,
    name: "Dr. Wim Deferme",
    institution: "Hasselt University",
    country: "Belgium",
    image: "speak/30.jpg",
    description:
      `Wim Deferme obtained an engineering degree in Applied Physics at the Technical University of
Eindhoven in The Netherlands in 2003. He obtained a Ph.D. in Materials Physics at Hasselt
University in 2009 on the surface termination of synthetic diamond. In 2009, as a postdoc, he started
research in the field of Printable Electronics. Since February 2014, he has been a Professor at
Hasselt University, heading a group of 1 post-doc, 8 Ph.D. students, two full-time researchers, and
several bachelor and master students in the field of “Engineering of Functional Materials.” His
research activities are focused on the printing of functional materials. Ink formulation towards
functional inks, printing techniques such as inkjet printing, screen printing, and ultrasonic spray
coating, applications such as Organic Electronics, printed sensors for wound monitoring, and
stretchable electronics are among his expertise!
The Functional Materials Engineering (FME) research group, headed by Prof. Wim Deferme, is
focused on the printing and coating of functional materials on a wide variety of substrates by
applying techniques such as inkjet printing, screen printing, ultrasonic spray coating, spin coating,
and blade coating. It is the aim of the FME group to optimize printing and coating techniques in
combination with the engineering of functional materials for applications such as Organic
Photovoltaïcs, printed sensors, health care, and stretchable electronics applications. The group
focuses on the deposition of these devices on non-rigid and/or non-flat substrates such as paper,
textiles, and 3D structures.`,
  },
 
];

  return (
    <section className="py-10 px-4 relative">
      <div className="absolute left-0 right-0 top-0 bottom-0 overflow-hidden">
        <div className="absolute -bottom-20 -left-20">
          <div className="w-40 h-40 border-4 border-blue-500 rounded-full opacity-10"></div>
        </div>
        <div className="absolute -top-20 -right-20">
          <div className="w-40 h-40 border-4 border-blue-500 rounded-full opacity-10"></div>
        </div>
      </div>
      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl font-bold text-center mb-10">ICNAN '25 SPEAKERS</h2>

        <div className="flex items-center">
          <button 
            onClick={prevSpeaker} 
            className="bg-[#0a2240] text-white p-2 rounded-full mr-4 hover:bg-[#0a2240]/90 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>

          <div 
            className="flex-1 bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow"
            onClick={() => handleCardClick(currentSpeaker)}
          >
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-4 md:mb-0 md:mr-6">
                <Image
                  src={speakers[currentSpeaker].image || "/placeholder.svg"}
                  alt={speakers[currentSpeaker].name}
                  width={150}
                  height={150}
                  className="rounded-full border-4 border-[#0a2240] object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0a2240] mb-2">{speakers[currentSpeaker].name}</h3>
                <p className="text-sm text-[#0a2240]">{speakers[currentSpeaker].institution}</p>
                <p className="text-sm text-[#0a2240]">{speakers[currentSpeaker].country}</p>
              </div>
            </div>
          </div>

          <button 
            onClick={nextSpeaker} 
            className="bg-[#0a2240] text-white p-2 rounded-full ml-4 hover:bg-[#0a2240]/90 transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-[80vw] max-h-[80vh] p-0 overflow-scroll bg-background">
          {selectedImage && (
            <div className="bg-gradient-to-br from-[#0b1c2f] to-[#1a365d] rounded-2xl shadow-xl">
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
                  <p className="text-slate-300 leading-relaxed  pr-4 text-justify">
                    {selectedImage.description ||
                      "Distinguished speaker with expertise in advanced materials and nanotechnology."}
                  </p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}