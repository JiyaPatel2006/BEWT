// const child_process=require("child_process");
// const { stdout } = require("process");
// const https=require("https")
// child_process.exec("node -v",(error,stdout)=>{
//     if(error){
//         console.error("Error occured:",error.message)
//     }
//     console.log(" Current node.js version:",stdout);
// })


// const cmd=child_process.spawn("cmd",["/c","dir"])
// cmd.stdout.on("data",(data)=>{
//     console.log(`output:${data}`);
// })
// cmd.stderr.on("data",(data)=>{
//     console.error(`error:${data}`)
// })



// console.log("current working directory",process.cwd);

// child_process.exec("start https://darshanums.in/Login.aspx",(error,stdout,stderr)=>{
//     if(error){
//         console.error("Error occured:",error.message)
//     }
//     console.log(" Current node.js version:",process.version);
// })



//protocol,hostname,pathname,query parameter
// const url=require('url')
// const adr='https://darshan.ac.in/abcd.js?Firstname=arjun&Lastname=bala';
// const q=url.parse(adr,true)
// console.log('host=',q.hostname)
// console.log('protocol=',q.protocol)
// console.log('path=',q.pathname)
// console.log('query parameter=',q.query)


//child process method explore other


//craete a new url object with base,then append pathname and query, also print the final url.
// const myURL=new URL('https://example.com:8090')
// myURL.pathname='product/items'

// myURL.searchParams.append("id","101")
// myURL.searchParams.append("color","black")

// console.log("final url=",myURL);
// console.log("final url into string=",myURL.toString())


//event emitter
const Eventemitter=require('events')
const emitter=new Eventemitter();
emitter.on("greet",()=>{
    console.log("hello");
})
emitter.emit("greet");

setInterval(()=>{
    emitter.emit("tick")
},2000);
emitter.on("tick",()=>{
    console.log("event occure")
})

