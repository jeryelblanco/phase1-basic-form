const form = document.querySelector("#form")
const input = document.querySelector("#input1")
const list = document.querySelector("#list")


form.addEventListener("submit", (e)=>{
e.preventDefault()
const listOfNames = document.createElement("li")
list.append(listOfNames)
listOfNames.innerText = input.value



})
