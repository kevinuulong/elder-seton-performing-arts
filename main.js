var cinderella = {"vale.png": "vale", "kent.png": "kent", "hicks.png": "hicks", "chowning.png": "chowning", "jansen.png": "jansen", "becker.png": "becker"},
    pbj = {},
    bicycles = {"sweeney.png": "sweeney", "somers.png": "somers", "becker.png": "becker", "doherty.png": "doherty", "macke.png": "macke"},
    cleopatra = {"espich.png": "espich", "hickey.png": "hickey", "broxterman.png": "broxterman", "barsan.png": "barsan", "jansen.png": "jansen", "meyer.png": "meyer", "saupe.png": "saupe", "newland.png": "newland", "haverbusch.png": "haverbusch"},
    robot = {"macke.png": "macke", "doherty.png": "doherty", "vale.png": "vale", "kent.png": "kent", "gregorio.png": "gregorio", "sweeney.png": "sweeney"},
    acts = [cinderella, pbj, bicycles, cleopatra, robot];

function loadAct(act) {
    document.getElementById("acts").style.display = "none";
    document.getElementById("act-details").style.display = "block";
    var imgs = Object.keys(acts[act]),
            stories = Object.values(acts[act]);
    for (i = 0; i < Object.keys(acts[act]).length; i++) {
        document.getElementById("people-card-container").innerHTML += `<div class="people-card" onclick='openStory("${stories[i]}")'><img src="images/${act}/${imgs[i]}"></div>`
    }
}

function hamburger() {
    document.getElementById("acts").style.display = "block";
    document.getElementById("act-details").style.display = "none";
    document.getElementById("people-card-container").innerHTML = "";
}

function openStory(url) {
    window.location.href += `stories/${url}.html`
}