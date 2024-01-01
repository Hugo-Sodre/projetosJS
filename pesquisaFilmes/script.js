
const TMDB_ENDPOINT = 'https://api.themoviedb.org/3/movie/popular';
const ACCESS_TOKEN = '056149073021f49912e8b9bffa76d259'; // Substitua pela sua chave de acesso
const IMG_PREFIX = 'https://image.tmdb.org/t/p/w500';

// Função para buscar filmes populares
function getPopularMovies() {
    axios.get(TMDB_ENDPOINT, {
        params: {
            api_key: ACCESS_TOKEN
        }
    })
        .then(response => {
            displayMovies(response.data.results);
        })
        .catch(error => {
            console.error('Erro ao obter filmes populares:', error.message);
        });
}

// Função para exibir filmes na página
function displayMovies(movies) {
    const moviesContainer = document.getElementById('moviesContainer');
    moviesContainer.innerHTML = '';

    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.innerHTML = `
          <h2>${movie.title}</h2>
          <img src="${IMG_PREFIX}${movie.poster_path}" alt="${movie.title}">
          <p>${movie.overview}</p>
        `;
        moviesContainer.appendChild(movieElement);
    });
}

// Função para buscar um filme específico
function searchMovie() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.trim();

    if (query !== '') {
        axios.get('https://api.themoviedb.org/3/search/movie', {
            params: {
                api_key: ACCESS_TOKEN,
                query: query
            }
        })
            .then(response => {
                displayMovies(response.data.results);
            })
            .catch(error => {
                console.error('Erro ao buscar filme:', error.message);
            });
    } else {
        // Se a consulta estiver vazia, exibir filmes populares novamente
        getPopularMovies();
    }
}

// Carregar filmes populares ao carregar a página
getPopularMovies();
