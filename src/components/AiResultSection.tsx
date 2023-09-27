import { useSearchState } from "@yext/search-headless-react";

const AiResultSection = () => {
    const lastSearch = useSearchState((state) => state.query.mostRecentSearch);
  return (
    <div className="flex flex-col gap-6 bg-white border border-slate-300 rounded-lg p-4">
            {lastSearch && <><h2 className="text-2xl my-0">
              Generated Answer:
            </h2>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos incidunt, ipsa officia sit a eveniet nostrum architecto minus culpa commodi consectetur, quas, nam labore rerum obcaecati? Quos maiores sapiente enim.</div></>}
          </div>
  )
}

export default AiResultSection