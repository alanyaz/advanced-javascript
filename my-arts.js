const allimages = document.getElementById("allimages");

async function initialLoad() {
		allimages.innerHTML = "";
		try {
			
			// Fetch information on the Arts API
			const response = await fetch(`https://api.artic.edu/api/v1/artworks`);
			const myArts = await response.json();
			console.log(myArts.data);
			// Create img elements for each image
			myArts.data.forEach(image => {
				const imgElement = document.createElement('img');
				imgElement.src = "https://www.artic.edu/iiif/2/"+image.image_id+"/full/843,/0/default.jpg";
				imgElement.alt = `Art Image`;

				// Append each image to the images
				allimages.appendChild(imgElement);
			});
			
			
  } catch (error) {
    console.error('Error fetching dog breeds:', error);
  }
}

initialLoad();
