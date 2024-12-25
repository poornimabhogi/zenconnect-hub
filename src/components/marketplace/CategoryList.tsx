import { Button } from "@/components/ui/button";

interface CategoryListProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategoryList = ({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryListProps) => {
  return (
    <div className="flex gap-2 pb-2">
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory.toLowerCase() === category.toLowerCase() ? "default" : "outline"}
          className="whitespace-nowrap"
          onClick={() => onSelectCategory(category.toLowerCase())}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryList;