
async function  getData(URL){
  let response = await fetch(URL)
  let data = await response.json()
  showData(data.data)
}
getData("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees")


let thead = document.getElementById("thead")

function showData(arr){
   
   arr.forEach((ele,i)=>{
    
    let tr = document.createElement("tr")
    tr.id="shade"
    let td1 = document.createElement("td")
    td1.innerText=ele.id

    let td2 = document.createElement("td")
    td2.innerText=ele.name

    let td3 = document.createElement("td")
    td3.innerText=ele.gender
    
    let td4 = document.createElement("td")
    td4.innerText=ele.department

    let td5 = document.createElement("td")
    td5.innerText=ele.salary

    tr.append(td1,td2,td3,td4,td5)

    thead.append(tr)

   
   })
}

//filter_department

let filter_department = document.getElementById("filter_department")


filter_department.addEventListener("change",filterDepartment)


function filterDepartment(arr){
   
    let value = document.querySelectorAll("#filter_department>option")
  
     
   
}

//filterByGender


let filter_gender = document.getElementById("filter_gender")

filter_gender.addEventListener("change", filterGender)

function filterGender(){

}

//sort by salary

let sort_price = document.getElementById("sort_price")

sort_price.addEventListener("change",sortPrice)

function sortPrice(){


}