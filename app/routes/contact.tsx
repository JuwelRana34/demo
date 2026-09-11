import { getMembers } from "~/lib/getMembers";
import type { Route } from "./+types/contact";
import { MemberCard } from "~/components/MemberCard";

export async function loader({}: Route.LoaderArgs) {
  const data = await getMembers();
  return data;
}


export default function Contact({ loaderData }: Route.ComponentProps) {
  return (
    <div className="flex items-center justify-center pt-16 pb-4 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5">
        {loaderData.generalMember.map((profile: any) => (
          <MemberCard key={profile.Id} profile={profile} />
        ))}
      </div>
    </div>
  );
}
