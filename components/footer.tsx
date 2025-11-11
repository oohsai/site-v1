import Image from "next/image";

export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logo.svg" alt="ContentStudio Logo" width={32} height={32} className="h-8 w-auto" />
              <span className="font-semibold text-black dark:text-white">contentspacestudios</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Crafting compelling content that drives results.</p>
          </div>

          <div>
            <h4 className="font-semibold text-black dark:text-white mb-4 text-sm">Services</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <a href="#services" className="hover:text-black dark:hover:text-white transition">
                  Content Creation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-black dark:hover:text-white transition">
                  Strategy
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-black dark:hover:text-white transition">
                  Analytics
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-black dark:text-white mb-4 text-sm">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <a href="#" className="hover:text-black dark:hover:text-white transition">
                  About
                </a>
              </li>
              {/* <li>
                <a href="#" className="hover:text-black dark:hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-black dark:hover:text-white transition">
                  Contact
                </a>
              </li> */}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-black dark:text-white mb-4 text-sm">Follow</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              {/* <li>
                <a href="#" className="hover:text-black transition">
                  Twitter
                </a>
              </li> */}
              <li>
                <a href="https://www.instagram.com/contentspace.studios/" className="hover:text-black dark:hover:text-white transition">
                  Instagram
                </a>
              </li>
              {/* <li>
                <a href="#" className="hover:text-black dark:hover:text-white transition">
                  LinkedIn
                </a>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 md:mb-0">© 2025 ContentStudio. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-600 dark:text-gray-400">
            <a href="#" className="hover:text-black dark:hover:text-white transition">
              Privacy
            </a>
            <a href="#" className="hover:text-black dark:hover:text-white transition">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
