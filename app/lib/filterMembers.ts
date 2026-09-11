
interface MemberFilterOptions {
 members: any[];
  search: string;
  year: string;
  category: string;
}

export function filterMembers({ members, search, year, category }: MemberFilterOptions) {
  return members.filter((m) => {
    const q = search.trim().toLowerCase();
    const matchesSearch =
      q === "" ||
      m.name.toLowerCase().includes(q) ||
      m.email?.toLowerCase().includes(q) ||
      m.Id?.toLowerCase().includes(q);

    let memberYear = "";
    if (m.Id && typeof m.Id === "string") {
      const parts = m.Id.split("-");
      if (parts.length > 1) {
        memberYear = parts[1].substring(0, 4); 
      }
    }

    const matchesYear = year === "all" || memberYear === year;
    const matchesCategory = category === "all" || m.category === category;

    return matchesSearch && matchesYear && matchesCategory;
  });
}
