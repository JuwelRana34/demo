import { BadgeCheck, Check, Copy, Droplets, Mail } from "lucide-react";
import { useState } from "react";
import { Card, CardContent } from "./ui/card";

export const MemberCard = ({ profile }: { profile: any }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyId = async () => {
    await navigator.clipboard.writeText(String(profile.Id));

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };
  return (
    <Card className="group p-0 w-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl relative">
      {/* Top Right Decorative Circle */}
      <div
        className="
    pointer-events-none
    absolute
    -right-12
    -top-12
    h-32
    w-32
    rounded-full
    bg-linear-to-br
    from-blue-400
    via-indigo-500
    to-violet-500
    opacity-[0.12]
    transition-all
    duration-500
    group-hover:scale-125
    group-hover:opacity-[0.20]
  "
      />

      {/* Top Accent */}
      <div className="h-2 bg-linear-to-r from-blue-600 via-indigo-500 to-purple-500" />

      <CardContent className="p-6">
        {/* Profile */}
        <div className="flex flex-col items-center text-center">
          <div
            className="rounded-full bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-size-[200%_200%] p-0.75  animate-[gradientMove_4s_ease_infinite]
  "
          >
            <div className="rounded-full bg-white p-0.75">
              <img
                src={`https://lh3.googleusercontent.com/d/${profile.Image}`}
                alt={profile.name}
                referrerPolicy="no-referrer"
                className="h-28 w-28 rounded-full object-cover"
              />
            </div>
          </div>

          <h3
            className="
    mt-4 max-w-full truncate
    text-lg font-bold
    bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600
    bg-clip-text text-transparent
    transition-transform duration-300
    group-hover:scale-[1.02]
  "
          >
            {profile.name}
          </h3>

          <div className="mt-1 text-sm font-medium text-blue-600 flex items-center justify-center gap-3">
            <img
              src="https://cdn-icons-png.flaticon.com/128/740/740554.png"
              alt="ID icon"
              className="h-7 w-7"
            />
            <p> ID: {profile.Id}</p>
            <button
              type="button"
              onClick={handleCopyId}
              aria-label="Copy member ID"
              className="
      inline-flex h-7 w-7 items-center justify-center
      rounded-md
      text-gray-400
      transition-all duration-200
      hover:bg-blue-50
      hover:text-blue-600
      active:scale-90
    "
            >
              {copied ? (
                <Check className="h-4 w-4 text-green-600" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="my-5 h-px bg-gray-100" />

        {/* Information */}
        <div className="grid grid-cols-2 gap-3">
          {/* Membership */}
          <div className="rounded-lg bg-emerald-50 p-3">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
              Membership
            </p>

            <div className="mt-1 flex items-center gap-1.5">
              <BadgeCheck className="h-7 w-7 text-green-600" />

              <p className=" text-sm font-semibold text-gray-800">
                {profile.membershipSatus}
              </p>
            </div>
          </div>

          {/* Blood Group */}
          <div className="rounded-lg bg-rose-50 p-3">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
              Blood Group
            </p>

            <div className="mt-1 flex items-center gap-1.5">
              <Droplets className="h-4 w-4 text-red-500" />

              <p className="text-sm font-semibold text-red-800">
                {profile.bloodGroup}
              </p>
            </div>
          </div>
        </div>

        {/* Social Actions */}
        <div className="mt-5 flex justify-center gap-3">
          <a
            href={profile.facebookLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${profile.name}'s Facebook`}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/3955/3955011.png"
              alt="facebook-icon"
              className="h-5 w-5"
            />
          </a>

          <a
            href={`mailto:${profile.email}`}
            aria-label={`Email ${profile.name}`}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-200 hover:bg-indigo-50"
          >
            <Mail className="h-5 w-5 text-indigo-600" />
          </a>
        </div>
      </CardContent>
    </Card>
  );
};
