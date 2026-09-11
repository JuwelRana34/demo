import { CalendarDays } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

type YearFilterProps = {
  value: string;
  onChange: (value: string) => void;
  years: string[];
};

export function YearFilter({ value, onChange, years }: YearFilterProps) {
  return (
    <div className="flex items-center gap-2 border-blue-300 border rounded-md px-3 py-2 backdrop-blur-xl bg-white/30 shadow-md">
      <CalendarDays className="size-4 text-gray-900" />
      <label htmlFor="year-select" className="text-sm text-gray-900">
        Select Year:
      </label>
      <Select
        value={value}
        onValueChange={(value) => {
          if (value !== null) {
            onChange(value);
          }
        }}
      >
        <SelectTrigger className="w-37.5">
          <SelectValue placeholder="Select year" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="all">All Years</SelectItem>

          {years.map((year) => (
            <SelectItem key={year} value={year}>
              {year}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
