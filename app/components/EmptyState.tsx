import { FolderSearch, Mail, RotateCcw } from "lucide-react";
import { Button } from "./ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "./ui/empty";

export function EmptyContentComponent() {
  return (
    <Empty
      className="
        mx-auto min-h-105 w-full max-w-2xl
        rounded-2xl border border-gray-200
        bg-linear-to-b from-white to-gray-50/80
        px-6 py-12 shadow-sm
      "
    >
      <EmptyHeader className="max-w-md">
        <EmptyMedia
          variant="icon"
          className="
            size-16 rounded-xl
            border border-rose-100
            bg-linear-to-br from-red-50 via-rose-50 to-pink-50
            text-rose-600
            shadow-sm
          "
        >
          <FolderSearch className="size-8" />
        </EmptyMedia>

        <EmptyTitle className="mt-5 text-xl font-semibold tracking-tight text-rose-600">
          No Match found !
        </EmptyTitle>

        <EmptyDescription className="mt-2 text-sm leading-6 text-gray-500">
          We couldn’t find any members matching your search. Try different
          keywords or adjust your filters to find what you’re looking for.
        </EmptyDescription>
      </EmptyHeader>

      <EmptyContent className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <Button
          type="button"
          className=" rounded
            min-w-32 gap-2
            bg-linear-to-r from-blue-600 to-indigo-600
            shadow-sm
            transition-all duration-200
            hover:-translate-y-0.5
            hover:from-blue-700 hover:to-indigo-700
            hover:shadow-md
          "
        >
          <RotateCcw className="size-4" />
          Clear filters
        </Button>

        <Button
          variant="outline"
          className=" rounded
            min-w-32 gap-2 
            border-gray-200 bg-white
            transition-all duration-200
            hover:-translate-y-0.5
            hover:border-blue-200
            hover:bg-blue-50/50
          "
        >
          <a href="mailto:info@jnuits.org.bd" className="flex items-center gap-2">
            <Mail className="size-4 text-blue-600" />
            Contact us
          </a>
        </Button>
      </EmptyContent>
    </Empty>
  );
}
