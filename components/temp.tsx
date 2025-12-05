"use client"
import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog2"

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
    name: "Dr. Moungi Bawendi",
    institution: "Massachusetts Institute of Technology, USA",
    country: "Nobel Laureate in Chemistry (2023)",
    image: "MoungiBawendi.png",
    description:`
      Professor Moungi G. Bawendi is a distinguished Lester Wolfe Professor and Advisor for the Minor in Energy Studies, MIT Energy Initiative at the Massachusetts Institute of Technology (MIT). He is internationally acclaimed for his pioneering contributions to the synthesis and development of quantum dots, a class of nanoscale semiconducting crystals with remarkable optical and electronic properties. For his seminal work in this field, he was awarded the 2023 Nobel Prize in Chemistry, alongside Louis E. Brus and Alexey Ekimov, for the discovery and synthesis of quantum dots.
Bawendi began his academic journey at Harvard University, earning an A.B. in 1982 and an A.M. in 1983. He went on to complete his Ph.D. in Chemistry at the University of Chicago in 1988, under the mentorship of Karl Freed and Takeshi Oka. His doctoral research encompassed both theoretical polymer physics and experimental studies on the H₃⁺ ion, which played a key role in unravelling the emission spectra of Jupiter.
A transformative moment in Bawendi’s early career came during a summer research program at Bell Labs, where he was introduced to the emerging field of quantum dots by Louis E. Brus. Following his Ph.D., he returned to Bell Labs as a postdoctoral researcher, working closely with Brus before joining the faculty at MIT in 1990. He was promoted to full professor in 1996.
In 1993, Bawendi, along with his doctoral students David J. Norris and Christopher B. Murray, revolutionized nanomaterials research by developing the hot-injection synthesis method. This technique enabled the controlled, reproducible, and scalable production of quantum dots with uniform size and high optical quality. By precisely tuning their size, researchers could manipulate the optical and electronic characteristics of quantum dots, paving the way for their use in a wide array of applications including light-emitting diodes (LEDs), solar cells, lasers, photodetectors, chemical biology, biomedical imaging.
Over the years, Professor Bawendi has emerged as one of the most cited chemists in the world and a leading authority in nanoscience. His contributions have not only advanced fundamental science but also fueled innovation across multiple industries.
His numerous accolades reflect his impact and influence:
• Sloan Research Fellowship (1994)
• Nobel Signature Award for Graduate Education in Chemistry by the American Chemical Society (1997)
• Sackler Prize in Physical Chemistry of Advanced Materials (2001)
• Ernest Orlando Lawrence Award (2006)
• ACS Award in Colloid and Surface Chemistry (2010)
• SEMI Award for North America (2011)
• Clarivate Citation Laureate in Chemistry (2020)
• Medal of Honor from Tunis University (2023)
He has also been elected to several prestigious academic societies:
• Fellow of the American Association for the Advancement of Science (2003)
• Member of the American Academy of Arts and Sciences (2004)
• Member of the National Academy of Sciences (2007)
Prof. Moungi Bawendi’s trailblazing research continues to inspire a generation of scientists and drive technological progress. His legacy is defined not only by scientific excellence but also by a profound impact on how nanomaterials are understood and applied in the modern world.,`
  },

  {
    id: 2,
    name: "Dr. Adam F. Lee",
    institution: "Griffith University",
    country: "Australia",
    image: "speak/1.jpg",
    description:
      "Dr. Adam Lee is a Professor of Sustainable Chemistry at Griffith University, Australia. Previously, he held Chair appointments at Cardiff, Warwick, Monash, Aston and RMIT Universities. His research addresses the rational design of nanoengineered materials for energy and environmental applications and he has co-authored >300 publications (h-index 86, 26527 citations). Prof. Adam Lee is also a Fellow of the Royal Society of Chemistry and Royal Australian Chemical Institute, Associate Fellow of the IChemE, Editor-in-Chief of Materials Today Chemistry, and recipient of the 2011 McBain Medal, 2012 Beilby Medal and Prize, and 2023 RACI Welcome Award. He is a co-investigator and Flagship Project co-lead on the ARC Centre of Excellence ‘Green Electrochemical Transformation of Carbon Dioxide’ GetCO2.",
  },
  {
    id:57,
    name:"Dr. Ahmad R. Kirmani",
     institution:"Rochester Institute of Technology",
     image:"Ahmad.jpg",
     country:"USA",
     description:"Ahmad Kirmani is an Assistant Professor of Chemistry & Materials Science at the Rochester Institute of Technology (RIT), US, where he leads the INterface and Structure in Printed Inorganic ElectRONics (INSPIRON) research laboratory. He earned his PhD in 2017 from the King Abdullah University of Science & Technology (KAUST), and later carried out postdoctoral research at the National Institute of Standards and Technology (NIST) and National Renewable Energy Laboratory (NREL). In his research career, Kirmani has explored and advanced next-generation electronics based on semiconductor inks including colloidal nanocrystals, metal-halide perovskites, and metal oxides. His research has drawn attention to the importance of interfaces and microstructure in realizing the lab-to-fab transition of printed electronics. His most recent research effort focuses on understanding radiation-matter interactions in perovskite semiconductors and exploring their aerospace compliance."
  },
  {
    id: 3,
    name: "Dr. Ajay Thakur",
    institution: "IIT Patna",
    country: "India",
    image: "speak/AjayThakur.jpg",
    description:
      "Dr. Ajay Thakur is an Associate Professor in the Department of Physics, at the Indian Institute of Technology Patna working in the area of condensed matter physics. He has completed his Ph.D from the Department of Condensed Matter Physics and Materials Science, Tata Institute of Fundamental Research, Mumbai and was a Post doctoral researcher at the prestigious National Institute for Materials Science, Tsukuba, Japan. The research activity in his group at IIT Patna focuses on Physics motivated exploration of Sustainable Functional Materials and Technologies. He is also collaborating nationally and internationally towards developing applications in the domains of Energy, Environment, Cell manipulation using Micro-Robotics and Functional Materials.",
  },
  {
    id: 4,
    name: "Dr. Ajayan Vinu",
    institution: "University of Newcastle",
    country: "Australia ",
    image: "speak/AjayanVinu.jpg",
    description:
      "Dr. Ajayan Vinu is currently working as a Professor of Nanomaterials and Director of the Global Innovative Center for Advanced Nanomaterials at the University of Newcastle and has made a significant contribution to the field of nanoporous materials and their application in energy storage, fuel cells, carbon capture and conversion, hydrogen technologies, catalysis and drug delivery. His contribution has led to ca. 540 papers with 36,000 citations and an H-index of 99, and more than 32 patents. He has been ranked number 1 (last 20 years) and number 7th (last 50 years) in Australia among the Top 2% of scientists in the field of “Materials” as per the database created by Stanford University in 2020, reflecting his high-quality research and research impact that he made in this field. The quality of his research has been recognised with several international awards, including Asian Paints Padma Vibhushan Dr R A Mashelkar Medal 2023, CHEMCON Distinguished Speaker Award Endowment for Innovators and Science Leaders, 2023, Dr Ghanshyam Srivastava Memorial Award (2021), Medal, Chemical Research Society of India 2018, SPARC award 2019, CNR Rao Lectureship award 2019. Medal and KY NIEM CHUONG Award 2018, Scopus Young Researcher Award 2014, Friedrich Wilhelm Bessel Award by the Humboldt Society (2010), JSPS Senior Invitational Fellow 2014, Australian Future Fellowship 2010, Indian Society for Chemists and Biologists Award for Excellence 2010, Catalysis Society of India Young Scientist award 2010, Chemical Society of Japan Award for the Young Scientist 2008, and Laureate of Khwarizmi International Award 2008. Prof. Vinu is honoured with a Fellow of the Royal Society of Chemistry, RACI, World Academy of Ceramics, World Academy of Art and Science, Indian Chemical Society, and Asia-Pacific Academy of Materials. Prof. Vinu heads the Australia-Korea Center for Green Ammonia Integrated Power Generation.",
  },
  
{
    id: 6,
    name: "Dr. S. Anandan",
    institution: "NIT Trichy",
    country: "India",
    image: "speak/24.jpg",
    description:
      "Dr. S. Anandan, Professor of Physical Chemistry hailing from Tamil Nadu, India, is leading the research group “Nanomaterials and Solar Energy Conversion Lab”. His research interests include hybrid semiconductor nanomaterials and their applications in Dye-sensitized solar cells, supercapacitors, perovskite solar cells, photocatalysis, electrocatalysis, fuel cells, and biosensors. He is the author of 400+ research articles, 30+ book chapters, two international patents and his h-index is 57. He is serving as an editorial board member in Ultrasonics Sonochemistry - Elsevier Journal. 28+ Research Scholars and 57+ M. Sc. Students have completed their degrees under his guidance. In addition, five Ph.D. and two M. Sc. students are pursuing research under his guidance.",
  },
  {
    id: 69,
    name:"Dr. Anupma Thakur",
    institution:"Indian Institute of Science, Bangalore",
    image:"anupama.png",
    country:"India",
     description:`Dr. Anupma Thakur is currently a DST-INSPIRE Faculty in the Department of Materials
Engineering at the Indian Institute of Science, Bangalore, India. Before joining IISc., she
conducted her postdoctoral research as a Postdoctoral Research Associate at the School of
Materials Engineering, Purdue University, USA. She earned her Ph.D. in Materials Science and
Engineering, Chemical Engineering, and Nanoscience and Nanotechnology from the Academy
of Scientific &amp; Innovative Research (AcSIR) at Council of Scientific and Industrial
Research–Central Scientific Instruments Organisation (CSIR-CSIO), India, in August 2021. She
was awarded gold medals for academic excellence during both her Master of Technology and
Bachelor of Technology degrees in India.
Dr. Thakur is an early-career researcher with expertise in advanced nanomaterials (including
two-dimensional (2D) MXenes, XBenes) and materials engineering, focusing on applications
such as clean hydrogen energy generation, carbon capture and utilization, chemical sensing,
photo/electrocatalysis, materials for extreme environments, sensors, and actuators. She has
authored ~ 70 high-impact international publications, contributed to &gt; 25 book chapters, filed
four patents (with one granted), and edited one book. In addition, she has delivered ~ 80 oral
talks, and her work has received over 2700 citations (h-index of 29 and i-index of 48) to date. Dr.
Thakur aspires to continue her career in academia, with a passion for contributing to the
advancement of science and technology on a global scale.
Selected honors and awards:
1. University Gold Medal 2025 for Alumni Excellence from Panjab University, Chandigarh,
India
2. Postdoctoral Mentor Award, Purdue University, USA, 2024
3. Young Engineer Award-2022 in Metallurgical and Material Engineering from The
Institution of Engineers, India (IEI)
4. Technologist of the Year-2022 award from the Institute of Electronics and Electrical
Engineers (IEEE).
5. Best Ph.D. Thesis Award 2022 from the International Society for Energy, Environment
and Sustainability, IIT Kanpur, India
6. Distinguished Alumni Excellence Award 2022 from Panjab University, Chandigarh, India

7. Finalist, Top 50 Women in Engineering 2022: Inventors and Innovators
8. Young Women Researcher in Material Science and Engineering, Venus International
Foundation-2022
9. Green Technology Award at IEEE YESIST 12-Youth Endeavours for Social Innovation
using Sustainable Technology, IEEE Region 10 Humanitarian Technology Conference
10. BRICS-Young Scientist Award: Russia Conclave-2020
11. Champion award at Science Stand-Up Battle at BRICS Young Scientist Forum-2020,
Russia Conclave
12. India Synthesis Award-2020 from Anton Paar, India
13. National academic excellence at Indo-Global Education Summit from Govt. of India,
2013
14. &gt;10 awards in Science as Art competitions and &gt;25 best research poster, oral and paper
presentation awards at international/national conferences and workshops`

  },
  {
    id:58,
    name:"Dr. Anuradha Ashok",
     institution:"PSG Institute of Advanced Studies",
     image:"anuradha.jpg",
     country:"India",
     description:"Dr. Anuradha M Ashok is Professor and Head of Dept. of Physics, PSG Institute of Advanced studies (PSG IAS), Coimbatore, Tamilnadu. She did her Masters’ in Materials Science from Mangalore University Karnataka and PhD in Physics from University of Oslo, Norway. Her research interests are Functional oxides for clean energy applications such as Solid oxide Fuel cells, thermoelectrics, photocatalytic hydrogen generation, solar photovoltaics, transparent conductors etc. She also has the expertise in Transmission Electron Microscopy, crystallography, structural analysis, analysis of structure-property relationships. She established research facilities such as XRD, electron microscopy thermoelectrics etc at PSG IAS. So far she has carried out Research projects funded by DST (SERB, International cooperation), DRDO (NRB, ARDB, CARS) UGC DAE-CSR on various clean energy applications. She is the Life member of Materials Research Society of India, Electron Microscopy Society of India, and Institute for Smart Structures and Systems. So far she has published more than 50 research articles in peer reviewed international journals, 13 book chapters, 52 invited lectures and more than 65 presentations in national and international conferences. She has conducted several workshops conferences and symposiums on clean energy including Indo US bilateral workshop funded by IUSSTF. She has guided 7 PhD, 3 M.Phil and more than 50 Master’s students and currently guiding 7 PhD students."
  },
{
    id: 7,
    name: "Dr. Aravind Vijayaraghavan",
    institution: "University of Manchester",
    country: "UK",
    image: "speak/AravindVijayaraghavan.jpg",
    description:
      "Dr. Aravind Vijayaraghavan is a Professor of Nanomaterials in the Department of Materials and the National Graphene Institute at The University of Manchester. He leads the Nanofunctional Materials Group. He is also the Head of Internationalisation (India & Business Engagement) for the Faculty of Science & Engineering. His research involves the science and technology of graphene and 2-dimensional materials, particularly for applications in composites, electronics, sensors and biotechnology. He was previously a senior post-doctoral research associate at Massachusetts Institute of Technology, USA and an Alexander von Humboldt Fellow at Karlsruhe Institute of Technology, Germany. He was awarded his MEng (2002) and PhD (2006) from Rensselaer Polytechnic Institute, USA and his BTech (2000) from the Indian Institute of Technology - Madras, India. He has published over 100 papers in international peer reviewed journals and delivered over 100 presentations at international conferences. He has filed 7 patents. He is the founder of two spin-out companies, Atomic Mechanics Ltd. and Grafine Ltd. He is also a leader in public engagement and science communication has won numerous awards for the same.",
  },
{
    id: 8,
    name: "Dr. G. Arthanareeswaran",
    institution: "NIT Trichy",
    country: "India",
    image: "speak/9.jpg",
    description:
      "Dr. G. Arthanareeswaran is the Group Leader of the Membrane Research laboratory and Professor at the Department of Chemical Engineering National Institute of Technology, Tiruchirapalli, India. Dr. Arthanareeswaran graduated as a Chemical Engineer in CIT, Coimbatore, India. He completed his master’s degree in petroleum refining and petrochemicals and defended his PhD thesis at the Anna University, Chennai, India. He joined National Institute of Technology, Tiruchirappalli in 2007 and became Lecturer at the chemical engineering department. In 2008, he established membrane research laboratory at the Department of chemical Engineering at the National Institute of Technology, Tiruchirappalli. From 2010 onwards, he is working as Associate Professor in the same department. He coordinating as principal Investigator for many projects which is funded by DST, DBT, India. International joint collaborative projects from CNPq, Brazil, MST, South Korea and Royal academy of engineering, London, UK also received for development and application of membranes in the treatment of wastewater from processing industries. He also collaborated in Loughbourgh university, UK, Monash university, Australia, University of Sao Carlous, Brazil Universiti Teknologi Malaysia, Malaysia, Konkuk University, Seoul, South Korea and Central Leather Research Institute, Chennai, India. Current research involves improving the performance of polymer membranes by mixing with inorganic micro particles and fillers by a mixed matrix method for ultrafiltration (UF) applications. Arthanareeswaran has received awards for research exchange including the Research exchange award from the Royal Academy of Engineering (RAE) London in 2010 and the Endeavour Executive award from the from Australian Government (Department of Education, Employment and Workplace Relations). He has been a member of the International advisory Committee in International Conference on Membranes. He has been a Guest Editor of the Special Issue “Current development in wastewater treatment in India” to Desalination Journal. He is a Associate Editor in ecotoxicology and environmental safety for special issue on Greener Eco-Environment 2015, Elsevier, USA. He serves as reviewer for 18 international journals.",
  },
  {
    id: 9,
    name: "Dr. Ashish Arora",
    institution: "IISER Pune",
    country: "India",
    image: "speak/4.jpg",
    description:
      "Ashish did his PhD from TIFR, Mumbai in the Department of Condensed Matter Physics and Materials Science in 2014. He was a CNRS postdoctoral researcher in National High Magnetic Field Laboratory (LNCMI-CNRS), Grenoble, France for a year (2014-15). He won the prestigious A. v. Humboldt grant for a postdoc in the University of Muenster, Germany (2015-17). Thereafter, he won the highly competitive German Research Foundation (DFG) grant and stayed as a junior group leader in the University of Muenster until August 2021. He joined IISER Pune as an Assistant Professor in September 2021. Ashish has won the European Magnetic Field Laboratory EMFL prize 2019 ‘for his ground-breaking discoveries using the excellent infrastructure at the EMFL facilities’, Young Achiever Award 2023 in 67th DAE Solid State Physics Symposium ‘in recognition for his contribution in Condensed Matter Physics’ and Young Physicist Award at the National Physicists’ Conclave 2024. Starting 2025, Ashish has been elected as a member of Indian National Young Academy of Science (INYAS-INSA).",
  },
  
