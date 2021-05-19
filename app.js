const getBudget = document.querySelector("#budget")
const getMonth = document.querySelector("#month")
const budgetSubmit = document.querySelector("#submit")

const setMonth = document.querySelector("#setmonth")
const setMoney = document.querySelector("#money")
const setRemMoney = document.querySelector("#remmoney")
const setSpMoney = document.querySelector("#spmonth")
const expenseSubmit = document.querySelector("#submit2")
const modalAdd = document.querySelector("#modal-add")


const expCost = document.querySelector('#expCost')
const expName = document.querySelector('#expName')
// const expMonth = document.querySelector('#expMonth')



function showAlert(type,message,element,beforeElement) {
    let alert = document.createElement('p')
    alert.classList = `alertt lead text-center ${type}`
    alert.innerText = message
    const parent = document.querySelector(element)
    parent.insertBefore(alert,beforeElement)
    setTimeout(() => {
        document.querySelector(".alertt").remove() 
     }, 2000);
}

function updateBudget(value) {
    let temp = parseInt(setRemMoney.innerText)
    temp -= value
    setRemMoney.innerText = temp
}

let budgetAdded = false

budgetSubmit.addEventListener('click', () => {
    if (getMonth.value == "" || getBudget.value == "") {
        showAlert("red","Please input all the fields","#lsb",getBudget)
        
    } else {
        setMonth.innerText = getMonth.value
        setMoney.innerText = getBudget.value
        setRemMoney.innerText = getBudget.value
        showAlert("green","Budget Added","#lsb",getBudget)
        budgetAdded = true
    }
})



expenseSubmit.addEventListener('click', () => {
    if (budgetAdded === false) {
        showAlert("red","Please add your budget first","#lbsb",expName)
    }
    else if (expName.value == "" || expCost.value == "") {
        showAlert("red","Please input all the fields","#lbsb",expName)
    } else {
        let temp = document.createElement('div')
        temp.classList.add('d-flex')
        temp.classList.add('justify-content-between')
        let name = expName.value
        let cost = expCost.value
        temp.innerHTML = `
        <h3 class = "blue">${name}</h3>
        <h3 class = "blue">${cost}</h3>
        `
        modalAdd.appendChild(temp)
        updateBudget(parseInt(cost))
        showAlert("green","Expenditure added","#lbsb",expName)
        
    }
    
    
})

document.querySelector('#reset').addEventListener('click', ()=>{
    location.reload()
})