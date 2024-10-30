import { useContext } from "react";
import { TC } from "../contexts/ToggleContext";

function Footer() {
  const toggleContext = useContext(TC);

  if (!toggleContext?.toggle) {
    return (
      <footer className="bg-[#12305B] pb-8 text-white md:h-[950px] lg:h-[526px]">
        <div className="flex justify-center py-8">
          <img src="/images/logolight.png" alt="SleepStiq Logo" />
        </div>
        <div className="mt-4 flex flex-col justify-between gap-10 px-[15px] md:px-[30px] lg:flex-row lg:px-[56px] min-[1440px]:px-[116px]">
          <div className="flex flex-col gap-16 md:grid md:grid-cols-6 lg:w-[725px] lg:gap-3 lg:text-[14px] min-[1440px]:w-[925px] min-[1440px]:gap-6 min-[1440px]:text-[16px]">
            <div className="text-center md:text-left">
              <p className="mb-8 font-semibold">COMPANY</p>
              <ul className="flex flex-col justify-between gap-4 text-[#ababab]">
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">Blog</li>
                <li className="cursor-pointer">Contact</li>
                <li className="cursor-pointer">Jobs</li>
              </ul>
            </div>
            <div className="col-span-2 text-center md:text-left">
              <p className="mb-8 font-semibold">CONTACT</p>
              <div className="flex flex-col justify-between gap-4">
                <p className="text-[#ababab]">Phone</p>
                <p>+234 708 507 3128</p>
                <p className="text-[#ababab]">Address</p>
                <p>16, Ogindipe Close, Upston Close</p>
              </div>
            </div>
            <div className="col-span-3">
              <p className="mb-8 text-center font-semibold md:text-left">
                CONSUMER ADVISORY
              </p>
              <p className="mb-8 text-justify md:text-left">
                These statements have not been evaluated by the Food and Drug
                Administration. This product is not intended to diagnose, treat,
                cure, or prevent any disease. This product should be used only
                as directed on the label. All trademarks and copyrights are
                property of their respective owners and not affiliated with nor
                do they endorse this product. Results may vary.
              </p>
              <p className="text-justify md:text-left">
                By using our website or product, you agree to follow our
                <span className="text-[#8FE2FF]"> terms of service.</span>
              </p>
            </div>
          </div>
          <div className="w-full border-t-[1px] border-solid border-[#5D6544] pt-8 text-center lg:w-[375px] lg:border-l-[1px] lg:border-t-0 lg:pl-12 lg:pt-0 lg:text-left lg:text-[14px] min-[1440px]:text-[16px]">
            <p className="mb-8 font-semibold">GET IN TOUCH</p>
            <p className="text-[#ababab]">
              Feel free to get in touch with us via email
            </p>
            <p className="my-6 font-bold lg:text-[22px] min-[1440px]:text-[24px]">
              hello@sleepstiq.com
            </p>
            <div className="flex justify-center gap-3 lg:justify-start">
              <img src="/images/facebook.png" alt="Facebook Logo" />
              <img src="/images/twitter.png" alt="Twitter Logo" />
              <img src="/images/googleplus.png" alt="Google Plus Logo" />
              <img src="/images/linkedin.png" alt="Linkedin Logo" />
            </div>
            <p className="mt-20 text-[#ababab] lg:text-[12px] min-[1440px]:text-[14px]">
              &copy; 2020@sleepstiq. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
