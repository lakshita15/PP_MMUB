 /*****NESTED FUNC***** */
 function fn()
{
    console.log(`Hi my name is ${this.person}`);
    function abc()
    {
        console.log(`Hi my name is ${this.person}`); //undefined as here this= window
    }
    abc(); // this is called nrmlly this = window object
}

let obj = {
    person:'Lakshita',
 //upr ke fn ko attatch fnc me  krdia
    func:fn
};
obj.func(); // as called through object so here fn has this equal to object 

//Now if i want abc this = fnc this =>use bind
//*********************OUTPUT**************************** */
// Hi my name is Lakshita
// Hi my name is undefined

/*************************************************************BIND FUNC*************************************************************/

function fn()
{
    console.log(`Hi my name is ${this.person}`);
    function abc()
    {
        console.log(`Hi my name is ${this.person}`);
    }
    //Nothing changed but the func on which bind is called it's this will have changes
    //When bind is called on abc ret-->this= obj as fn ka this is obj so abc ka this = obj
    let ret = abc.bind(this);
    ret();
}
let obj = {
    person:'Lakshi',
    func:fn
};
//Funnction called through object
obj.func();

//*********************OUTPUT**************************** */
// Hi my name is Lakshi
// Hi my name is Lakshi

/*************************************************************ARROW FUNC*************************************************************/

function fn()
{
    console.log(`Hi my name is ${this.person}`);
    let abc=()=>
    {
        console.log(`Hi my name is ${this.person}`); //abc this depends on fn ka this //lexical enviroment // abc's this is equal to fn's this
    }
    abc();
   
}
let obj = {
    person:'Lakshi',
    func:fn
};
obj.func();
//*********************OUTPUT**************************** */
// Hi my name is Lakshi
// Hi my name is Lakshi
