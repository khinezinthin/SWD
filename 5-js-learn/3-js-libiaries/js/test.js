// LODASH 
// const arr = ['a','b','c','d']
// console.log(_.chunk(arr,2));
// const name = "khine zin thin";
// console.log(_.camelCase(name));


// MOMENT 
// const m = moment();
// // m.add(5,"days");
// m.subtract(5,"years");
// m.subtract(5,"days");
// console.log(m.format("D MMM Y"));

// AXIOS 
// console.log(axios('https://dummyjson.com/products/1'));
// axios('https://dummyjson.com/products/1').then(data => console.log(data.data));
// const run = async () => {
//     const res = await axios('https://dummyjson.com/products/1');
//     console.log(res.data);
// }
// run();

// SWEETALERT2 
// Swal.fire('Any fool can use a computer')
// Swal.fire("hello a yuuu",
// "blablabla",
// "success");
// const btn = document.querySelector("button");
// btn.addEventListener("click",() => {
//     Swal.fire({
//         icon: "error",
//         title: "min ga lar par",
//         text: "san kyi tr par"
//     })
// })
// btn.addEventListener("click",() => {
//     Swal.fire({
//         title: 'Are you sure?',
//         text: "You won't be able to revert this!",
//         icon: 'warning',
//         showCancelButton: true,
//         confirmButtonColor: '#3085d6',
//         cancelButtonColor: '#d33',
//         confirmButtonText: 'Yes, delete it!'
//       }).then((result) => {
//         if (result.isConfirmed) {
//             const Toast = Swal.mixin({
//                 toast: true,
//                 position: 'top-end',
//                 showConfirmButton: false,
//                 timer: 3000,
//                 timerProgressBar: true,
//                 didOpen: (toast) => {
//                   toast.addEventListener('mouseenter', Swal.stopTimer)
//                   toast.addEventListener('mouseleave', Swal.resumeTimer)
//                 }
//               })
              
//               Toast.fire({
//                 icon: 'success',
//                 title: 'Signed in successfully'
//               })
//         }else{
//             console.log("no");
//         }
//       })
// })

// CHART 
// const ctx = document.getElementById('myChart');
// new Chart(ctx,{
//     type: "line",
//     data: {
//         labels: ["a","b","c","d","e"],
//         datasets: [
//             {
//                 label: "weekday",
//                 data: [5,1,6,2,8],
//             },
//             {
//                 label: "weekend",
//                 data: [1,4,3,7,4],
//             },
//             {
//                 label: "frontend",
//                 data: [6,2,4,1,8],
//             },
//         ],
//     },
// })

// TYPED OF 
const tt = new Typed("#tt",{
    strings: ["min ga lar par","nay kg lar"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 3000,
    loop: true,
    loopCount: 3
});