import InfoCallout from '../components/InfoCallout';
import LayoutWrapper from '../components/LayoutWrapper';

export default function Rust() {
  return (
    <LayoutWrapper title="Rust | Andrew Stolzle">
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-4xl tracking-tight mb-1 text-black dark:text-white">
          Rust Programming Language
        </h1>
        <InfoCallout
          title='Rust is on hold... for now'
          description='I will be digging into Rust in the future. Stay tuned!'/>
        <p>
          <a href='https://www.rust-lang.org/' target='_blank' className='text-indigo-600 underline underline-offset-4 hover:text-indigo-900'>Rust</a> continues to grow within the development community.
          Rust has no runtime or garbage collection, and claims to be "blazingly fast and memory-efficient."
          In essence, Rust aims to improve on the C/C++ languages by providing developers with <em>low-level memory access while ensuring memory saftey</em>.
        </p>
        <p className='mt-4'>
          Like C++, Rust follows the the <em>Zero-Overhead Principle</em>:
        </p>
        <ol className="list-decimal mt-4 ml-6">
          <li>
            You don't pay for what you don't use.
          </li>
          <li>
            What you do use is just as efficient as what you could reasonably write by hand.
          </li>
        </ol>
        <div className='flex flex-col mt-4'>
          Rust is, quite honestly, a bit intimidating from a syntactic perspective because it seems to have taken inspiration from multiple languages.
          But the community is welcoming and helpful for novices like myself.
          <p className='my-1'>I'll soon begin my journey into Rust as it has been on my radar for some time. I'll drop info, notes, and other cool resources I come across along the way. Two resources I will certainly be using are:</p>
          <div className='flex items-center flex-wrap mt-2 mb-3'>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <a href='https://www.rustforjs.dev/' aria-label='Rust for JavaScript Developers website' target='_blank' className='text-indigo-600 underline underline-offset-4 hover:text-indigo-900 mr-1'>Rust for JavaScript Developers</a> online course by Sid Chatterjee
          </div>
          <div className='flex items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <a href='https://www.oreilly.com/library/view/programming-rust-2nd/9781492052586/' aria-label='Programming Rust book website' target='_blank' className='text-indigo-600 underline underline-offset-4 hover:text-indigo-900 mr-1'>Programming Rust</a> book from O'Reilly
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
}
