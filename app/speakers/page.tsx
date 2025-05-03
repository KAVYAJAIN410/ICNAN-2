// pages/speakers.tsx
import Image from 'next/image';

type Speaker = {
  id: number;
  name: string;
  institution: string;
  country: string;
  image: string;
};

const speakers: Speaker[] = [
  { id: 1, name: "Dr. Adam Lee", institution: "Griffith University", country: "Australia",image: "https://media.licdn.com/dms/image/v2/D5603AQF24LOl0trhMg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1693871092651?e=1750896000&v=beta&t=YQBXiGgh3hPazG7i0_WHTCRcuEUK92awEJIhX6SFPwk",
  },
  { id: 2, name: "Dr. Karen Wilson", institution: "Griffith University", country: "Australia", image: "/speakers/karen-wilson.jpg" },
  { id: 3, name: "Dr. Roland Kádár", institution: "Chalmers University of Technology", country: "Sweden", image: "/speakers/roland-kadar.jpg" },
  { id: 4, name: "Dr. Seiichi Takamatsu", institution: "State University of New York at Binghamton", country: "USA", image: "/speakers/seiichi-takamatsu.jpg" },
  { id: 5, name: "Dr. Manoj Gupta", institution: "National University of Singapore", country: "Singapore", image: "/speakers/manoj-gupta.jpg" },
  { id: 6, name: "Dr. John V Kennedy", institution: "GNS Science", country: "New Zealand", image: "/speakers/john-kennedy.jpg" },
  { id: 7, name: "Prof. Marc-Olivier Coppen", institution: "University College London", country: "UK", image: "/speakers/marc-coppen.jpg" },
  { id: 8, name: "Dr. Chamil Abeykoon", institution: "University of Manchester", country: "UK", image: "/speakers/chamil-abeykoon.jpg" },
  { id: 9, name: "Dr. Kornelius Nielsch", institution: "IFW Dresden", country: "Germany", image: "/speakers/kornelius-nielsch.jpg" },
  { id: 10, name: "Dr. Nanasaheb D. Thorat", institution: "N/A", country: "N/A", image: "/speakers/nanasaheb-thorat.jpg" },
  { id: 11, name: "Dr. Alberto Vomiero", institution: "Luleå University of Technology", country: "Sweden", image: "/speakers/alberto-vomiero.jpg" },
  { id: 12, name: "Prof. Lorenzo Pavesi", institution: "University of Trento", country: "Italy", image: "/speakers/lorenzo-pavesi.jpg" },
  { id: 13, name: "Prof. Wim Deferme", institution: "Hasselt University", country: "Belgium", image: "/speakers/wim-deferme.jpg" },
];

export default function SpeakersPage() {
    // Shuffle speakers on each render
    const shuffledSpeakers = [...speakers].sort(() => Math.random() - 0.5);
  
    return (
      <div className=" text-white min-h-screen py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-[#0b1c2f]">ICNAN ‘25 SPEAKERS</h1>
          <p className="text-lg text-[#0b1c2f] mb-12">Meet our distinguished speakers from leading institutions around the world</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-center justify-center">
            {shuffledSpeakers.map((speaker) => (
              <div key={speaker.id} className="bg-[#0b1c2f] rounded-2xl shadow-lg p-4 hover:scale-105 transition duration-300 border border-blue-500 items-center justify-center">
                <div className="w-full h-64 relative rounded-xl overflow-hidden mb-4">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    layout="fill"
                    objectFit=""
                    className="rounded-xl"
                  />
                </div>
                <h2 className="text-xl font-semibold">{speaker.name}</h2>
                <p className="text-sm text-gray-300">{speaker.institution}</p>
                <p className="text-sm text-gray-400">{speaker.country}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  