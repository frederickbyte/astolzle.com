const Bio = () => {
  return (
    <div className="flex flex-col sm:flex-row items-start">
      <div className="flex flex-col pr-8">
        <h1 className="font-semibold text-3xl md:text-5xl tracking-tight mb-1 text-gray-800 dark:text-white">
          Andrew Stolzle
        </h1>
        <p className="my-3 text-gray-600 dark:text-gray-400">
          Welcome in! I'm Andrew, a developer with experience creating primarily web and mobile applications. I program full-time and also enjoy
          writing as it helps me to organize my ideas and to think more clearly.
        </p>
      </div>
    </div>
  );
};

export default Bio;