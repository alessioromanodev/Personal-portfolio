function Hero() {
  return (
    <div>
      <div className="mt-10 mb-5 bg-altGray backdrop-filter backdrop-blur-lg bg-opacity-10 p-2 rounded-lg">
        <p className="text-white text-center">
          Hi, i'm a full stack software developer based in Italy!
        </p>
      </div>
      <div className="flex justify-between">
        <div className="inline-block">
          <h1 className="text-3xl font-medium">Alessio Romano</h1>
          <ul className="text-sm">
            <li>Digital craftsman (developer / designer)</li>
            <li>Software engineering student</li>
          </ul>
        </div>
        <img
          width="96px"
          height="96px"
          className="rounded-full inline-block border-2 border-altGray"
          src="./profilepic.png"
          alt="Alessio"
        />
      </div>
    </div>
  );
}

export default Hero;
