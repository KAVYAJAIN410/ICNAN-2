"use client"
export default function ICNANFAQPage() {
return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
{/* Banner */} <div className=" text-black py-10 text-center"> <h1 className="text-4xl font-bold">Frequently Asked Questions</h1> <p className="mt-2 text-lg">ICNAN '25 Conference</p> </div>

```
  <div className="max-w-5xl mx-auto p-6 space-y-12">
    {/* Steps to Participate */}
    <section>
      <h2 className="text-2xl font-bold text-red-600 mb-3">
        Steps to Participate in ICNAN '25
      </h2>
      <p className="text-gray-700 mb-4">
        Follow these steps to register for the conference, whether you are
        submitting a paper or attending as a participant only.
      </p>

      <h3 className="text-lg font-semibold text-blue-700 mb-2">Step 1: Submission and Registration</h3>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        <li>
          <span className="font-medium">For Presenters (Optional):</span> If
          you wish to present your work, begin by submitting your extended
          abstract online. This step is not required for general attendance.
        </li>
        <li>
          <span className="font-medium">For All Participants:</span> Complete
          the online registration form and pay the required registration fee.
          The early bird registration deadline is September 30, 2025.
        </li>
      </ul>

      <h3 className="text-lg font-semibold text-blue-700 mt-6 mb-2">Step 2: For Presenting Authors</h3>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        <li>
          <span className="font-medium">Presentation Mode Announcement:</span>{" "}
          Acceptance for oral or poster presentation will be announced in the
          first week of November.
        </li>
        <li>
          <span className="font-medium">Full Paper Submission (Optional):</span>{" "}
          After acceptance, you may submit a full paper for consideration in
          partner journals.
        </li>
        <li>
          <span className="font-medium">Journal Assignment:</span> If you have
          paid the registration fee and your full paper meets quality
          standards, it will be assigned to a relevant journal.
        </li>
        <li>
          <span className="font-medium">Final Submission:</span> Submit the
          camera-ready paper directly to the assigned journal following its
          guidelines.
        </li>
      </ul>

      <h3 className="font-bold text-gray-900 mt-6">Important Notes</h3>
      <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
        <li>
          Abstract or full paper submission is not mandatory to attend. You
          can join by simply registering and paying.
        </li>
        <li>
          Registration fees must be paid online via Credit/Debit Card or Net
          Banking. Cash, Check, Demand Draft (DD), or UPI are not accepted.
        </li>
        <li>Spot registration will not be available.</li>
        <li>
          Hotel or dormitory accommodation is not included in the registration
          fee and must be arranged separately.
        </li>
      </ul>
    </section>

    {/* FAQ Questions */}
    <section className="space-y-8 text-justify">
    

      <div>
        <h3 className="text-2xl font-bold text-red-600 mb-3">
          How can I participate in the ICNAN '25 Conference?
        </h3>
        <p className="text-gray-700 mt-2">
          There are two ways to participate in the ICNAN '25 conference, held
          at VIT Vellore, Tamil Nadu, India:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>
            <span className="font-medium">As a Presenter:</span> Submit a
            paper for an oral or poster presentation.
          </li>
          <li>
            <span className="font-medium">As an Attendee:</span> Participate
            without submitting a paper.
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-red-600 mb-3">
          How do I submit a paper to ICNAN '25?
        </h3>
        <p className="text-gray-700 mt-2">
          The ICNAN '25 organizing committee invites the submission of
          original, unpublished research as a two-page extended abstract via
          the Microsoft CMT portal.
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
          <li>Prepare your abstract using the official template.</li>
          <li>Log in to the Microsoft CMT portal (create an account if new).</li>
          <li>In the Author Console, click “Create New Submission”.</li>
          <li>Fill in title, abstract, co-author details, and subject area.</li>
          <li>Upload your abstract and click “Submit”.</li>
        </ul>
        <p className="text-gray-700 mt-2">
          After submission, a unique Paper ID will be assigned. Use this for
          correspondence and registration.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-red-600 mb-3">
          Is it possible to present without submitting a full paper?
        </h3>
        <p className="text-gray-700 mt-2">
          Yes, you can present your work at ICNAN '25 without submitting a full paper. Your presentation eligibility is based on the acceptance of your extended abstract.
        </p>
        <br></br>
        <p>
The submission of a full paper is an optional step for authors who wish to have their work considered for publication in an affiliated, Scopus-indexed journal.

        </p>
        <br></br>
        If your extended abstract is accepted, you may then choose to submit a full paper for evaluation. A committee will assess the paper's scope and quality to determine its suitability for assignment to a journal. Final acceptance for publication is then subject to the standard peer-review process conducted by that journal.
        <p>

        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-red-600 mb-3">
          How can I participate in ICNAN '25 without submitting a paper?
        </h3>
        <p className="text-gray-700 mt-2">
          Yes, you can participate in the ICNAN '25 conference as an attendee without submitting a paper. To do so, you simply need to complete the online registration and pay the required conference fee.
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Full access to technical sessions</li>
          <li>Conference kit</li>
          <li>
            Meals and refreshments (Dec 16–19, 2025, as per conference
            schedule)
          </li>
          <li>Certificate of participation</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-red-600 mb-3">
          How do I register for ICNAN '25?
        </h3>
        <p className="text-gray-700 mt-2">
         Registration for ICNAN '25 is mandatory for all attendees, including both presenters and participants without papers. To attend the conference, you must complete the online registration and pay the fee corresponding to your category.
         <br>
         </br>
         Registration Steps
        </p>
        <ol className="list-decimal list-inside text-gray-700 mt-2 space-y-1">
          <li>Access the Portal: Go to the official VIT Events registration portal for ICNAN '25.</li>
          <li>Provide Information: Fill in the required basic information to create your registration profile.</li>
          <li>Receive Reference Number: Upon successful registration, you will receive a unique registration reference number. This number is essential for the next step.</li>
          <li>
            Complete Payment: Proceed to the payment gateway and enter your registration reference number to finalize the payment process.
          </li>
          <li>
            Download Receipt: After your payment is successfully completed, you can download the e-receipt from the portal at any time using your registration reference number.
          </li>
        </ol>
      </div>
         <div>
        <h3 className="text-2xl font-bold text-red-600 mb-3">
          What's Included in Your Registration?
        </h3>
        <p className="text-gray-700 mt-2">
         The registration fee includes:
        </p>
        <ol className="list-decimal list-inside text-gray-700 mt-2 space-y-1">
          <li>Full access to all technical sessions of the ICNAN '25 conference.</li>
          <li>A complete conference kit.</li>
          <li>A Certificate of Participation.</li>
          <li>
            Meals during the conference (from December 16 to December 19, 2025), with the following schedule:
            <ul className="list-disc list-inside">
                <li>Day 1 (Dec 16): Lunch & Dinner</li>
           <li>
            Days 2 & 3 (Dec 17-18): Breakfast, Lunch & Dinner
          </li>
          <li>
            Day 4 (Dec 19): Breakfast & Lunch
          </li>
            </ul>
          </li>
         
         
        </ol>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-red-600 mb-3">
          Is accommodation included in the registration fee?
        </h3>
        <p className="text-gray-700 mt-2">
         No, participant accommodation is not included in the conference registration fee. If you require accommodation, it must be arranged and paid for separately.

        </p>
        <br>
        </br>
        <p>We offer the following options:</p>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>
            <span className="font-medium">On-Campus Accommodation: </span> <br>
            </br>
            We expect to provide limited dormitory-style accommodation in separate hostels for men and women. This option requires a separate registration and payment.
          </li>
          <li>
            <span className="font-medium">Off-Campus Hotels</span>
            <br></br>A list of hotels located near the VIT campus is available on the conference website. Participants are responsible for contacting these hotels directly to reserve their accommodation.
            
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-red-600 mb-3">
          How do I find my Registration Reference Number for payment and receipt downloads?
        </h3>
        <p className="text-gray-700 mt-2">After you have successfully registered on the VIT Events portal, your Registration Reference Number will be sent to you automatically via email.</p>
        <p className="text-gray-700 mt-2">
          Please check the inbox of the email address you used to register for a message with the following details:
          <p className="font-mono">
           <li>
            <ul>
                Sender: noreply.events@vit.ac.in

            </ul>
            <ul>
                Subject Line: ICNAN - Reference No. / Payments
            </ul>
           </li>
         
           </p> 
          
          The email will contain your unique reference number, which will be in the format ICNAN2500XXXX. You must use this number to complete your fee payment and to download your e-receipt from the portal.

          
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-red-600 mb-3">
          Fee Payment Options
        </h3>
        <p className="text-gray-700 mt-2">
          The conference registration fee can be paid using the following online methods:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Credit Cards</li>
          <li>Debit Cards</li>
          <li>Net Banking</li>
        </ul>
        <p className="text-gray-700 mt-2">
          Please note that UPI is not an available payment option for this conference.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-red-600 mb-3">
          Will a physical receipt be provided?
        </h3>
        <p className="text-gray-700 mt-2">
          No, physical receipts will not be issued. Since all payments are processed through the online banking portal, the e-receipt available for download is the official and final proof of payment.
          <br></br>
          We will not provide any separate physical receipts for the registration fee.
        </p>
      </div>
      <div>
       <h3 className="text-2xl font-bold text-red-600 mb-3">
         Conference Venue
        </h3>
<p>
    The 3rd International Conference on Nanoscience and Nanotechnology (ICNAN '25) is organized by the Centre for Nanotechnology Research (CNR) and will be held at the Vellore Institute of Technology.

</p>
<br></br>
<p>
    Venue Address:
</p>
<p>
Vellore Institute of Technology (VIT)
<br></br>
Vellore, Tamil Nadu - 632014
<br></br>
India
</p>
       </div>


      








    </section>
  </div>
</div>


);
}
