import Footer from "../components/Footer";
import Header from "../components/Header";
import Ratings from "../components/Ratings";
import { useContext, useState } from "react";
import { TC } from "../contexts/ToggleContext";

function Shop() {
  const [unit, setUnit] = useState("");
  const toggleContext = useContext(TC);

  return (
    <>
      <header className="bg-[url('/images/header2.jpg')] bg-cover bg-no-repeat px-[20px] py-[23px] md:h-[596px] md:px-[40px] lg:px-[80px]">
        <Header />
        <div className="mt-[6.5rem] h-[261px] text-[#12305b] md:w-[581px]">
          <p className="text-[18px]">We're here to help you</p>
          <p className="text-[40px] font-bold md:text-[60px]">Relax & Rest</p>
        </div>
      </header>
      {!toggleContext?.toggle ? (
        <main>
          <section className="mb-40 mt-20 md:mb-20">
            <div className="flex w-[90vw] flex-col items-center justify-between gap-8 pl-[5vw] md:h-[1000px] md:gap-0 md:pl-[40px] lg:h-[580px] lg:flex-row lg:items-start min-[1440px]:w-[1252px]">
              <div>
                <img src="/images/vape_pen.jpg" alt="Vape Pen" />
              </div>
              <div className="h-[550px] w-full md:w-[421px] lg:mt-12 lg:h-[287px] min-[1440px]:mt-24">
                <p className="mb-6 text-[36px] font-bold text-[#12305B]">
                  About Product
                </p>
                <p className="text-[#213842]/60">
                  Our Personal Diffuser is an aromatherapy device that contains
                  a blend of melatonin, lavender, and chamomile. A few breaths
                  of our plant-based essential oil mist will mellow you out,
                  quiet the mind, and lull you to bed.
                </p>
                <div className="flex h-[200px] w-full flex-col justify-between rounded-md bg-white py-6 text-[14px] md:h-[158px] md:w-[453px] md:text-[16px]">
                  <p>😊 Promotes calm and relaxation.</p>
                  <p>💤 Inhalation allows for a rapid effect.</p>
                  <p>✅ 100% drug-free, plant-based ingredients.</p>
                  <p>⚕️ 3rd-party lab tested.</p>
                </div>
                <div className="flex flex-col justify-start gap-4 text-black">
                  <div className="flex gap-16">
                    <p>Price</p>
                    <p>Unit</p>
                  </div>
                  <div className="flex items-center gap-12">
                    <p className="font-semibold">USD 50</p>
                    <input
                      type="number"
                      name="unit"
                      value={unit}
                      onChange={(e) => setUnit(e.target.value)}
                      className="h-10 w-24 rounded-md border-[1px] border-solid border-[#1e1e1e] p-2 pl-4 pr-4 font-semibold outline-none"
                    />
                  </div>
                </div>
                <button className="mt-8 h-[50px] w-[225px] rounded-md bg-[#FC5959] text-white">
                  Buy
                </button>
              </div>
            </div>
          </section>
          <div className="flex justify-center">
            <div className="mb-16 w-[90vw] border-[1px] border-solid border-[#213842]/10 lg:w-[75vw] min-[1440px]:w-[1110px]"></div>
          </div>
          <section className="mb-4 overflow-x-scroll pl-[20px] md:pl-[40px] lg:pl-[80px] min-[1440px]:pl-[160px]">
            <div className="flex h-[300px] justify-between gap-6 md:h-[252px]">
              <Ratings
                text="Love it! I have trouble falling asleep and this knocked me right out. Will be buying more."
                author="John Matthews"
                stars={5}
              />
              <Ratings
                text="I work shift work. Swinging from days to nights is sometimes brutal for sleep. Thank you Sleepstiq."
                author="Eunice Oliver"
                stars={5}
              />
              <Ratings
                text="It’s a really good product and helps me sleep better at night!"
                author="Laura Davies"
                stars={5}
              />
              <Ratings
                text="Helps me relax and remember to breathe. Stress level definitely goes down"
                author="Jane Bocks"
                stars={5}
              />
            </div>
          </section>
        </main>
      ) : undefined}
      <Footer />
    </>
  );
}

export default Shop;
