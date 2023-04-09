// Ask user to enter age, sex ( M or F ), marital status ( Y or N ) and then using following rules print their place of service.
// if employee is female, then she will work only in urban areas.

// if employee is a male and age is in between 20 to 40 then he may work in anywhere

// if employee is male and age is in between 40 t0 60 then he will work in urban areas only.

// And any other input of age should print "ERROR".
let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}



let S = readLine();
let A = parseInt(readLine());
if (S == "M")
{   
    if ( 20 < A , A <= 40 )
    {

    console.log("work anywhere")
    }
    
    else if( 40 < A , A <= 60 )

        {
        console.log("work in urban area")
        }
        
        else if (A <= 20 || A > 60)

                {        
                console.log("ERROR")
                }
    
}
else
{
    if (S == "F")
    
    {    
    console.log("work in urban area")
    }
    else 
    console.log("ERROR")
}