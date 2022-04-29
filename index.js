const htmlPdf = require("html-pdf")
const fs = require('fs');

function GenratePdf(typeOfFile,filePath,fileName,toBeGenFileName){
     
    try{
     let HTMLFilePath = `.${filePath}${fileName}`;
     if(!fs.existsSync(HTMLFilePath)){
         console.log("File Doesn't Exists")
     }
     typeOfFile === "PNG" ?
          toBeGenFileName += ".png" : toBeGenFileName += ".pdf"
          typeOfFile === "JPG" ?
          toBeGenFileName += ".jpg" : toBeGenFileName += ".pdf"
       const htmlContent = fs.readFileSync(HTMLFilePath,"utf-8")      
          const htmlToPdfOptions = {
            "type":typeOfFile,
             "height":"650px",
             "width":"850px",
             "renderDelay":2000,

          }
        htmlPdf.create(htmlContent,htmlToPdfOptions)
        .toFile(toBeGenFileName,function (err,result) {
              if(err) return console.log(err);
              console.log(result)
        })

      }catch(e){
         console.log("error while converting",e)
    }
}

GenratePdf("PDF","/","index.html","cert_sample")