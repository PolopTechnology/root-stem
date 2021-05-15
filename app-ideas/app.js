function generate() {
        let genres = ["Fitness", "Social Media", "Education", "Video Player", "Shopping", "Other"];
        var ranG = Math.floor(Math.random() * genres.length);
        document.getElementById("gen").innerHTML = genres[ranG]; 
}
