
import { CardComponent, CardProps } from "@yext/search-ui-react";

const ArticleCard: CardComponent = ({
  result,
}: CardProps): JSX.Element => {
  const article = result.rawData;

  return (
    <div className="bg-white p-4 rounded-lg flex flex-col gap-2">
        <div className="text-lg font-bold">{article.name}</div>
        <div className="text line-clamp-4">{article.body}</div>
    </div>
  );
};

export default ArticleCard;