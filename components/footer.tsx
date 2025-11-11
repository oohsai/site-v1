import Image from "next/image";

export default function Footer() {
  return (
    <footer id="footer" className="bg-neutral-950 border-t border-neutral-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1.5">
                {/* Play icon */}
                <div className="w-5 h-5 bg-white flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 1L8 5L2 9V1Z" fill="black" stroke="black" strokeWidth="0.3"/>
                  </svg>
                </div>
                {/* Pause icon */}
                <div className="w-5 h-5 bg-white flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <rect x="2.5" y="1.5" width="1.5" height="7" fill="black"/>
                    <rect x="6" y="1.5" width="1.5" height="7" fill="black"/>
                  </svg>
                </div>
                {/* Fast forward icon */}
                <div className="w-5 h-5 bg-white flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M1 1L5 5L1 9V1Z" fill="black" stroke="black" strokeWidth="0.3"/>
                    <path d="M5 1L9 5L5 9V1Z" fill="black" stroke="black" strokeWidth="0.3"/>
                  </svg>
                </div>
              </div>
              <span className="font-semibold text-white">contentspacestudios</span>
            </div>
            <p className="text-sm text-neutral-400">Crafting compelling content that drives results.</p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Services</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <a href="#services" className="hover:text-white transition">
                  Content Creation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  Strategy
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  Analytics
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Company</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  About
                </a>
              </li>
              {/* <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-white transition">
                  Contact
                </a>
              </li> */}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Follow</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              {/* <li>
                <a href="#" className="hover:text-black transition">
                  Twitter
                </a>
              </li> */}
              <li>
                <a href="https://www.instagram.com/contentspace.studios/" className="hover:text-white transition">
                  Instagram
                </a>
              </li>
              {/* <li>
                <a href="#" className="hover:text-white transition">
                  LinkedIn
                </a>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-neutral-400 mb-4 md:mb-0">© 2025 ContentStudio. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-neutral-400">
            <a href="#" className="hover:text-white hover:bg-neutral-800 px-3 py-1 rounded transition-all duration-200">
              Privacy
            </a>
            <a href="#" className="hover:text-white hover:bg-neutral-800 px-3 py-1 rounded transition-all duration-200">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
