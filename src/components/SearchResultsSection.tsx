import { useSearchState } from "@yext/search-headless-react";
import { Pagination, VerticalResults } from "@yext/search-ui-react";
import ArticleCard from "./cards/ArticleCard";
import { motion } from "framer-motion";

const SearchResultsSection = () => {
  const lastSearch = useSearchState((state) => state.query.mostRecentSearch);
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto flex w-full flex-col gap-6"
      id="results"
    >
      <VerticalResults
        CardComponent={ArticleCard}
        displayAllOnNoResults={false}
        customCssClasses={{
          verticalResultsContainer:
            "flex flex-col w-full divide-y divide-gray-300",
        }}
      />
      <Pagination
        customCssClasses={{
          paginationContainer: "w-fit rounded-md self-center",
        }}
      />
    </motion.div>
  );
};

export default SearchResultsSection;
