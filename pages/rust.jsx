import LayoutWrapper from '../components/LayoutWrapper';

export default function Rust() {
  return (
    <LayoutWrapper title="Rust | Andrew Stolzle">
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-4xl tracking-tight mb-1 text-black dark:text-white">
          Rust Programming Language
        </h1>
        <div className="bg-indigo-100 rounded-lg py-4 px-5 mt-2 mb-4 text-base text-indigo-700 inline-flex items-center w-full" role="alert">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="info-circle" className="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor" d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path>
          </svg>
          I'll update this page with more information once I start digging into Rust.
        </div>
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
          <p className='my-1'>Soon I'll begin my journey into Rust as it has been on my radar for some time. Here are two promising resources I'll be using:</p>
          <div className='flex items-center flex-wrap mt-2 mb-3'>
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <a href='https://www.rustforjs.dev/' aria-label='Rust for JavaScript Developers website' target='_blank' className='text-indigo-600 underline underline-offset-4 hover:text-indigo-900 mr-1'>Rust for JavaScript Developers</a> online course by Sid Chatterjee
          </div>
          <div className='flex items-center'>
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <a href='https://www.oreilly.com/library/view/programming-rust-2nd/9781492052586/' aria-label='Programming Rust book website' target='_blank' className='text-indigo-600 underline underline-offset-4 hover:text-indigo-900 mr-1'>Programming Rust</a> book from O'Reilly
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
}
