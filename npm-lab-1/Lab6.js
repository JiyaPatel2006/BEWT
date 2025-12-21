//1
//read file and print content
const fs=require('fs')
// fs.readFile('data.txt','utf8',(err,data)=>{
//     if(err){
//         console.log("Error");
//     }
//     else if(data){
//         console.log("Read file=",data);
//     }
// })


//2
//read fs.readfilesync and print
//  const fs=require('fs')
// try{
//     const ans=fs.readFileSync('data.txt')
//     console.log("asy ans=",ans.toString());
// }
// catch(err){
//     console.log(err)
// }


//3
//create file that write text
// const fs=require('fs');
// fs.writeFile('output.txt',"this is output file",(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("write file");
//     }
// })

//4
//append file
// fs.appendFile('output.txt',"this is append ",(err)=>{
//     if(err){
//     console.log(err);

//     }else{
//         console.log("append file")
//     }
// })

//5
//delete file
// fs.unlink('output.txt',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log("delete file sucessfully")
// })

//6
//write a pogram that create a folder named my-data using fs.mkdir().if the folder already exists, show a approiate message
// fs.mkdir("my-data",(err)=>{
//     if(err){
//         if(err.code==='EEXIT'){
//             console.log("already exista");
//         }
//         else{
//             console.log("eroor creating",err)
//         }
//         return;
//     }
//     console.log("folder created")
// })
//7
//write a pogram to list all files in folder called documents/using fs.readdir() and print the file name one by one
// fs.readdir("my-data",(err,files)=>{
//     if(err){
//         console.log("err creating",err);
//     }
//     console.log("files:",files)
//     files.forEach(files=>{
//     console.log(files)
//     })
// })
//8
//write a pogram that copies a file name source.txt to a new file named backup.txt using fs.copyfile().
// fs.copyFile("output.txt","backup.txt",(err)=>{
//     if(err){
//         console.log("error=",err)
//     }
//     console.log("file copies=");
// })
//9
//write a pogram that checks if the file config.com exists in the current directory using fs.existssync() and print the result
// if(fs.existsSync("config.com")){
//     console.log("exists")
// }
// else{
//     console.log("not")
// }
//10
//fs.watch to monitor changes in watchme.txt and change file print 'file change'
fs.watch("output.txt",()=>{
    console.log("file change");
}) 
console.log("watchimg file")




// fs.exists('dataa.txt',(exit)=>{
//     console.log(exit)
// });
// console.log('hello')


// fs.stat('data.txt',(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     else if(data){
//        console.log(data)
//     }
     
// })

