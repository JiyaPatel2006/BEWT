// const path=require('path')

// console.log("Directory name=",__dirname);
// console.log("File name=",__filename);
// console.log("File extension=",path.extname(__filename))
// console.log("Full path=",path.basename(__filename))

// const ans=path.join('user','arjun','documents','project')
// console.log("joining path=",ans);

// const wrongpath="//folder//subfolder///file.txt"
// const correct=path.normalize(wrongpath);
// console.log("path=",correct);


// const a=path.isAbsolute(__filename);
// if(a==true){
//     console.log("Absolute path");
// }
// else{
//     console.log("releative path");
// }


// const ans=path.resolve('PathModules.js')
// console.log(ans);


const os=require('os');
const { uptime } = require('process');
// console.log(os);
// console.log("OS name:",os.type())
// console.log("Release version:",os.release())
// console.log("Platform:",os.platform())
// console.log("Architectured:",os.arch())


// function converttogb(bytes){
//     return (bytes/(1024*1024*1024)).toFixed(2)
// }
// console.log("Total GB:",converttogb(os.totalmem()))
// console.log("Free memory:",converttogb(os.freemem()))


// console.log("user detail");
// console.log(os.userInfo());


const uptimesec=os.uptime();
const uptimehour=(uptimesec/3600).toFixed(2);
console.log("Uptime in sec:",uptimesec);
console.log("Uptime in hour:",uptimehour);


const cpus=os.cpus();
console.log("no of cpu cors:",cpus.length);
cpus.forEach((core,index)=>{
    console.log(`core ${index+1} model:`,core.model);
});

const network=os.networkInterfaces();
console.log("network interfaces:");
console.log(network);


