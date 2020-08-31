var fs = require('fs')
var path = require('path')
const mymodule=(dir,ext,cb)=>{

fs.readdir(dir, (er,files)=>{
    if(er){
        cb(er)
    }else{ let list=files.filter(file=>(file.endsWith(`.${ext}`)))
        cb(null,list)}
})
    


}
module.exports=mymodule