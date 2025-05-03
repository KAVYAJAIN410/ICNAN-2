


"use client";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });


import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";
import "./Gallery.css";



const speakers = [
  {
    name: "Dr. Adam Lee",
    title: "Griffith / Australia",
    image: "https://media.licdn.com/dms/image/v2/D5603AQF24LOl0trhMg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1693871092651?e=1750896000&v=beta&t=YQBXiGgh3hPazG7i0_WHTCRcuEUK92awEJIhX6SFPwk",
    description: `Dr. Adam Lee is an American engineer, currently the Robert L. Pigford Chair of Chemical Engineering at the University of Delaware. He gained a Bachelor's degree from Carnegie Mellon University in 1984.`
  },  
  {
    name: "Dr.Karen Wilson",
    title: "Griffith / Australia",
    image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=pt4w-Y4AAAAJ&citpid=3",
    description: `is an American engineer, currently the Robert L. Pigford Chair of Chemical Engineering at the University of Delaware. He gained a Bachelor's degree from Carnegie Mellon University in 1984.`
  },
  {
    name: "Dr. Roland Kádár",
    title: "Chalmers University of Technology, Sweden",
    image: "https://chalmers.se/_next/image/?url=https%3A%2F%2Fcms.www.chalmers.se%2FMedia%2Fwywh3s2i%2Fkroland.jpeg%3Fwidth%3D600%26height%3D600%26v%3D1db814c106c6b40%26quality%3D60%26format%3Dwebp&w=640&q=90",
    description: `is an American engineer, currently the Robert L. Pigford Chair of Chemical Engineering at the University of Delaware. He gained a Bachelor's degree from Carnegie Mellon University in 1984.`

  },
  {
    name: "Dr. Seiichi Takamatsu",
    title: "State University of New York at Binghamton",
    image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=ewqJgAsAAAAJ&citpid=1",
    description: `is an American engineer, currently the Robert L. Pigford Chair of Chemical Engineering at the University of Delaware. He gained a Bachelor's degree from Carnegie Mellon University in 1984.`

  },
  {
    name: "Dr John V Kennedy,",
    title: "Principal Scientist, GNS Science, New Zealand, ",
    image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=mxbbX1cAAAAJ&citpid=5",
    description: `is an American engineer, currently the Robert L. Pigford Chair of Chemical Engineering at the University of Delaware. He gained a Bachelor's degree from Carnegie Mellon University in 1984.`

  },
  {
    name: "Dr. Manoj Gupta",
    title: "National University of Singapore",
    image: "https://vit.ac.in/VCAN2020/images/Manoj.jpg",
    description: `is an American engineer, currently the Robert L. Pigford Chair of Chemical Engineering at the University of Delaware. He gained a Bachelor's degree from Carnegie Mellon University in 1984.`

  },
  {
    name: "Prof. Marc-Olivier Coppen",
    title: "University College London ",
    image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=ZnvGMSIAAAAJ&citpid=2",
    description: `is an American engineer, currently the Robert L. Pigford Chair of Chemical Engineering at the University of Delaware. He gained a Bachelor's degree from Carnegie Mellon University in 1984.`

  },
  {
    name: "Dr Chamil Abeykoon",
    title: "University of Manchester",
    image: "https://www.steconf.org/wp-content/uploads/2022/07/Dr.-Chamil-Abeykoon.jpg.webp",
    description: `is an American engineer, currently the Robert L. Pigford Chair of Chemical Engineering at the University of Delaware. He gained a Bachelor's degree from Carnegie Mellon University in 1984.`

  },
  {
    name: "Dr Kornelius Nielsch ",
    title: "Leibniz Institute for Solid State and Materials Research Dresden (IFW), Germany",
    image: "data:image/webp;base64,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",
    description: `is an American engineer, currently the Robert L. Pigford Chair of Chemical Engineering at the University of Delaware. He gained a Bachelor's degree from Carnegie Mellon University in 1984.`

  },
  {
    name: "Dr. Nanasaheb.D.Thorat",
    title: "",
    image: "https://vit.ac.in/VCAN2020/images/Thorat.jpg",
    description: `is an American engineer, currently the Robert L. Pigford Chair of Chemical Engineering at the University of Delaware. He gained a Bachelor's degree from Carnegie Mellon University in 1984.`

  },
  {
    name: "Dr. Alberto Vomiero",
    title: "Luleå University of Technology, Sweden",
    image: "https://premc.org/wp-content/uploads/2016/01/Avatar-Alberto-Vomiero-150.jpg.webp",
    description: `is an American engineer, currently the Robert L. Pigford Chair of Chemical Engineering at the University of Delaware. He gained a Bachelor's degree from Carnegie Mellon University in 1984.`

  },
  {
    name: "Prof. Lorenzo Pavesi",
    title: "University of Trento, Italy",
    image: "data:image/jpeg;base64,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",
    description: `is an American engineer, currently the Robert L. Pigford Chair of Chemical Engineering at the University of Delaware. He gained a Bachelor's degree from Carnegie Mellon University in 1984.`

  },
  {
    name: "Prof. Wim Deferme",
    title: "Hasselt University, Belgium",
    image: "https://media.licdn.com/dms/image/v2/C4D03AQFNFrh-d5hJKw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1605901869410?e=1750896000&v=beta&t=Fjib9nQW_wd54OdmJluSZVulpponzvw9A6kfCoP4c-w",
    description: `is an American engineer, currently the Robert L. Pigford Chair of Chemical Engineering at the University of Delaware. He gained a Bachelor's degree from Carnegie Mellon University in 1984.`

  },
]

