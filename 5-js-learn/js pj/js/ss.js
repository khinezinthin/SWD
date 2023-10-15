// const uploader = document.querySelector("#uploader");
// const uploaderUI = document.querySelector("#uploaderUI");
// const profilePhoto = document.querySelector(".profilePhoto");

// uploaderUI.addEventListener("click",() => {
//     uploader.click();
// });

// uploader.addEventListener("change",(event) => {
//     // FILE KO LO CHIN YIN BUT USE LO MA YA TAE A CHY NAY PL SHI
//     // console.log(event.target.files[0]);
//     const fileReader = new FileReader();
//     // FILE KO USE CHIN YIN AYIN READ 
//     fileReader.readAsDataURL(event.target.files[0]);
//     // READ YONE NAT MA YA HTAE PAY YA TY EVENT NAT
//     fileReader.addEventListener("load",(event) => {
//         // console.log(event.target.result);
//         profilePhoto.src = event.target.result;
//     })
// })


const uploader = document.querySelector("#uploader");
const uploaderUI = document.querySelector("#uploaderUI");
const output = document.querySelector("#output");

uploaderUI.addEventListener("click",() => {
    uploader.click();
});

uploader.addEventListener("change",(event) => {
    // console.log(event.target.files);
    [...event.target.files].forEach(el => {
        // console.log(el);
        const fileReader = new FileReader();
        fileReader.readAsDataURL(el);
        fileReader.addEventListener("load",(event) => {
            const img = new Image();
            img.src = event.target.result;
            output.append(img);
            // console.log(event.target.result);
        });
    })
})