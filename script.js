// let totalamount = document.getElementById("in")
// let people = document.getElementById("mem")
// let btn = document.getElementById("btnn")
// let final = document.getElementById("total")
// let each = document.getElementById("each")


// btn.addEventListener("click",function(){
//       let tot = Number(totalamount.value)
//       let memm = Number(people.value)

//       if (tot>0 && memm>0) {
//         final.textContent=`Yours Total Amount is ${tot}`
//         each.textContent = `Each Person have to pay ${memm/tot.toFixed(2)}`

//       }
//       else {
//          final.textContent=`Invalid Number`
//         each.textContent = `Please enter A Valid Number`

//       }

//     console.log(totalamount.value);
//     console.log(people.value);
    
    
// })


let totalamount = document.getElementById("in")
let people = document.getElementById("mem")
let btn = document.getElementById("btnn")
let final = document.getElementById("total")
let each = document.getElementById("each")

btn.addEventListener("click", function () {
  let tot = Number(totalamount.value)
  let memCount = Number(people.value)

  if (tot > 0 && memCount > 0) {
    let perPerson = (tot / memCount).toFixed(2)  
    final.textContent = `💰 Your Total Amount is ₹${tot}`
    each.textContent = `🙋 Each Person has to pay ₹${perPerson}`
  } else {
    final.textContent = `⚠️ Invalid Input`
    each.textContent = `Please enter valid numbers`
  }

  console.log("Total:", tot)
  console.log("People:", memCount)
})
