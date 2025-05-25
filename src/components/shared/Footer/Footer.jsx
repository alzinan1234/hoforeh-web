export default function Footer() {
  return (
    <footer className="bg-[#0E1320] text-white py-10 px-6">
      <div className="maxWidth mx-auto grid grid-cols-1 md:grid-cols-4 gap-14 pb-8">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold mb-2">LogicGenX</h2>
          <p className="text-sm text-gray-400">
            Empowering businesses with intelligent tech solutions for a smarter future.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-2xl mb-3 uppercase">Quick Links</h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><a href="#">Home</a></li>
            <li><a href="#">Our Solutions</a></li>
            <li><a href="#">Success Stories</a></li>
            <li><a href="#">Our Mission</a></li>
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h3 className="font-semibold text-2xl mb-3 uppercase">Solutions</h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><a href="#">AI-Driven Innovations</a></li>
            <li><a href="#">Cloud Infrastructure</a></li>
            <li><a href="#">Intranet Excellence</a></li>
            <li><a href="#">Power Platform Mastery</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-2xl mb-3 uppercase">Contact</h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-center gap-2">
              <span>📞</span> +1 636-290-2365
            </li>
            <li className="flex items-center gap-2">
              <span>✉️</span> contact@logicgenx.com
            </li>
            <li className="flex items-start gap-2">
              <span>📍</span>
              <span>
                500 N Central Expy, Ste 500<br />
                #290, Plano, TX 75074, USA
              </span>
            </li>
          </ul>
        </div>
      </div> 
    <div className="py-10">
          <div className= " maxWidth h-[1px] bg-white text-gray-700"></div>
    </div>

    

      <div className="text-center text-xs  text-gray-500 mt-6">
        © 2025 LogicGenX. All rights reserved.
      </div>
    </footer>
  );
}