{
    id: 10,
    name: "Dr. Balakumar S.",
    institution: "University of Madras",
    country: "India",
    image: "speak/25m.jpg",
    description:
      "Dr. Balakumar S. is Professor and Lab Head, Laboratory for Sustainable Health care, Environment and Energy Materials (LSHEEM) at the National Centre for Nanosciences and Nanotechnology, University of Madras. He has graduated in B.Sc (Physics) and M.Sc (Physics) from Bharathiar University, M.phil (Materials Science) from University of Madras and, Ph.D in Materials Science from Anna University. He went to pursue his Postdoctoral Fellowship in Materials Science from The Chinese University of Hong Kong and National University of Singapore. His areas of specialization are biomedical nanotechnology, nanostructured materials for energy and environment nanomaterials for energy and environment clean environment, and sensing and storage applications nanoelectronics and nano-magnetism biomaterials for orthopaedic dentistry and ophthalmology. He is currently associate editor of Chemical Papers, Springer and RSC Advances. He is also a Fellow of Institute of Physics (FInstP), IOP, UK, the Academy of Sciences, Chennai, and the Royal Society of Chemistry, UK.",
  },
 
  {
    id:59,
    name:"Dr. Bruno D’Aguanno",
    institution:"Lincoln College",
    country:"UK",
    image:"Bruno.jpg",
    description:`Dr. Bruno D’Aguanno is an accomplished physicist born in Cervaro, Italy, with a distinguished career spanning several decades in the field of condensed matter physics, nanotechnology, and renewable energy. He holds a Ph.D. in Physics from the International School for Advanced Studies (SISSA), Trieste, Italy, where he conducted research on ionic liquids and phase transitions. Presently, he serves as a Visiting Professor at the Centre for Nanotechnology Research, VIT University, Vellore, India, and as an Expert Advisor at the Solar Energy Research Center, Southeast University, Nanjing, China. 
Throughout his career, Bruno has held significant leadership roles, including Scientific Director at CIC energiGUNE in Spain, where he focused on thermal energy storage and concentrated solar power technologies. He has contributed extensively to research in nanofluids, energy storage materials, and fuel cells, with a strong emphasis on applied renewable energy solutions. He has also been involved in numerous internationally funded projects, academic teaching, and scientific publications, highlighting his expertise in advanced material modeling, thermal energy storage, and nanoscale phenomena.
Bruno D’Aguanno is well recognized for his contributions to science and technology, serving as a project coordinator, evaluator, and organizer of international conferences, and his work is respected in the global scientific community for advancing clean and efficient energy technologies. Fluent in multiple languages, he continues to foster international research collaborations and knowledge exchange in nanotechnology and sustainable energy.
` 
  },


