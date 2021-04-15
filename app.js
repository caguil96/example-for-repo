// Add HTML connect all files
// Completed 

// Create dynamic dropdown menu from GET all dogs
// https://dog.ceo/api/breeds/list/all

const getOptions = async () => {
  const url = https://dog.ceo/api/breeds/list/all
  try {
    const response = await axios.get(url);
    // console.log(response.data.message);
    let breedList = Object.keys(response.data.message);
    // console.log(breedList);
    setOptions(breedList);
  } catch (error) {
    console.error(error);

  }
  const response = await axios.get(url);
}
getOptions

// Create the form option tags

function setOptions(list) {
  // Creates dynamic HTML
  console.log(list);
  const selectTag = document.querySelector('#select-breed');
  list.forEach((breed) => {
    // we should each breed as opposed to the array of breed
    console.log(breed);
    const optionTag = document.createElement('option');
    optionTag.textContent = breed;
    optionTag.value = breed;
    selectTag.append(optionTag);
  })
}

// Get option tag value


// Form Eventhandler


// API request for random dog image


// Create dynamic image tag and append to DOM


// Remove previous dog image

