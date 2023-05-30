import timeStamps from "./../data/timeline";

function Timeline() {
  return (
    <div className="w-1/4 m-auto mb-20">
      <h1 className="text-3xl font-medium decoration-detailGray decoration-solid underline mb-2">
        Timeline
      </h1>
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {timeStamps.map((timeStamp) => (
          <div key={timeStamp.name}>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {timeStamp.date}
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {timeStamp.name}
              </h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                {timeStamp.description}
              </p>
            </li>
          </div>
        ))}
      </ol>
    </div>
  );
}
export default Timeline;
