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
  return list;
}
// Get option tag value
function getValue(e) {
  e.preventDefault();
  removeImage();
  const optionValue = document.querySelector('#select-breed').value;
  console.log(optionValue);

}
// Form Eventhandler
const form = document.querySelector('form');
form.addEventListener("submit", getValue);

// API request for random dog image
// getDogImage https://dog.ceo/api/breed/breed/images/random
async function getBreedImage(breedValue) {
  // console.log("Right here", breedValue);
  // URL https://dog.ceo/api/breed/breed/images/random
  try {
    const imageResponse = await axios.get(`https://dog.ceo/api/breed/breed/${breedValue}/images/random`);
    console.log(imageResponse.data.message);
    const imageURL = imageResponse.data.message;
    appendImage(imageURL);
    return imageURL;
  } catch (error) {
    console.error(error);
  }

}

// Create dynamic image tag and append to DOM
function appendImage(imageURL) {
  const imageDiv = document.querySelector('#dog-image');
  console.log(imageSrc);
  const img = document.createElement('img');
  img.src = imageSrc;
  imageDiv.append(image);
}

// Remove previous dog image
function removeImage() {
  const removeImageDiv = document.querySelector('#dog-image');
  while (removeImageDiv.lastChild) {
    removeImageDiv.removeChild(removeImage.lastChild);
  }
}
