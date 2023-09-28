import { useSearchState } from "@yext/search-headless-react";
import { cn } from "../utils/cn";

const AiResultSection = () => {
  const lastSearch = useSearchState((state) => state.query.mostRecentSearch);
  return (
    <div
      className={cn(
        "flex flex-col gap-6 rounded-lg border p-4",
        !lastSearch && "hidden"
      )}
    >
      <>
        <h3 className="my-0">AI Generated Answer:</h3>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
          incidunt, ipsa officia sit a eveniet nostrum architecto minus culpa
          commodi consectetur, quas, nam labore rerum obcaecati? Quos maiores
          sapiente enim.
        </div>
      </>
    </div>
  );
};

export default AiResultSection;
