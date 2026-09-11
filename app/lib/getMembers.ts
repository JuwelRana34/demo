// ক্যাশ ধরে রাখার জন্য গ্লোবাল ভেরিয়েবল (ফাংশনের বাইরে রাখতে হবে)
let cachedData: any = null;
let cacheTimestamp: number = 0;

// ক্যাশের মেয়াদ (এখানে ৫ মিনিট সেট করা হয়েছে। 5 * 60 * 1000 মিলিসেকেন্ড)
const CACHE_DURATION = 5 * 60 * 1000;

export async function getMembers() {
  const now = Date.now();

  // ১. চেক করুন ক্যাশে ডাটা আছে কি না এবং ক্যাশের মেয়াদ আছে কি না
  if (cachedData && now - cacheTimestamp < CACHE_DURATION) {
    console.log("Serving members from Cache..."); // ডিবাগ করার জন্য (পরে মুছে দিতে পারেন)
    return cachedData;
  }

  const api = process.env.api;

  if (!api) {
    throw new Error("API URL is not configured");
  }

  const response = await fetch(api);

  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }

  const data = await response.json();
  
  // ১. চেক করুন ক্যাশে ডাটা আছে কি না এবং ক্যাশের মেয়াদ আছে কি না
  if (cachedData && now - cacheTimestamp < CACHE_DURATION) {
    console.log("Serving members from Cache..."); // ডিবাগ করার জন্য (পরে মুছে দিতে পারেন)
    return cachedData;
  }

  return data;
}
