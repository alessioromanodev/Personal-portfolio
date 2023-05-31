function ContactMe() {
  return (
    <div>
      <div id="contactme" className="w-2/3 md:w-1/4 mx-auto mb-20">
        <h1 className="text-3xl font-medium decoration-detailGray decoration-solid underline mb-2">
          Contact Me
        </h1>
        <p className="mb-2">
          &nbsp; Can't wait to hear from you! &#128337; <br />
        </p>
        <ul>
          <li>
            <span className="font-medium decoration-solid decoration-detailGray underline text-xl">
              +39 392 718 58 63 &#128241;
            </span>
          </li>
          <li>
            <span className="font-medium decoration-solid decoration-detailGray underline text-xl">
              alessio.romano02@gmail.com &#128231;
            </span>
          </li>
          <li>
            <a
              href="https://www.instagram.com/allennnnn_____/"
              className="font-medium"
            >
              <span className=" decoration-solid decoration-detailGray underline text-xl">
                Instagram
              </span>
              &#128247;
            </a>
          </li>
          <li>
            <a href="https://it.linkedin.com/" className="font-medium">
              <span className=" decoration-solid decoration-detailGray underline text-xl">
                Linkedin
              </span>
              &#8599;
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default ContactMe;
