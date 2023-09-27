import { useSearchState } from "@yext/search-headless-react";
import { Pagination, VerticalResults } from "@yext/search-ui-react"
import ArticleCard from "./cards/ArticleCard";

const SearchResultsSection = () => {
    const lastSearch = useSearchState((state) => state.query.mostRecentSearch);
  return (
     <div className="flex flex-col gap-6">
            {lastSearch && <h2 className="text-2xl my-0">
              Sources:
            </h2>}
          <VerticalResults
            CardComponent={ArticleCard}
            displayAllOnNoResults={false}
            customCssClasses={{verticalResultsContainer: "flex flex-col gap-6"}}
          />
          <Pagination customCssClasses={{paginationContainer: "bg-white w-fit rounded-md self-center"}} />
          </div>
  )
}

export default SearchResultsSection