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

const Cart = ["pants", "shoes", "books"];

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


CreateOrder(Cart).then((orderID)=>{
 return  proceedToPayment()
}).then((paymentInfo)=>{
  return showOrderSummary()
}).then((paymentInfo)=>{
  return updateWallet()
})

