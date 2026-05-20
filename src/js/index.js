
const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.getElementById('profile-results')

const BASE_URL = "https://api.github.com";

btnSearch.addEventListener('click', async () => {
    const userName = inputSearch.value;
    if (userName) {
        profileResults.innerHTML = '<p class="loading">Buscando usuário...</p>';

        try {

            const response = await fetch(`${BASE_URL}/users/${userName}`);

            if (!response.ok) {
                profileResults.innerHTML = '';
                alert('usuario não encontrado. Por favor, verifique o nome de usuario e tente novamente.');
                return;
            }
            const userData = await response.json()
            console.log(userData ); // apenas para verificar se os dados foram obtidos corretamente.
            profileResults.innerHTML = `
            <div class="profile-card">
              <img src="${userData .avatar_url}" alt="Avatar de ${userData .name}" class="profile-avatar">
              <div class="profile-info">
                <h2>${userData .name|| 'Nome não disponível'}</h2>
                <p>${userData.bio || 'Não possui vio cadastrada.'}</p>

            
              </div>
            </div>`;

        } catch (error) {
            console.error('Erro ao buscar o perfil do usuário', error);
            profileResults.innerHTML = '';
            alert('Ocorreu um erro ao buscar o perfil do usuário. Por favor, tente novamente mais tarde.');
        }

    } else {
        alert('Por favor, digite um nome de usuário do GitHub.');
    }
});
