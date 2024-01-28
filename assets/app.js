function darkModeSwitcher() {
    document.getElementById('lighttheme').style.display = "block";
    document.getElementById('darktheme').style.display = "none"
    Object.assign(navbar.style,{
        backgroundColor: '#1F1F1F',
        color:'#fff'
    })
  
    Object.assign(navbtn.style,{
        color:'#fff'
    })
    Object.assign(searchwrapper.style,{
        color:'#fff',
        border:'1px solid white',
        backgroundColor:'#1F1F1F'
    })
    Object.assign(searchBox.style,{
        color:'#fff',
        backgroundColor:'#1F1F1F'
    })
    Object.assign(lighttheme.style,{
        color:'#fff',
        backgroundColor:'#1F1F1F'
    })
    Object.assign(sideNav.style,{
       
        backgroundColor:'#1F1F1F',
        color:'#fff'
    })
    Object.assign(sidenav.style,{
       
        backgroundColor:'#1F1F1F'
    })
    Object.assign(logowrapper.style,{
       
        backgroundColor:'#1F1F1F',
        color:'#fff'
    })
    Object.assign(logoText.style,{
        color:'#fff'
    })
    Object.assign(notificationbell.style,{
        backgroundColor:'#1F1F1F',
        color:'#fff'
    })
    Object.assign(profilebackdrop.style,{
       
        backgroundColor:'#1F1F1F',
        color:'#fff'
    })
    Object.assign(main.style,{
       
        backgroundColor:'#1F1F1F',
        color:'#fff'
    })
    Object.assign(storageInfoWrapper.style,{
       
        backgroundColor:'#1F1F1F',
        color:'#fff',
        border:'1px solid #969696',
    })
    Object.assign(storageInfo.style,{
       
        backgroundColor:'#1F1F1F',
        color:'#fff',
        border:'1px solid #969696',
    })
    Object.assign(storageUpgrade.style,{
       
        backgroundColor:'#1F1F1F',
        color:'#fff',
        border:'1px solid #969696',
    })
   document.getElementById("breadcrumbitem").style.color ="white";
   document.getElementById("breadcrumbitem1").style.color ="white";
  
//    const folderCard = document.getElementsByClassName("div.foldercard");
//    Object.assign(folderCard.style,{
//     backgroundColor:'#1F1F1F',
//    })
var folderCard = document.getElementsByClassName('foldercard');
for (var i = 0; i <folderCard.length; i++){
    folderCard[i].style.backgroundColor="#1F1F1F";
    folderCard[i].style.border="1px solid #969696";

}
var fileCard = document.getElementsByClassName('filecard');
for (var i = 0; i <fileCard.length; i++){
    fileCard[i].style.backgroundColor="#1F1F1F";
    fileCard[i].style.border="1px solid #969696";
    fileCard[i].style.color=" #969696";

}
   
   
   
    
    
}
function lightModeSwitcher() {
    document.getElementById('lighttheme').style.display = "none";
    document.getElementById('darktheme').style.display = "block"
    Object.assign(navbar.style,{
        backgroundColor: '#fff',
        color:'#000'
       
    })
  
    Object.assign(navbtn.style,{
        color:'#1F1F1F'
    })
    Object.assign(searchwrapper.style,{
        color:'#969696',
        border:'1px solid #969696',
        backgroundColor:'#fff'
    })
    Object.assign(searchBox.style,{
        color:'#969696',
        backgroundColor:'#fff'
    })
    Object.assign(lighttheme.style,{
        color:'#fff',
        backgroundColor:'#fff'
    })
    Object.assign(sideNav.style,{
        backgroundColor:'#fff',
        color:'#969696'
    })
    Object.assign(sidenav.style,{
       
        backgroundColor:'#fff',
        color:'#969696'
    })
    Object.assign(logowrapper.style,{
       
        backgroundColor:'#fff',
        color:'#000'
    })
    Object.assign(logoText.style,{
        color:'#000'
    })
    Object.assign(notificationbell.style,{
        backgroundColor:'#fff',
        color:'#000'
    })
    Object.assign(profilebackdrop.style,{
       
        backgroundColor:'#fff',
        color:'#000'
    })
    Object.assign(main.style,{
       
        backgroundColor:'#F9F9F9',
        color:'#000'
    })
    Object.assign(storageInfoWrapper.style,{
       
        backgroundColor:'#fff',
        color:'#000',
        border:'none',
    })
    Object.assign(storageInfo.style,{
       
        backgroundColor:'#F5F9FD',
        color:'#000',
        border:'none',
    })
    Object.assign(storageUpgrade.style,{
       
        backgroundColor:'#E6E6E6',
        color:'#000',
        border:'none',
    })
   document.getElementById("breadcrumbitem").style.color ="black";
   document.getElementById("breadcrumbitem1").style.color ="black";
  
//    const folderCard = document.getElementsByClassName("div.foldercard");
//    Object.assign(folderCard.style,{
//     backgroundColor:'#1F1F1F',
//    })
var folderCard = document.getElementsByClassName('foldercard');
for (var i = 0; i <folderCard.length; i++){
    folderCard[i].style.backgroundColor="#fff";
    folderCard[i].style.border="none";

}
var fileCard = document.getElementsByClassName('filecard');
for (var i = 0; i <fileCard.length; i++){
    fileCard[i].style.backgroundColor="#fff";
    fileCard[i].style.border="1px solid rgb(211, 211, 211)";
    fileCard[i].style.color=" #969696";

}
}

document.addEventListener("alpine:init", ()=>{
    Alpine.data("dropdown",()=>({
        open: false,
        toggle(){
            this.open = !this.open;
        }
    }))
})



function createDataRetriever() {

    return {
       
        files: [],
        getData() {
            
            fetch('/data.json')            
                .then((response) => response.json())
                .then((data) => { 
                    this.files = data;
                });
                console.log(this.files)
        }  
    }
  }