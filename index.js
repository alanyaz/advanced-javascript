// Create a new paragraph element
var newParagraph = document.createElement("p");

// Set the text content of the paragraph
newParagraph.textContent = "Create lasting memories and relive them all in a single, cherished space. [dynamically created]";

// Append the paragraph to the body of the document
document.querySelector("main").appendChild(newParagraph);

// Create a DocumentFragment
var fragment = document.createDocumentFragment();

// Create a template paragraph element
var templateParagraph = document.createElement("p");
templateParagraph.textContent = "This is a templated paragraph.";

// Clone the template and append to the DocumentFragment
for (var i = 0; i < 3; i++) {
	var clonedParagraph = templateParagraph.cloneNode(true);
	fragment.appendChild(clonedParagraph);
}


document.getElementById("subline").innerHTML = "Embark on a journey of rediscovery as you gather and savor a lifetime of precious memories, all conveniently housed in one special haven. Uncover the joy of reliving your cherished moments, seamlessly woven together in a single, treasured space designed just for you.";
document.querySelector("h1").style.color = "green";


// Create a new paragraph element
var newParagraph = document.createElement("p");

// Set the text content of the paragraph
newParagraph.textContent = window.location.href + " " + window.innerWidth + "PX";

// Append the paragraph to the body of the document
document.querySelector("main").appendChild(newParagraph);


const breedSelect = document.getElementById("breedSelect");
const allimages = document.getElementById("allimages");
const API_KEY = "live_hG76nGWhgIThmwDuw4QQ15vRmTP3jy6Y55oNFhodoxDPOdEx8NLkRzV4GvB9KHIU";

async function initialLoad() {
  try {
    // Fetch the list of cat breeds from the cat API
    const response = await fetch('https://api.thedogapi.com/v1/breeds?api_key='+API_KEY);
    const breeds = await response.json();

    // Create options and append them to the breedSelect
    breeds.forEach(breed => {
      const option = document.createElement('option');
      option.value = breed.id;
      option.textContent = breed.name;
      breedSelect.appendChild(option);
    });
  } catch (error) {
    console.error('Error fetching dog breeds:', error);
  }
}

initialLoad();
handleBreedSelection();

breedSelect.addEventListener('change', handleBreedSelection);

async function handleBreedSelection() {
	// Get the selected breed ID from the breedSelect dropdown
	const selectedBreedId = breedSelect.value;
	allimages.innerHTML = "";
  try {
		
    // Fetch information on the selected breed from the dog API
    const response = await fetch(`https://api.thedogapi.com/v1/images/search?breed_ids=${selectedBreedId}&limit=5`);
    const breedImages = await response.json();

    // Create img elements for each image
    breedImages.forEach(image => {
			const imgElement = document.createElement('img');
      imgElement.src = image.url;
      imgElement.alt = `Breed Image`;

      // Append each image to the images
      allimages.appendChild(imgElement);
    });

  } catch (error) {
    console.error('Error fetching breed information:', error);
  }
}
