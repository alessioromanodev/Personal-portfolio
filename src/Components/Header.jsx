function Header() {
  return (
    <nav className="sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray200">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex gap-2 justify-start items-center">
            <p className="tracking-tighter font-semibold">
              &#128171; Alessio Romano
            </p>
          </div>
          <div className="flex space-x-4 text-gray900">
            <a href="#" className="font-semibold">
              Works
            </a>
            <a href="#" className="font-semibold">
              Devlog
            </a>
            <a href="#" className="font-semibold">
              Source
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
