async function juwel(){
   const response = await fetch("https://juwelrana34.github.io/api/generalMember.json")
   const data = await response.json();
   console.log(data.generalMember)



   document.querySelector(".show").innerHTML=`${data.generalMember.map((profile)=>{
    
     return`
      <div  class="w-10/12 m-2 justify-center items-center mx-auto  ">
      
      <div class="bg-white shadow-xl rounded-lg py-3">
          <div class="photo-wrapper p-2">
              <img class="w-28 h-28 rounded-full mx-auto ring-2 shadow-2xl ring-orange-500" src="https://lh3.google.com/u/0/d/${profile.Image}" alt="${profile.name}">
          </div>
          <div class="p-2 ">
              <h3 class="text-center text-xl text-gray-900 font-medium leading-8 "> ${profile.name}</h3>
              <div class="text-center text-gray-400 text-xs font-semibold">
                  <p class="text-indigo-500">${profile.Id}</p>
              </div>
              <table class="text-xs my-3 font-semibold">
                  <tbody><tr>
                      <td class="px-2 py-2 text-gray-500 font-semibold">Email :</td>
                      <td class="px-2 py-2">${profile.email}</td>
                  </tr>
                  <tr>
                      <td class="px-2 py-2 text-gray-500 font-semibold">Profilehip:</td>
                      <td class="px-2 py-2">${profile.profilehipSatus}</td>
                  </tr>
                  <tr>
                  <td class="px-2 py-2 text-gray-500 font-semibold">Batch:</td>
                  <td class="px-2 py-2">${profile.bloodGroup}</td>
              </tr>
                  
              </tbody></table>
               <hr>
              <div class="text-center my-3">
                  <a class="text-xs text-indigo-500 italic bg-indigo-100 p-2 rounded-md pa hover:underline hover:text-indigo-600 font-medium" href="${profile.facebookLink}">Facebook Profile</a>
              </div>
  
          </div>
      </div>
  </div>
      `
   }).join(' ')}`



}

// juwel()



// search 

const profileCardsContainer = document.getElementById('profileCards');
const searchInput = document.getElementById('searchInput');

// Function to fetch JSON data from the API
async function fetchData() {
  try {
    const response = await fetch('https://juwelrana34.github.io/api/generalMember.json');
    const data = await response.json();
    const profile = data.generalMember;
    return profile;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Function to display profile cards
async function displayProfileCards(){
  const profiles = await fetchData();

  // Function to generate HTML for a profile card
  function generateProfileCard(profile) {
    
    return`
      <div  class="w-10/12 m-2 justify-center items-center mx-auto  ">
      
      <div class="bg-white shadow-xl rounded-lg py-3">
          <div class="photo-wrapper p-2">
              <img class="w-28 h-28 rounded-full mx-auto ring-2 shadow-2xl ring-orange-500" src="https://lh3.google.com/u/0/d/${profile.Image}" alt="${profile.name}">
          </div>
          <div class="p-2 ">
              <h3 class="text-center text-xl text-gray-900 font-medium leading-8 "> ${profile.name}</h3>
              <div class="text-center text-gray-400 text-xs font-semibold">
                  <p class="text-indigo-500">${profile.Id}</p>
              </div>
              <table class="text-xs my-3 font-semibold">
                  <tbody><tr>
                      <td class="px-2 py-2 text-gray-500 font-semibold">Email :</td>
                      <td class="px-2 py-2">${profile.email}</td>
                  </tr>
                  <tr>
                      <td class="px-2 py-2 text-gray-500 font-semibold">membership:</td>
                      <td class="px-2 py-2">${profile.membershipSatus}</td>
                  </tr>
                  <tr>
                  <td class="px-2 py-2 text-gray-500 font-semibold">bloodGroup:</td>
                  <td class="px-2 py-2">${profile.bloodGroup}</td>
              </tr>
                  
              </tbody></table>
               <hr>
              <div class="text-center my-3">
                  <a class="text-xs text-indigo-500 italic bg-indigo-100 p-2 rounded-md pa hover:underline hover:text-indigo-600 font-medium" href="${profile.facebookLink}">Facebook Profile</a>
              </div>
  
          </div>
      </div>
  </div>
      `
      
  }

  // Display all profile cards initially
//   profileCardsContainer.innerHTML = profiles.map(generateProfileCard).join('');

  // Add event listener for search input
  searchInput.addEventListener('input', () => {
    const searchText = searchInput.value.toLowerCase();
    const filteredProfiles = profiles.filter(profile => profile.name.toLowerCase().includes(searchText) || profile.Id.toLowerCase().includes(searchText));
    profileCardsContainer.innerHTML = filteredProfiles.map(generateProfileCard).join('');
  });
}


displayProfileCards();