let n=parseInt(prompt("Enter the value"));

for(let i=1;i<=n;i++){
    for(let j=0;j<i;j++){
        document.write(String.fromCharCode(j+65))
    }
    document.write("<br>")
}