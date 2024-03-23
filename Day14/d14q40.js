function maek_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks) {
        album["tracks"] = tracks;
    }
    return album;
}
console.log(maek_album("Artist One", "This is first Album"));
console.log(maek_album("Artist Two", "This is Second Album"));
console.log(maek_album("Artist One", "This is first Album", 12));
