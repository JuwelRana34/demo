
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { YearFilter } from "~/components/YearFilter";
import { MemberCard } from "~/components/MemberCard";
import { MemberSearch } from "~/components/SearchBar";
import { filterMembers } from "~/lib/filterMembers";
import { getMembers } from "~/lib/getMembers";
import type { Route } from "./+types/memberDirectory";
import { EmptyContentComponent } from "~/components/EmptyState";

export async function loader({}: Route.LoaderArgs) {
  const data = await getMembers();
  return data;
}

export default function MemberDirectory({ loaderData }: Route.ComponentProps) {
  let members = loaderData.generalMember;
  const years = ["2022", "2023", "2024", "2025","2026","2027"];

  const [searchParams, setSearchParams] = useSearchParams();

  const year = searchParams.get("year") ?? "all";
  const category = searchParams.get("category") ?? "all";

  const [localSearch, setLocalSearch] = useState(searchParams.get("q") ?? "");

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchParams((prev) => {
        if (localSearch) {
          prev.set("q", localSearch);
        } else {
          prev.delete("q");
        }
        return prev;
      });
    }, 300);

    return () => clearTimeout(handler);
  }, [localSearch, setSearchParams]);

  const filtered = filterMembers({
    members,
    search: localSearch,
    year,
    category,
  });

  return (
    <main className="min-h-screen bg-gray-50 pb-12">
      {/* 🌟 টপ ব্যানার সেকশন */}
      <div className="relative w-full">
      
        <div className="absolute inset-0 z-0 w-full h-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 250"
            className="w-full h-full object-cover object-top"
            preserveAspectRatio="none"
          >
            <g mask="url(#SvgjsMask1060)" fill="none">
              <rect width="1440" height="250" x="0" y="0" fill="#1e3266"></rect>
              <path
                d="M1536 250L0 250 L0 143.01Q46.05 69.06, 120 115.1Q149.36 72.45, 192 101.81Q249.19 87, 264 144.18Q286.94 95.12, 336 118.05Q379.48 89.53, 408 133.01Q454.52 59.53, 528 106.05Q571.08 77.13, 600 120.2Q642.1 90.29, 672 132.39Q720.1 60.48, 792 108.58Q857.67 54.25, 912 119.92Q977.52 65.44, 1032 130.96Q1078.85 57.81, 1152 104.66Q1207.39 88.05, 1224 143.45Q1246.95 94.41, 1296 117.36Q1362.17 63.53, 1416 129.7Q1483.9 77.6, 1536 145.51z"
                fill="#182f5d"
              ></path>
              <path
                d="M1488 250L0 250 L0 172.2Q22.32 122.52, 72 144.85Q153.56 106.41, 192 187.96Q219.75 143.71, 264 171.46Q314.72 102.18, 384 152.9Q461.12 110.02, 504 187.14Q556.1 119.24, 624 171.34Q674.98 102.32, 744 153.3Q794.42 131.72, 816 182.14Q846.03 140.17, 888 170.2Q913.15 123.35, 960 148.5Q1001.36 117.86, 1032 159.22Q1080.45 87.67, 1152 136.12Q1229.19 93.31, 1272 170.5Q1297.42 123.93, 1344 149.35Q1396.44 129.79, 1416 182.23Q1441.62 135.84, 1488 161.46z"
                fill="#25467d"
              ></path>
              <path
                d="M1536 250L0 250 L0 177.33Q42.19 147.53, 72 189.72Q139.81 137.53, 192 205.34Q236.31 129.65, 312 173.96Q394.04 136, 432 218.05Q460.61 174.66, 504 203.27Q549.63 128.9, 624 174.53Q667.1 145.63, 696 188.73Q743.5 164.22, 768 211.72Q798.26 169.98, 840 200.24Q910.84 151.08, 960 221.92Q996.75 138.67, 1080 175.42Q1123.03 146.44, 1152 189.47Q1196.54 162, 1224 206.54Q1269.77 132.31, 1344 178.08Q1400.61 162.69, 1416 219.3Q1463.19 146.49, 1536 193.68z"
                fill="#356cb1"
              ></path>
              <path
                d="M1512 250L0 250 L0 255.03Q61.39 196.42, 120 257.81Q159.33 177.14, 240 216.48Q288.32 192.8, 312 241.12Q355.48 212.6, 384 256.08Q400.89 200.97, 456 217.86Q497.7 187.56, 528 229.27Q578.11 207.38, 600 257.49Q654.68 192.17, 720 246.85Q772.58 179.43, 840 232.01Q889.52 209.53, 912 259.06Q939.67 214.73, 984 242.4Q1036.39 174.79, 1104 227.18Q1158.83 210, 1176 264.83Q1205.86 222.69, 1248 252.55Q1264.11 196.66, 1320 212.77Q1391.67 164.44, 1440 236.11Q1470.16 194.27, 1512 224.43z"
                fill="#f9fafb"
              ></path>
            </g>
            <defs>
              <mask id="SvgjsMask1060">
                <rect width="1440" height="250" fill="#ffffff"></rect>
              </mask>
            </defs>
          </svg>
        </div>


        <div className="relative z-10 flex flex-col items-center justify-center pt-20 pb-32 px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white pb-2 drop-shadow-md">
            Member Directory
          </h1>
          <p className="text-blue-100 mt-2 max-w-xl text-sm md:text-base opacity-90 drop-shadow">
            Find and connect with our community members. Search by name, email,
            or student ID.
          </p>
        </div>
      </div>

      {/* ফিল্টার এবং সার্চ বার (ওয়েভের একটু ওপর দিয়ে ওভারল্যাপ করা হয়েছে) */}
      <div className="flex flex-col sm:flex-row items-center gap-4 justify-center -mt-16 relative z-20 px-4 ">
        <div className="bg-linear-to-tr from-white-100 to-blue-300 p-3 px-5 rounded-2xl shadow-xl  justify-between flex flex-col sm:flex-row gap-4 w-full max-w-5xl">
          <YearFilter
            value={year}
            onChange={(val) =>
              setSearchParams((prev) => {
                if (val === "all") {
                  prev.delete("year");
                } else {
                  prev.set("year", val);
                }
                return prev;
              })
            }
            years={years}
          />

          <MemberSearch
            value={localSearch}
            onChange={(val) => setLocalSearch(val)}
          />
        </div>
      </div>

      {/* মেম্বার কার্ড লিস্ট */}
      <div
        className={`flex items-center justify-center ${filtered.length === 0 ? "" : "pt-12"}`}
      >
        <div
          className={` ${filtered.length === 0 ? "flex items-center justify-center mt-10" : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"} p-5 max-w-7xl mx-auto w-full`}
        >
          {filtered.length === 0 ? (
            <EmptyContentComponent />
          ) : (
            filtered.map((profile: any) => (
              <MemberCard key={profile.Id} profile={profile} />
            ))
          )}
        </div>
      </div>
    </main>
  );
}