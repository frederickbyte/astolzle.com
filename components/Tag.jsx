import kebabCase from '../lib/kebabCase'

const RECENT_TAG = 'recent';

const Tag = ({ text }) => {
  if (text === RECENT_TAG) {
    return (
      <div className="flex justify-center items-center my-1 mr-2 font-medium py-1 px-2 bg-white rounded-full text-orange-700 bg-orange-100 border border-orange-300">
        <span className="text-xs font-normal leading-none max-w-full flex-initial">Recently Updated!</span>
      </div>
    );
  }
  return (
    <a href={`/tags/${kebabCase(text)}`} className="flex justify-center items-center my-1 mr-2 font-medium py-1 px-2 bg-white rounded-full text-primary-700 bg-primary-100 border border-primary-300 cursor-pointer hover:text-primary-900 hover:bg-primary-200">
      <span className="text-xs font-normal leading-none max-w-full flex-initial">{text.split(' ').join('-')}</span>
    </a>
  );
}

export default Tag