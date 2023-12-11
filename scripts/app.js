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
    let answer = new Function(getValue);  // this has to be modified as it doesnt work the same way as eval()
    document.getElementById("solution").value = answer;
}