{
  id: 11,
    name: "Dr. Chamil Abeykoon",
    institution: "University of Manchester",
    country: "UK",
    image: "speak/5.jpg",
    description:
      "Chamil Abeykoon is an Associate Professor at the Department of Materials at the University of Manchester and his work is affiliated with the Aerospace Research Institute, the Northwest Composites Centre, Henry Royce Institute for Advanced Materials, and the National Graphene Institute. Chamil received the B.Sc. (Hons.) degree in mechanical engineering from the University of Peradeniya, Sri Lanka, in 2007, with the award of best performance in mechanical engineering, and the Ph.D. degree in mechanical engineering from the Queens University Belfast, U.K., in 2011, with several publications, in which one of his publications received the Young Author Best Paper Award from the IEEE in 2011. So far, he has authored 100+ peer-reviewed journals/conference papers. Moreover, he has authored a monograph, “Polymer Extrusion: A Study on Thermal Monitoring Techniques and Melting Issues.” His current research interests include: process monitoring, modeling, and control; soft sensors and soft sensing; process instrumentation; renewable energy technologies; 3D printing, phase change materials; and heat transfer. He is a Chartered Engineer and an Associate Member of the professional bodies, including IESL, IMechE, IOM3 and ICPM; and also a Fellow of the Higher Education Academy, U.K. Moreover, he is currently serving as an Associate Editor of 5 academic journals including Composites Communications and Journal of Fluid Flow, Heat and Mass Transfer. Also, he has been serving as a visiting professor of Southwest University, China, and He has been served on scientific committees, and he has also been invited for keynote speeches at several international conferences.",
  },

  {
    id: 12,
    name: "Dr. Cheong Kuan Yew",
    institution: "Universiti Sains Malaysia",
    country: "Malaysia",
    image: "Dr. Cheong.jpeg",
    description:
      "For over twenty-eight years, Professor Kuan Yew Cheong has been a passionate researcher, educator, trainer, consultant, and Professional Engineer specializing in materials science and engineering. He is a Full Professor at the School of Materials and Mineral Resources Engineering, University Sains Malaysia (USM), Malaysia. Professor Cheong holds an extensive record of distinguished appointments, including Commissioned Senior Scientist at the Korea Electrotechnology Research Institute (2004, 2006); Adjunct Associate Professor at Multimedia University, Malaysia (2012); Visiting Lecturer at Universiti Malaysia Perlis, Malaysia (2012); Visiting Professor at National Taiwan University (2018); Visiting Professor at MIMOS Semiconductor Sdn Bhd (2018); Technical Advisor for NTG Innovation Pte. Ltd., Singapore (Jan–Dec 2019); Affiliate of the Innovation Centre for Clean Water and Sustainable Energy (WISE), National Tsing Hua University, Taiwan (Nov 2018–Oct 2021); Editor of Materials Science in Semiconductor Processing (Elsevier, 2015–June 2021); Visiting Professor at the State Key Laboratory of Crystal Materials, Institute of Novel Semiconductor Materials, Shandong University, China (Jan 2022–Dec 2023); and External Examiner for Xiamen University Malaysia (New Energy Science and Engineering Program, Undergraduate, MSc, and PhD levels) (Feb 2025–Jan 2026). Currently, Professor Cheong serves as: Technical Consultant (Failure Analysis) for MIMOS Services Sdn Bhd, Malaysia; Editor-in-Chief of Materials Science in Semiconductor Processing (Elsevier, since July 2021); Editor-in-Chief of the Journal of Minerals and Materials Engineering (USM, since March 2022); Editorial Advisory Board Member for the Elsevier Book Series &quot;Vacuum and Thin Film Deposition Technologies (since 15 April 2024); and Distinguished Lecturer of the IEEE Electronic Packaging Society, USA (1 January 2024–31 December 2027). His research focuses on solving environmental and energy challenges by developing advanced dielectrics for surface passivation and modification of wide bandgap semiconductor devices, and natural organic materials for sustainable electronics. This work has resulted in over 250 publications in high-impact journals, 6 reputable book chapters, 5 edited books, and 1 granted Malaysian Patent (MY-153033-A). His research philosophy was featured in the documentary “Stay Hungry Stay Foolish” on ASTRO AEC. Recognized as one of Stanford University’s Top 2% Scientists for Citation Impact (Applied Physics, Materials) in both 2022 and 2023, Professor Cheong is also a registered Professional Engineer (Board of Engineers, Malaysia), a “Top Research Scientist Malaysia (TRSM)” (Academy of Sciences Malaysia), and a Certified Professional Trainer accredited by The Human Resource Ministry, Malaysia (HRD Corp). He has delivered more than 500 technical training courses to multinational and local industries, resolving numerous challenging industrial cases related to wafer- and package-level electronic materials processing and reliability. His professional affiliations include Fellow of The Institution of Engineers Malaysia (IEM); Senior Member of the Institute of Electrical and Electronics Engineers (IEEE); Distinguished Lecturer of the IEEE Electronic Packaging Society (EPS); Principal Interviewer for the IEM Professional Interview; Senior Evaluation Panel member for the Engineering Accreditation Council (Malaysia); and Founding Chairman of the IEM Material Engineering Technical Division.",
  },

  {
    id: 13,
    name: "Dr. D. D. Sarma",
    institution: "IISc., Bangalore",
    country: "India",
    image: "speak/7.jpg",
    description:
      "Dr. Dipankar Das Sarma is an Indian scientist and structural chemist. Presently, He is serving as the J.N. Tata Chair Professor at the Solid State and Structural Chemistry Unit of the Indian Institute of Science, Bangalore, Inda. Among many other accolades, he is well known for his research in the fields of Solid-State Chemistry, Spectroscopy, Condensed Matter Physics, Materials Science, and Nanoscience. He is a former MLS Chair Professor of Physics and Chairman of the Centre for Advanced Materials and the GAST Professor of Uppsala University, Sweden. A recipient of TWAS Physics Prize and the UNESCO Biennial Javed Husain Prize, Dr. Sarma was honoured with the Shanti Swarup Bhatnagar Prize for Science and Technology by the CSIR, Government of India, in 1994. His research is broadly classified into areas of strongly correlated electronic systems, semiconducting nanoparticles, energy science, electronic structure calculations, and conjugated polymers.",
  },
    {
    id: 66,
    name: "Dr. Dhanalakshmi Sathishkumar",
    institution: "CVRDE, Chennai",
    country: "India",
    image: "Dhanalakshmi Sathishkumar.jpg",
    description:
    `Dr. S. Dhanalakshmi, Scientist G is the Additional Director in CVRDE, Avadi, Chennai.  With a solid academic foundation, she holds a B.E. in Metallurgy from P.S.G. College of Technology, Coimbatore and an M.S. (Engg.) from IIT Madras, Chennai and completed her Doctorate in the field of Metal Matrix Composites from Anna University, Chennai.

With over 28 years of extensive experience in Research and Development, Dr. S. Dhanalakshmi has made significant contributions to the field of advanced materials and processing techniques. Her area of specializations includes Development of Light Weight-High Strength Materials, Metal Matrix Composites and Nano Fluids & Nano Coatings for Armoured Fighting Vehicles. 

Dr. S. Dhanalakshmi has developed Several Material Technologies viz., light weight wear resistant clutch housing using Aluminium matrix composites,  Sintered bronze brake pads for automatic transmission, Indigenous Carbon-Carbon composite brake rotors & stators for Main Brake of MBT Arjun,  Hydraulic subsystems namely primary pump, secondary pump and hydraulic filters of automatic transmission, Friction clutch plates using powder metallurgy technique, Nano coolant and Nano lubricant for AFV engine, Nano structured Tribological Coatings for High speed Bearings using magnetron sputtering technique, Nano structured thermoelectric material for waste heat recovery applications, Composite Road wheel and Composite top roller for running gear system of AFV. 

She holds 7 Patents and has presented more than 45 Papers in various Journals and National & International Conferences and Seminars. Dr. S. Dhanalakshmi is a recipient of Technology Group   Award in the year 2007 & 2023 and Scientist of the year Award in the year 2024.

Being a Strong believer of R&D Industry-Academia relationship, she has been instrumental in executing more than 20 Research Projects under CARS, ERIPR & Research Board Scheme.  She is also an active member of several professional societies including FPSI, MMS, MRSI, IEI, IIPE, MMA. She is the Research Advisory Council Member of PMC Tech, Hosur. She has guided more than 40 Batches of Students Project and Internship in the field of Composites and Special Materials. 

Presently she is heading the Planning, Coordination and Human Resource Division, involved in the planning & management of futuristic and ongoing projects of CVRDE. She is also heading the Knowledge Resource Centre. `
  },
  
  {
    id: 14,
    name: "Dr. David Jenkins",
    institution: "University of Plymouth",
    country: "UK",
    image: "speak/8.jpg",
    description:
      "Dr. David Jenkins is an Associate Professor at the Wolfson Nanomaterials and Devices Laboratory, School of Engineering, Computing and Mathematics, University of Plymouth, UK. He holds a B.Sc. (Hons) in Physics from the University of Salford (1983), an M.Sc. in Lasers and their Applications from the University of Essex (1985) and completed his Ph.D. at Cranfield Institute of Technology in 1991, focusing on Photothermal Deflection Spectroscopy and its Application in Remote Sensing. His research interests include microsensors, MEMS, surface plasmon resonance sensors, and graphene-based sensors.  Throughout his career, Dr. Jenkins has made significant contributions to the field, with over 120 publications and conference presentations. His work is always targeted to serve the Unted Nations Sustainable Development Goals. He is a member of prestigious professional bodies such as MIET, MInstP, and CPhys, demonstrating his commitment to advancing the field of nanomaterials and devices.",
  },
   {
    id: 15,
    name: "Dr. Deepa Khushalani",
    institution: "TIFR, Mumbai",
    country: "India",
    image: "Deepa Khushalani.png",
    description:
    

"Dr. Deepa Khushalani, TIFR, Mumbai, India (Dr. Deepa Khushalani is a distinguished Materials Chemist currently serving currently as Chair and is a Professor in the Department of Chemical Sciences at the Tata Institute of Fundamental Research (TIFR), Mumbai. Her career spans over two decades, marked by significant contributions to both cutting-edge research and dedicated science outreach. Prof. Khushalani did her Ph.D. in Inorganic Chemistry at the University of Toronto, Canada. Her postdoctoral research was conducted at the University of Bristol, UK, followed by a tenure as a Lecturer in Inorganic Chemistry at the University of Kent at Canterbury, UK, from 2001 to 2003. Her research expertise lies in the synthesis, characterization, and application of a diverse range of inorganic structures. These meticulously engineered materials are then applied in crucial areas, particularly those exploiting alternate sources of clean energy, such as photovoltaics and energy storage devices. Beyond energy applications, her group also actively engages in research on drug delivery devices, photocatalysis, and electrocatalysis. Prof. Khushalani's significant contributions to the field have been widely recognized. She was awarded the CRSI Bronze Medal in Chemistry in 2018 and the DST (Nanomission) Young Career Award in Nanoscience and Technology in 2016. She is a Fellow of the Royal Society of Chemistry (FRSC). Beyond her research, Prof. Khushalani is deeply committed to fostering scientific engagement and promoting diversity within the scientific community. She currently serves as a member of the RSC West India Section and is an Editorial Board Member of ACS Energy & Fuels, and Scientific Reports. Her dedication to inclusivity is evident through her roles as a Member of the Indian Academy of Sciences – Women in Science Panel and a Member of the Royal Society of Chemistry, UK – Inclusion and Diversity Committee. Prof. Khushalani is also extensively involved in science outreach, particularly in promoting basic sciences within rural and economically deprived areas of India. She has conducted numerous workshops, lectures, and mentoring sessions, actively inspiring the next generation of scientists and making a tangible impact on scientific literacy and accessibility.", },
 
  {
    id: 67,
    name: "Dr. R. Ilangovan",
    institution: "University of Madras",
    country: "India",
    image: "Ilangovan.jpg",
    description:`Dr. R. Ilangovan is a Professor and Director at the National Centre for Nanosciences and Nanotechnology, University of Madras. He has published 43 research papers in Indian and international journals and presented at numerous national and international seminars. He has also organized and participated in eight workshops and seminars. His area of specialization includes nanoelectronics, contributing significantly to advanced research and education in this field. Dr. Ilangovan’s academic and research leadership at the University of Madras highlights his commitment to advancing nanoscience and nanotechnology in India.`,
  },
    {
    id: 17,
    name: "Dr. Ganapathy V.",
    institution: "ARCI, Hyderabad",
    country: "India ",
    image: "Dr. Ganapathy Veerappan.jpeg",
    description: 
   
"Dr. Ganapathy Veerappan is a distinguished scientist at the Centre for Solar Energy Materials, International Advanced Research Centre for Powder Metallurgy and New Materials (ARCI), where he has dedicated over a decade to advancing renewable energy technologies. His research primarily focuses on various solar cell technologies, including the development of novel semiconducting materials, innovative device architectures, catalysts, gel-electrolytes, and inorganic hole transport materials. Dr. Veerappan's expertise extends to the creation of prototype modules and panels. As a DST-INSPIRE Faculty at ARCI, he has conducted extensive research in perovskite solar cells, with a particular emphasis on developing stable perovskite materials and novel components crucial for the commercialization of this promising technology. He plays a pivotal role in formulating projects aimed at developing product-based perovskite solar cells, with the overarching goal of translating solar cell research into marketable solar cell technology. His significant contributions to the field are evidenced by 28 research papers published in journals with a cumulative Impact Factor of 170, 4 book chapters, and 1 international patent, all in the domain of solar cells. Dr. Veerappan has also presented numerous findings at international conferences. Dr. Veerappan is driven by the conviction that his extensive experience will enable him to develop marketable products for harvesting indoor light, an area he considers highly essential. As a young and dynamic scientist, he is actively fostering collaborations with research groups across BRICS countries. He firmly believes that such collaborations will significantly strengthen the Solar Photovoltaics activities he currently spearheads at ARCI, ultimately contributing to India's governmental initiatives towards a sustainable future.",
  },
      {
    id: 18,
    name: "Dr. James Chapman",
    institution: "Griffith University",
    country: "Australia",
    image: "James Chapman .jpeg",
    description:
    "Dr. James Chapman is a Senior Lecturer at Griffith University and a leading expert in analytical and environmental chemistry, with a specialisation in antimicrobial materials. With over 15 years of experience, James has led research groups and science degree programmes, contributing significantly to both academia and industry. His research, which integrates artificial intelligence with spectroscopy and chemometrics, focuses on engineering advanced sensors and diagnostics for applications in health, environmental monitoring, and food safety—all aligned with UN Sustainable Development Goals. James has a proven track record in securing research funding, producing high-quality publications, and commercialising research through patents. With over 100 peer-reviewed articles, an h-index of 40, and more than 6,000 citations (google Scholar), James’s work is recognised internationally. He has mentored numerous doctoral students and early-career scientists and serves as Division Chair for the Royal Australian Chemical Institute's Analytical and Environmental Chemistry Division. He is a Fellow of both the Royal Australian Chemical Institute and the Royal Society of Chemistry and holds the title of Chartered Chemist.",
  },
  
  
{
    id: 19,
    name: "Dr. Jayan Thomas",
    institution: "University of Central Florida",
    country: "USA",
    image: "Jayan Thomas.jpg",
    description:
      "Dr. Jayan Thomas is currently a Professor of Nanotechnology, Engineering, and Photonics at the University of Central Florida (UCF). He earned his Ph. D. in Chemistry/Material Science from Cochin University of Science and Technology. He was awarded one of the most prestigious fellowships in India, Dr. K.S. Krishnan fellowship, by the Department of Atomic Energy for doing his Ph.D. After his post-doctoral fellowship (CSIR) in the International School of Photonics, he was offered a Research Scientist position in the College of Optical Sciences at the University of Arizona (USA) in 2001 and promoted to a Research faculty in 2005. He moved to the University of Central Florida (UCF) in 2011 and currently directs the Nano Energy-Photonics research labs. He has published more than 130 scientific publications, including multiple papers in prestigious journals like Nature, Science Advances, Energy and Environmental Sciences and Advanced Materials. Also, many national and international media including Reuters, Nature news, National Geography magazine, Huffington Post, USA Today, The Guardian, Foreign Policy, Fox News, The Telegraph, and Times of India have featured his research. He is a recipient of the R&D100 award (also known as “Oscar for Inventions”) in 2015. He is also a recipient of the National Science Foundation’s prestigious CAREER award (2014), the Veeco award for nanotechnology innovations (2010) and one of the five finalists for the World Technology Network award sponsored by TIME and FORTUNE magazines (2014). In addition, he has been awarded UCF's Excellence in Research award in 2014, and 2018, Reach for the Stars Award in 2016. He has more than ten issued/pending US patents and a co-founder of two companies.",
  },
 
  {
    id: 60,
    name: "Dr. R. Jayavel",
    institution: "Anna University",
    country: "India",
    image: "Jayavel.jpg",
    description:
    "Jayavel Ramasamy is currently working as a Professor at Crystal Growth Centre, Anna University, Chennai. He has 33 years of research experience in Material Science and Nanotechnology and 28 years of teaching experience. He has over 16 years of administrative experience as the Director of the Centre for Nanoscience and Technology, and as the Director and Research Director of the Centre for International Affairs at Anna University. He has published over 500 research papers in international peer reviewed journals. Dr. Jayavel is an internationally acclaimed researcher with a h-index of 58, i-10 index of 295, and over 12,300 citations. He had received more than 20 Research Awards/ fellowships including Senior Scientist Award from The Academy of Science, Mid career Award from University Grants Commission- India, Lifetime Achievement Award from Indian Spectrophysics Association, MRSI Medal from Materials Research Society of India, DAAD Sandwich, LEAP and STA Fellowship, respectively. He has an Indian Patent on Quatum dot-sensitized solar cells. He has been designated as a “Highly Cited Author” by the Royal Society of Chemistry, UK. Dr. Jayavel was served as a visiting professor/ researcher at University of Queensland, Australia, University of Goettingen, Germany, National Institute of Materials Science, and Shizuoka University, Japan"
  },

  {
    id: 20,
    name: "Dr. John V. Kennedy",
    institution: "GNS Science",
    country: "New Zealand",
    image: "speak/10.jpg",
    description:
      "Dr John V. Kennedy is a Principal Scientist, Group Leader, Advanced Materials and Nanotechnology at National Isotope Centre, GNS Science (Institute of Geological and Nuclear Science), New Zealand Govt owned crown research institute.   Dr. Kennedy is a Physicist who works on the new materials development for low carbon energy technologies. He uses ion beam technologies pioneered by Lord Rutherford to develop functional materials and to provide key information about the materials structure-property relationship. The results are used across the materials science community for the design of a new product, surface engineering, catalytic materials for hydrogen production and storage, Thermoelectric materials for waste heat to energy conversion, energy storage materials, magnetic materials and energy efficient systems. He has published more than 250 journal papers (h-index of 65) demonstrating ion implantation into polymers, semiconductors, superconductors, nanostructures and 20 international patents. John is programme director. Aotearoa: Green Hydrogen Technology Platform.  He is an Adjunct Professor, Victoria University of Wellington and Honorary Professor, Faculty of Science and Engineering, University of Waikato. He is a Fellow of Royal Society of Chemistry, UK and a Fellow of Royal Society New Zealand.",
  },
    {
    id: 21,
    name: "Dr. Johnson Goh Kuan Eng",
    institution: "IMRE, A*STAR",
    country: "Singapore",
    image: "Johnson Goh Kuan Eng .jpg" ,
    description:`
Prof Johnson Goh is a Director at the A*STAR Quantum Innovation Centre (QInC). He is also a Division Director and Principal Scientist at A*STAR's Institute of Materials Research and Engineering (IMRE).  Trained as Physicist (VUW, New Zealand), Engineer (Sheffield, UK) and Educator (NIE/NTU, Singapore), he went on to obtain his PhD in 2007 from the Centre of Excellence for Quantum Computer Technology in the University of New South Wales (Sydney). He joined A*STAR in 2006 and contributed to materials science and engineering research ranging from atomic-scale 3D printing with silicon atoms, to highly conductive 3D printable thermoplastics, to 2D semiconductors, and to quantum devices. His current endeavour is to meld his multidisciplinary research expertise in quantum information technologies, nanoelectronics, machine learning, and additive manufacturing toward disruptive quantum technologies. To that end, he helped to establish the department of Quantum Technologies for Engineering (QTE) at IMRE in 2021 and served as programme director for A*STAR’s quantum technologies programme since 2022. He headed the QTE department from 2021 to 2022. Prior to this, he served in various management positions as deputy Head of Materials Analysis and Characterisation department from 2012 – 2014, Head of SERC Nano-fabrication, Processing and Characterisation (SnFPC) from 2014 – 2016, and Head of Materials Processing and Characterisation from 2016 – 2017. He was programme manager for the SERC Pharos Programme in 2D Semiconductor Electronics from 2016 – 2020. He holds adjunct professor positions in both the National University of Singapore and Nanyang Technological University and is a current council member of the Institute of Physics Singapore and its treasurer.
    `,
  },
  {
    id: 68,
    name: "Dr. Kanchana J.",
    institution: " PSG Institute of Advanced Studies",
    country: "India",
    image: "Dr Kanchana Jeganathan.jpg" ,
    description:`
    Dr Kanchana Jeganathan, Director - Global Engagement / Professor in Mechanical Engineering, 35 years of teaching and research experience in PSG Institutions, Coimbatore India and in Kings College London, UK. Supervised more than 100 UG and 60 PG student projects and 5 PhD. doctoral research in Engineering/Manufacturing and has published more than 60 technical papers in International/National journals and conferences in India and UK. Successful with government-funded research projects and acted as principal investigator and co-investigator for Indian Space Research Organization (ISRO), Aeronautical Development Agency (ADA) and Department of Science and Technology (DST) projects and Defence Research and Development Laboratory (DRDL) Successfully completed the development of clinical database software for NHS patients with severe complex disabilities, with the focus of System Study, Design and Application development on Client/Server environment and Data Base Administration (DBA) Director-Global Engagement - responsible for International credit transfer programs offered at PSG Institute of Advanced studies, in collaboration with Universities in USA, Germany, Australia and UK and Research collaborations with South Korea, Singapore and South Africa. Additional responsibilities IUCEE - Indo US Consortium for Engineering Education - Academic Leader and student mentor. In UK, also served as Subject Learning Coach - Engineering, Learning Skills Council, South East region, UK External Quality Nominee for Engineering Education, QIP, South East Region, UK Assessment Associate, Manufacturing Engineering, Edexcel, London, UK Fellow and member in IMECH, UK, IE, India, Women in Engineering Society, UK.
    `,
  },
  {
    id: 22,
    name: "Dr. Karen Wilson",
    institution: "Griffith University",
    country: "Australia",
    image: "speak/11.jpg",
    description:
      "Dr. Karen Wilson is Professor at the Centre for Catalysis and Clean Energy at Griffith University, Australia and previously held professorial positions at RMIT University (2018-23) and Aston University (2013-17). At Aston she was also Research Director of the European Bioenergy Research Institute and held a prestigious Royal Society Industry Fellowship in collaboration with Johnson Matthey. She holds a BA and Ph.D from the University of Cambridge, and MSc in heterogeneous catalysis from the University of Liverpool and has also held academic positions at the University of York and Cardiff University. Dr. Karen’s research interests lie in the design of tunable porous materials for sustainable biofuels and chemicals production from renewable resources. She is Associate Editor of Sustainable Energy & Fuels (Royal Society of Chemistry), and Energy & Environmental Materials (Wiley) and Editorial Board member for Energy & Environmental Science (Royal Society of Chemistry). She is also a co-investigator and theme leader of the Australian Research Council Centre of Excellence, ‘Green Electrochemical Transformation of Carbon Dioxide’ - GetCO2.",
  },

  
  {
    id: 23,
    name: "Dr. Kornelius Nielsch",
    institution: "Technische Universität Dresden (TUD)",
    country: "Germany",
    image: "speak/13.jpg",
    description:
      "Prof. Kornelius Nielsch has held the Chair of Metallic Materials and Metal Physics and Director of the Institute of Metallic Materials within the Leibniz Institute for Solid State and Materials Research Dresden since April 2015. His main research concerns Condensed matter physics, Nanowire, Nanotechnology, Thin film and Atomic layer deposition. His research integrates issues of Electrical resistivity and conductivity and Magnetic field, Magnetization, Magnetoresistance in his study of Condensed matter physics. His studies in nanowire integrate themes in fields like seebeck coefficient, thermoelectric effect, hysteresis and topological insulator. His research on nanotechnology frequently connects to adjacent areas such as anodizing. His thin film research includes elements of substrate and epitaxy. In his study, oxide and porosity is strongly linked to chemical engineering, which falls under the umbrella field of atomic layer deposition.",
  },

