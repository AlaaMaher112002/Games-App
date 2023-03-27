const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2c96de3a5cmsh948906003ebd439p13c6a7jsn5f62f9c21e0c',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};


getGame('Shooter')

var links=document.querySelectorAll('.navbar .nav-link');
for(var i=0;i<links.length;i++){
    links[i].addEventListener('click',function(e){
        getGame(e.target.text);
    })
}

var games=[];
async function getGame(game){
    var response=await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${game}`, options);
    var games=await response.json();
    console.log(games);
    display(games)
}

function display(myGames){
    var cols=""
    myGames.forEach(element => {
        cols+=`
        <div class="col-lg-4 col-md-6 col-sm-12 rounded-2">
        <a  onclick='getDetails(${element['id']})' data-bs-toggle="modal" data-bs-target="#exampleModal"> 
        <div class="game position-relative overflow-hidden">    
        <img class="w-100" src="${element['thumbnail']}" alt="game image">
                 <div class="content p-2">
                 <h4 class=" fw-bold">${element['title']}</h4>          
                 <h6>${element['short_description'] }</h6>  

                 <div class="position-absolute bottom-0">
                 <a href="${element['freetogame_profile_url']}" class="btn text-light my-3" target="_blank" >Show Game</a>
                 <a  onclick='getDetails(${element['id']})'  class="btn text-light my-3 ms-5" data-bs-toggle="modal" data-bs-target="#exampleModal">Details</a>
                 </div>
                 </div>
        </div>
        </a> 
        </div>
        `
    });

    document.getElementById('gamesData').innerHTML=cols
}

async function getDetails(gameId){
var response=await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`,options);
var gameDetails=await response.json();
console.log(gameDetails);
document.getElementById('exampleModalLabel').innerHTML=`${gameDetails.title}`;
var game=`
<div class="row">
<div class="col-md-7">
<img class="w-100 h-50" src="${gameDetails.thumbnail}" id="img" alt="game" image>
</div>
<div class="col-md-5">
<p class="pt-3"><span>Developer :  </span> ${gameDetails.developer}</p>
<p class="pt-3"><span>Status :  </span> ${gameDetails.status}</p>
<p class="pt-3"><span>Publisher :  </span> ${gameDetails.publisher}</p>
<p class="pt-3"><span>Genre :  </span> ${gameDetails.genre}</p>
</div>
</div>

<p class="pt-3"><span>Description :  </span>  ${gameDetails.description}</p>
<a href="${gameDetails.freetogame_profile_url}" class="btn text-light my-3 btonDetails px-4 py-2" target="_blank" >Try Game</a>          
`
document.getElementById('gameInfo').innerHTML=game;

}  
