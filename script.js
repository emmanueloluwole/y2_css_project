(function() {
	document.getElementById('getDefinition').addEventListener(
		"click", wordDefinition, false
	)
	document.getElementById('getSynonym').addEventListener(
		"click", wordSynonmys, false
	)
}())


 async function wordDefinition() {
	// Get the word from the input field
	const word = document.getElementById("word").value;

	if (word === "") {
		alert("Please enter a word.");
		return;
	}
	const url = `https://wordsapiv1.p.rapidapi.com/words/${word}/definitions`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'd746de33ffmsh777803cae2e8a48p1fad7ejsnaf7322c99408',
		'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com'
	}
};

const response = await fetch(url, options)
const result = await response.json();

	try {
		const div = document.getElementById("definition");
		div.innerHTML = '';
		
		// Display the definition
		// result.definitions.forEach(definition => {
		// 	const p = document.createElement('p');
		// 	p.innerHTML = `<strong>Definition:</strong> ${definition.definition}`;
		// 	div.append(p);
		// 	});
		
			
		for (let i = 0; i < result.definitions.length; i++) {
			const p = document.createElement('p');
			p.innerHTML = `<strong>Definition:</strong> ${result.definitions[i].definition}`;
			div.append(p);
		}
		console.log(result);

	}
		

	catch(error) {
		document.getElementById("definition").innerHTML = "Error fetching the definition.";
		console.error('Error:', error);
	};
}

async function wordSynonmys(){
	const word = document.getElementById("word").value;
	if (word === "") {
		alert("Please enter a word.");
		return;
	}
	const url = `https://wordsapiv1.p.rapidapi.com/words/${word}/synonyms`;
	const options = {
		method: 'GET',
		headers: {
			'x-rapidapi-key': 'd746de33ffmsh777803cae2e8a48p1fad7ejsnaf7322c99408',
			'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com'
		}
	};
	
	try {
		const response = await fetch(url, options);
		const result = await response.json();

		const div = document.getElementById("synonyms");
		div.innerHTML = '';

		// Display the definition
		
		// result.synonyms.forEach(synonym => {
		// 	const p = document.createElement('p');
		// 	p.innerHTML = `<strong>Synonym:</strong> ${synonym}`;
		// 	div.append(p);
		// });

		for (let i = 0; i < result.synonyms.length; i++) {
			const p = document.createElement('p');
			p.innerHTML = `<strong>Synonym:</strong> ${result.synonyms[i]}`;
			div.append(p);
		}
	
		console.log(result);
	
		
	

	} catch (error) {
		document.getElementById("definition").innerHTML = "Error fetching the synonmy.";
				console.error('Error:', error);
	}
}