{
    id: 24,
    name: "Dr. Kothandaraman Ramanujam",
    institution: "IIT Madras",
    country: "India",
    image: "speak/20.jpg",
    description:`Prof Kothandaraman Ramanujam, a professor at IITMadras, completed his Ph.D. from IISc Banglore in 2006 and joined the Department of Chemistry-IITM in March 2011 as an assistant professor. Since May 2025, he has been an Adjunct Professor at the Center for Future Materials, University of Southern Queensland, Australia. He is actively involved in the ECS IITM student chapter as a Faculty Advisor. He was bestowed Masila-Vijaya award by the Academy of Sciences in 2024 for innovative patents. He is the recipient of the CRSI 2023 Bronze Medal and recipient of the SMC-BARC Bronze Medal 2023, Amara raja Award 2021 by ECSI and IESA Researcher of the Year award in 2024 from Indian Energy Storage Alliance. His research focuses on contributing to realizing India-centric solutions for the ever-growing need of energy storage and conversion. He has done two technology transfers on vanadium redox flow battery and zinc-bromine redox flow battery. Recently, he has commissioned a 10kW/0.1MWh Vanadium Redox Flow system at Trichy, at TRL 7 level. His area of interest broadly includes Flow batteries, Lithium/Sodium/Zinc ion-based batteries, electro organic synthesis and electrocatalysis.  He published over 170 research articles, obtained ten patents, completed two technology transfers, and completed 28 sponsored & 16 consultancy projects. `
  },

  {
    id: 25,
    name: "Dr. Lorenzo Pavesi",
    institution: "University of Trento",
    country: "Italy",
    image: "speak/Lorenzo.jpg",
    description:
      "Lorenzo Pavesi is a Professor of Experimental Physics at the Department of Physics of the University of Trento (Italy). Born on the 21st of November 1961, he received his PhD in Physics in 1990 at the Ecole Polytechnique Federale of Lausanne (Switzerland). In 1990 he became an Assistant Professor, an Associate Professor in 1999 and Full Professor in 2002 at the University of Trento. He leads the Nanoscience Laboratory (25 people), and teaches several classes at the Department of Physics of the University of Trento. He founded the research activity in semiconductor optoelectronics at the University of Trento and started several laboratories of photonics, growth and advanced treatment of materials. He was the first president and founder of the IEEE Italian chapter on Nanotechnology. He was the head of the Department in Physics and the first director of the quantum at Trento Q@TN joint lab. He has directed 42 PhD students and more than 48 Master thesis students. His research activity concerned the optical properties of semiconductors. During the last years, he concentrated on Silicon-based photonics where he looks for the convergence between photonics and electronics. He is interested in active photonic devices which can be integrated into silicon by using optical nonlinearities and modified material properties. His interests encompass also optical sensors or biosensors and solar cells. A recent development is toward integrated quantum photonics and neuromorphic photonics. In silicon photonics, he is one of the worldwide recognized experts, he organized several international conferences, workshops and schools and is a frequently invited speaker. He manages several research projects, both national and international. He is an ERC grantee. He is a frequently invited reviewer, monitor or referee for photonics projects by several grant agencies. He is an author or co-author of more than 500 papers, author of several reviews, editor of more than 15 books, author of 2 books and holds 9 patents. He is chief speciality editor of the section Optics and Photonics of Frontiers in Physics and founding editor of the series Photonic Materials and Applications, a joint initiative of SPIE and Elsevier. Moreover, he sits on the editorial board of the ETRI Journal. He is in the advisory board of Glass-to-Power, an Italian start-up. In 2001 he was awarded the title of Cavaliere by the Italian President for scientific merit. In 2010 and 2011 he was elected distinguished speaker of the IEEE- Photonics society. He is a fellow of the IEEE, of SPIE, of AAIA and of the SIF. He holds an H-number of 65 according to Scopus and of 63 for Web of Science, and of 79 according to Google Scholar.",
  },
   
  

