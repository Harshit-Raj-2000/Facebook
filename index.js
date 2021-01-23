let form = document.querySelector(".login-form")
let email = document.getElementById("email")
let password = document.getElementById("password")
let emailList = document.querySelector(".email-list")

function afterSubmit(e){
  e.preventDefault()
  if(email.value == "" || password.value == ""){
    alert("Login credentials incorrect.")
  }
  else{
      let item = document.createElement("li")
      item.innerHTML = email.value
      emailList.appendChild(item)
      email.value = ""
      password.value = ""
  }
}
form.addEventListener("submit",afterSubmit)
