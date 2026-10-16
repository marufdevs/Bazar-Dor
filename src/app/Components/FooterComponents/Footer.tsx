import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-[#DFE8DF] bg-[#FAFCFA] px-4 py-5 sm:px-6">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
        <p className="text-sm font-medium text-[#26332B]">
          বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
        </p>

        <p className="text-xs leading-relaxed text-[#26332B] sm:max-w-md sm:text-right">
          সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
        </p>
      </div>
    </footer>
  );
};

export default Footer;
