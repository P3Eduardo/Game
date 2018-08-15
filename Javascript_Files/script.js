const selectedTiles = []; // selected tiles array
let tilesIds = [];  // Tile ids array
const patternTiles = []; // Pattern array
const lostTiles = []; // Tiles that are incorrect and not in the pattern, tiles the users has not yet selected

let playingTile = document.querySelectorAll(".playingtile");

//changes tile colorOnclick
playingTile.forEach((e)=>{
	e.addEventListener("click",colorChange);
});

//changes colorOnClick to red on all tiles if you click on the wrong tile
function colorChange(e){


    if (!e.target.classList.contains('colorOnClick'))
    {
     lost();
    }
    else
    {
        document.getElementById(e.target.id).classList.remove("fadeColor");
				document.getElementById(e.target.id).classList.add("colorOnClick");
        if(patternTiles.indexOf(e.target.id)!== -1)
        {
            patternTiles.splice(patternTiles.indexOf(e.target.id),1);
        };
        if(patternTiles.length === 0)
        {
            win();
        }
    }
}
// Random generate Function for pattern and wrong tiles turning red
function timer(ms)
{
    return new Promise(res => setTimeout(res, ms));
}
 async function randGene()
 {
    for(let q = 1; q<=25; q++)
    {
        tilesIds.push('playTile' + q);
    }
    let patternLength = Math.floor(Math.random()*3)+7;

    for(let c = 0, item = 0,q = 0; c < patternLength; c++)
    {
        q = Math.floor(Math.random()*tilesIds.length);
        items = tilesIds[q];
        tilesIds.splice(q,1);
        patternTiles.push(items);
        document.getElementById(items).classList.add('colorOnClick');
        await timer(2400)
				fading()
    }
 }
 // Timer for the game to start
 setTimeout(randGene, 5000);
// Timer for blocks to disappear right after appearing.
async function fading()
{
    for(let i = 0; i <= patternTiles.length; i++)
    {
        item = patternTiles[i];
        document.getElementById(items).classList.add("fadeColor");
        await timer(2400);
    }
}
//When you click on the wrong tile thats not in the pattern randomly generated
// it turns red
async function lost()
{
    tilesIds = [];
    for(let i = 1; i<=25; i++)
    {
        tilesIds.push('playTile' + i);
    }
    let patternLength = 25;
    for(let c = 0, item = 0,i = 0; c < patternLength; c++)
    {
        item = tilesIds[c];
        lostTiles.push(item);
        document.getElementById(item).classList.add('failOnClick');
        await timer(20);
    }

}
async function win()
{
    tilesIds = [];
    for(let i = 1; i<=25; i++)
    {
        tilesIds.push('playTile' + i);
    }
    let patternLength = 25;

    for(let c = 0, item = 0,i = 0; c < patternLength; c++)
    {
        item = tilesIds[c];
        lostTiles.push(item);
        document.getElementById(item).classList.add('rightOnClick');
        await timer(20);
    }
  }


//Challenges

	//1.RandGene: It was hard since we didn't know what an async function was and how we could use it randomly generate our blocks 1 by one
	//since the for loop wasn't working.

	//2.The lost() function which took us around 5-6 hours to find a fix.
	// in this problem we had to create a function that checked if we clicked the correct block, and if it wasn't the correct one
	//it would populate all the blocks with a class but for some reason some of the blocks weren't being populated with that class which left
	//some blocks blank.

//Accomplishments
	//We got most of it working except for a glitch which turns a block back to blank.
	//We managed to implement webapp2 into our code.
