var i = 0;// punkt start
var images = [];
var time = 3000;

//lista zdjęć
images [0] = 'kompilacjawind.jpg';
images [1] = 'kompilacjawind1.jpg';
// zmiana zdjęć
function changeImg(){
document.slide.src = images[i];
if (i < images.lenght - 1){
  i++;
} else {
  i = 0;
}
setTimeOut("changeImg()", time);


}
window.onload = changeImg;
