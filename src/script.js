function spawnImg(sound) {
    let img = document.createElement('img');
    img.src = `../assets/images/${sound}.png`;
    document.getElementById("img-spawner").appendChild(img);
}

function clearImgs() {
    const imgsDiv = document.getElementById("img-spawner");

    while (imgsDiv.firstChild) {
        imgsDiv.removeChild(imgsDiv.lastChild);
    }
}

function showPlayed(sound) {
    if ( playedCount() < 10 ) {
        spawnImg(sound);
    } else {
        clearImgs();
        spawnImg(sound);
    }
}

function playedCount() {
    return parseInt(document.getElementById("img-spawner").childElementCount);
}

function executeSound(sound) {
    var audio = new Audio(`../assets/sounds/${sound}.mp3`);
    audio.play();
    showPlayed(sound);
}

function keyPressed(key) {

    const itensInsideDiv = parseInt(
        document.getElementById("drum-images-div").childElementCount
        );
    
    for (let element = 0; element < itensInsideDiv;  element++ ) {
        
        let currentElement = document.getElementsByClassName("drum-part")[element];
   
        if (currentElement.innerHTML.toLocaleLowerCase() === key) {
            executeSound(currentElement.getAttribute("id"));
        }
    }
}

window.addEventListener('keydown', function (e) {
    keyPressed(e.key);
});