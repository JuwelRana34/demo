import { Search, X } from "lucide-react";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

type MemberSearchProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export function MemberSearch({
  value,
  onChange,
  placeholder = "Search members by name,email and ID ...",
}: MemberSearchProps) {
  return (
    <div className="relative w-full max-w-xl flex items-center ">
      <Search
        className="
          pointer-events-none
          absolute left-3 top-1/2
          size-4
          -translate-y-1/2
          text-gray-500
           z-50
        "
      />

      <Input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="
          h-11
          w-full
          rounded
          backdrop-blur-xl 
          bg-white/30
          pl-10
          pr-10
          text-sm
          shadow-sm
          transition-all
          duration-200
          placeholder:text-gray-400
          focus:border-blue-500
          focus:ring-2
          focus:ring-blue-500/10
        "
      />

      {value && (
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={() => onChange("")}
          className="
            absolute
            right-1.5
            top-1/2
            size-8
            -translate-y-1/2
            rounded-lg
            text-gray-400
            hover:bg-gray-100
            hover:text-gray-700
          "
          aria-label="Clear search"
        >
          <X className="size-4" />
        </Button>
      )}
    </div>
  );
}
