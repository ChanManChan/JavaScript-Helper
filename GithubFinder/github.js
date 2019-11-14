class GitHub{
  constructor(){
    this.client_id='744b2c18723d24ee9062';
    this.client_secret='396ab104f2ea3392847f89c4159b194719b612bc';
    this.repos_count=5;
    this.repos_sort='created: asc';
  }
  async getUser(user){
    const profileResponse=await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse=await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
    const profileData=await profileResponse.json();
    const reposData=await repoResponse.json();
    return {
      profileData, //<-- in ES6+ we can actually reduce the key value pair to just one element if both key and value are same
      reposData
    }
  }
}