import Link from 'next/link';
import cn from 'classnames';

export default function BlogPostCard({ title, description, slug, gradient }) {

  return (
    <Link href={slug}>
      <a
        className={'blocky flex-1'}
      >
        <div className="flex flex-col h-full bg-white dark:bg-gray-900 rounded-lg p-4">
          <div className="flex flex-col md:flex-row justify-between">
            <h4 className={cn("text-lg md:text-lg font-bold mb-6 sm:mb-10 w-full dark:text-gray-100 tracking-tight", gradient)}>
              {title}
            </h4>
          </div>
          <p className="text-gray-600 dark:text-gray-400">{description}</p>
        </div>
      </a>
    </Link>
  );
}
