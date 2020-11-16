let global = 33
function outside() {
  let a = 10
  let b = 20

  function inside() {
    let c = 30
    return a + b + c + global
  }
  return inside
}

let result = outside()()
console.log(result)