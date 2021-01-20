/* function for  full page scrolling..*/

function myFunc(){
    const sections = document.querySelectorAll('section');

const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let index = 0;
let lastTime=0;
const animationDuration = 400;
nextBtn.addEventListener('click', () => {
  if(index > 3){
  		return;
  	}	

  index++;
  
  sections.forEach((section , i) =>{
  	if(i == index) {
         
  		section.scrollIntoView({behavior : 'smooth'});
  	}
  	
  })
});

prevBtn.addEventListener('click', () => {
	if(index <1){
  		return;
  	}
  index--;
  sections.forEach((section , i) =>{
  	if(i == index) {
  		section.scrollIntoView({behavior : 'smooth'});
  	}
  	
  })
});


window.addEventListener('wheel', (event) => {
  const wheelValue = event.deltaY;
  const currentTime = new Date().getTime();
  if(currentTime - lastTime < animationDuration ){
  	//event.preventDefault();
  	return;
  }
  if(wheelValue > 0){
  	const prevBtnClick = new Event('click');
  	prevBtn.dispatchEvent(prevBtnClick);
  }else{
  	const nextBtnClick = new Event('click');
  	nextBtn.dispatchEvent(nextBtnClick);
  }
  lastTime = currentTime;
});

window.addEventListener('keydown', (event) => {
  const keycode = event.keyCode;
  switch(keycode){
    case 40 :  const nextBtnClick = new Event('click');
               nextBtn.dispatchEvent(nextBtnClick); 
               break;
    case 38 :   const prevBtnClick = new Event('click');
                prevBtn.dispatchEvent(prevBtnClick);
                break;
    case 37 : const prevBtnLeftClick = new Event('click');
              prevBtn.dispatchEvent(prevBtnLeftClick); 
              break;
    case 39 : const nextBtnRightClick = new Event('click');
              nextBtn.dispatchEvent(nextBtnRightClick); 
              break;
  }
});

}

//myFunc is end here...

// set the Nav Bar Height .....

function navBarHeight(){
  const navBarHeight = document.getElementById("navBar");
  const navtitleHeight = document.getElementById("navbarTitle");
  let innerHeight = window.innerHeight;
  let innerWidth = window.innerWidth;
  if(innerWidth<=700 || innerHeight<=500){
      navBarHeight.style.height='70px';
      navtitleHeight.style.fontSize = '20px';
     
  }
 
}
//end here



//Indicate The innerHeight and innerWidth....
function heightWidthIndicate(){
  let innerHeight = window.innerHeight;
  let innerWidth = window.innerWidth;
  if(innerWidth <= 700 || innerHeight <= 500){
    return true;
  }else{
    return false;
  }
}
//end here

 



//game play  
function gamePlay(){
  window.location.href = "https://vasigame-rest-api.herokuapp.com/gameApi/buzoni";
}
                    
    
