const LINK_GROUPS = [
  { title: "Product", links: ["Home", "Technologies", "Projects"] },
  { title: "Company", links: ["About", "Contact", "Careers"] },
  { title: "Legal", links: ["Privacy Policy", "Terms of Service"] },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 mt-10">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-10">
        <div>
          <a href="#home" className="flex items-center gap-2">
            <span className="brand-gradient-bg text-white font-bold text-sm w-8 h-8 rounded-lg flex items-center justify-center">
              DS
            </span>
            <span className="font-bold text-lg">
              Dev <span className="brand-gradient-text">Stack</span>
            </span>
          </a>
          <p className="text-sm text-gray-500 mt-3 max-w-xs">
            Curated tools, technologies, and resources for developers building modern software.
          </p>
          <div className="flex gap-4 mt-4 text-sm font-medium text-gray-700">
            <a href="#github" className="hover:text-gray-900">GitHub</a>
            <a href="#twitter" className="hover:text-gray-900">Twitter</a>
            <a href="#linkedin" className="hover:text-gray-900">LinkedIn</a>
          </div>
        </div>

        {LINK_GROUPS.map((group) => (
          <div key={group.title}>
            <h4 className="text-xs font-bold tracking-wide text-gray-900 mb-4">
              {group.title.toUpperCase()}
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-gray-500">
              {group.links.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, "-")}`} className="hover:text-gray-900">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Dev Stack. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#privacy" className="hover:text-gray-600">Privacy</a>
            <a href="#terms" className="hover:text-gray-600">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
