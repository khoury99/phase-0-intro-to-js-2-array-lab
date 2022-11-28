let cats=["Milo", "Otis", "Garfield"]
// cats.push("Milo")
// console.log(cats)
function destructivelyAppendCat(cat){
    cats.push(cat)
    return cats
}

  function destructivelyPrependCat(cat) {
    return cats.unshift(cat)
  }

  function destructivelyRemoveLastCat() {
    return cats.pop()
  }

  function destructivelyRemoveFirstCat() {
    return cats.shift()
  }
 
  function appendCat(name) {
  const CopyOfCats= [...cats]
  CopyOfCats.push(name)
  return CopyOfCats
}
function prependCat(name) {
    const CopyOfCats=  [...cats]
    CopyOfCats.unshift(name)
    return CopyOfCats
}
function removeLastCat(name) {
    const CopyOfCats= [...cats]
    CopyOfCats.pop(name)
    return CopyOfCats
}
function removeFirstCat(name) {
    const CopyOfCats= [...cats]
    CopyOfCats.shift(name)
    return CopyOfCats
}