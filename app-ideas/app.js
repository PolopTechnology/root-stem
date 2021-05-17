function generate() {
        let genres = ["Fitness", "SocialMedia", "Education", "VideoPlayer", "Shopping", "Other"];
        var ranG = Math.floor(Math.random() * genres.length);
        document.getElementById("gen").innerHTML = genres[ranG]; 
}
function appnews() {
        var el = document.getElementById("gen").textContent;
        window.open("https://www.businessofapps.com/news/" + el);
}
