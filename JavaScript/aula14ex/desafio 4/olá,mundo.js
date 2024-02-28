function tabuada(){
    var nun = document.getElementById('inum');
    var tab = document.getElementById('itab');

    if (nun.value.length == 0) {
        window.alert('Põe um valor ar cabaço!')
    } else {
        var n = Number(nun.value)
        var c = 1
        tab.innerHTML = ''
        while (c <=10){
            var item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            tab.appendChild(item);
            c++
        }
    }
}