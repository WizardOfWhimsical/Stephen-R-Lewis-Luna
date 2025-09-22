

const projectSection = document.getElementById("projects");
const projectsList = projectSection.querySelector("ul")



fetchGitHubRepoData().then(data=>{

// i like how this shows up in console. the reg loop just showed [object]
  for(let d of data){
    console.log(d)
    console.log(d.has_pages)
    // conditional to only show projects that are hosted 
    if(d.has_pages){
      let newItem = new RepoItemPutInDOM(d)
      newItem.appendRepoListItem(projectsList)
      
    }   
  }
})


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