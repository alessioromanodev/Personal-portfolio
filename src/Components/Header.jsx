function Header() {
  return (
    <nav className="sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray200">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex gap-2 justify-start items-center">
            <div
              id="navIcon"
              className="-rotate-12 text-2xl text-gray900 font-semibold"
            >
              <svg
                version="1.0"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="16px"
                height="16px"
                viewBox="0 0 64 64"
                enable-background="new 0 0 64 64"
                xml:space="preserve"
              >
                <path
                  fill="#111827   "
                  d="M60,48l-8-4.57c0-4.027,0-8.047,0-11.43c0-12-8-24-20-32C20,8,12,20,12,32c0,3.383,0,7.402,0,11.43L4,48
            c-2.426,1.27-4,2.977-4,5.188V60c0,2.211,1.789,4,4,4h56c2.211,0,4-1.789,4-4v-6.812C64,50.977,62.125,49.375,60,48z M32,32
            c-2.211,0-4-1.789-4-4s1.789-4,4-4s4,1.789,4,4S34.211,32,32,32z"
                />
              </svg>
            </div>
            <p className="tracking-tighter font-semibold">Alessio Romano</p>
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
