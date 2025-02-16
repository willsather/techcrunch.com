import Link from "next/link";

import NewsletterForm from "@/app/(components)/(newsletter)/newsletter-form";
import { FacebookIcon } from "@/icons/facebook-icon";
import { InstagramIcon } from "@/icons/instagram-icon";
import { LinkedInIcon } from "@/icons/linkedin-icon";
import { TechCrunchLogo } from "@/icons/logo";
import { RSSIcon } from "@/icons/rss-icon";
import { TwitterIcon } from "@/icons/twitter-icon";

export default function Footer() {
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
      link: "/feed",
      icon: <RSSIcon className="size-6" />,
    },
  ];

  return (
    <footer className="bg-tc-black py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <Link href="/" className="inline-block">
            <TechCrunchLogo className="size-20 fill-tc-green" />
          </Link>
        </div>

        <div className="flex flex-col justify-between md:flex-row">
          <div className="mb-8 flex flex-col flex-wrap gap-8">
            {/* Social Links */}
            <div className="flex gap-6">
              <div>
                <div className="grid grid-cols-6 gap-8 fill-white">
                  {socialLinks.map(({ link, icon }) => (
                    <Link
                      key={link}
                      href={link}
                      className="hover:text-tc-green"
                    >
                      {icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <NewsletterForm />
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Column 1 */}
            <div className="space-y-4">
              <Link
                href="/"
                className="block text-white/80 hover:text-white hover:underline"
              >
                TechCrunch
              </Link>
              <Link
                href="https://techcrunch.com/about-techcrunch/"
                className="block text-white/80 hover:text-white hover:underline"
              >
                Staff
              </Link>
              <Link
                href="https://techcrunch.com/contact-us/"
                className="block text-white/80 hover:text-white hover:underline"
              >
                Contact Us
              </Link>
              <Link
                href="https://techcrunch.com/advertise/"
                className="block text-white/80 hover:text-white hover:underline"
              >
                Advertise
              </Link>
              <Link
                href="https://www.crunchboard.com/"
                className="block text-white/80 hover:text-white hover:underline"
              >
                Crunchboard Jobs
              </Link>
              <Link
                href="https://techcrunch.com/site-map/"
                className="block text-white/80 hover:text-white hover:underline"
              >
                Site Map
              </Link>
            </div>

            {/* Column 2 */}
            <div className="space-y-4">
              <Link
                href="https://guce.techcrunch.com/terms"
                className="block text-white/80 hover:text-white hover:underline"
              >
                Terms of Service
              </Link>
              <Link
                href="https://guce.techcrunch.com/privacy-policy"
                className="block text-white/80 hover:text-white hover:underline"
              >
                Privacy Policy
              </Link>
              <Link
                href="https://techcrunch.com/rss-terms-of-use/"
                className="block text-white/80 hover:text-white hover:underline"
              >
                RSS Terms of Use
              </Link>
              <Link
                href="https://guce.techcrunch.com/privacy-dashboard?locale=en-US"
                className="block text-white/80 hover:text-white hover:underline"
              >
                Privacy Dashboard
              </Link>
              <Link
                href="https://techcrunch.com/code-of-conduct/"
                className="block text-white/80 hover:text-white hover:underline"
              >
                Code of Conduct
              </Link>
              <Link
                href="https://legal.yahoo.com/us/en/yahoo/privacy/adinfo/index.html"
                className="block text-white/80 hover:text-white hover:underline"
              >
                About Our Ads
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-white/10 border-t pt-8 text-sm text-white/60">
          © {new Date().getFullYear()} Yahoo.
        </div>
      </div>
    </footer>
  );
}
