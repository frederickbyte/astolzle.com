import Link from 'next/link';
import LayoutWrapper from '../components/LayoutWrapper';

export default function Aws() {
  return (
    <LayoutWrapper title="AWS | Andrew Stolzle">
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-4xl tracking-tight mb-1 text-black dark:text-white">
          Amazon Web Services
        </h1>
        <p>
          AWS is a dynamic collection of tools and services that powers the workflows of companies around the world. Like many others, I am on a journey to learn the many
          services in this <span className='indigo-sriracha'>spaghetti bowl</span> of gadgets that Amazon offers.
        </p>
        <p className='my-4'>
          Major shout-out to <a href='https://www.udemy.com/user/stephane-maarek/' aria-label='Stephane Mareek site' target='_blank' className='text-indigo-600 underline underline-offset-4 hover:text-indigo-900'>Stephane Mareek </a> at Udemy. His courses and practice exams are invaluable if you are planning
          to learn and prepare for the exams. Below is an outline of my <em>brief</em> journey along with some notes and information I have collected along the way.
        </p>
        <ol className="w-full mt-8 border-l-2 border-indigo-600">
          <li>
            <div className="w-full md:flex flex-start">
              <div className="bg-indigo-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" className="text-white w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="w-full block p-6 rounded-lg shadow-lg bg-gray-100 ml-6 mb-10">
                <div className="flex justify-between mb-4">
                  <div className="font-medium text-indigo-600 text-indigo-60 text-sm">CLF-C01 Certification</div>
                  <div className="font-medium text-indigo-600 text-indigo-60 text-sm">Feb. 2022</div>
                </div>
                <p className="text-gray-700 mb-2">Achieved the Certified Cloud Practitioner <a href='https://www.credly.com/badges/278f3eb4-a7ab-4b66-b9a7-d0afc41c34f2/public_url' target='_blank' className='text-indigo-600 underline underline-offset-4 hover:text-indigo-900'>certification</a> in February of 2022</p>
                <p className='text-gray-700'>
                  You can <a href='aws_clf_c01.pdf' aria-label='download AWS notes pdf' className='text-indigo-600 underline underline-offset-4 hover:text-indigo-900'>download</a> ~37 pages of notes I took while preparing for the exam
                </p>

              </div>
            </div>
          </li>
          <li>
            <div className="w-full md:flex flex-start">
              <div className="bg-indigo-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" className="text-white w-3 h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
                </svg>
              </div>
              <div className="w-full block p-6 rounded-lg shadow-lg bg-gray-100 ml-6 mb-10">
                <div className="flex justify-between mb-4">
                  <div className="font-medium text-indigo-600 text-sm">DVA-C01 Certification</div>
                  <div className="font-medium text-indigo-600 text-sm">In Progress</div>
                </div>
                <p className="text-gray-700 mb-1">Currently preparing for the Certified Developer Associate exam</p>
              </div>
            </div>
          </li>
          <li>
            <div className="w-full md:flex flex-start">
              <div className="bg-indigo-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" className="text-white w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
                  <path fill='currentColor' strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"></path>
                </svg>
              </div>
              <div className="w-full block p-6 rounded-lg shadow-lg bg-gray-100 ml-6 mb-10">
                <div className="flex justify-between mb-4">
                  <div className="font-medium text-indigo-600 text-sm">SAA-C02 Certification</div>
                  <div className="font-medium text-indigo-600 text-sm">Future Goal</div>
                </div>
                <p className="text-gray-700 mb-1">Certified Solutions Architect Associate</p>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </LayoutWrapper>
  );
}