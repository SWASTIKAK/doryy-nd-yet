//creating a constant variable 
const MySlider = document.querySelectorAll('.MySlider'),
      dot = document.querySelectorAll('.dot');

      //assigning counter the value of 1
let counter = 1;
slidefun(counter);

//timer
let timer = setInterval(autoslide, 8000);
function autoslide() {
    counter += 1;
    slidefun(counter)
}
//function of plus slides for the next button
function plusSlides(n){
    counter += n;
    slidefun(counter);
    resetTimer();
}
//recognizing current slide no.
function currentSlides(n){
    counter = n;
    slidefun(counter);
    resetTimer();
}
//reseting slides once finished
function resetTimer(){
    clearInterval(timer);
    timer = setInterval(autoslide, 8000);
}
//slidefun function loops and if conditions for slider and dots 
function slidefun(n){
    let i;
    for(i=0;i<MySlider.length;i++){
        MySlider[i].style.display = "none";
    }
    for(i=0;i<dot.length;i++){
        dot[i].classList.remove('active');
    }
    if(n > MySlider.length){
        counter = 1;
    }
    if(n < 1){
        counter = MySlider.length;
    }
    MySlider[counter - 1].style.display = "block";
    dot[counter - 1].classList.add('active');
}