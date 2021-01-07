let listMethod = ["atm", "teller", "ebanking"]
listMethod.forEach(element => {
    let box = document.getElementById(element);
    box.addEventListener("change" ,function(){
        let clicked = document.querySelector("." + element + "-click");
        let ex = document.querySelectorAll(".x-click");
        ex.forEach(el => {
            el.classList.add("d-none")
        });
        if(this.checked){
            clicked.classList.remove("d-none");
        }
    });
});

listMethod.forEach(element => {
    for (let i = 1; i <= listMethod.length; i++) {
        let ix = JSON.stringify(i);
        let ex = document.querySelector("#" + element + "-" + ix);
        ex.addEventListener("change", function (){
            let title = document.querySelector(".title-desc")
            title.innerHTML = ex.nextElementSibling.innerHTML;
            title.parentNode.parentNode.classList.remove("d-none");
            
        })   
    }
})

// listMethod.forEach(element => {
//     for (let i = 1; i <= listMethod.length; i++) {
//         let ix = JSON.stringify(i);
//         let ex = document.querySelector("#" + element + "-" + ix);
//         ex.addEventListener("change", function (){
//             console.log(ex.nextElementSibling.innerHTML);
//         })
        
//     }
    
// })

// let tabMethod = document.querySelectorAll(".tab-method input");
// tabMethod.forEach(element => {
//     console.log(element);
// })


// const radio = document.querySelectorAll("input[name=radio]");
// radio.forEach(element => {
//     element.addEventListener("change", function(){
//         if(radio.checked){
//             console.log("tes")
//         }else {
//             document.querySelector("#setma-content").style.display = "none !important";
//         }
//     })
    
// });
// const checkbox = document.querySelector("input[name=skpd]");

// checkbox.addEventListener( 'change', function() {
//     if(this.checked) {
//         document.querySelector("#skpd-content").style.display = "block !important";
//     } else {
//         document.querySelector("#skpd-content").style.display = "none !important";
//     }
// });