{
    id: 26,
    name: "Dr. Manish Chhowalla",
    institution: "University of Cambridge",
    country: "UK",
    image: "speak/Chhowalla.jpg",
    description:
      "Prof. Chhowalla is the Goldsmiths’ Professor in Materials Science at the University of Cambridge. He is also the Director of the Royce Institute at Cambridge as well as the Royal Academy Chair in Emerging Technology. Prof Chhowalla works on two dimensional transition metal dichalcogenides for electronic and electrochemical devices. He is interested in how disorder in these materials influences their properties. He is a Fellow of the Royal Academy and the Materials Research Society.",
  },


  {
    id: 27,
    name: "Dr. Manoj Gupta",
    institution: "National University of Singapore",
    country: "Singapore",
    image: "speak/15.jpg",
    description:
      "Provost Chair Professor Manoj Gupta was a former Head of Materials Division of the Mechanical Engineering Department. He did his Ph.D. from University of California, Irvine, USA (1992), and postdoctoral research at University of Alberta, Canada (1992). He has worked for about 40 years in the area of metallic materials with particular focus on metallic composites of different types. He has taken multiple consultancy work related to failure of materials besides teaching many people in corporate sectors on the same topic. He is currently among top 1% researchers as per Stanford’ List, The Universal Scientific Education and Research Network and ResearchGate. He has published over 730 peer reviewed journal papers and owns two US patents and two Trade Secrets.  His h-index is 89 and citations over 29500. He has also co-authored eight books, published by John Wiley, Springer and MRF - USA. A multiple award winner, he actively collaborate/visit Japan, France, Saudi Arabia, Qatar, China, USA and India as a visiting researcher, professor and chair professor.",
  },

  {
    id: 28,
    name: "Dr. A. Manuel Stephan",
    institution: "CECRI, Karaikudi",
    country: "India",
    image: "A. Manuel Stephan.jpeg",
    description:
      `Dr. A. Manuel Stephan is a Senior Principal Scientist in the Electrochemical Power Sources Division at CSIR-Central Electrochemical Research Institute (CECRI) in Karaikudi, India. With 24 years of extensive research experience, Dr. Stephan is a leading expert in the development and characterization of advanced materials for various energy storage applications. He earned his Ph.D. in Physics from Alagappa University, Karaikudi, in 1997, following his M.Phil. and M.Sc. in Physics from St. Joseph's College, Trichy, in 1990 and 1989, respectively. His international postdoctoral research includes stints as a JSPS Postdoctoral Researcher at Osaka National Research Institute, Japan (2000-2001), and as a Postdoctoral Researcher in the Department of Chemistry at The University of Tulsa, USA (2001-2002). He also served as a Brain Pool Visiting Scientist at Chonbuk National University, S. Korea (2005-2006). Dr. Stephan's primary research interests lie in the realm of advanced materials for electrochemical power sources, with a particular focus on lithium-ion and lithium-sulfur batteries. His work encompasses the application of nanostructured materials, laser plasma, and phase transitions to enhance battery performance. He is actively involved in developing novel electrodes for high-capacity lithium-ion batteries, as well as exploring alternative battery technologies such as Na/Mg-ion and lithium-air batteries, and battery-hybrid supercapacitor electrodes. His prolific research has resulted in over 150 publications in peer-reviewed journals, and he has co-edited nine books of scientific interest and authored numerous book chapters. His significant contributions to the field have been recognized with awards such as the "most cited article award" from the European Polymer Journal and the "Best Paper Award" from "Energy Storage Materials" in 2017. Dr. Stephan has extensive collaborations with national and international scientific institutions across India, South Africa, Slovenia, Canada, France, Germany, Malaysia, Australia, and the United States, fostering a global approach to scientific advancements. He is also a recipient of prestigious research fellowships and associateships from government organizations in India, including the Department of Science and Technology and the Council of Scientific and Industrial Research.`,
  },

  {
    id: 29,
    name: "Dr. Marc-Olivier Coppens",
    institution: "University College London",
    country: "UK",
    image: "speak/Olivier.jpg",
    description:
      "Marc-Olivier Coppens is the Ramsay Memorial Professor in Chemical Engineering at University College London (UCL), where he directs the Centre for Nature-Inspired Engineering (CNIE). He previously served as Head of Department and Vice-Dean Engineering. Professor Coppens is recognised for pioneering Nature-Inspired Chemical Engineering (NICE), with applications in process intensification, functional materials and devices for sustainable manufacturing, energy, water, and health. He is Fellow of RSC, IChemE, AIChE, and member of the Saxon Academy of Sciences (Germany).",
  },
  {
    id: 30,
    name: "Dr. Michael Naguib",
    institution: "Tulane University",
    country: "USA",
    image: "speak/17.jpg",
    description:
      "Dr. Michael Naguib is an associate professor in the Department of Physics and Engineering Physics at Tulane University. Prior to joining Tulane in 2018, he was a Wigner Fellow (2014-2017) and Research Staff (2017-2018) at Oak Ridge National Laboratory. He received his PhD in Materials Science and Engineering at Drexel University in 2014. He was one among the few members in Prof. Yury Gogotsi’s Team to have discovered a new class of 2D materials called MXenes. He has published more than 100 papers (with > 41,000 citations and h-index of 60) in international journals and presented many plenary, keynote and invited lectures and seminars at international conferences and universities. He completed his undergraduate and master’s degrees at Cairo University, Egypt. He has been listed as a Highly Cited Researcher by Clarivate Analytics three times and has received many awards such as NSF CAREER Award, Robert L. Coble Award, Kroto Award, Ross Coffin Purdy Award, Rising Star Award by Tulane University, Young Alumni Emerging Leader Award and listed as Forty-Under-Forty by Drexel University. He is an Associate Editor of Energy Advances. His research group works on the synthesis and characterization of novel nanomaterials with a focus on 2D materials for electrochemical energy storage and conversion.",
  },


{
    id: 31,
    name: "Dr. Muthu Senthil Pandian",
    institution: "SSN, Chennai",
    country: "India",
    image: "Muthu Senthil Pandian.png",
    description:
      "Dr. Muthu Senthil Pandian is a highly accomplished Research Scientist, currently holding the position of Senior Grade-III and Research Coordinator at the SSN Research Centre within SSN Institutions (Autonomous) in Chennai, Tamil Nadu, India. With 16 years of extensive research experience and 11 years dedicated to teaching, Dr. Pandian has made profound contributions to the field of crystal growth and materials science. Dr. Pandian's academic foundation was laid at The American College, Madurai, where he earned both his B.Sc. and M.Sc. in Physics. He went on to complete his Ph.D. from Anna University, Chennai, in 2013, solidifying his expertise in the nuances of materials science A testament to his hands-on research prowess, Dr. Pandian was a key member of the team that successfully grew a remarkable 1350 mm length and 55 mm diameter longest NLO single crystal, a significant achievement in the field. His prolific research output is evident in his extensive publication record, which includes 163 papers in international peer-reviewed journals and 35 papers in American Institute of Physics (AIP) and Materials Today Proceedings. These publications have garnered an impressive 2368 citations, an h-index of 27, and an i10-index of 66, underscoring the impact and recognition of his work. Dr. Pandian has successfully secured substantial funding for his research, including 7 external projects from prestigious agencies like DST, SERB, and DAE-BRNS, totaling an impressive Rs. 285.48 lakhs. Additionally, he has championed 17 internally funded faculty and student projects supported by the SSN Trust, with a budget of Rs. 33.31 lakhs, fostering a vibrant research environment. A dedicated mentor and educator, Dr. Pandian is a recognized supervisor at Anna University, Chennai. Under his guidance, 6 full-time Ph.D. scholars have successfully completed their doctoral studies, and 5 full-time Ph.D. scholars are currently pursuing their research. His mentorship extends to a large cohort of emerging researchers, with 14 Postdoctoral Fellows (PDFs), 4 Senior Research Fellows (SRFs), and 11 Junior Research Assistants (JRAs) having completed their research under his expert supervision. Dr. Pandian is a highly sought-after speaker, having delivered 133 invited lectures at international and national conferences, seminars, and workshops. His commitment to disseminating knowledge is further exemplified by the more than 250 papers presented by his Ph.D. students at various national and international conferences. He is also a published author, with 12 books, book chapters, and newsletters to his credit. His organizational skills are evident in the 23 international and national conferences, seminars, workshops, and summer schools he has successfully organized. His significant contributions have not gone unnoticed. The Asia Scientist Ranking recognized Dr. Muthu Senthil Pandian as one of the World Scientists in Physical Sciences for both 2021 and 2022. He has been honored with 30 prestigious awards, including the Sir C.V. Raman Young Scientist Award, The Academy of Sciences-Young Scientist Award, IACG – Prof. P. Ramasamy National Award, ISPA-Prof. S. Gunasekaran National Award, Shri. P.K. Das Memorial Best Young Faculty Award, and numerous Young Scientist and Young Researcher Awards. He has also received accolades such as the SSN Best Faculty Researcher Awards, Best Outgoing Project Award, Best Innovative Researcher Award, SSN Best Research Scholar Awards, Best Crystal Display Awards, Best Indigenous Product Presentation Award, and DAE-Best Poster Awards. In 2019, he received a Certificate of Appreciation for being a Highly Cited Author from the Royal Society of Chemistry (RSC), UK.",
  },
{
    id: 70,
    name: "Dr. Muthukumaran Packirisamy",
    institution: "CONCORDIA University",
    country: "Canada",
    image: "Muthukumaran Packirisamy.jpg",
    description:
    `
    Dr. Muthukumaran Packirisamy received the B.S. degree from the University of Madras, Chennai, India, the M.S. degree from the Indian Institute of Technology, Chennai, and the Ph.D. degree from Concordia University, Montreal, QC, Canada.,He is currently a Professor and the Concordia Research Chair of Optical bioMEMS with the Department of Mechanical and Industrial Engineering, Concordia University. He has experience with many microelectromechanical systems industries in Canada. He is also involved in the development of bioMEMS devices in collaboration with industry. He has authored or coauthored more than 225 articles published in journals and conference proceedings. He holds nine patents. His current research interests include optical bio-MEMS, integration of microsystems, and micro- and nano-integration.,Prof. Packirisamy is a Fellow of the Canadian Society for Mechanical Engineers. He was a recipient of the I. W. Smith Award from the Canadian Society for Mechanical Engineers, the Concordia University Research Fellowship, the Petro Canada Young Innovator Award, and the ENCS Young Research Achievement Award.
    `
  },

  {
    id: 32,
    name: "Dr. Nanasaheb Devappa Thorat",
    institution: "University of Limerick",
    country: "Ireland",
    image: "speak/18.jpg",
    description:`Dr. Nanasaheb Devappa Thorat is an Associate Professor of Medicinal and Medical Physics, Group Leader, and Principal Investigator in the Department of Physics at the University of Limerick, Ireland. His research is funded by Research Ireland and the European Commission. Dr. Thorat is a three-time recipient of the prestigious Marie Skłodowska-Curie Fellowship, having conducted advanced research at Politechnika Wrocławska (2018–2020), the University of Oxford (2020–2022), and Harvard Medical School (2022). He is also the first Indian scientist to receive the European Commission’s Innovation Radar Grand Prix Prize (2020).
Dr. Thorat has authored more than 120 scientific contributions, including 100 peer-reviewed SCI journal articles, 7 books, and 25 book chapters. He has filed one European patent and registered two European innovations under the EU Innovation Radar program. He has delivered 10 keynote lectures and more than 35 invited talks at prominent scientific conferences across Singapore, France, Germany, the United States, Ireland, Poland, South Korea, and India. His research excellence has been recognized through multiple international awards, and he has secured over €2 million in competitive research funding. Dr. Thorat has supervised numerous students and early-career researchers and is actively engaged in scientific outreach and public engagement.
He earned his Ph.D. in Physics (awarded with Gold Medal) from the Centre for Interdisciplinary Research, D. Y. Patil University, Kolhapur, India, and completed his B.Sc. and M.Sc. degrees at Shivaji University, Kolhapur, India. His research interests include nanomedicine, targeted drug delivery, cancer therapeutics, and nanotechnology`
  },


