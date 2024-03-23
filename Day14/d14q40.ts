function maek_album(artist: string, title: string, tracks?: number) {
  let album = { artist, title };
  if (tracks) {
    album["tracks"] = tracks;
  }
  return album;
}
console.log(maek_album("Artist One", "This is first Album"));
console.log(maek_album("Artist Two", "This is Second Album"));
console.log(maek_album("Artist One", "This is first Album", 12));
