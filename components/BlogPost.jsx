import Link from 'next/link';
import { parseISO, format } from 'date-fns';

export default function BlogPost({
  title,
  publishedAt,
  summary,
  slug
}) {

  return (
    <Link href={`/blog/${slug}`}>
      <a className="w-full transform hover:scale-[1.01] transition-all mb-2">
        <div className="w-full mb-6">
          <div className="flex flex-col justify-between md:flex-row">
            <h4 className="mb-1 text-lg font-medium text-gray-900 md:text-xl dark:text-gray-100 hover:underline hover:underline-offset-4">
              {title}
            </h4>
            <div>{format(parseISO(publishedAt), 'MMM dd, yyyy')}</div>
          </div>
          <p className="mt-0 text-gray-600 dark:text-gray-400">{summary}</p>
        </div>
      </a>
    </Link>
  );
}
