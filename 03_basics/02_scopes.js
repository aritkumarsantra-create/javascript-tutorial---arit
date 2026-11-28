// c=300 so here var is exceeding out of block scope and whatever you declare in global scope it will always gives the output of exceeding var block scope 
// if you dont declare the var inside block scope it will still exceed  //   ^                                    
                                                                        //   |
a=100;                                                                        
if(true){                                                               //   |
    let a=10                                                            //   |
    const b=20                                                          //   |
    var c=30       
    console.log("INNER",a);
                                                         //   |
}                                                                       //   |
                                                                        //   |
// console.log(c);------------------------------------------------------------

console.log(a);

/*here whatever will be declared in global scope it will permamnately declared and will give the output 
of global scope variable ,if you have also console.log inside the block scope
 and there is another same variable like global scope with different value then the 
 output will be both of the value of global scope as well as block scope*/

function one(){
    const username = "aritkumar"

    function two(){
        const website = "youtube.com"
        console.log(username); //here child function is asking from parent function which is allowed 
        
    }
    // console.log(website); //here parent function is asking the value from child function which is not allowed

    two()
    
}
//one()

if (true){
    const username="aritkumar"
    if(username==="aritkumar"){
        const website = " youtube"
        console.log(username + website);
        
    }
    //console.log(website);// it will give error because it is outside of its 2nd if scope
    
}

//console.log(username);  here it is outside of its 1st if scope

