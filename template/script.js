let login_btn = document.querySelector("#login_btn");
let login_container = document.querySelector(".login_container");

login_container.dataset.active = false;

login_btn.onclick = ()=>{
    login_container.dataset.active = !(login_container.dataset.active == "true");
    let active = login_container.dataset.active == "true";
    
    if(active){ //*animate in
        let anim = login_container.animate({right: "0"},{duration: 500, fill:"forwards", easing: "ease-in-out"});
        anim.commitStyles();
    }else{
        let anim = login_container.animate({right: "-50%"},{duration: 500, fill:"forwards", easing: "ease-in-out"});
        anim.commitStyles();
    }
};