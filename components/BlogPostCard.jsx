import Link from 'next/link';
import cn from 'classnames';

export default function BlogPostCard({ title, description, slug, gradient }) {

  return (
    <Link href={slug}>
      <a
        className={cn(
          'transform hover:scale-[1.01] hover:shadow-lg transition-all',
          'rounded-xl w-full bg-gradient-to-r p-1',
          gradient
        )}
      >
        <div className="flex flex-col h-full bg-white dark:bg-gray-900 rounded-lg p-4">
          <div className="flex flex-col md:flex-row justify-between">
            <h4 className="text-lg md:text-lg font-medium mb-6 sm:mb-10 w-full text-gray-900 dark:text-gray-100 tracking-tight">
              {title}
            </h4>
          </div>
          <p className="text-gray-600 dark:text-gray-400">{description}</p>
        </div>
      </a>
    </Link>
  );
}