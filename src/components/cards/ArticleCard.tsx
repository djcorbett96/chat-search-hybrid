import { CardComponent, CardProps } from "@yext/search-ui-react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const ArticleCard: CardComponent = ({ result }: CardProps): JSX.Element => {
  const article = result.rawData;
  const markdown = `${
    result.rawData.s_snippet ||
    result.rawData.shortDescription ||
    result.rawData.body
  }`;

  return (
    <a href={article.landingPageUrl}>
      <div className="group flex w-full flex-col gap-3 py-6">
        <p className="text-sm text-gray-600">{article.landingPageUrl}</p>
        <h4 className="text-xl font-bold group-hover:underline">
          {article.name}
        </h4>
        {/* <div className="text line-clamp-2">{article.s_snippet}</div> */}
        <ReactMarkdown className="line-clamp-2 text-sm text-gray-600">
          {markdown}
        </ReactMarkdown>
      </div>
    </a>
  );
};

export default ArticleCard;
