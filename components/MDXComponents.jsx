import Link from 'next/link';
import Image from 'next/image';
import ProsCard from 'components/ProsCard';
import ConsCard from 'components/ConsCard';
import Counter from 'components/Counter';

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}>{props.children}</a>
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const MDXComponents = {
  Image,
  a: CustomLink,
  ConsCard,
  ProsCard,
  Counter
};

export default MDXComponents;