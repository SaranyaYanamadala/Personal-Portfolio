var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(event, tabname){

        for(let tablink of tablinks){
            tablink.classList.remove("active-link");
        }

        for(let tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }

    var sidemenu = document.getElementById("sidemenu");
    function closeMenu(){
        sidemenu.style.right = "-200px";
    }

    function openMenu() {
        sidemenu.style.right = "0";
    }

document.getElementById("link-to-glowgenius").addEventListener("click", function() {
        window.location.href = "https://gitlab.com/wise_caps/glowgenius";
});

document.getElementById("link-to-ml").addEventListener("click", function() {
    window.location.href = "https://github.com/SaranyaYanamadala/Beginner-ML-Projects";
});
