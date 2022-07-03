import LayoutWrapper from '../components/LayoutWrapper';
import WarningCallout from '../components/WarningCallout';
export default function Flight() {
  return (
    <LayoutWrapper title="Aviation | Andrew Stolzle">
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-4xl tracking-tight mb-1 text-black dark:text-white">
          Aviation
        </h1>
        <p>
          Flying is something I have wanted to do for quite a while. I now have the time to pursue a{' '}
          <a href="https://www.faa.gov/pilots/become/" className='text-indigo-600 underline underline-offset-4 hover:text-indigo-900'>
            private pilot certification
          </a> (PPL) and will be
          keeping a log of tidbits and other useful information on this page.
        </p>
        <WarningCallout
          title='I am not a professional flight instructor or aircraft mechanic.'
          description='Below are some notes and info I have gathered along my journey. Please do
            not take these as a substitute for a real flight instructor or aircraft mechanic.'
        />
        <p>
          Before discussing any details about take-offs or landings, we first need to see how planes are able to get off the ground.
        </p>
        <h2 className="mt-4 mb-0 text-2xl font-semibold tracking-tight text-black md:text-3xl dark:text-white">
          How planes fly
        </h2>
      </div>
    </LayoutWrapper>
  );
}