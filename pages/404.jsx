import Link from 'next/link';

import LayoutWrapper from '../components/LayoutWrapper';

export default function NotFound() {
  return (
    <LayoutWrapper title="404 | Andrew Stolzle">
      <div className="flex flex-col justify-center items-center max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          404 &bull; Not Found
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          We couldn't find this page. It may have existed at one point, but now it's a goner...
        </p>
        <Link href="/">
          <a className="border border-blue-500 bg-transparent hover:bg-blue-300 text-blue-500 font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded">
            Return Home
          </a>
        </Link>
      </div>
    </LayoutWrapper>
  );
}