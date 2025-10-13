// pages/registration.tsx

import React from 'react';

const registrationData = [
  {
    category: 'Students/Scholars',
    earlyBird: '₹ 7000',
    standard: '₹ 10000',
  },
  {
    category: 'Faculty/Research Scientist',
    earlyBird: '₹ 10000',
    standard: '₹ 12000',
  },
  {
    category: 'Industry',
    earlyBird: '₹ 12000',
    standard: '₹ 15000',
  },
  {
    category: 'Foreign Participants',
    earlyBird: '$ 300',
    standard: '$ 450',
  },
  {
    category: 'Group (Students/Scholars) - 5 People',
    earlyBird: '₹ 30000',
    standard: '₹ 40000',
  },
  {
    category: 'Group (Faculty/Research Scientist) - 5 People',
    earlyBird: '₹ 40000',
    standard: '₹ 50000',
  },
];

const RegistrationPage = () => {
  return (
    <div className=" text-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 text-[#0a2b52]">Registration</h1>
        <p className="text-center mb-12 max-w-2xl mx-auto text-lg text-[#0a2b52] ">
          Join ICNAN'25 and be part of an international platform where groundbreaking ideas in Nanoscience and Nanotechnology are exchanged. Explore the categories below and register early to avail discounted rates.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-white rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-[#0a2b52] text-white">
                <th className="py-3 px-4 text-lg">Category</th>
                <th className="py-3 px-4 text-lg">Early Bird</th>
                <th className="py-3 px-4 text-lg">Standard</th>
              </tr>
            </thead>
            <tbody className="bg-[#102a4d]/80 divide-y divide-gray-700">
              {registrationData.map((row, index) => (
                <tr key={index} className="hover:bg-[#1e3b6a]/80 transition">
                  <td className="py-3 px-4">{row.category}</td>
                  <td className="py-3 px-4">{row.earlyBird}</td>
                  <td className="py-3 px-4">{row.standard}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-[#e0f0ff] text-[#0a2b52] mt-8 p-6 rounded-md shadow-md text-center text-sm md:text-base">
  <p>
    
    <p
      
    
    >
     Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
    </p>  
  </p>
</div>

       
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
  <a
    href="/ICNAN'25 Abstract.docx"
    download
    className="bg-[#0a2b52] text-white px-6 py-3 rounded font-semibold text-center transition hover:bg-[#143a6e]"
  >
    Template for Extended Abstract
  </a>

  <a
    href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICNAN2025"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#0a2b52] text-white px-6 py-3 rounded font-semibold text-center transition hover:bg-[#143a6e]"
  >
    Submit Your Abstract
  </a>

  <button className="bg-[#0a2b52] text-white px-6 py-3 rounded font-semibold transition hover:bg-[#143a6e]">
    <a href='https://events.vit.ac.in/events/ICNAN/'>
Conference Registration
    </a>
  </button>
</div>
<div className='text-black'>
  <section className='m-4 mt-8'>
  <h3 className='text-lg font-bold'>Steps to Register in ICNAN '25</h3>
 
  <p>There are two ways to participate in the ICNAN '25 conference, held at VIT Vellore, Tamil Nadu, India:</p>
  <ul className='list-disc list-inside'>
    <li>As a Presenter: Submit a paper for an oral or poster presentation.</li>
    <li>As an Attendee: Participate without submitting a paper.</li>
  </ul>
  <p>Follow these steps to register for the conference, whether you are submitting a paper or attending as a participant only.</p>
  
  <h3>Abstract Submission and Registration</h3>
  <ul className='list-disc list-inside'>
    <li><strong>For Presenters (Optional):</strong> If you wish to present your work, begin by submitting your extended abstract online via the Microsoft Conference Management Toolkit (CMT) portal. This step is not required for participate in the conference (without present a work).</li>
    <li><strong>For All Participants:</strong> Complete the online registration form and pay the required registration fee. The early bird registration deadline is <strong>October 30, 2025</strong>.</li>
  </ul>
  </section>
 <section className='m-4'>
    <h3 className='text-lg font-bold'>Registration Steps</h3>
    <ul className='list-disc list-inside'>
      <li>Access the Portal registration portal for ICNAN '25.</li>
      <li>Provide Information: Fill in the required basic information to create your registration profile.</li>
      <li>Provide your paper ID from the Microsoft Conference Management Toolkit (CMT) portal, if you are submitting a abstract to the conference. Otherwise, choose No.</li>
      <li>Receive Reference Number: Upon successful registration, you will receive a unique registration reference number. This number is essential for the next step.</li>
      <li>Complete Payment: Proceed to the payment gateway and enter your registration reference number to finalize the payment process.</li>
      <li>Download Receipt: After your payment is successfully completed, you can download the e-receipt from the portal at any time using your registration reference number.</li>
    </ul>
  </section>
  <section className='m-4'>
    <h2 className='text-lg font-bold'>Important Notes</h2>
    <ul className='list-disc list-inside'>
      <li>It is not mandatory to submit an abstract or a full paper to participate in ICNAN '25. To attend without presenting, simply complete the online registration and payment.</li>
      <li>Registration fees must be paid online via Credit/Debit Card or Net Banking. Payments by Cash, Check, Demand Draft (DD), or UPI will not be accepted.</li>
      <li>Spot registration will not be available. All participants must register online in advance.</li>
      <li>Hotel or dormitory accommodation is not included in the registration fee and must be arranged and paid for separately.</li>
    </ul>
  </section>

</div>

      </div>
    </div>
  );
};

export default RegistrationPage;
