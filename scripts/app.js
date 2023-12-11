// alert("hellos");

//This function shows whats on the input display
function show(value){
    document.getElementById("solution").value += value;
};


//Clear the input display view
function clearView(){
    document.getElementById("solution").value = "";
}

//This function will calculate whats in the input display
function calculate(){
    let getValue = document.getElementById("solution").value;
    let answer = eval(getValue);
    document.getElementById("solution").value = answer;
}