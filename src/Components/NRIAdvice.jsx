import React from "react";
// import indiaFlag from "../assets/flagIndia.jpg";
// import ukFlag from "../assets/flagLondon.jpg";

const NRIAdvice = () => {
  const Title = [
    "CAN A NRI SELL PROPERTY IN INDIA?",
    "IS BUYING PROPERTY IN INDIA A GOOD INVESTMENT?",
    "STAY IN UK, DEAL IN INDIA",
    "SELLING PROPERTY IN INDIA FROM LONDON?",
    "PLANNING TO BUY PROPERTY IN INDIA AS AN NRI? HERE'S HOW TO SAVE ON TAXES.",
    "THINKING OF TRANSFERRING PROPERTY OWNERSHIP?",
    "DO YOU WANT TO BUY OR SELL PROPERTY IN INDIA FROM UK?",
    "ARE YOU AN NRI LOOKING TO INVEST IN REAL ESTATE IN INDIA OR THE UK?",
  ];

  const Description = [
    `The Indian real estate market is booming, and now might be the perfect time to invest! Here’s why:
1️⃣ Thriving Real Estate Market 📈
2️⃣ High Rental Yields 💸
3️⃣ Long-Term Capital Growth ⏳
4️⃣ Supportive Government Policies 🏛️
5️⃣ Perfect for NRIs 🌍
Looking to invest from the UK? Pinnacle Group London makes it easy to get started with expert guidance!`,

    `The Indian real estate market is booming, and now might be the perfect time to invest! Here’s why:
1️⃣ Thriving Real Estate Market 📈
2️⃣ High Rental Yields 💸
3️⃣ Long-Term Capital Growth ⏳
4️⃣ Supportive Government Policies 🏛️
5️⃣ Perfect for NRIs 🌍
Looking to invest from the UK? Pinnacle Group London makes it easy to get started with expert guidance!`,

    `Managing property in India while living in the UK? 🇬🇧➡️🇮🇳 Here’s why Power of Attorney is a game-changer:
✔️ No Travel, All Control
✔️ Faster Transactions
✔️ Protect Your Property
Need assistance? Contact Pinnacle Group London today!`,

    `Selling Property in India While Living in London? Here’s What You Need to Know! 🎙️
1️⃣ Market trends can increase profits.
2️⃣ Keep legal documents ready.
3️⃣ Hire a trusted agent in India.
💼 Pinnacle Group simplifies everything from listing to closing the deal.`,

    `NRIs, planning to buy property in India? Save on taxes with these tips:
✅ Claim Section 80C deductions
✅ Get relief on interest under Section 24(b)
✅ Avail stamp duty exemptions
Pinnacle Group London guides NRIs with tax-smart investments.`,

    `Transferring property? Don’t worry – we simplify it!
Pinnacle Group London provides expert guidance and smooth service for buying, selling, or transferring properties.
Ready to begin? Contact us today!`,

    `Real estate provides steady income, appreciation, and inflation protection.
We at Pinnacle Group London help NRIs in the UK buy or sell property in India seamlessly through virtual tours, expert guidance, and hassle-free paperwork.`,

    `The Indian government offers favourable NRI laws, but legalities like FEMA/RBI can be tricky.
Whether it’s India or the UK, we simplify investments with tax benefits and expert help.
Pinnacle Group London – Your property partner.`,
  ];

  return (
    <div className="bg-gradient-to-b from-[#e0f7fa] via-[#f8f9fb] to-[#f1f5f9] rounded-xl !py-12 !px-4 md:!px-8 lg:px-16">
      <h2 className="text-4xl font-extrabold text-center text-[#1a2e35] !mb-12">
        Advice For{" "}
        <span className="text-[#e63946] underline underline-offset-8">
          NRIs
        </span>
      </h2>

      {/* Optional flag scroll */}
      {/* <div className="overflow-hidden whitespace-nowrap w-full bg-white py-2 border-y-2 border-gray-200 mb-6">
        <div className="inline-block animate-[marquee_10s_linear_infinite]">
          <span className="inline-flex items-center gap-8 px-4">
            <img src={indiaFlag} alt="India" className="h-6 w-auto" />
            <img src={ukFlag} alt="UK" className="h-6 w-auto" />
            <img src={indiaFlag} alt="India" className="h-6 w-auto" />
            <img src={ukFlag} alt="UK" className="h-6 w-auto" />
          </span>
        </div>
      </div> */}

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Title.map((title, i) => (
          <div
            key={i}
            className="flex flex-col h-full bg-white rounded-2xl shadow hover:shadow-lg transition-shadow duration-300 !p-5 border border-[#e0e0e0]"
          >
            <h3 className="text-lg font-semibold text-[#006d77] uppercase !mb-3">
              {title}
            </h3>
            <p className="text-sm text-[#444] whitespace-pre-line leading-relaxed flex-1">
              {Description[i]}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default NRIAdvice;
