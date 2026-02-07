import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">OrcaTech</h3>
            <p className="text-gray-300 mb-4">
              Web Development & Cybersecurity Company
            </p>

            <div className="space-y-2 text-sm">
              <p>
                <Link
                  href="mailto:orcatech.service@gmail.com"
                  className="text-light-blue hover:underline"
                >
                  orcatech.service@gmail.com
                </Link>
              </p>
              <p>
                <Link
                  href="tel:+201033496278"
                  className="text-light-blue hover:underline"
                >
                  +20 103 349 6278
                </Link>
              </p>
              <p>
                <Link
                  href="https://www.facebook.com/profile.php?id=61583719363965"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light-blue hover:underline"
                >
                  Facebook
                </Link>
              </p>
            </div>
          </div>

          {/* Services Links (SEO) */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <Link href="/services/web-development" className="hover:text-light-blue">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/cybersecurity" className="hover:text-light-blue">
                  Cybersecurity Services
                </Link>
              </li>
              <li>
                <Link href="/services/backend" className="hover:text-light-blue">
                  Backend Development
                </Link>
              </li>
              <li>
                <Link href="/services/desktop-apps" className="hover:text-light-blue">
                  Desktop Applications
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations Links (Local SEO) */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Locations</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <Link href="/egypt" className="hover:text-light-blue">
                  Web Development Company in Egypt
                </Link>
              </li>
              <li>
                <Link href="/saudi-arabia" className="hover:text-light-blue">
                  Cybersecurity Company in Saudi Arabia
                </Link>
              </li>
              <li>
                <Link href="/global" className="hover:text-light-blue">
                  Global Software Services
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} OrcaTech. All rights reserved.
        </div>
      </div>
    </footer>
  );
}