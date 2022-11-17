//Used to demonstrate that api is fetchable
// const getPexelApi = () => {
//   const pexelApi = `https://api.pexels.com/v1/search`;

//   fetch(pexelApi, {
//     headers: {
//       Authorization: "563492ad6f9170000100000188797255cbcb4ca682d028f7b4c510b6",
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// };

//need to translate code below to work via react
//you can search for photos 
//Most likely need a modal

// const input=document.querySelector("input");
// const searchBtn=document.querySelector(".searchBtn");
// const showBtn=document.querySelector(".showMore");

// let page_num=1;
// let search_text="";
// let search=false;
// const apiKey="563492ad6f9170000100000188797255cbcb4ca682d028f7b4c510b6";

// input.addEventListener("input",(event)=>{
//     event.preventDefault();
//     search_text=event.target.value;
// })

// searchBtn.addEventListener("click",()=>{
//     if(input.value==="")
//     {
//         alert("Please enter the some text")
//         return;
//     }
//     clearGallery();
//     search=true;
//     SearchPhotos(search_text,page_num);
// })

// function clearGallery(){
//     document.querySelector(".displayImages").innerHTML="";
//     page_num=1;
// }

// async function CuratedPhotos(page_num){
//     // fetch the data from api on page change
//     const data=await fetch(`https://api.pexels.com/v1/curated?page=${page_num}`, 
//     {
//         method: "GET",
//         headers: {
//             Accept: "application/json",
//             Authorization: apiKey,         //use the apiKey you have generated
//         },
//     });
//     const response=await data.json();     //convert the response to json 
//     console.log(response);

//     display_images(response);            // call the display_images method to display the images on page
// }

// function display_images(response){
//     //use forEach loop to iterate on each item
//     response.photos.forEach((image) => {
//         const photo=document.createElement("div");
//         photo.innerHTML=`<img src=${image.src.large}>
//         <figcaption> Photo By: ${image.photographer}</figcaption>`;
//         document.querySelector(".display_images").appendChild(photo);
//     });
// }

// async function SearchPhotos(query, page_num){
//     const data=await fetch(`https://api.pexels.com/v1/search?query=${query}&page=${page_num}`, 
//     {
//         method: "GET",
//         headers: {
//             Accept: "application/json",
//             Authorization: apiKey,
//         },
//     });
//     const response=await data.json();
//     console.log(response);

//     display_images(response);
// }

// showBtn.addEventListener("click", () => {
//     if(!search){  
//         page_num++;
//         CuratedPhotos(page_num);
//     }
//     else{
//         if(search_text.value==="")
//         return;
//         page_num++;
//         SearchPhotos(search_text,page_num);
//     }
// })

// CuratedPhotos(page_num);