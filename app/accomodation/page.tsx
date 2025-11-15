export default function Accommodation() {
  return (
    <main className="min-h-screen px-4 py-10 text-justify bg-white text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-[#0a2240] mb-10">
          Accommodation
        </h1>

        <p className="mb-8">
          For the convenience of ICNAN'25 participants, we offer two types of
          accommodation: on-campus and off-campus. Please review the details
          below to select the option that best suits your needs.
        </p>

        {/* On-Campus Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">On-Campus Accommodation</h2>
          <p className="">
            We offer limited dormitory-style accommodation on a first-come,
            first-served basis. These facilities are located in separate hostels
            for men and women and require a separate registration and payment
            process.
          </p>
          <div className="flex justify-center mt-2">
          <p>
            Those who are interested in availing the dormitory accommodation facility inside the campus
are requested to register through the following link.
While registering, please select the “number of days” you require accommodation and
choose &quot;No Mess&quot; as the mess type.
The rate for dormitory accommodation without food is Rs. 280 (including GST).
Food for all registered conference participants will be served at the conference venue.
          </p>
         
          </div>
           <button className="bg-[#0a2b52] text-white px-6 py-3 rounded font-semibold transition hover:bg-[#143a6e] mt-4">
    <a href='https://events.vit.ac.in/'>
    Accommodation
    </a>
  </button>
        </section>

        {/* Off-Campus Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Off-Campus Hotels</h2>
          <p className="mb-4">
            For participants who prefer private accommodation, a list of
            recommended hotels located near the VIT campus is available for your
            reference.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Participants are responsible for contacting these hotels directly to
              reserve their accommodation.
            </li>
            <li>
              Please note that <span className="font-bold">the conference organizing committee does not handle
              reservations for external hotels or provide travel assistance between
              these hotels and the conference venue.</span>
            </li>
          </ul>
        </section>
        
      </div>
      <div className="max-w-6xl mx-auto mt-4">
        <h1 className="text-3xl font-bold text-center text-[#0a2240] mb-10">
          Hotel Details in Vellore
        </h1>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-sm md:text-base">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 border">Sl. No</th>
                <th className="p-3 border">Hotel Name</th>
                <th className="p-3 border">Contact No</th>
                <th className="p-3 border">Web Link</th>
                <th className="p-3 border">Distance from VIT</th>
              </tr>
            </thead>
            <tbody>
              {[
                [1, "Clouds Serviced Apartments", "6382958977", "", "~ 0.2 KM"],
                [2, "Tranquil Nest", "8754991163 / 9443038853", "", "~ 0.2 KM"],
                [3, "Gaurang Mall", "097874 71422", "", "~ 0.3 KM"],
                [4, "Royal Park", "9092254111", "", "~ 0.5 KM"],
                [5, "VRM Nivas", "7010473902 / 8667081455", "", "~ 0.5 KM"],
                [6, "Paras Mahal", "+91 9840061129 / +91 7900094449", "www.parasmahal.com", "~ 1.0 KM"],
                [7, "New Vellore Inn", "099527 66635", "http://newvelloreinn.com/", "~ 1.4 KM"],
                [8, "Vantara Suites", "091502 53066", "", "~ 2.8 KM"],
                [9, "Rangalaya Royal Hotel", "0416–2242135 / 7094481810", "http://www.rangalayaroyal.in/", "~ 3.0 KM"],
                [10, "Hotel Sri Balaji International", "094875 73686", "", "~ 3.3 KM"],
                [11, "Bloft Hotel", "0416 222 0001", "", "~ 3.3 KM"],
                [12, "Fortune Park, Vellore – ITC Groups", "0416-220 7777", "https://www.fortunehotels.in/", "~ 3.7 KM"],
                [13, "DP Stay", "098946 42495", "", "~ 3.9 KM"],
                [14, "Anukula Residency", "041626-66666 / 88704 77720", "https://anukulasresidency.com/", "~ 4.9 KM"],
                [15, "Regency Sameera Vellore by GRT Hotels", "0416-2206466", "https://grthotels.com/vellore", "~ 5.0 KM"],
                [16, "Hotel Royal Grande", "091500 00055", "www.hotelroyalgrande.com", "~ 5.2 KM"],
                [17, "Park Inn by Radisson Vellore", "0416–3504444", "www.radissonhotels.com", "~ 5.3 KM"],
                [18, "Hotel Sri Srinivasar Residency", "9952771164 / 9585150080", "http://srinivasarresidency.com/", "~ 6.3 KM"],
              ].map(([no, name, contact, link, distance]) => (
                <tr key={no} className="hover:bg-gray-50">
                  <td className="p-3 border text-center">{no}</td>
                  <td className="p-3 border font-medium">{name}</td>
                  <td className="p-3 border">{contact}</td>
                  <td className="p-3 border text-blue-600">
                    {link ? (
                      <a
                        // href={link.startsWith("http") ? link : `https://${link}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                      >
                        {link}
                      </a>
                    ) : (
                      "-"
                    )}
                  </td>
                  <td className="p-3 border text-center">{distance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
