export default function Footer() {
  return (
    <footer className="px-8 pt-16 pb-10 border-t border-gray-200 mt-16">
      <div className="flex flex-wrap justify-between gap-8">

        {/* Company Info */}
        <div className="max-w-xs">
          <h3 className="text-lg font-bold">
            ZeroFee Homes
          </h3>

          <p className="text-gray-500 text-sm mt-2">
            From cleaning to repairs, book verified experts in your area at
            transparent prices.
          </p>
        </div>

        {/* Support */}
        <div className="flex flex-col gap-2">
          <h4 className="font-medium mb-2">
            Support
          </h4>

          <a href="#" className="text-amber-800 text-sm">
            Help Center
          </a>

          <a href="#" className="text-amber-800 text-sm">
            Safety
          </a>

          <a href="#" className="text-amber-800 text-sm">
            Terms
          </a>

          <a href="#" className="text-amber-800 text-sm">
            Privacy
          </a>
        </div>

        {/* Company */}
        <div className="flex flex-col gap-2">
          <h4 className="font-medium mb-2">
            Company
          </h4>

          <a href="#" className="text-amber-800 text-sm">
            About Us
          </a>

          <a href="#" className="text-amber-800 text-sm">
            Blog
          </a>

          <a href="#" className="text-amber-800 text-sm">
            Careers
          </a>

          <a href="#" className="text-amber-800 text-sm">
            Contact
          </a>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-2">
          <h4 className="font-medium mb-2">
            Services
          </h4>

          <a href="#" className="text-amber-800 text-sm">
            Home Cleaning
          </a>

          <a href="#" className="text-amber-800 text-sm">
            Plumbing
          </a>

          <a href="#" className="text-amber-800 text-sm">
            Electrical
          </a>

          <a href="#" className="text-amber-800 text-sm">
            Painting
          </a>
        </div>

      </div>
    </footer>
  );
}