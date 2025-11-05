
import React from 'react';
const awards = [
  {
    Date: ' 15.11.2025',
    title: 'Abstract Submission',
    details:
      'The deadline to submit the extended abstract. Submissions are limited to a maximum of 2 pages (1000 words). For formatting, please refer to the provided template for the Extended Abstract.',
    link: "ICNAN'25 Abstract.docx",
    linkTitle:"Template for Extended Abstract"
  },
  {
    Date: ' 15.10.2025 (onwards) ',
    title: 'Acceptance of Abstract',
    details:
      '',
  },
  {
    Date: ' 15.11.2025',
    title: 'Early Bird Registration',
    details:
      'Last date for avail the discounted rates for Registration',
  },
  {
    Date: ' 30.11.2025',
    title: 'Date for Registration',
    details:
      'Last Date for Conference registration and  fee payment',
  },
  // {
  //   org: 'Cell Press – iScience',
  //   title: 'iScience Best Presentation Awards',
  //   details:
  //     'Winners from iScience (Cell Press) will receive a journal certificate.',
  // },
  {
    Date: ' 20.01.2026',
    title: 'Last Date for Full Paper Submission',
    details:
      'Full paper submission is optional and is intended for authors who wish to have their work considered for journal publication. The full paper can be uploaded as a new submission through your author login portal.',
  },
  {
    Date: ' 16-19.12.2025',
    title: 'Conference Dates',
    details:''
  },
]
export default function Page(){
    return(
        <>
              <h2 className="text-5xl font-bold text-center mt-8  bold text-[#0a2240]" style={{ fontFamily: 'Gill Sans Ultra Bold, sans-serif' }}>IMPORTANT DATES</h2>
              
        <div className="px-4 py-8 max-w-6xl mx-auto">

    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6">
        {awards.map((award, index) => (
          <div
            key={index}
            className="border rounded-xl p-5 shadow-md bg-white hover:shadow-lg transition"
          >
            <div className="flex w-full">
            <h3 className="text-xl font-semibold text-[#0a2b52] w-full">
              {award.title}
            </h3>
            <div className='flex justify-center w-full'>
               <div className="text-xl font-semibold text-indigo-700 ">
              {award.Date}
            </div>
            </div>
            </div>
           
            <p className="text-gray-700 text-sm">{award.details}</p>
            {award.link? (<button  className="mt-2 bg-[#0a2b52] text-white px-4 py-2 rounded font-semibold text-center transition hover:bg-[#143a6e]"><a href={`${award.link}`}>{award.linkTitle}</a></button>) : <></>}
          </div>
        ))}
      </div>
      
          </div>

   
    
    </>

        
    )
}

// pages/registration.tsx



