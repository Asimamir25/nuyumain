
import React from "react";
import ContactCard from "../../assets/contactcard.png";

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row p-3 h-auto  md:px-16 justify-between gap-3">
      {/* Image Section */}
      <div className="w-full md:w-[42%] max-h-[810px] border-0.8">
        <img
          src={ContactCard}
          alt="Contact Card"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Form Section */}
      <div className="border-[0.85px] rounded-[5px] border-[#dac0a7] w-full md:w-[55%] h-[10%] px-[20px] md:px-[40px]  py-2 md:py-2 md:mb-0  md:pt-[10px]">
        <p className="text-[28px] md:text-[34px] font-openSans font-normal text-black mb-3">
          Get in Touch
        </p>

        {/* Form Fields */}
        <form>
          <div className="mb-3">
            <label
              className="block text-sm  font-openSans font-medium text-black mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full rounded-[6px] h-[57px] border border-[#9E7F61] px-4"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-3">
            <label
              className="block text-sm  font-openSans font-medium text-black mb-2"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              type="text"
              id="phone"
              className="w-full rounded-[6px] h-[57px] border border-[#9E7F61] px-4"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="mb-3">
            <label
              className="block text-sm font-openSans font-medium text-black mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full rounded-[6px] h-[57px] border border-[#9E7F61] px-4"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-3">
            <label
              className="block text-sm font-medium font-openSans text-black mb-2"
              htmlFor="treatment"
            >
              Treatment
            </label>
            <input
              type="text"
              id="treatment"
              className="w-full rounded-[6px] h-[57px] border border-[#9E7F61] px-4"
              placeholder="Enter the treatment you are seeking"
            />
          </div>

          <div className="mb-3">
            <label
              className="block text-sm font-openSans font-medium text-black mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              className="w-full h-[170px] rounded-[6px] border border-[#9E7F61] px-4 py-2"
              placeholder="Write your message here"
            ></textarea>
          </div>

          {/* Privacy Checkbox */}
          <div className="flex items-center mb-3">
            <input type="checkbox" id="privacy" className="mr-2" />
            <label htmlFor="privacy" className="text-sm font-openSans text-black">
              I agree to the privacy policy.
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full h-[57px] rounded-[6px] bg-transparent font-openSans text-black font-bold hover:bg-[#9E7F61] hover:text-white transition-all border border-[#9E7F61] mb-2"
          >
            Submit Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
