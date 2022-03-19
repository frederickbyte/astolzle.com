import Link from 'next/link';
import Head from 'next/head';
import Footer from './Footer'
import MobileNav from './MobileNav'
import { useRouter } from 'next/router';
import headerNavLinks from '../data/headerNavLinks'
import cn from 'classnames';

function NavItem({ href, text }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link href={href}>
      <a
        className={cn(
          isActive
            ? 'font-semibold underline underline-offset-4 text-gray-800 dark:text-gray-200'
            : 'font-normal text-gray-600 dark:text-gray-400',
          'hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all'
        )}
      >
        <span className="capsize">{text}</span>
      </a>
    </Link>
  );
}

const LayoutWrapper = (props) => {
  const router = useRouter();

  const { children, ...customMeta } = props;
  const meta = {
    title: 'Andrew Stolzle',
    author: 'Andrew Stolzle',
    headerTitle: 'Andrew Stolzle',
    description: 'Articles and code from Andrew Stolzle',
    language: 'en-us',
    siteUrl: 'https://www.astolzle.com',
    siteRepo: 'https://github.com/frederickbyte/astolzle.com',
    siteLogo: '/static/favicons/favicon.ico',
    image: '/static/favicons/android-chrome-192x192.png',
    email: 'andrewstolzle@gmail.com',
    github: 'https://github.com/frederickbyte',
    linkedin: 'https://www.linkedin.com/in/frederick-stolzle',
    locale: 'en-US',
    ...customMeta
  }

  return (
    <div className="flex flex-1 flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://astolzle.com${router.asPath}`} />
        <link rel="canonical" href={`https://astolzle.com${router.asPath}`} />
        <link rel="icon" type="image/x-icon" href="/static/favicons/favicon.ico" />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
      </Head>
      <nav className="flex items-center justify-between w-full relative max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pt-8 pb-8 sm:pb-16  text-gray-900 bg-gray-50  dark:bg-gray-900 bg-opacity-60 dark:text-gray-100">
        <a href="#skip" className="skip-nav">
          Skip to content
        </a>
        <div className="ml-[-0.60rem]">
          <MobileNav />
          {
            headerNavLinks.map((hnl, index) => {
              return <NavItem key={index} href={hnl.href} text={hnl.title} />;
            })
          }
        </div>
      </nav>
      <main
        id="skip"
        className="flex flex-1 flex-col px-8 bg-gray-50 dark:bg-gray-900"
      >
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default LayoutWrapper;