const speakerCard: React.FC = () => {
  const [positions, setPositions] = useState<number[]>([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 }); // 👈 important

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPositions((prevPositions) => {
        const newPositions = [...prevPositions];
        const heroIndex = newPositions.indexOf(0);
         
          [newPositions[heroIndex], newPositions[(heroIndex+1)%13]] = [
            newPositions[(heroIndex+1)%13],
            newPositions[heroIndex],
          ];
        
        return newPositions;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [positions]);

  return (
    <>
    <section className="min-h-[100vh] flex flex-col justify-center">
    <h2 className={`text-3xl font-bold text-center mb-10 mt-5 ${inter.className}`}style={{ fontFamily: 'Gill Sans Ultra Bold, sans-serif' }}>OUR SPEAKERS</h2>
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
        <div className="gallery">
          {positions.map((pos, index) => (
            <div
              key={index}
              className={`item flex-1 bg-white rounded-lg shadow-lg  justify-between ${
                pos === 0 ? "scale-110 border-4 border-blue-500 shadow-2xl p-4" : "p-[5px]"
              }`}
              data-pos={pos}
              onClick={() => {
                setPositions((prevPositions) => {
                  const newPositions = [...prevPositions];
                  const heroIndex = newPositions.indexOf(0);
                 
                    [newPositions[heroIndex], newPositions[index]] = [
                      newPositions[index],
                      newPositions[heroIndex],
                    ];
                   
                  return newPositions;
                });
              }}
            >
             <div>
            <div className={`${pos===0?"":"flex md:flex-row"} items-center`}>
            <div 
  className={`flex flex-col justify-center ${pos === 0 ? "items-center" : ""}`} 
  style={{ 
    minWidth: pos === 0 ? undefined : "80px", 
    height: pos === 0 ? undefined : "90px" 
  }}
>
                <Image
                  src={speakers[index].image || "/placeholder.svg"}
                  alt={speakers[index].name}
                  width={`${pos===0?"200":"50"}`}
                  height={50}
                  className="rounded-full border-4 border-[#0a2240]"
                  
                />
                </div>
              
              <div style={{height:"100%"}}>
                <h3 className={`${pos===0?"text-[1.8vw]":"text-[1.2vw]"}   font-bold text-[#0a2240] mt-2`}>{speakers[index].name}</h3>
                <p className={`${pos===0?"italic":"text-[1.1vw]"}  text-[#0a2240]`}>{speakers[index].title}</p>
                {pos==0?<p className=" text-[#0a2240] mt-2">{speakers[index].name + speakers[index].description}</p>:<></>}
              </div>
            </div>
          </div>
            </div>
          ))}
        </div>
      </motion.div>
      </section>
    </>
  );
};

export default speakerCard;
