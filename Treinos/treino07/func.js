function check(){
    var checkBox = document.querySelector('input#check');
    var container = document.querySelector('div.container');

    if(checkBox.checked){
        document.body.style.backgroundColor='rgb(20, 20, 20)';
        document.body.style.transition='0.5s'
        container.style.cssText='background-color:rgb(34,34,34); border:5px solid rgba(10, 10, 10, 0.5); box-shadow:0px 0px 10px rgba(50, 50, 253, 0.562); transition:0.5s;';
    } else {
        document.body.style.backgroundColor='white';
        container.style.cssText='background-color:rgb(214, 214, 214); '
    }
}