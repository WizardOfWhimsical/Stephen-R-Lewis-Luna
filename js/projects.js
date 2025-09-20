





fetchGitHubRepoData().then(data=>{

// i like how this shows up in console
  for(let d of data){
    console.log(d)
  }

})


async function fetchGitHubRepoData(){
  try{
    const githubFetch = await fetch("https://api.github.com/users/WizardOfWhimsical/repos")
    if(githubFetch.status === 404) {
    throw new Error("GitHub API: Resource not found (404)");
    }else if(!githubFetch.ok){
      throw new Error("Response is not OK")
    }
    const fetchData = await githubFetch.json()
    if(fetchData.length === 0){
      throw new Error("Response was ok, but repo returned empty")
    }
    console.log(fetchData)
     return fetchData
  }catch(e){
    console.error("Catch Error Handler: ", e)
  }
}


// function fetchGitHubRepoData(){
//     fetch("https://api.github.com/users/WizardOfWhimsical/repos")
//     .then((res) => {
//     if(!res.ok){
//       throw new Error("Response is not OK")
//     }else if(res.length === 0){
//       throw new Error("Response was ok, but data returned empty")
//     }
//     return res.json()
//     })
//     .then((r) => {
//       //i will fill if need be with what i want.
//       console.log(r)
//       // return r
//     })
//   .catch((e)=>{
//     console.error("Catch Error Handler: ", e)
//   })
// }

  // for(let i = 0; i < data.length; i++){
  //   console.log(data[i])
  // }