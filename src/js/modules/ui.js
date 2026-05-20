// Módulo responsável por manipulação da interface

export function showLoading(element) {
    element.innerHTML = '<p class="loading">Buscando usuário...</p>';
}

export function showProfile(element, userData) {
    element.innerHTML = `
        <div class="profile-card">
            <img src="${userData.avatar_url}" alt="Avatar de ${userData.name}" class="profile-avatar">
            <div class="profile-info">
                <h2>${userData.name || 'Nome não disponível'}</h2>
                <p>${userData.bio || 'Não possui bio cadastrada.'}</p>
            </div>
        </div>
        <div class="profile-counters">
            <div class="followers">
                <h4> 👥 Seguidores</h4>
                <span>${userData.followers}</span>
            </div>
            <div class="following">
                <h4> 👥 Seguindo</h4>
                <span>${userData.following}</span>
            </div>
        </div>
    `;
}

export function clearProfile(element) {
    element.innerHTML = '';
}

export function showError(message) {
    alert(message);
}
