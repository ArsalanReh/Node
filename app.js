import readline from "readline";
const rl= readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const toDo=[];;

const showMenu=()=>{
  console.log("\n1:Add A Task");
  console.log("2:View Task");
  console.log("3:Exist");
  rl.question("Choose Any One Option to Perform Task",handleInput)
  
  
  
}
const handleInput=(option)=>{
if(option==="1"){
    rl.question("Enter a Task",(task)=>{
        toDo.push(task);
        console.log("Add Task:",task);
        showMenu();
        
    })
}else if(option==="2"){
    console.log("\n Your ToDo List");
     toDo.forEach((task,index)=>{
    console.log(`${index+1} :${task}`);
     
     })
     showMenu();
}else if(option==="3"){
  console.log("Good Bye");
  rl.close
  
}else{
    console.log("Invalid Option Choose");
    showMenu()
}

}
showMenu(); 