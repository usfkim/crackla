import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function SearchFilters() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Filters</h3>
      <div>
        <h4 className="font-semibold mb-2">Category</h4>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="category-1" />
            <Label htmlFor="category-1">Category 1</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="category-2" />
            <Label htmlFor="category-2">Category 2</Label>
          </div>
        </div>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Price Range</h4>
        {/* Add price range filter components here */}
      </div>
    </div>
  );
}
