import Readline from "readline";
import fs from "fs"
// const path=require("path");
// const filePath=path.join(__dirname,filename);

const rl=Readline.createInterface({

    input:process.stdin,
    output:process.stdout
})
const fileCreation=()=>{
    rl.question("Enter Your File Name:",(filename)=>{
        rl.question("enter Your File Content :",(Content)=>{
         fs.writeFile(`${filename}.txt`,Content,(err)=>{
            if(err){
                comsole.error(`error in file:,${err.message}`)
            }else{
                console.log(`file "${filename}.txt" create File SuccessFull`);
                
            }
            rl.close();
         })
        })
    })
}
fileCreation()