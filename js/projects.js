





fetchGitHubRepoData()


async function fetchGitHubRepoData(){
  try{
    const githubFetch = await fetch("https://api.github.com/users/{GITHUB_USERNAME}/repos")
    if(!githubFetch.ok){
      throw new Error("Response is not OK")
    }
    const fetchData = await githubFetch.json()
    console.log(fetchData)
  }catch(e){
    console.error("Catch Error Handler: ", e)
  }
}