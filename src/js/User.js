export class User {
  constructor({ name, avatar_url, bio, followers, following, repos = [] }) {
    this.name = name;
    this.avatar_url = avatar_url;
    this.bio = bio;
    this.followers = followers;
    this.following = following;
    this.repos = repos;
  }
}
