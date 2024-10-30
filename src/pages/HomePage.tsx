import Ratings from "../components/Ratings";
import ProductReviews from "../components/ProductReviews";
import Footer from "../components/Footer";
import { MdArrowRight } from "react-icons/md";
import Header from "../components/Header";
import { useContext } from "react";
import { TC } from "../contexts/ToggleContext";
import { Link } from "react-router-dom";

function HomePage() {
  const toggleContext = useContext(TC);

  return (
    <>
      <header className="min:[1440px]:px-[166px] relative h-screen bg-[url('/images/header1.jpg')] bg-cover bg-center bg-no-repeat px-[20px] py-[23px] md:px-[40px] lg:px-[80px]">
        <Header />
        <div className="mt-[6.5rem] h-[261px] w-[90vw] text-[#12305b] md:w-[581px]">
          <p className="text-[18px]">We're here to help you</p>
          <p className="text-[40px] font-bold md:text-[60px]">Relax & Rest</p>
          <p>
            With the aid of our Melatonin Sleepstiq, we can assure you that you
            can get quality sleep.
          </p>
          <Link
            to="/shop"
            className="mt-8 block h-[50px] w-[225px] rounded-md bg-[#FC5959] py-[12.5px] text-center text-white"
          >
            Visit Shop
          </Link>
        </div>
        {!toggleContext?.toggle ? (
          <div className="absolute -bottom-[250px] right-0 flex h-[250px] w-[100vw] flex-col items-center justify-between gap-2 bg-white py-6 shadow-[0_75px_100px_-50px_#1f1f1f] md:-bottom-[65.05px] md:right-0 md:h-[131px] md:flex-row md:gap-4 md:px-[18px] md:py-0 lg:w-[calc(100vw-80px)] lg:gap-8 lg:px-[36px] min-[1440px]:w-[1276px] min-[1440px]:px-[72px]">
            <img
              src="/images/google.png"
              alt="Google Logo"
              className="w-24 md:w-32 lg:w-40 min-[1440px]:w-[146px]"
            />
            <img
              src="/images/forbes.png"
              alt="Forbes Logo"
              className="w-24 md:w-32 lg:w-40 min-[1440px]:w-[129px]"
            />
            <img
              src="/images/bloomberg.png"
              alt="Bloomberg Logo"
              className="w-24 md:w-32 lg:w-40 min-[1440px]:w-[226px]"
            />
            <img
              src="/images/sleep_review.png"
              alt="Sleep Review Logo"
              className="w-24 md:w-32 lg:w-40 min-[1440px]:w-[201px]"
            />
            <img
              src="/images/influencive.png"
              alt="Influencive Logo"
              className="w-24 md:w-32 lg:w-40 min-[1440px]:w-[220px]"
            />
          </div>
        ) : undefined}
      </header>
      {!toggleContext?.toggle ? (
        <main>
          <section className="mb-[10rem] mt-[25rem] pl-[5vw] md:mb-[15rem] md:mt-0 md:pl-[40px] lg:mb-[10rem] lg:pl-[80px] min-[1440px]:pl-[165px]">
            <div className="mt-[15rem] flex w-[90vw] flex-col justify-between md:h-[850px] md:gap-28 lg:h-[455px] lg:w-[85vw] lg:flex-row lg:gap-20 min-[1440px]:w-[1109px] min-[1440px]:gap-20">
              <div className="h-[366px] pt-0 text-[#12305b] md:pt-[50px] lg:w-[400px] min-[1440px]:w-[475px]">
                <p className="mb-6 text-[14px]">Our Amazing Story</p>
                <p className="bg-gradient-to-r from-white from-35% to-[#FFD723]/10 text-[24px] font-bold md:text-[51px] lg:w-[400px] lg:text-[33px] min-[1440px]:w-[427px] min-[1440px]:text-[36px]">
                  10k+ Happy Customers
                </p>
                <p className="mb-8 mt-12 text-[#213842]/60">
                  There’s no secret sauce, no wizard behind the curtain. What
                  makes Aerolab tick is an interdisciplinary team with a
                  framework that fosters candid collaboration.
                </p>
                <p className="-ml-2 flex cursor-pointer items-center justify-start gap-1 font-bold underline underline-offset-2">
                  <MdArrowRight color="#12305b" size="1.75rem" />
                  <span> More know About us</span>
                </p>
              </div>
              <div className="flex h-[450px] flex-col justify-between bg-[#FBF9F2] pb-[30px] pl-[20px] pr-[20px] pt-[30px] text-[#4D533C] shadow-[0_75px_200px_-80px_#1f1f1f] md:h-[550px] md:pl-[40px] md:pr-[40px] md:pt-[50px] lg:h-[455px] lg:w-[500px] lg:pr-[15px] min-[1440px]:w-[474px]">
                <p className="text-[24px] italic">
                  I’m a very anxious person but use this and feel so relaxed and
                  sleep way better now with the aid of sleepstiq.
                </p>
                <div className="flex flex-col justify-between gap-4">
                  <div className="flex items-center justify-start gap-8">
                    <img
                      src="/images/profile.png"
                      alt="Profile Photo of James Miller"
                    />
                    <div className="w-full">
                      <p className="text-[20px] font-bold md:text-[22px]">
                        James Miller
                      </p>
                      <p className="text-[#152934]">CEO, Techbias</p>
                      <div className="-ml-[116px] mt-4 flex items-center justify-center gap-4">
                        <img src="/images/dot.png" alt="Dot" />
                        <img src="/images/dot.png" alt="Dot" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="mb-12 overflow-x-scroll pl-[20px] md:mb-4 md:pl-[40px] lg:pl-[80px] min-[1440px]:pl-[160px]">
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
          <div className="flex justify-center">
            <div className="mb-16 w-[90vw] border-[1px] border-solid border-[#213842]/10 lg:w-[75vw] min-[1440px]:w-[1110px]"></div>
          </div>
          <section className="mb-36 pl-[5vw] md:pl-[40px] lg:mb-20 min-[1440px]:mb-40">
            <div className="flex h-[900px] w-[90vw] flex-col items-center justify-between gap-0 md:gap-28 lg:h-[580px] lg:flex-row lg:items-start lg:gap-0 min-[1440px]:w-[1252px]">
              <div>
                <div className="relative">
                  <img src="/images/vape_pen.jpg" alt="Vape Pen" />
                  <div className="absolute -bottom-[16rem] flex h-[250px] flex-col justify-between rounded-md bg-white p-6 py-6 shadow-[40px_50px_100px_-50px_#1f1f1f] md:bottom-0 md:right-0 md:h-[158px] lg:right-8 lg:w-[400px] lg:text-[14px] min-[1440px]:right-0 min-[1440px]:w-[453px] min-[1440px]:text-[16px]">
                    <p>😊 Promotes calm and relaxation.</p>
                    <p>💤 Inhalation allows for a rapid effect.</p>
                    <p>✅ 100% drug-free, plant-based ingredients.</p>
                    <p>⚕️ 3rd-party lab tested.</p>
                  </div>
                </div>
              </div>
              <div className="h-[300px] w-[90vw] md:h-[287px] md:w-[421px] lg:mt-20 min-[1440px]:mt-24">
                <p className="mb-6 text-[36px] font-bold text-[#12305B]">
                  Shop Now
                </p>
                <p className="text-[#213842]/60">
                  Our Personal Diffuser is an aromatherapy device that contains
                  a blend of melatonin, lavender, and chamomile. A few breaths
                  of our plant-based essential oil mist will mellow you out,
                  quiet the mind, and lull you to bed.
                </p>
                <Link
                  to="/shop"
                  className="mt-8 block h-[50px] w-[225px] rounded-md bg-[#FC5959] py-[12.5px] text-center text-white"
                >
                  Visit Shop
                </Link>
              </div>
            </div>
          </section>
          <section className="mb-20 pl-[5vw] md:pl-[40px] lg:mb-12 lg:pl-[80px] min-[1440px]:mb-32 min-[1440px]:pl-[172px]">
            <div className="flex w-[90vw] flex-col items-center justify-between gap-0 md:h-[950px] lg:h-[550px] lg:flex-row lg:gap-24">
              <div className="mb-12 h-[397px] text-[#213842]/60 md:mb-0 md:w-[421px]">
                <p className="mb-6 text-[36px] font-bold text-[#12305B]">
                  Our Mission
                </p>
                <p className="mb-8">
                  We started Sleepstiq with 1 simple goal: to be your best
                  friend at bedtime. We, just like you, deal with stress,
                  unease, and trouble sleeping from a number of silly things
                  like school, work, screens, numbers, and people. That's why we
                  created products that aim to -
                </p>
                <p>✓ Promote Calm</p>
                <p>✓ Support Sleep</p>
                <p>✓ Reduce Stress</p>
                <p>✓ Aid Relaxation</p>
              </div>
              <img
                src="/images/sleeping_woman.jpg"
                alt="Woman asleep on a bed"
                className="lg:w-[50vw] min-[1440px]:w-[50vw]"
              />
            </div>
          </section>
          <section className="mb-16 flex justify-center lg:mb-24 min-[1440px]:mb-40">
            <div className="flex h-[350px] w-[90vw] flex-col items-center justify-between md:h-[226px] lg:w-[915px]">
              <p className="mb-6 text-[36px] font-bold text-[#12305B]">
                Visit Our Shop
              </p>
              <p className="text-[#213842]/60">
                Our Personal Diffuser is an aromatherapy device that contains a
                blend of melatonin, lavender, and chamomile. A few breaths of
                our plant-based essential oil mist will mellow you out, quiet
                the mind, and lull you to bed.
              </p>
              <Link
                to="/shop"
                className="mt-8 block h-[50px] w-[225px] rounded-md bg-[#FC5959] py-[12.5px] text-center text-white"
              >
                Visit Shop
              </Link>
            </div>
          </section>
          <div className="flex justify-center">
            <div className="mb-16 w-[90vw] border-[1px] border-solid border-[#213842]/10 lg:w-[75vw] min-[1440px]:w-[1110px]"></div>
          </div>
          <section className="mb-16 pl-[20px] md:pl-[40px] lg:pl-[80px] min-[1440px]:pl-[160px]">
            <p className="mb-12 text-[33px] font-bold text-[#4D533C] md:text-[36px]">
              Product Reviews
            </p>
            <div className="overflow-x-scroll">
              <div className="flex h-[620px] justify-between gap-6 md:h-[520px]">
                <ProductReviews
                  image="/images/vape1.jpg"
                  text="Works great! Just use it and then relax, I fall asleep with no problem every time I use it."
                  author="Rachel Dill"
                  stars={5}
                />
                <ProductReviews
                  image="/images/vape2.jpg"
                  text="It really helps me fall right to sleep compared to melatonin pills."
                  author="Javier Mendez"
                  stars={5}
                />
                <ProductReviews
                  image="/images/vape2.jpg"
                  text="I've tried a lot of things to sleep but none of those worked, so I tried Cloudy and wow! I sleep like a baby now."
                  author="Naomi Nwazurike"
                  stars={5}
                />
                <ProductReviews
                  image="/images/vape1.jpg"
                  text="I have been falling asleep faster and sleeping thru the night."
                  author="Nate Jacobs"
                  stars={5}
                />
              </div>
            </div>
          </section>
        </main>
      ) : undefined}
      <Footer />
    </>
  );
}

export default HomePage;
