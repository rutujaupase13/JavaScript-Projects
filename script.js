let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');//it gives all buttons

let string = "";
let arr = Array.from(buttons);// it returns a arrays of our buttons
arr.forEach(button => {
    button.addEventListener('click', (e) =>{  //it shows when someone click the button 
        if(e.target.innerHTML == '='){
            string = eval(string);          //evaluate is inbuilt in javacsript it gives the evaluated values
            input.value = string;
        } 

       else if(e.target.innerHTML == 'AC'){
        string = "";
        input.value = string;
       }

       else if(e.target.innerHTML == 'DEL'){
        string = string.substring(0, string.length-1);//it return the sub string
        input.value = string;
       }
       else{
        string += e.target.innerHTML;
        input.value = string;
       }
    })

} )