{
    id: 33,
    name: "Dr. K. S. Narayan",
    institution: "JNCASR, Bangalore",
    country: "India",
    image: "speak/12.jpg",
    description:
      "Dr. K S Narayan is a Professor and Sir J. C. Bose National Fellow at Jawaharlal Nehru Centre for Advanced Scientific Research (JNCASR), Bangalore. He is an academic researcher and has been active in the general field of molecular/organic/polymer/bioelectronics. He is a co-founder of a startup hbaromega (ℏw) - A Photovoltaic diagnostic Company- winner of Elevate-100 startup grant 2023 by Karnataka State Govt., selected for seed grant IIT(M) Pravartak. He is a hands-on experimentalist, who has contributed to many research problems in applied sciences spreading across physics, chemistry, and biology and translating this knowledge into engineering solutions. His laboratory has come out with many unique findings including the first demonstration of polymer optical-field effect transistors in 2001. His lab actively pursues frontier problems in device physics, photophysics of solution processible semiconductors, solar cells, LEDs, transistors, and circuits.  He has also contributed to the area of soft-electronic polymers in the biomedical arena of tissue engineering and for vision prosthetic elements. His present laboratory theme also explores advanced materials for integrating seamlessly the connected world with human sensory systems for a variety of biomedical applications and understanding it from a device physics perspective. His other current pursuits include developing noise measurement and scanning techniques to predict the full life cycle of photovoltaic modules. His work has received international coverage (Physics World, Laser Focus World, Printed Electronics World, Materials Research Society Bulletin, Nature India). Besides research, he has taken up the administrative mantle of Dean (R&D) (2011-2018) and was President-In Charge of JNCASR for a two and half years.",
  },
 
  {
    id: 62,
    name: "Dr. Narendra Kurra",
    institution: "IIT- Hyderabad",
    country: "India",
    image: "Narenra.jpg",
    description:
    `Dr. Narendra Kurra is currently working as an assistant professor at school of chemistry, IISER- TVM. He was a postdoctoral fellow at Drexel University and King Abdullah University of Science and Technology (KAUST), prior to becoming a Research Assistant Professor at A. J. Drexel Nanomaterials Institute, Drexel University, USA (November 2019-September 2020). He obtained his PhD from JNCASR, Bangalore in 2013. He did masters from school of chemistry, University of Hyderabad (2006-08). His Research interests include understanding of
fundamental aspects of electrode/electrolyte interfaces, nanomaterials for electrochemical energy storage applications including high rate On-chip Energy Storage and hybrid metal-ion capacitors.
`
  },
    {
    id: 71,
    name: "  Dr. K. Pandian",
    institution: "University of Madras",
    country: "India",
    image: "Pandian.jpg",
    description:
    `
    Dr. Kannaiyan Pandian is a Professor of Inorganic Chemistry at the University of Madras, Guindy Campus, Chennai. He completed his Ph.D. in Analytical Chemistry from the University of Madras in 1995, following M.Sc. and B.Sc. degrees with first-class honors. Dr. Pandian carried out postdoctoral research at the Institute of Chemistry, Academia Sinica, Taipei, Taiwan. His professional experience includes roles as a Scientist B at the National Geophysical Research Institute and various academic positions leading up to his current professorship. His research interests encompass nanotechnology, semiconductor quantum dots, targeted drug delivery, conducting polymers, energy storage devices, microelectronic devices, biosensors, and electroanalytical methods. He has developed new technologies for disease diagnosis and environmental monitoring using nanomaterial-based sensors. Dr. Pandian has received numerous awards, including the Best Researcher Award from Madras University and the INSA Visiting Fellow Award. He also serves as Controller of Examinations at the University of Madras and has been actively involved in curriculum development, academic committees, and editorial roles for scientific journals. He has published extensively and delivered many invited talks, contributing significantly to nanoscience and inorganic chemistry research.
`
  },




  {
    id: 35,
    name: "Dr. N. Ponpandian",
    institution: "Bharathiar University, Coimbatore",
    country: "India",
    image: "Ponpandian.png",
    description:
   "Dr. N. Ponpandian is a distinguished figure in the field of Nanoscience and Technology, serving as a Professor and Head of the Department of Nanoscience and Technology at Bharathiar University, Coimbatore, Tamil Nadu. With an impressive 25 years of research experience and 17 years in teaching, his career exemplifies a deep commitment to scientific discovery and education. Dr. Ponpandian's academic journey began with B.Sc. and M.Sc. degrees in Physics from Ayya Nadar Janaki Ammal College, followed by an M.Phil. from the same institution. He earned his Ph.D. in Physics from the University of Madras in 2003, and most recently, a D.Sc. in Physical Science from Alagappa University in September 2024, highlighting his continuous pursuit of knowledge. Before his tenure at Bharathiar University, Dr. Ponpandian gained invaluable international exposure through extensive postdoctoral fellowships. These included significant periods at the University of Nebraska, Lincoln, USA, the University of Rostock and Free University of Berlin in Germany, and nationally at the Indian Institute of Science, Bangalore, and the University of Madras. These diverse experiences equipped him with a broad and profound understanding of cutting-edge research. Joining Bharathiar University in February 2008, Dr. Ponpandian quickly advanced to become a Professor in March 2014 and assumed the role of Head of the Department in July 2015. His research interests are highly relevant to contemporary challenges, encompassing Water Splitting, Supercapacitors, Sensors, Solar Cells, and the environmental sustainability of nanomaterials. His significant contributions are reflected in his outstanding research credentials (as of April 2025): an H-index of 62, over 13,268 citations, and an i10-index of 203. Dr. Ponpandian is a prolific author, with 121 international journal publications, 23 books/chapters, and 7 national journal articles. Furthermore, his innovative spirit is evident in his 3 granted patents and 4 filed patents, including a bifunctional electrocatalyst for hydrogen and oxygen evolution reactions and methods for wastewater treatment. Beyond his research, Dr. Ponpandian is a dedicated mentor, having successfully guided 17 Ph.D. scholars and 3 postdoctoral fellows, with several more currently under his supervision. He has also been instrumental in securing and managing numerous national-level research projects. His leadership extends to a wide array of administrative responsibilities at Bharathiar University. He currently serves as the Controller of Examinations, a Senate Member, and holds key coordinating roles for International Rankings, AISHE, DST – FIST, and UGC – SAP. He is also involved in various DRDO projects, demonstrating his comprehensive engagement in fostering institutional growth and academic excellence. Dr. Ponpandian actively promotes collaboration and knowledge exchange, evidenced by his extensive network of research partners and his consistent organization of academic events, including international seminars and workshops. His multifaceted contributions solidify his position as a prominent and influential figure in nanoscience.",
  },

  {
    id: 36,
    name: "Dr. Pranab Goswami",
    institution: "IIT Guwahati",
    country: "India",
    image: "speak/19.jpg",
    description:
      "Prof. Pranab Goswami received a Ph.D. degree in 1994 in chemical biology from Gauhati University. He was a BOYSCAST fellow of DST, India, at the University of Massachusetts Boston. He joined as a scientist at NEIST, CSIR India, in 1990, moved to IIT Guwahati, India, in 2002, attained the level of Professor in 2009, and then HAG Professor in 2015. Prof. Goswami also served as Head of the Department of Biosciences and Bioengineering from 2006-2009, Head of the Centre for Energy from 2014-2017, and Founder Head of the Central Instrument Facility from 2004-2006 at IIT Guwahati. He was a visiting Professor at the University of Alberta, Canada, in 2018. Prof. Goswami received many accolades, served as an editorial board member of many international scientific journals, and was chairman and expert member in many academic, research, and administrative bodies in India. He served as Senate nominee to the BoG, IIT Guwahati. The primary research area of Prof. Goswami is the biosensors and biofuel cells, focusing on developing novel biorecognition systems and signal transduction platforms for malaria, myocardial infarction, Shiga toxin, and alcohols. His group explores biofuel cells as biosensing platforms and green power-generating devices. A couple of proofs-of-concept developed in his lab have already been translated into portable kits, and two of these prototype kits were dedicated to the nation by the honorable HRD minister of India. Prof. Goswami has published over 135 peer-reviewed scientific papers, filed 11 patent applications, edited one book in biosensors, supervised more than 40 research students in Ph.D. and MTech programs, and 25 students have received Ph.D. degrees",
  },


  {
    id: 72,
    name: "Dr. Prasad P. Phadnis",
    institution: "BARC",
    country: "India",
    image: "Dr. Prasad P. Phadnis.jpeg",
    description:
    `
    Dr. Prasad P. Phadnis is a Scientific Officer at the Bhabha Atomic Research Centre (BARC), Mumbai, where he has been contributing since 2008. He specializes in organoselenium chemistry and organometallic chemistry, focusing on advanced research in chemical sciences. Dr. Phadnis has published numerous research articles, enhancing the understanding of chemical interactions and potential applications in radiation biology and health sciences. His work involves innovative nanoparticle synthesis with promising applications in cancer theragnosis  on deoxyglucose-conjugated persistent luminescent nanoparticles. His scientific contributions play a vital role in the progress of chemical and biomedical research within the BARC framework and India's atomic energy programs.
    `
  },
 

   {
    id: 63,
    name: "Dr. Prasanta Kumar Sahoo",
    institution: "National Institute of Hydrology, Roorkee",
    country: "India",
    image: "prasanth.jpg",
    description:
    `Dr. Prasanta Kumar Sahoo is a Scientist D in the Environmental Hydrology Division at the National Institute of Hydrology (NIH), Roorkee, India. He obtained his M.Tech in Corrosion Science and Engineering from IIT Bombay and a joint Ph.D. in Materials Science and Engineering from the IITB-Monash Research Academy, IIT Bombay (India) and Monash University (Australia). He also pursued a Postdoctoral Fellowship at the Department of Chemistry, National Taiwan University (NTU) and the Institute of Atomic and Molecular Sciences (IAMS), Academia Sinica, Taiwan. His research interests include the development of nanostructures and their composite materials for electrochemical sensors, energy storage and conversion, and environmental remediation applications. He has authored 79 international publications and 7 book chapters, with more than 2040 citations (h-index: 24, i10-index: 41). Dr.Sahoo serves as an active reviewer for more than 30 international journals, an Editorial Board Member of Nature’s Scientific Reports, and a Guest Editor for Discover Applied Sciences, Materials Today Proceedings, and Frontiers in Energy Research. He has received several awards and fellowships, including the Best PhD Thesis Award (IIT Bombay, 2016), the DAAD Scholarship for M.Tech Thesis in Germany (2009–2010), and the Postdoctoral Fellowship (NTU & Academia Sinica, Taiwan).As a mentor, he is currently supervising 4 Ph.D. scholars, 4 M.Sc. students, and 3 M.Tech. students. Currently, he is engaged in nationally funded projects (NIH, NMCG) focusing on multifunctional nanomaterials for the detection and remediation of inorganic and organic pollutants in water, hydrological studies, and environmental flow assessments. Dr. Sahoo is a Life Member of the Indian Water Resources Society, a Member of the International Water Association, and a Member of the Society for Materials Chemistry (SMC).`
  },

  {
    id: 37,
    name: "Dr. Pratap Kollu",
    institution: "University of Hyderabad",
    country: "India",
    image: "speak/PratapKollu.jpg",
    description:
      "Dr. Pratap Kollu is Assistant Professor at Center for Advanced Studies in Electronics Science and Technology (CASEST), School of Physics at the University of Hyderabad, India. He is also Newton Alumnus researcher to Cavendish laboratory, University of Cambridge, UK. His PhD in Materials Engineering is from Chungnam National University, Daejeon, South Korea. He completed his MPhil and MSc in Electronics from Andhra University, Visakhapatnam, India. He is a gold medalist from the university during his master’s course. His post-doctoral positions are at Tyndall national institute, Ireland, Indian institute of technology (IIT) Bombay and at University of Cambridge, UK. He is awarded the Newton International fellowship jointly by the Royal Society, UK and the British Academy, UK and he is awarded the INSPIRE faculty fellowship by Department of Science and Technology (DST), Government of India. His research areas include design and fabrication of magnetic sensors, porotype development for navigation and biosensor applications; He also works on 2D material metal nanocomposites for energy, multiferroics and water purification applications. He has published in 80 international peer-reviewed journals. He is also a recipient of young scientist award during the 9th international conference on advanced materials and processing held at Northeastern University, Shenyang, China (2018). ",
  },


  {
    id: 73,
    name: "Dr. Rajendrakumar Sharma",
    institution: "Spel Technologies Pvt. Ltd",
    country: "India",
    image: "Dr. Rajendrakumar Sharma.jpeg",
    description:
    `
    Dr. Rajendrakumar Sharma is the Managing Director of Spel Technologies Pvt. Ltd., based in Pune, India. He is recognized as the "Father of Supercapacitors" in India for pioneering the manufacturing of advanced energy storage devices such as supercapacitors and lithium-ion batteries. With a career spanning several decades since 1986, Dr. Sharma has led significant innovations in energy storage technology, including the development of lithium-ion supercapacitors and hybrid supercapacitor batteries. Under his leadership, Spel Technologies became India’s first manufacturer of supercapacitors and an industry partner in the Centre of Excellence on Rechargeable Battery Technology (CoERBT) supported by the Ministry of Electronics and Information Technology. Dr. Sharma has been honored with the Atma-Nirbhar Bharat Award for his exemplary contributions to the field, and he continues to drive research and development aimed at building a robust indigenous manufacturing ecosystem for rechargeable battery technologies in India.
    `
  },


  {
    id: 40,
    name: "Dr. Raman Singh",
    institution: "Monash University",
    country: "Australia",
    image: "speak/22.jpg",
    description:`Professor Raman Singh’s primary research interests are in the relationship of Nano-/microstructure and Environment-assisted degradation and fracture of metallic and composite materials, and Nanotechnology for Advanced Mitigation of such Degradations. He has also worked extensively on use of advanced materials (e.g., graphene) for corrosion mitigation, stress corrosion cracking, and corrosion and corrosion-mitigation of magnesium alloys (including for the use of magnesium alloys for aerospace, energy, defence and bioimplant applications).  
Prof Singh is a senior professor at Monash University, Australia.  He is/was a Guest Professor at ETH Zurich, Switzerland (2020, 2023, 2024, 2026), US Naval Research Lab, Indian Institute of Science, University of Connecticut, Indian Institute of Technology, Kharagpur. He worked as a scientist at Indian Atomic Energy and as a post-doc fellow at University of New South Wales, Australia.
Prof Singh’s professional distinctions and recognitions include: Guest Professor of ETH Zurich, Editor of a book on Cracking of Welds (CRC Press), Lead Editor of a book on Non-destructive Evaluation of Corrosion (Wiley), Editor-in-Chief of an Elsevier and an MDPI journals, leader/chairperson of a few international conferences and numerous plenary/keynote lectures at international conferences, over 285 peer-reviewed international journal publications and 15 book chapter, and several competitive research grants (that includes 4 Discovery, 7 Linkage and one ITRH grants of Australian Research Council).
Prof Singh has supervised 61 PhD students.  His vibrant research group at Monash University comprises of PhD students from different disciplines (Mechanical, Chemical, Materials and Mining Engineering, and Science) as well as from different cultural backgrounds (Australian, Middle-eastern, Chinese, Malaysian, Indian, African, North American and Israeli).`,
  },
  {
    id: 41,
    name: "Dr. Roland Kádár",
    institution: "Chalmers University of Technology",
    country: "Sweden",
    image: "speak/23.jpg",
    description:
      "Dr. Roland Kádár is a leading figure in the rheology and processing of soft matter, currently holding a Professorship at the Department of Industrial and Materials Science at Chalmers University of Technology in Sweden since 2023. His research group focuses on complex fluid flows, the interaction between fields and nanostructured fluids for multifunctional applications, and the development of advanced rheometry techniques. A significant aspect of his work involves creating novel characterization methods, particularly rheo-SAXS techniques at MAX IV, to understand the intricate relationships between flow, structure, and properties in soft materials. His expertise extends to nonlinear mechanical spectroscopy, rheology combined with optics and dielectric spectroscopy, and high-pressure rheometry. He is also a Guest Researcher and LINXS Fellow at LINXS (Lund Institute for Advanced Neutron and X-ray Science) from March to June 2025, actively contributing to infrastructure development and education/outreach within the institute. Professor Kádár's academic journey includes a Dipl. Eng and a Ph.D. from the Polytechnic University of Bucharest. He furthered his research as a Postdoctoral Researcher at the Karlsruhe Institute of Technology (KIT) in Germany. Before his professorship, he held positions as an Associate Professor and Senior Lecturer at Chalmers. He is a Principal Investigator at the Wallenberg Wood Science Centre (WWSC) since 2019. His dedication to the scientific community is evident through his roles as an executive committee member-at-large of the European Society of Rheology (since 2023) and his recent presidency of the Nordic Rheology Society (2020-2024). Beyond his scientific pursuits, Professor Kádár is described as a scientist, researcher, educator, and enjoys recreational road cycling, travelling, and amateur photography.",
  },
   
  {
    id: 42,
    name: "Dr. Saikat Talapatra",
    institution: "Southern Illinois University, Carbondale",
    country: "USA",
    image: "speak/25.jpg",
    description:
      "Dr. Saikat Talapatra is currently a professor in the Department of Physics, where he earned his Ph.D. degree in engineering science from Southern Illinois University, Carbondale. His expertise includes low-temperature and condensed-matter physics, and his present research interests include a broad variety of nanomaterial synthesis and characterization pertaining to advanced energy solutions. Dr. Saikat Talapatra, received his B.Sc. in Physics and B.Ed degree from Regional College of Education Bhubaneswar. Thereafter he finished his M.Sc. in Physics form Jadavpur University, Kolkata and his MS and Ph.D. from Southern Illinois University Carbondale (SIUC), Illinois, USA. After spending some time at Rensselaer Nanotechnology Center, Troy NY as a Post-Doctoral Research Associate with Prof. P. M. Ajayan's group, he returned to SIUC as a faculty.",
  },
{
    id: 43,
    name: "Dr. Santanu Das",
    institution: "IIT BHU",
    country: "India",
    image: "speak/26.jpg",
    description:`Dr. Santanu Das is an Associate Professor in the Department of Ceramic Engineering, Indian Institute of Technology (BHU), Varanasi, since 2024. He worked as Research Scientist at the Department of Materials Science and Engineering, University of North Texas, USA.  Dr. Das did his Ph.D. from Florida International University, USA, in Materials Science and Engineering and did his Master degree from Banaras Hindu University in Ceramic Engineering, respectively. His research areas include the engineering of various nanostructured materials and nanoarchetypes for various applications, including energy storage, electrochemical sensors, energy-harvesting, electrocatalysis, transistors, photo-sensors, photodetectors, and several other thin-film photonics, electronics, and optoelectronics. Dr. Das is a recipient of numerous prestigious awards, including a National award on “Best Innovation 2022, 11th National Petrochemicals Awards, Ministry of Petroleum and Natural Gas, Govt. of India”; “IIT(BHU) Best Teacher Award 2022”; "Outstanding Ph.D. dissertation award FIU, USA; “IT-gold Medal” IT(BHU); "The American Ceramic society's McCARE Award" ACerS, USA; "MRS poster Award" Materials Research Society, USA; "Early Career Awards" SERB; “MoE-STARs awards”, Ministry of Education; and many more. He got the honor of becoming Fellow, Indian Chemical Society, 2022; MRSC, Royal Society of Chemistry, UK; 2021, "IEEE Senior Member" 2017; for his outstanding research contribution over the last twelve years. Dr. Das published ~ 1 book, ~ 6 book chapters, a total of more than 137 SCI-indexed peer-reviewed high-impact research articles, and holds 14 patents (including two (02) US patents granted, ten (10) Indian patents granted). He has total more than ~4200 citations, h-index of ~35 and i-10 index of ~83. Recently, he has also transferred a few technologies from lab-scale to start-up industrial scale for developing indigenous products in India.`,
  },
  	

