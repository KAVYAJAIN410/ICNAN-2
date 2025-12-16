// pages/registration.tsx

import React from 'react';
const awards = [
  {
    org: 'ACS',
    title: 'Best Presentation Research Awards',
    details:
      'ACS Energy Letters, ACS Applied Nano Materials, ACS Applied Energy Materials, ACS Materials Au, ACS Nanoscience Au, ACS Omega – Each winner will receive ₹3000 and a journal certificate.',
  },
  {
    org: 'RSC',
    title: 'RSC Best Presentation Awards',
    details:
      'Nanoscale and Nanoscale Advances – Each winner will receive a gift voucher and a journal certificate.',
  },
  {
    org: 'Wiley',
    title: 'Wiley Best Presentation Awards',
    details:
      'Eight winners will receive a journal certificate and $35 each.',
  },
  {
    org: 'IOP',
    title: 'IOP Nanotechnology Awards',
    details:
      'Winners from IOP Nanotechnology will receive a journal certificate.',
  },
  // {
  //   org: 'Cell Press – iScience',
  //   title: 'iScience Best Presentation Awards',
  //   details:
  //     'Winners from iScience (Cell Press) will receive a journal certificate.',
  // },
  {
    org: 'ICNAN',
    title: 'Young Researcher Awards',
    details:
      'Four top student presentations from ICNAN’25 will be awarded ₹5000 and a certificate of appreciation.',
  },
  {
    org: 'ICNAN',
    title: 'Women Researcher Awards',
    details:
      'Top presentations by women will receive ₹5000 and a certificate of appreciation.',
  },
  {
    
  }
]


const Presentation = () => {
  return (

    <>
    <center><h2 className="text-4xl font-bold mt-8">ICNAN Presentation Awards</h2></center>
        <div className="px-4 py-8 max-w-6xl mx-auto">

    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6">
        {awards.map((award, index) => (
          <div
            key={index}
            className="border rounded-xl p-5 shadow-md bg-white hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">
              {award.title}
            </h3>
            <p className="text-gray-700 text-sm">{award.details}</p>
          </div>
        ))}
      </div>
      
          </div>

   
    
    </>
  );
};

export default Presentation;
