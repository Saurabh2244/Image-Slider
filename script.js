let flag=0;
slide(flag);

function controller(x){
    flag=flag+x;
    slide(flag);
}

function slide(num){
    let slides=document.getElementsByClassName("slider");

    if(num==slides.length){
        flag=0;
        num=0;
    }

    if(num<0){
        flag=slides.length-1;
        num=slides.length-1;
    }

    for(let i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }

    slides[num].style.display="block"
}