// const hug=""
// const noHug=""
// // the ultimate mood changing function. 
// function hug () {
//   document.getElementById("hug").src = "yesHug.png";
// }

// theButton.onclick = function changeBunnyMood (hug) {
//   let image = document.getElementById('bunny');
//   if (hug == 'true') {
//     image.src = 'yesHug.png';
//   } else if (hug == 'false') {
//     image.src = 'noHug.png';
//   } else {
//     image.src = 'hugbun.png';


document.getElementById("hug").addEventListener("click", function () {
  document.getElementById("bunny").src="yesHug.png";
});

document.getElementById("no-hug").addEventListener("click", function () {
  document.getElementById("bunny").src="noHug.png";
});
