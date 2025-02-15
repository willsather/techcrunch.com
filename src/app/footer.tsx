import { FacebookIcon } from "@/icons/facebook-icon";
import { InstagramIcon } from "@/icons/instagram-icon";
import { LinkedInIcon } from "@/icons/linkedin-icon";
import { RSSIcon } from "@/icons/rss-icon";
import { TwitterIcon } from "@/icons/twitter-icon";
import Link from "next/link";

export function Footer() {
  const socialLinks = [
    {
      link: "https://twitter.com/techcrunch",
      icon: <TwitterIcon className="size-6" />,
    },
    {
      link: "https://www.linkedin.com/company/techcrunch",
      icon: <LinkedInIcon className="size-6" />,
    },
    {
      link: "https://www.facebook.com/techcrunch",
      icon: <FacebookIcon className="size-6" />,
    },
    {
      link: "https://instagram.com/techcrunch",
      icon: <InstagramIcon className="size-6" />,
    },
    {
      link: "/rss.xml",
      icon: <RSSIcon className="size-6" />,
    },
  ];
  return (
    <footer className="bg-tc-black text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div>
            <h2 className="mb-4 font-bold text-xl">About</h2>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="#" className="hover:text-tc-green">
                  TechCrunch
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-tc-green">
                  Staff
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-tc-green">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-tc-green">
                  Advertise
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h2 className="mb-4 font-bold text-xl">Legal</h2>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="#" className="hover:text-tc-green">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-tc-green">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-tc-green">
                  Code of Conduct
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-tc-green">
                  About Our Ads
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h2 className="mb-4 font-bold text-xl">Follow Us</h2>
            <div className="grid grid-cols-3 gap-4 fill-white">
              {socialLinks.map(({ link, icon }) => (
                <Link key={link} href={link} className="hover:text-tc-green">
                  {icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter Section */}
          <div>
            <h2 className="mb-4 font-bold text-xl">Newsletter</h2>
            <p className="mb-4 text-gray-400 text-sm">
              Get the latest tech news in your inbox weekday mornings!
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="border-gray-700 bg-[#2D2D2D] text-white placeholder:text-gray-500"
              />
              <button
                type="button"
                className="w-fultext-tc-green hover:bg-tc-green"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-gray-800 border-t pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 text-center md:flex-row md:space-y-0">
            <div className="font-bold text-2xl">TechCrunch</div>
            <div className="text-gray-400 text-sm">
              © 2024 TechCrunch. All rights reserved.
            </div>
            <div className="text-gray-500 text-xs">
              <Link href="#" className="hover:text-tc-green">
                Do Not Sell or Share My Personal Info
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
