function Hero() {
  return (
    <div className="w-2/3 md:w-500 md:h-500 m-auto flex items-center">
      <div className=" justify-center items-center">
        <div className="mt-10 mb-5 bg-altGray bg-opacity-10 dark:bg-opacity-50 p-4 rounded-lg">
          <p className="text-center">
            Hi, i'm a full stack software developer based in Italy!
          </p>
        </div>
        <div className="md:flex justify-between items-center">
          <div className="mt-10 mb-5 md:my-0">
            <h1 className="text-3xl font-medium">Alessio Romano</h1>
            <ul className="text-sm">
              <li>
                &#128188;{" "}
                <span className="font-semibold">Digital craftsman</span>{" "}
                (developer / designer)
              </li>
              <li>
                &#127891;{" "}
                <span className="font-semibold">
                  Software engineering student
                </span>
              </li>
            </ul>
            <a
              href="./Alessio_Romano_CV.pdf"
              download
              className="p-2 mt-2 border-1 bg-altGray bg-opacity-10 dark:bg-altGray dark:hover:bg-redAccent rounded-md inline-block hover:bg-redAccent hover:text-mainWhite "
            >
              &#128193; Download CV
            </a>
          </div>
          <img
            width="96px"
            height="96px"
            className="rounded-full border-2 border-altGray md:inline"
            src="./profilepic.png"
            alt="Alessio"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
