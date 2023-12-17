'use strict';
function car(){
    var userorder = prompt('please enter the model car year')
    while (userorder<2000 || userorder>2025){
        userorder = prompt('please enter a car model after 2000')
    }
    var carname = prompt('please type the car model')
    if(userorder>2000 && userorder<2024){

        document.write('<p> here you can find all the options that we have: </P>');
       
    }
}
car();
