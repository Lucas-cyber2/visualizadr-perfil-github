
import { fetchGithubUser, fetchGithubUserRepos } from './githubApi.js';
import { User } from './User.js';
import { ProfileView } from './profileView.js';


const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.querySelector('.profile-results');
const profileView = new ProfileView(profileResults);


async function getUserProfile() {
    const userName = inputSearch.value.trim();
    if (!userName) {
        alert('Por favor, digite um nome de usuário do GitHub.');
        profileResults.innerHTML = "";
        return;
    }
    profileResults.innerHTML = `<p class="loading">Carregando...</p>`;
    try {
        const userData = await fetchGithubUser(userName);
        const userRepos = await fetchGithubUserRepos(userName);
        const user = new User({
            name: userData.name,
            avatar_url: userData.avatar_url,
            bio: userData.bio,
            followers: userData.followers,
            following: userData.following,
            repos: userRepos
        });
        profileView.render(user);
    } catch (error) {
        console.error('Erro ao buscar o perfil do usuário:', error);
        alert('Usuário não encontrado. Por favor, verifique o nome de usuário e tente novamente.');
        profileResults.innerHTML = "";
    }
}

btnSearch.addEventListener('click', getUserProfile);

inputSearch.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        getUserProfile();
    }
});
