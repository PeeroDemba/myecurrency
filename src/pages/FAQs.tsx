import { useContext, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { TC } from "../contexts/ToggleContext";

function FAQs() {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const toggleContext = useContext(TC);

  return (
    <>
      <header className="bg-[#fbf9f2] px-[20px] py-[23px] md:h-[596px] md:px-[40px] lg:px-[80px]">
        <Header />
        <div className="mt-[6.5rem] h-[261px] text-[#12305b] md:w-[859px]">
          <p className="text-[18px]">We're here to help you</p>
          <p className="mb-4 text-[26px] font-bold md:text-[60px]">
            How can we assist?
          </p>
          <div className="relative">
            <input
              type="text"
              name="search"
              role="search"
              placeholder="Search FAQs here"
              className="h-[78px] w-[calc(100vw-40px)] cursor-pointer rounded-md pl-16 text-[14px] text-[#12305B] outline-none md:w-[calc(100vw-80px)] md:pl-32 md:text-[18px] lg:w-[800px] min-[1440px]:w-[859px]"
            />
            <img
              src="/images/search.png"
              alt=""
              className="absolute left-4 top-6 md:left-12"
            />
          </div>
        </div>
      </header>
      {!toggleContext?.toggle ? (
        <main>
          <section className="flex flex-col items-center justify-between gap-16 py-20 text-[18px] text-[#12305B] md:flex-row md:items-start md:pl-12 md:pr-20 lg:gap-28 lg:pl-20 lg:pr-40">
            <div className="flex flex-col gap-8 self-start pl-[5vw] md:w-[400px] lg:w-[300px] min-[1440px]:w-[212px]">
              <p className="h-12 cursor-pointer bg-gradient-to-r from-white from-35% to-[#FFD723]/10 py-[0.75rem] font-bold">
                Sleepstiq Product
              </p>
              <p className="cursor-pointer">Order</p>
              <p className="cursor-pointer">Melatonin</p>
            </div>
            <div className="w-[90vw] md:w-[1000px] lg:w-[913px]">
              <div
                className="cursor-pointer border-b-[1px] border-t-[1px] border-solid border-[#bdbdbd]"
                onClick={() => {
                  if (first) {
                    setFirst(false);
                    return;
                  }
                  setFirst(true);
                  setSecond(false);
                  setThird(false);
                }}
              >
                <p className={first ? "pb-8 pt-6 font-bold" : "pb-8 pt-6"}>
                  Q1: How does it work?
                </p>
                {first ? (
                  <p className="pb-8 text-[16px] text-black">
                    Inhaling on the diffuser will turn the inside liquids
                    (melatonin, lavender, chamomile) into a light mist which you
                    inhale, and then exhale out your nose. Inhaling the
                    melatonin allows for a near-instant effect, and also allows
                    you to experience the soothing aromatherapeutic effect of
                    lavender and chamomile.
                  </p>
                ) : undefined}
              </div>
              <div
                className="cursor-pointer border-b-[1px] border-solid border-[#bdbdbd]"
                onClick={() => {
                  if (second) {
                    setSecond(false);
                    return;
                  }
                  setFirst(false);
                  setSecond(true);
                  setThird(false);
                }}
              >
                <p className={second ? "pb-8 pt-6 font-bold" : "pb-8 pt-6"}>
                  Q2: Why inhale melatonin?
                </p>
                {second ? (
                  <p className="pb-8 text-[16px] text-black">
                    Inhaling on the diffuser will turn the inside liquids
                    (melatonin, lavender, chamomile) into a light mist which you
                    inhale, and then exhale out your nose. Inhaling the
                    melatonin allows for a near-instant effect, and also allows
                    you to experience the soothing aromatherapeutic effect of
                    lavender and chamomile.
                  </p>
                ) : undefined}
              </div>
              <div
                className="cursor-pointer border-b-[1px] border-solid border-[#bdbdbd]"
                onClick={() => {
                  if (third) {
                    setThird(false);
                    return;
                  }
                  setFirst(false);
                  setSecond(false);
                  setThird(true);
                }}
              >
                <p className={third ? "pb-8 pt-6 font-bold" : "pb-8 pt-6"}>
                  Q3: How much melatonin is there per inhale?
                </p>
                {third ? (
                  <p className="pb-8 text-[16px] text-black">
                    Inhaling on the diffuser will turn the inside liquids
                    (melatonin, lavender, chamomile) into a light mist which you
                    inhale, and then exhale out your nose. Inhaling the
                    melatonin allows for a near-instant effect, and also allows
                    you to experience the soothing aromatherapeutic effect of
                    lavender and chamomile.
                  </p>
                ) : undefined}
              </div>
              <div className="cursor-pointer border-b-[1px] border-solid border-[#bdbdbd]">
                <p className="pb-8 pt-6">
                  Q4: Is it an e-cigarette or tobacco product?
                </p>
              </div>
              <div className="cursor-pointer border-b-[1px] border-solid border-[#bdbdbd]">
                <p className="pb-8 pt-6">Q5: What's in it?</p>
              </div>
              <div className="cursor-pointer border-b-[1px] border-solid border-[#bdbdbd]">
                <p className="pb-8 pt-6">Q6: What's not in it?</p>
              </div>
              <div className="cursor-pointer border-b-[1px] border-solid border-[#bdbdbd]">
                <p className="pb-8 pt-6">Q7: How long does it last?</p>
              </div>
              <div className="cursor-pointer border-b-[1px] border-solid border-[#bdbdbd]">
                <p className="pb-8 pt-6">
                  Q8: How do I know it has run out/died?
                </p>
              </div>
            </div>
          </section>
        </main>
      ) : undefined}
      <Footer />
    </>
  );
}

export default FAQs;
