export default function AboutPage() {
  return (
    <section className="w-full bg-white py-20">
      <div className="maxWidth mx-auto flex flex-col  justify-between gap-[30px]  w-full">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-[64px]">
          {/* Left Column */}
          <div className="space-y-6 text-center lg:text-left  md:w-[708px]">
            <p className="text-[#0978D9] font-medium text-[24px]">About Us </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#070707] leading-tight">
              Empower Your Business <br /> Financial Future
            </h2>
            <button className="bg-[#0978D9] text-[#070707] px-9 py-4 rounded-lg font-medium text-[18px] hover:bg-blue-700 transition">
              Get Started →
            </button>
          </div>

          {/* Right Column */}
          <div className="flex-1 items-center  text-center lg:text-left ">
            <p className="text-gray-600   mx-auto lg:mx-0 md:w-[516px]">
              Liquid Chair Group is a technology conglomerate focused on delivering innovative
              solutions across multiple industries. Our expertise in AI, data engineering, and
              enterprise software development enables us to transform businesses and drive digital
              innovation.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="  flex flex-col md:flex-row justify-between  gap-12 ">
          {/* Image */}
          <div className="md:w-[757px] ">
            <img
              src="/AboutImage.png"
              alt="AI Technology"
              className="rounded-xl w-full object-cover h-[320px] md:h-[430px]"
            />
          </div>

          {/* Cards */}
          <div className=" space-y-6">
            {/* Vision Card */}
            <div className="bg-[#0978D9] text-white  rounded-xl p-6 md:pt-[64px] md:pb-[32px] pl-[32px] md:w-[531px] md:h-[199px] ">
              <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
              <p className="text-sm">
                Empowering enterprises with cutting-edge AI, data engineering, and innovative
                solutions.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-[#E6F2FB] text-gray-900 p-6 rounded-xl md:pt-[64px] md:pb-[32px] pl-[32px] md:w-[531px] md:h-[199px] ">
              <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
              <p className="text-sm">
                Empowering enterprises with cutting-edge AI, data engineering, and innovative
                solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
