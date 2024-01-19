const momentTitleselectByID = document.getElementById("momentTitle");
const momentDateselectBySelector = document.querySelector("#momentDate");

// Get the parent element
var parentElement = document.getElementById("momenttable");

// Access the first child of the parent
var firstChild = parentElement.firstChild;

var tableData = document.querySelectorAll("td");

// Iterate over the collection and change the background color
tableData.forEach(function(td) {
	td.classList.add("highlight");
});



// Get the button and the target element
var button = document.getElementById("uploadButton");

// Add a click event listener to the button
button.addEventListener("click", function() {
	// Modify the background color attribute of the target element
	button.style.backgroundColor = "lightblue";
});

// Register the mouseover event listener
button.addEventListener("mouseover", handleMouseOver);

// Event handler function for the mouseover event
function handleMouseOver() {
	button.style.backgroundColor = "lightgreen";
}



var form = document.getElementById("momentform");
 // Form submission event
form.addEventListener("submit", function (event) {
	// Check if the form is valid before submitting
	if (!form.checkValidity()) {
		// Prevent the default form submission if validation fails
		event.preventDefault();
		// Display a generic error message
		alert("Please fill in the required fields correctly.");
	}
});
const catimages = document.getElementById("catimages");
async function handleBreedSelection() {
	catimages.innerHTML = "";
  try {
		
    // Fetch information on the breed Id 5 from the cat API
    const response = await fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=acur&limit=5`);
    const breedImages = await response.json();

    // Create img elements for each image
    breedImages.forEach(image => {
			const imgElement = document.createElement('img');
      imgElement.src = image.url;
      imgElement.alt = `Breed Image`;

      // Append each image to the images
      catimages.appendChild(imgElement);
    });

  } catch (error) {
    console.error('Error fetching breed information:', error);
  }
}

handleBreedSelection();
