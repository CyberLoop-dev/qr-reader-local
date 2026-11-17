export function formatResult(code){
 if(!code)return {text:"No QR code found in this image.",format:null,location:null};
 return {text:String(code.data||""),format:code.version? "QR Code":"QR Code",location:code.location||null};
}