{
    id: 65,
    name: "Dr. Sarathlal Koyiloth Vayalil",
    institution: "Deutsches Elektronen-Synchrotron DESY",
    country: "Germany",
    image: "Sarathlal.jpg",
    description:
    `Beamline Manager,P03 Beamline, PETRA III, DESY Hamburg, Germany; Adjunct Professor, UPES, India
Dr. Sarathlal Koyiloth Vayalil is working as Beamline Manager at Deutsches Elektronen-Synchrotron DESY Hamburg, Germany, an Adjunct Professor at the Department of Physics, School of Advanced Engineering, UPES and a distinguished researcher in spin-based electronics. His work focuses on enhancing data storage efficiency in compact devices, addressing the growing demand for stable and miniaturized storage solutions in mobile and computing technologies. With a Ph.D. from UGC-DAE Consortium for Scientific Research, Indore, and prior experience as an Inspire Faculty at IISc Bangalore, Dr. Sarathlal brings extensive expertise in condensed matter physics, magnetic nanostructures, and thin film magnetism. His research contributes significantly to the advancement of spintronics, paving the way for next-generation data storage technologies.
`
  },
{
    id: 44,
    name: "Dr. P. Saravanan",
    institution: " DRDO - DMRL, Hyderabad",
    country: "India",
    image: "P Saravanan.jpg",
    description:
    `Dr. P. Saravanan currently holds a position of Scientist 'G' at the Advanced Magnetics Group, Defence Metallurgical Research Laboratory (DMRL), Ministry of Defence, DRDO, Hyderabad. With over 25 years of dedicated research experience in DRDO since 1999, he has made significant contributions to the fields of nano-magnetic materials, nanocomposites, thin films, and MEMS devices. Dr. Saravanan earned his Ph.D. in Physics from Bharathiar University, Coimbatore (1994-1999), following his M.Sc. in Physics from Bharathidasan University, Tiruchirappalli (1992-1994). His commitment to scientific advancement is further highlighted by a Postdoctoral Fellowship at National Taiwan University (2012-2013), awarded by the National Science Council of Taiwan. He also held visiting positions at the Jawaharlal Nehru Centre for Advanced Scientific Research (JNCASR), Bangalore (2001-2003), and the International Advanced Research Centre for Powder Metallurgy & New Materials (ARC-I), Hyderabad (1997-1999). A recipient of numerous accolades, Dr. Saravanan's honors include being a Fellow of the Telangana Academy of Sciences (2020) and the Academy of Sciences, Chennai (2018). He has been recognized with the DAE Young Achiever Award (2011), the DRDO Technology Award (2008) for the development of Sm2Co17 Magnets, the DRDO National Science Day Silicon Medal (2005), and the DRDO Young Scientist Award (2003). His early career was marked by the ISCA Young Scientist Award in Material Science (2000) and the ICTP-Invited Delegate Award (2000) from the Abdus Salam International Centre for Theoretical Physics, Trieste, Italy. Dr. Saravanan is a prolific researcher with over 175 papers published in international refereed journals and more than 125 conference presentations. He holds two patents granted for the development of Rare Earth Free Permanent Magnets. His editorial contributions include serving as Managing Guest Editor for special issues of the Journal of Magnetism and Magnetic Materials. He is also a respected reviewer for several prominent journals. Demonstrating his dedication to nurturing new talent, he has guided 4 Ph.D. students, 14 M.Tech students, 4 M.Phil students, and 16 M.Sc students.,`
},
{
    id: 45,
    name: "Dr. Satheesh Krishnamurthy",
    institution: " University of Surrey",
    country: "UK",
    image: "Dr. Satheesh.jpg",
    description:
    "",
},



   
  
  {
    id: 47,
    name: "Dr. Seiichi Takamatsu",
    institution: "State University of New York at Binghamton",
    country: "USA",
    image: "speak/27.jpg",
    description:
      "Dr. Seiichi Takamatsu is a Professor at the School of Systems Science and Industrial Engineering, State University of New York, Binghamton. He received the BE, ME, and PhD degrees in mechanical informatics from the University of Tokyo, Japan, in 2003, 2005 and 2009, respectively. He joined the National Institute of Advanced Industrial Science and Technology (AIST) in 2009, where he was a researcher with the Research Center for Ubiquitous MEMS and Micro Engineering (UMEMSME), AIST. until 2016. Before joining Binghamton University, he was an associate professor with The University of Tokyo. His international experience includes time as a visiting graduate student at Cornell University from 2005 to 2006 and a visiting scientist at Ecole Nationale Supérieure des Mines de Saint-Etienne in France from 2014 to 2015. His research interests include hybrid electronics, wearable MEMS technologies and meter-scale electronic textiles. He has published over 120 journal and conference papers on hybrid electronics and electronic textiles, and he has received the Excellent Researcher Award from the University of Tokyo, the Satomi Prize, and the Young investigator Award of Japan Institute of Electronics Packaging.",
  },
{
    id: 48,
    name: "Dr. K. Selvaraj",
    institution: "NCL Pune",
    country: "India",
    image: "Dr. Selvaraj.jpg",
    description:
      "Selvaraj is at the helm of research and technology development affairs for sustainable energy solutions. Green hydrogen generation technology development for climate change mitigation is his thrust area of interest. He has developed India's first indigenous AEM Water Electrolyser Technology under the National Green Hydrogen Mission (NHEM), Govt of India. Apart from mentorship to Ph.D students, he is also part of critical policy making bodies of various ministries of govt. of India. He is materials scientist with a physical and inorganic chemistry background by training. He has more than 25 years of research experience and has mentored several post-doctoral, PhD, and graduate students. He has about 70 international publications and over 10 patents (PCTs) to his credit. He has delivered more than 60 invited talks in prestigious institutions. ",
  },
{
    id: 49,
    name: "Dr. Sudarsanam Putla",
    institution: "IIT Hyderabad",
    country: "India",
    image: "Dr. Sudarsanam.png",
    description:
      "Dr. Sudarsanam is an Assistant Professor at the Department of Chemistry, Indian Institute of Technology Hyderabad, India. He completed his Ph.D. (Chemistry) at CSIR-IICT, Hyderabad, India. From 2014 to 2019, he worked as a postdoc fellow at RMIT University (Melbourne), LIKAT (Germany), and KU Leuven (Belgium). His research focuses on developing novel heterogeneous nanocatalysts for plastic waste recycling and biomass valorization to produce value-added monomers, fuels, and chemicals. He has authored ~85 journal articles (h-index 41, ~6000 citations), edited 4 books, and serves on the editorial boards of ACS Sustain. Chem. Eng., Molecular Catalysis, and Applied Catalysis O: Open journals. He has received several awards/fellowships, including the RSC Nanoscale Emerging Investigator-2025, PECFAR Award-2024 (Indo-German Science & Technology Centre), Young Scientist Award-2024 (Catalysis Society of India), Australian Alumni Award-2021, Marie-Curie Fellowship-2017, and DAAD Fellowship-2017.",
  },


  {
    id: 50,
    name: "Dr. Sudhagar Pitchaimuthu",
    institution: "Heriott Watt University",
    country: "UK",
    image: "speak/28.jpg",
    description:`Dr. Sudhagar Pitchaimuthu is an Associate Professor at IMPEE, School of Engineering and Physical Sciences, Heriot Watt University, UK and he holds the role of Associate Director for the Energy Materials and Technology theme at the Research Centre for Carbon Solutions (RCCS). With a distinguished career spanning over 15 years in materials science, Dr Pitchaimuthu is renowned for his pioneering work in the development of multi-functional nanomaterials, particularly in the realm of solar energy applications, such as solar cells, solar hydrogen fuel generation, environmental remediation (water and air pollutant cleanup), artificial CO2 recycling, electrolysis, supercapacitors, and biosensor technologies. His standing as a world-class researcher is underlined by the two prestigious international research fellowships he has earned in Japan (JSPS Post Doctoroal Fellowship) and the UK (Ser Cymru Rising Star Fellowship).  He is a recipient of both the Newton International Fellowship and the Marie Curie Fellowship as a Host Supervisor. He is also the Fellow of Royal Society of Chemistry. Beyond academia, he excels in conveying the impact of his research to diverse audiences through extensive engagement in outreach activities, including media coverage (BBC News, Nature Outlook, The Independent UK, etc.), the organization of over seven international conferences, and STEM ambassador initiatives. He served as a review panel member for the Scottish Industrial Energy Transformation Fund (SIETF) and assumed the role of an expert panellist at the 15th Pravasi Bharatiya Divas, hosted by the Ministry for External Affairs, Government of India, where he shared profound insights on the "Role of Indian Diaspora in Capacity Building for Affordable Solar Power." Furthermore, he provided expert opinions during the Co-Funded Brain Circulation Scheme 2 Kick-off meeting at the Scientific and Technological Research Council of Turkey (TUBITAK) headquarters in Ankara, Turkey. Furthermore, he has been recognised by the Ministry of Education, Croatia, and invited to share his opinion on “Challenges and advantages in research mobility across the continents” at the “Young researchers in a highly skilled landscape” conference, which was organised by European Commission, Horizon 2020. His extensive expertise and dedication to research excellence have left an indelible mark on the global stage.`,
  },
{
    id: 51,
    name: "Dr. Suman Singh",
    institution: "CSIR-CSIO, Chandigarh",
    country: "India",
    image: "Dr. Suman.jpg",
    description:`Dr. Suman Singh is Senior Principal Scientist, at  Central Scientific Instruments Organisation (CSIR-CSIO), Chandigarh and is doctorate in Chemistry from Panjab University, Chandigarh. Apart from that, she is a Professor and Coordinator at the Academy of Scientific and Innovative Research (AcSIR), Ghaziabad and is a faculty advisor for International student chapter of American Chemical Society (ACS), at CSIR-CSIO, Chandigarh and Advisor to Indian Women in 3D Printing Society, Bangalore.

She has research experience of more than 20 years as a Materials Chemist and works on “Advanced functional materials for Energy conversion & storage Applications, Food & Water Quality through sensors and remediation, Diagnostic Platforms & 3D Printing. Her professional excellence can be espied from her publications in journals, Conference proceedings, book chapters, Edited Books, filed patents, copyright, design registration, technology transfer, invited/Oral talks, along with best paper awards in many national and international conferences for her research work. 

Her dedication is recognised in the form of Envirocare Green Awards 2024 and ESDA Women Empowerment Award 2023, membership of National Academy of Science (NASI), Physical Science, 2023, & is covered as one of the 75 Women in ‘SHE IS - 75 WOMEN IN CHEMISTRY’ to be featured in the 4th edition of Book ‘She Is’, to be published by Beyond Black in partnership with the Office of the Principal Scientific Adviser, Government of India and Royal Society of Chemistry. She has been on the list of top 2% Scientists Worldwide for 2021, 2022, 2024 and among top 2% most influential Indian Scientist 2022. She is member of many renowned societies like Materials Research Society of India, Semiconductor Society of India, Vijnana Bharati and many other with footprint in editorial services as Editorial Board Member, Journal Chemical Physics Impact (Elsevier), Scientific Reports and Guest Editor for special issue in RSC.`,
  },
  {
    id:74,
    name:"Dr. Swaminathan Viswanathan",
    institution:"Memfill Tech",
    image:"71.png",
    country:"India",
    description:"Dr. Swaminathan Viswanathan is a distinguished entrepreneur and academic with a strong foundation in materials science and sustainability. He holds a PhD in Semiconductor Thin Films from Alagappa University, Karaikudi. His in-depth knowledge of semiconductor thin films and materials engineering has laid the groundwork for his career in clean technology and sustainable innovation. He co-founded Memfill Tech Private Limited in 2014, a clean-tech startup based in Karaikudi, Tamil Nadu, focused on sustainable technology solutions. As the founder and adviser of Memfill Tech, he leads efforts to develop environmentally friendly technologies and drive innovation in the clean-tech sector. Under his leadership, Memfill Tech has grown into a notable company employing around 11 people and emphasizing responsive service and sustainable practices. Currently residing in Singapore, Swaminathan Viswanathan continues to be active in sustainability entrepreneurship, advising on environmental technologies and clean innovation. His academic rigor combined with his entrepreneurial vision positions him as a key figure contributing to India's clean-tech landscape and beyond."
  },

   {
    id: 52,
    name: "Dr. Tiju Thomas",
    institution: "IIT Madras",
    country: "India",
    image: "Tiju Thomas.JPG",
    description:
`Dr. Tiju Thomas is a Professor in the Department of Metallurgical and Materials Engineering at IIT Madras, celebrated for his interdisciplinary research at the nexus of materials science, chemistry, and physics. He holds an MS and PhD from Cornell University and an MS (Engg.) from Jawaharlal Nehru Centre for Advanced Scientific Research, reflecting expertise in both experimental and theoretical solid-state sciences. His research stints have been in University of Toronto, Memorial University of Newfoundland, Lumentra Inc (tech start-up) and Indian Institute of Science Bangalore (as a Faculty Fellow). His research has yielded several high-impact results including:
(i) Innovations in Energy Storage: Dr. Thomas’s group has pioneered the development of next-generation supercapacitors and hybrid energy storage systems, advancing materials for high-performance and sustainable energy storage.
(ii) Clean Hydrogen Production: Internationally recognized for work in on-demand hydrogen production, his team leverages novel catalysts and green engineering approaches to enable scalable, eco-friendly hydrogen technologies.
(iii) Solar Energy Harvesting: The group has made significant contributions to nanotech-enabled solar energy harnessing, including plasmon-enhanced solar distillation and the use of earth-abundant plasmonic metals for light-trapping in thin-film solar cells (as demonstrated in publications such as Sustainable Materials and Technologies, 2021).
(iv) Solar-Driven Water Treatment: Dr. Thomas’s research has led to breakthroughs in solar-driven water purification, including non-noble plasmonic-enhanced solar distillation, with practical implications for low-cost, sustainable water remediation.
(v) Computational Materials Design: His work integrates advanced computational methods and machine learning to discover and optimize materials—such as direct band gap perovskites for light harvesting—accelerating the development of new functional materials for energy and environmental applications.
(vi) Patented Synthesis Techniques: He holds patents for rapid, high-yield synthesis methods of monodispersed ceramic and compound semiconductor nanoparticles, which are critical for scalable materials manufacturing.

Dr. Thomas has published over 250 journal articles, ~19 patents (several granted, some underway), has spun off start ups from his lab, maintains a strong citation record and is an elected member of the Royal Society of Chemistry (London) as well as recipient of the Young Scientist Award in Engineering Sciences from the Academy of Sciences (Chennai), of which he is a Fellow. He is also a Fellow of the International Academy of Advanced Materials (Sweden). He consistently aims at bridging fundamental science and applied engineering, driving tangible advances in sustainability and clean technology.`,
  },

  {
    id: 53,
    name: "Dr. Unyong Jeong",
    institution: "Pohang University of Science and Technology",
    country: "Korea",
    image: "speak/29.jpg",
    description:
      "Dr. Unyong Jeong is a distinguished figure in the field of Materials Science and Engineering, currently serving as a Professor at Pohang University of Science and Technology (POSTECH) in South Korea since March 2016. His academic journey includes a strong foundation in Chemical Engineering, culminating in a Ph.D. from POSTECH in 2003 with a thesis focused on the control of self-assembled nanostructures of block copolymer thin films. He also holds M.S. and B.S. degrees in Chemical Engineering from the same institution. Prior to his tenure at POSTECH, Professor Jeong held faculty positions at Yonsei University from 2006 to 2016, progressing from Assistant to Associate Professor. His postdoctoral research was conducted at the University of Washington, Seattle, under the guidance of Professor Younan Xia. Professor Jeong's research interests are broad and impactful, encompassing inorganic, organic, and hybrid organic/inorganic nanostructured materials. His work includes the synthesis and application of nanoparticles, nanowires, and nanotubes in areas such as optoelectronics, thermoelectronics, biomedical and gas sensing, and nanoelectronics. His significant contributions to the field are recognized through numerous awards, including the Nano Korea Revolutionary Research Award (Korean Minister Award) in 2020, the Young Scientist Award by the Korean President in 2011, and the Asia Outstanding Lectureship Award by the Japanese Chemical Society in 2013. He is an elected member of the Young Korean Academy of Science and Technology (Y-KAST) and an Associate Member of the Korean Academy of Science and Technology (KAST). Beyond his research and teaching, Professor Jeong is actively engaged with the scientific community, serving as an Associate Editor for Materials Advances and the Journal of Materials Chemistry C since 2019. He is also a member of the Samsung Future Technology Meeting Committee. His professional affiliations include memberships in esteemed societies such as the Material Research Society, the American Chemical Society, the American Physical Society, and various Korean scientific organizations.",
  },
  
  
  {
    id: 55,
    name: "Dr. Wim Deferme",
    institution: "Hasselt University",
    country: "Belgium",
    image: "Picture_Wim Deferme.png",
    description:
      `Wim Deferme obtained an engineering degree in Applied Physics at the Technical University of Eindhoven in The Netherlands in 2003. He obtained a Ph.D. in Materials Physics at Hasselt University in 2009 on the surface termination of synthetic diamond. In 2009, as a postdoc, he started research in the field of Printable Electronics. Since February 2014, he has been a Professor at Hasselt University, heading a group of 1 post-doc, 8 Ph.D. students, two full-time researchers, and several bachelor and master students in the field of “Engineering of Functional Materials.” His research activities are focused on the printing of functional materials. Ink formulation towards functional inks, printing techniques such as inkjet printing, screen printing, and ultrasonic spray coating, applications such as Organic Electronics, printed sensors for wound monitoring, and stretchable electronics are among his expertise!
The Functional Materials Engineering (FME) research group, headed by Prof. Wim Deferme, is focused on the printing and coating of functional materials on a wide variety of substrates by applying techniques such as inkjet printing, screen printing, ultrasonic spray coating, spin coating, and blade coating. It is the aim of the FME group to optimize printing and coating techniques in combination with the engineering of functional materials for applications such as Organic Photovoltaïcs, printed sensors, health care, and stretchable electronics applications. The group focuses on the deposition of these devices on non-rigid and/or non-flat substrates such as paper, textiles, and 3D structures.`,
  },
 {
    id: 56,
    name: "Dr.  Yogendra Kumar Mishra",
    institution: "University of Southern Denmark",
    country: "Denmark",
    image: "Dr. Yogendra.jpg",
    description:
      `Yogendra Kumar Mishra is full professor at Mads Clausen Institute, NanoSYD, University of
Southern Denmark (SDU), Denmark. Prior to SDU, he worked as group leader at Kiel
University, Germany. He earned habilitation (Dr. habil.) in Materials Science from Kiel
University in 2015 and Ph. D. in Physics in 2008 from Jawaharlal Nehru University (Inter
University Accelerator Centre), New Delhi, India. He has introduced a new flame-based
synthesis method for growth of tetrapod structures form zinc oxide and their highly porous
3D interconnected flexible networks. The tetrapods and their 3D networks have
demonstrated many applications in engineering, agriculture, and biomedical fields.
Additionally, tetrapods can be used as templates to create hybrid and new 3D materials. At
SDU Sønderborg, he is heading ‘Smart Materials’ group with the focus to develop new
materials for green and sustainable technologies. He is Humboldtian and recently honored
with FRSC- Fellow of Royal Society of Chemistry.`,
  },

];
export default function SpeakerCard2() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState<Speaker | null>(null)
  const [autoScroll, setAutoScroll] = useState(true)

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % speakers.length)
  }, [])

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + speakers.length) % speakers.length)
    setAutoScroll(false)
    setTimeout(() => setAutoScroll(true), 10000)
  }

  useEffect(() => {
    if (!autoScroll) return
    const interval = setInterval(next, 4000)
    return () => clearInterval(interval)
  }, [autoScroll, next])

  const handleCardClick = (index: number) => {
    setSelectedImage(speakers[index])
    setAutoScroll(false)
    setTimeout(() => setAutoScroll(true), 10000)
  }

  return (
    <section className="py-10 px-4 bg-[#0a2240]">
      <h2 className="text-3xl font-bold text-center mb-10">ICNAN '25 SPEAKERS</h2>

      <div className="relative max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={prev}
            className="bg-[#0a2240] text-white p-2 rounded-full hover:bg-[#0a2240]/90"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="bg-[#0a2240] text-white p-2 rounded-full hover:bg-[#0a2240]/90"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {speakers.map((speaker, index) => (
              <div
                key={speaker.id}
                className="min-w-full px-6 cursor-pointer"
                onClick={() => handleCardClick(index)}
              >
                <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row items-center">
                  <div className="w-40 h-40 md:w-48 md:h-48 relative overflow-hidden rounded-full border-4 border-[#0a2240]">
                    <Image
                      src={speaker.image || "/placeholder.svg"}
                      alt={speaker.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                    <h3 className="text-xl font-bold text-[#0a2240] mb-2">{speaker.name}</h3>
                    <p className="text-sm text-[#0a2240]">{speaker.institution}</p>
                    <p className="text-sm text-[#0a2240]">{speaker.country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 overflow-scroll bg-background">
          {selectedImage && (
            <div className="bg-gradient-to-br from-[#0b1c2f] to-[#1a365d] rounded-2xl shadow-xl">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-2/5 p-6 flex justify-center items-center">
                  <div className="relative w-48 h-48 md:w-64 md:h-64 overflow-hidden rounded-xl border-4 border-blue-400 shadow-lg">
                    <Image
                      src={selectedImage.image}
                      alt={selectedImage.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="lg:w-3/5 p-6 lg:p-8 text-white">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2">{selectedImage.name}</h3>
                  <p className="text-blue-300 text-lg mb-4">
                    {selectedImage.institution}
                    {selectedImage.country !== "N/A" && `, ${selectedImage.country}`}
                  </p>
                  <p className="text-slate-300 leading-relaxed text-justify pr-4">
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
