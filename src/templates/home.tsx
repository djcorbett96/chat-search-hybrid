import "../index.css";
import {
  GetHeadConfig,
  GetPath,
  HeadConfig,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import {
  SearchHeadlessProvider,
  provideHeadless,
  HeadlessConfig,
  useSearchState,
} from "@yext/search-headless-react";
import {
  SearchBar,
} from "@yext/search-ui-react";
import SearchResultsSection from "../components/SearchResultsSection";
import AiResultSection from "../components/AiResultSection";

export const getPath: GetPath<TemplateProps> = () => {
  return "home";
};

export const getHeadConfig: GetHeadConfig<
  TemplateRenderProps
> = (): HeadConfig => {
  return {
    title: "Search & Chat",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

const config: HeadlessConfig = {
  apiKey: "b083465ee2ad3d23460e150c6a297f7f",
  experienceKey: "dj-master",
  locale: "en",
  verticalKey: "help_articles",
};
const searcher = provideHeadless(config);

export default function Home({ document }: TemplateProps) {
  const { _site } = document;
  return (
    <SearchHeadlessProvider searcher={searcher}>
       <div className="min-h-screen w-full bg-slate-200">
        <div className="mx-auto flex flex-col gap-6 py-10 prose">
          <SearchBar />
          <AiResultSection />
          <SearchResultsSection />
        </div>
        </div>
    </SearchHeadlessProvider>
  );
}
