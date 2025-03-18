// console.log('Hello world......');

// const Cart = ["pants", "shoes", "books"];

// api.CreateOrder(Cart, function () {
//   api.ProceedToPyment(function () {
//     api.showOrderSummery(function () {
//       api.upDateValute();
//     });
//   });
// });

// Promise-------------

// const Cart = ["pants", "shoes", "books"];
// api.CreateOrder(Cart, function () {
//   api.procedeToPyment();
// });

// console.log('Hello world......');

// const Cart = ["pants", "shoes", "books"];

// api.CreateOrder(Cart, function () {
//   api.ProceedToPyment(function () {
//     api.showOrderSummery(function () {
//       api.upDateValute();
//     });
//   });
// });
// api.CreateOrder(Cart, function () {
//   api.ProceedToPyment(function () {
//     api.showOrderSummery(function () {
//       api.upDateValute();
//     });
//   });
// });

// const Promis=CreateOrder(cart);

// CreateOrder(Cart).then((orderID)=>{
//  return  proceedToPayment()
// }).then((paymentInfo)=>{
//   return showOrderSummary()
// }).then((paymentInfo)=>{
//   return updateWallet()
// })

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P1 success"), 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("P2 Fail"), 1000);
//   setTimeout(() => resolve("P2 success"), 1000);
});

const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P3 success"), 2000);
  setTimeout(() => reject("P3 success"), 2000);
});

// Promise.all([p1,p2,p3]).then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.error(err)
// })

Promise.all([p1,p2,p3]).then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.error(err)
})