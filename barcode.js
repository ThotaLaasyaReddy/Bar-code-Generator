let input = document.getElementById("input");
let btn = document.getElementById("btn");
btn.addEventListener("click",()=>{
    JsBarcode("#barcode", input.value ,{
        format: "code128",
        displayValue: false,
        fontSize:25,
        lineColor:'#111',
    });
});
window.onload=(event)=>{
    input.value="";
};