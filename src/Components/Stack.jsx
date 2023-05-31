import BallCanvas from "./Canvas/BallCanvas";
import tech from "../data/technologies";

function Stack() {
  return (
    <div className="mb-20">
      <div className="w-2/3 md:w-1/4 mx-auto mb-8 flex-col">
        <h1 className="text-3xl font-medium decoration-detailGray decoration-solid underline mb-2">
          Stack
        </h1>
        <p className="mb-2">
          &nbsp; Technologies i'm confident with &#128187;.
        </p>
      </div>
      <div className="w-2/3 md:w-1/2 m-auto">
        <div className="flex flex-row flex-wrap justify-center gap-10">
          {tech.map((technology) => (
            <div className="w-12 md:w-28 h-12 md:h-28" key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stack;
