let partMovies = movies.slice(0,100)
let elMovlist =  document.querySelector('.movises__list')

partMovies.forEach((item, index)=>{
    let newLi = document.createElement('li')
    newLi.classList = 'movies__item'
    newLi.innerHTML = `
    <div class="card" style="width: 18rem;">
  <img src="https://i.ytimg.com/vi/${item.ytid}/hq2.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCHcSoCwTSABVjWa2zfXujskb-kgA">
  <div class="card-body">
    <h5 class="card-title">${item.Title.toString().slice(0,25)}</h5>
    <p class="card-text">${item.Categories.toString().slice(0,30)}}</p>
    <a href="https://www.youtube.com/watch?v=${item.ytid}" target="_blank" class="btn btn-warning">watch movie</a>
  </div>
</div>
    `
    elMovlist.appendChild(newLi)
})