"use client"
import React from "react";
import EmbeddedMap from "@/components/map";

const HowToReach = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 font-sans leading-relaxed text-gray-800">
        <EmbeddedMap></EmbeddedMap>
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center text-blue-900 mb-6 mt-6">
        How to Reach VIT Vellore
      </h1>

      {/* Intro */}
      <p className="mb-6">
        The Vellore Institute of Technology (VIT) campus is situated on a{" "}
        <span className="font-semibold">372-acre site</span> along the Ranipet–Katpadi Road in
        Vellore, Tamil Nadu. The campus is approximately{" "}
        <span className="font-semibold">2.5 hours by road from Chennai</span> and{" "}
        <span className="font-semibold">4 hours from Bangalore</span>.
      </p>

      {/* By Road Section */}
      <h2 className="text-2xl font-semibold text-red-700 mb-3">By Road</h2>
      <h3 className="text-lg font-semibold text-gray-900">From Chennai Airport (MAA):</h3>
      <ul className="list-disc list-inside mb-4">
        <li>
          <span className="font-semibold">Direct Taxi:</span> You can hire a taxi directly from the
          Chennai airport to the VIT campus. The distance is approximately 130 km, with a travel
          time of about 2.5 hours. The fare may range from ₹2,500 to ₹3,500, depending on the
          vehicle.
        </li>
        <li>
          <span className="font-semibold">Bus:</span> Alternatively, you can take a taxi,
          auto-rickshaw, or the Metro from the airport to the{" "}
          <span className="font-semibold">Koyambedu Bus Stand (CMBT)</span>, which is about 15 km
          away. Frequent state-owned buses operate from CMBT to the Vellore New Bus Stand between
          4:00 AM and 10:30 PM. The bus journey takes approximately 3 hours.
        </li>
      </ul>

      <h3 className="text-lg font-semibold text-gray-900">Arrival in Vellore:</h3>
      <p className="mb-6">
        If you arrive at the <span className="font-semibold">Vellore New Bus Stand</span>, the VIT
        campus is a <span className="font-semibold">7 km drive away</span>. You can easily find
        local transportation from there.
      </p>

      {/* By Train Section */}
      <h2 className="text-2xl font-semibold text-red-700 mb-3">By Train</h2>
      <h3 className="text-lg font-semibold text-gray-900">From Chennai Central Station (MAS):</h3>
      <p className="mb-4">
        If you arrive at Chennai airport, you can take a taxi or the Metro to{" "}
        <span className="font-semibold">Chennai Central Railway Station (MAS)</span>, approximately
        20 km away. All westbound trains from Chennai pass through{" "}
        <span className="font-semibold">Katpadi Junction (KPD)</span>, with a travel time of about
        2.5 hours.
      </p>

      <h3 className="text-lg font-semibold text-gray-900">From Other Locations:</h3>
      <p className="mb-6">
        When traveling by train from other parts of India, ensure you book your ticket to{" "}
        <span className="font-semibold">Katpadi Junction Railway Station (KPD)</span>, which is the
        primary station serving Vellore. For detailed train schedules, you can check the official
        Indian Rail website. The VIT campus is just 3 km from Katpadi station.
      </p>

      {/* Local Transport Section */}
      <h2 className="text-2xl font-semibold text-red-700 mb-3">
        Local Transportation in Vellore
      </h2>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <span className="font-semibold">Auto-Rickshaws:</span> Share-autos and private
          auto-rickshaws are readily available from both Katpadi Junction and the Vellore New Bus
          Stand for travel to the VIT campus.
        </li>
        <li>
          <span className="font-semibold">Buses:</span> Local government buses operate between the
          Chittoor bus stop and VIT.
        </li>
        <li>
          <span className="font-semibold">Call Taxis:</span> You can book a cab for local travel
          through services like{" "}
          <span className="italic">
            May Call Taxi (0416-2224455) or Fast Track Call Taxi (0416-288-8999)
          </span>
          . These services also offer one-way fares for inter-city travel.
        </li>
      </ul>
    </div>
  );
};

export default HowToReach;

