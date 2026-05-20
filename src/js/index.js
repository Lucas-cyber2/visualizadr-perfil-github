import { fetchGitHubUser } from './modules/api.js';
import { showLoading, showProfile, clearProfile, showError } from './modules/ui.js';

const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.getElementById('profile-results');

btnSearch.addEventListener('click', async () => {
    const userName = inputSearch.value;
    if (userName) {
        showLoading(profileResults);
        try {
            const userData = await fetchGitHubUser(userName);
            showProfile(profileResults, userData);
        } catch (error) {
            clearProfile(profileResults);
            showError('Usuário não encontrado. Por favor, verifique o nome de usuário e tente novamente.');
        }
    } else {
        showError('Por favor, digite um nome de usuário do GitHub.');
    }
});
