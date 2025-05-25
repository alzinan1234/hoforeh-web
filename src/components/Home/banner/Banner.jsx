import Image from 'next/image';

export default function Banner() {
  return (
    <section className="w-full bg-gradient-to-b from-[#eaf4ff] to-white pt-24 md:pt-32 pb-16 px-4">
      <div className="maxWidth mx-auto text-center">
        {/* Heading */}
       <div className="md:h-[226px] md:w-[1004px] mx-auto mt-[35px] flex flex-col items-center justify-center gap-[20px]">
         <h1 className=" text-3xl sm:text-4xl md:text-6xl w-full font-bold text-gray-900 leading-tight">
          Transforming <span className="text-blue-600">business</span> <br className="hidden sm:block" />
          through technology
        </h1>

        {/* Subheading */}
        <p className="text-[#737373] mt-4 max-w-xl mx-auto text-base sm:text-lg text-[16px] font-normal ">
          Empowering enterprises with cutting-edge AI, data engineering, and innovative solutions.
        </p>

         {/* Buttons */}
        <div className=" flex flex-col sm:flex-row justify-center items-center gap-4 ">
          <a
            href="#explore"
            className="bg-blue-600 text-[#070707] px-9 py-4 rounded-lg font-medium text-sm sm:text-base hover:bg-blue-700 transition"
          >
            Explors Solutions →
          </a>
          <a
            href="#contact"
            className="border border-gray-800 px-6 py-3 rounded-lg font-medium text-sm text-[#070707] sm:text-base hover:bg-gray-100 transition"
          >
            Get Touch →
          </a>
        </div>

       </div>
       
       

        {/* Image */}
        <div className="mt-16 rounded-[12px]">
          <Image
            src="/bannerImage.png" // Replace this with the actual path
            alt="Technology Banner"
            width={1004} // Adjust width as needed
            height={633} // Adjust height as needed
            className="w-full maxWidth md:h-[633px] mx-auto rounded-[12px] "
            priority
          />
        </div>
      </div>
    </section>
  );
}
