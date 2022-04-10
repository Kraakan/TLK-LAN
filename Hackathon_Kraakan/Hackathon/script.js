let n = 0;
document.getElementById("start").addEventListener("click", function(){generate(document.getElementById("n").value)});

function generate(n){
    if (isNaN(n) || n<=0){
        document.getElementById("show").innerHTML="Type a number >0";
    }
    else document.getElementById("show").innerHTML="";

// Array med svaret
let lines = new Array(Number(n));

// ch = character, l = line
let ch = 0;
let l = 0;

// Slumpvalt X eller O om valet är fritt
let cointoss = "";

// Det här printas som svar
let returnstring="";

// Koordinater som används för att kolla olika värden i arrayen
let x=ch;
let y=l;

// Hörnen som ska kollas
let a = "";
let b = "";
let c = "";
let d = "";

// Tar bort felmeddelande om det finns
document.getElementById("error").innerHTML="";

// Hur många gånger algoritmen har loopat bakåt för att korrigera fel
let loopcount = 0;

// Hur många gånger den får loopa innan den avbryts
let looplimit = document.getElementById("limiter").value;

while (ch<n && l<n) {



    returnstring="";
    if (Math.round(Math.random())==1) cointoss = "X";
    else cointoss = "O";
    // debug: console.log(cointoss);


if (l==0||ch==0){
    if (lines[l] === undefined) lines[l]=cointoss;
    else lines[l] = replacechar(lines[l], ch, cointoss);
}
else{
    x=ch-1;
    y=l-1;

    a = "";

while (x>=0 && y>=0){


    b= lines[l].charAt(x);
    c= lines[y].charAt(x);
    d= lines[y].charAt(ch);

    if (b==c && c==d){
        if (b==a){
            
            console.log("Error at: line: "+l+", column"+ch+", kvadrat "+Number(l-y)+"x"+Number(ch-x));
            console.log(a+b+c+d);
            
            l=x;
            ch=y;
            if (loopcount>looplimit) {
                for (i=0;i<lines.length;i++){
                    for (i=0;i<n;i++){
                        returnstring += lines[i];
                        returnstring += "<br>";
                    }
                }
                document.getElementById("show").innerHTML=returnstring;
                document.getElementById("error").innerHTML+=" Abort!<br>Den här koden är ganska trög, "+
                "men den borde inte tillåta att några felaktiga mönster ritas.<br>"+
                "Om du vill kan du prova att höja antalet försök, men OBS. att det börjar äta minne ganska snabbt!";
                return;
            }
            
            if (loopcount>0) document.getElementById("error").innerHTML=loopcount+" justeringar genomförda.";
            loopcount++;

            a = flip(lines[y].charAt(x));
            for (i = l; i<n;i++){
                for (j=ch;j<n;j++){
                    if (lines[i] === undefined) break;
                    lines[i]=lines[i].slice(0,j);
                }
            }
            break;
        }
        else if (b=="X"){
            if (lines[l] === undefined) lines[l]="O";
            a="O";
        }
        else if (b=="O"){
            a="X";
        }
    }

    x--;
    y--;
}
if (a =="") a = cointoss;
if (lines[l] === undefined) lines[l]=a;
else lines[l] = replacechar(lines[l], ch, a);
}

if (ch>l){
    l++;
    if (lines[l] === undefined) ch=0;
    // Här uppstår fel då griden gås igenom igen
    // Antingen behövs annorlunda logik här, eller så måste gamla data raderas då algoritmen går tillbaka 
    // (besvärligt med strings)
    else if (ch>lines[l].length) ch=lines[l].length;
}
else if (ch==l){

    l=0;
    ch++;
}
else {

    ch++;
}

}
// debug: console.log(lines);
for (i=0;i<lines.length;i++){
    for (i=0;i<n;i++){
        returnstring += lines[i];
        returnstring += "<br>";
    }
}
document.getElementById("show").innerHTML=returnstring;
}

function flip(str){
    if (str=="X"){
        return "O";
    }
    else return "X"
}

function replacechar(str, index, newchar){
return str.substr(0, index) + newchar + str.substr(index+1);
}

function show(str){

    
}