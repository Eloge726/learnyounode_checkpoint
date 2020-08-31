var fs = require('fs')
var path = require('path')
const mymodule=require('./mymodule')

var folder = process.argv[2]
var ext = process.argv[3]
mymodule(folder,ext,function (err, files) {
    if (err) return console.error(err)
            else {files.forEach(function(file) {
              
                console.log(file)
        })}
})
