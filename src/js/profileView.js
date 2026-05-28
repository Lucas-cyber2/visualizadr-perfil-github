export class ProfileView {
  constructor(container) {
    this.container = container;
  }

  render(user) {
    const repositoriesHTML = user.repos && user.repos.length > 0
      ? user.repos.map(repo => `
        <a href="${repo.html_url}" target="_blank">
          <div class="repository-card">
            <h3>${repo.name}</h3>
            <div class="repository-stats">
              <span>⭐Stars: ${repo.stargazers_count}</span>
              <span>🍴 Forks: ${repo.forks_count}</span>
              <span>👀 Watchers: ${repo.watchers_count}</span>
              <span>💻 Language: ${repo.language || 'Não informada'}</span>
            </div>
          </div>
        </a>
      `).join('') : `<p>Nenhum repositório encontrado.</p>`;

    this.container.innerHTML = `
      <div class="profile-card">
        <img src="${user.avatar_url}" alt="Avatar de ${user.name}" class="profile-avatar">
        <div class="profile-info">
          <h2>${user.name || "Não possui nome cadastrado 😢."}</h2>
          <p>${user.bio || "Não possui bio cadastrada 😢."}</p>
        </div>
      </div>
      <div class="profile-counters">
        <div class="followers">
          <h4>👥 Seguidores</h4>
          <span>${user.followers}</span>
        </div>
        <div class="following">
          <h4>👥 Seguindo</h4>
          <span>${user.following}</span>
        </div>
      </div>
      <div class="profile-repositories">
        <h2>Repositórios</h2>
        <div class="repositories">
          ${repositoriesHTML}
        </div>
      </div>
    `;
  }
}
