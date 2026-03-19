import { FaEye, FaShareAlt, FaBookmark, FaStar } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    title,
    thumbnail_url,
    details,
    total_view,
    rating,
    author,
    tags,
    id
  } = news;

  const formattedDate = new Date(author.published_date).toDateString();

  return (
    <div className="card bg-base-100  shadow-md border rounded-xl">
      {/* Header */}
      <div className="flex items-center justify-between rounded-t-xl bg-base-200 p-4 border-b">
        <div className="flex items-center  gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="font-semibold text-sm">{author.name}</h3>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>

        <div className="flex gap-3 text-gray-500">
          <FaBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <div className="p-4">
        <h2 className="text-lg font-bold leading-snug">{title}</h2>
      </div>

      {/* Image */}
      <figure className="px-4">
        <img
          src={thumbnail_url}
          alt="news"
          className="rounded-xl w-full h-82 object-cover"
        />
      </figure>

      {/* Details */}
      <div className="p-4 text-sm text-gray-600">
        <p>
          {details.slice(0, 150)}...
          <Link to={`/news-details/${id}`} className="text-orange-500 font-semibold cursor-pointer ml-1">
            Read More
          </Link>
        </p>

        {/* Tags */}
        <div className="mt-2 text-xs text-gray-400">
          {tags.map((tag, i) => (
            <span key={i} className="mr-2">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 py-3 border-t">
        {/* Rating */}
        <div className="flex items-center gap-1 text-orange-400">
          {[...Array(Math.round(rating.number))].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="text-gray-600 ml-2">{rating.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-2 text-gray-500">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;