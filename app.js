
// <!-- ==========todoapp========== -->

const input = document.getElementById("myinput")

const inputt = document.getElementById("myinputt")
// console.log(input);

const todoList = document.querySelector(".myList")
// console.log(todoList);

const full=input.value+inputt.value;

const list=[]

const todoApp ={
    addFun(){
        if (input.value){
            list.push(input.value+' '+inputt.value)
            input.value=""
            inputt.value=""
        }else {
            alert("Please input your data,otherwise we cannot perform any task")
          }
        this.myFun()
    },
    myFun(){
        todoList.innerHTML =""
        list.forEach((value, index)=> {
            todoList.innerHTML +=`<li>${value}  <button class="cns" onclick="todoApp.delet(${index})">X</button></li>`
        })
    },
    delet(index){
        list.splice(index, 1)
        this.myFun()

    },
    clear(){
        list.splice(0,list.length)
        this.myFun()
    },

}