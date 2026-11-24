// c=300 so here var is exceeding out of block scope and whatever you declare in global scope it will always gives the output of exceeding var block scope 
// if you dont declare the var inside block scope it will still exceed  //   ^                                    
                                                                        //   |
a=100;                                                                        
if(true){                                                               //   |
    let a=10                                                            //   |
    const b=20                                                          //   |
    var c=30       
    console.log(a);
                                                         //   |
}                                                                       //   |
                                                                        //   |
// console.log(c);------------------------------------------------------------

console.log(a);

/*here whatever will be declared in global scope it will permamnately declared and will give the output 
of global scope variable ,if you have also console.log inside the block scope
 and there is another same variable like global scope with different value then the 
 output will be both of the value of global scope as well as block scope*/