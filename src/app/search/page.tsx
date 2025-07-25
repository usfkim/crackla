import SearchBar from "@/components/search/SearchBar";
import SearchResults from "@/components/search/SearchResults";
import SearchFilters from "@/components/search/SearchFilters";

export default function SearchPage() {
  return (
    <div>
      <SearchBar />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <SearchFilters />
        </div>
        <div className="md:col-span-3">
          <SearchResults />
        </div>
      </div>
    </div>
  );
}
