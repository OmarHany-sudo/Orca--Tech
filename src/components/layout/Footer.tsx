import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">OrcaTech</h3>
            <p className="text-gray-300 mb-4">
              Web Development & Cybersecurity
            </p>
            <div className="space-y-2">
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
                  href="tel:01033496278"
                  className="text-light-blue hover:underline"
                >
                  01033496278
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
          <div className="md:text-right">
            <p className="text-gray-400">
              © {new Date().getFullYear()} OrcaTech. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}