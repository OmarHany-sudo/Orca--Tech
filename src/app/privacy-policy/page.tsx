import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <section className="min-h-screen bg-white py-16 px-4">
      <div className="mx-auto max-w-3xl">

        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-gray-500" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="hover:text-gray-700">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-700 font-medium">
              Privacy Policy
            </li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Privacy Policy
        </h1>

        <p className="text-gray-700 mb-6">
          At <strong>OrcaTech</strong>, we respect your privacy and are committed
          to protecting your personal data.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
          Information We Collect
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
          How We Use Your Information
        </h2>
        <p className="text-gray-700">
          We use your information only to contact you regarding your request and
          to provide our services and consultations.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
          Data Sharing
        </h2>
        <p className="text-gray-700">
          We do not share, sell, or rent your personal data to any third party.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
          Your Consent
        </h2>
        <p className="text-gray-700">
          By submitting your information through our forms, you agree to this
          Privacy Policy.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
          Contact
        </h2>
        <p className="text-gray-700">
          If you have any questions about this Privacy Policy, you can contact us
          through our official channels.
        </p>

      </div>
    </section>
  );
}