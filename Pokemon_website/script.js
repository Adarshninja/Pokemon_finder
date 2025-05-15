function getPokemon() {
    const pokemonId = document.getElementById('pokemon-id').value;
    const resultDiv = document.getElementById('result');

    // Check if input is valid or not
    if (pokemonId < 1 || pokemonId > 100 || !pokemonId) {
        resultDiv.innerHTML = 'Please enter a number between 1 and 100!';
        return;
    }

    // Fetch Pokémon data. from it api!! :)
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        .then(response => {
            if (!response.ok) throw new Error('Pokémon not found');
            return response.json();
        })
        .then(data => {
            resultDiv.innerHTML = `<h2>${data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h2>
                <img src="${data.sprites.front_default}" alt="${data.name}">`;
                // triggering the animation
                // void resultDiv.offsetWidth;
                // resultDiv.classList.add('animate');
        })

        .catch(error => {
            resultDiv.innerHTML = '<p>Oops! Something went wrong. Try again!</p>';
            console.error(error);
        });
}


