// Ini JS
let iskelilingvisible = false; //Keliling is Hide
function hideOrShow() {
    if (iskelilingvisible == false) {
        iskelilingvisible = true;
        document.getElementById('luas-section').style.display = 'none';
        document.getElementById('keliling-section').style.display = 'block';
    } else {
        iskelilingvisible = false;
        document.getElementById('luas-section').style.display = 'block';
        document.getElementById('keliling-section').style.display = 'hide';
}
    }