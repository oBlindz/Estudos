function calc() {
    var med = document.getElementById('imedida');
    var met = document.getElementById('imétrica');
    var pote = document.getElementById('ipotência');

    var km = document.getElementById('KM');
    var hm = document.getElementById('HM');
    var dam = document.getElementById('DAM');
    var m = document.getElementById('METRO');
    var dm = document.getElementById('DM');
    var cm = document.getElementById('CM');
    var mm = document.getElementById('MM');

    var n = Number(med.value);
    km.innerHTML = 'KM: ';
    hm.innerHTML = 'HM: ';
    dam.innerHTML = 'DAM: ';
    m.innerHTML = 'M: ';
    dm.innerHTML = 'DM: ';
    cm.innerHTML = 'CM: ';
    mm.innerHTML = 'MM: ';

    if (med.value === '') {
        window.alert('[ERRO] Medida inválida, coloque um valor e tente novamente!');
    } else {
        if (met.value === 'KM' && pote.value === 'Normal') {
            km.innerHTML += `${n} km`;
            hm.innerHTML += `${n * 10} hm`;
            dam.innerHTML += `${n * 100} dam`;
            m.innerHTML += `${n * 1000} m`;
            dm.innerHTML += `${n * 10000} dm`;
            cm.innerHTML += `${n * 100000} cm`;
            mm.innerHTML += `${n * 1000000} mm`;
        } else if (met.value === 'HM' && pote.value === 'Normal') {
            km.innerHTML += `${n / 10} km`;
            hm.innerHTML += `${n} hm`;
            dam.innerHTML += `${n * 10} dam`;
            m.innerHTML += `${n * 100} m`;
            dm.innerHTML += `${n * 1000} dm`;
            cm.innerHTML += `${n * 10000} cm`;
            mm.innerHTML += `${n * 100000} mm`;
        } else if (met.value === 'DAM' && pote.value === 'Normal') {
            km.innerHTML += `${n / 100} km`;
            hm.innerHTML += `${n / 10} hm`;
            dam.innerHTML += `${n} dam`;
            m.innerHTML += `${n * 10} m`;
            dm.innerHTML += `${n * 100} dm`;
            cm.innerHTML += `${n * 1000} cm`;
            mm.innerHTML += `${n * 10000} mm`;
        } else if (met.value === 'METRO' && pote.value === 'Normal') {
            km.innerHTML += `${n / 1000} km`;
            hm.innerHTML += `${n / 100} hm`;
            dam.innerHTML += `${n / 10} dam`;
            m.innerHTML += `${n} m`;
            dm.innerHTML += `${n * 10} dm`;
            cm.innerHTML += `${n * 100} cm`;
            mm.innerHTML += `${n * 1000} mm`;
        } else if (met.value === 'DM' && pote.value === 'Normal') {
            km.innerHTML += `${n / 10000} km`;
            hm.innerHTML += `${n / 1000} hm`;
            dam.innerHTML += `${n / 100} dam`;
            m.innerHTML += `${n / 10} m`;
            dm.innerHTML += `${n} dm`;
            cm.innerHTML += `${n * 10} cm`;
            mm.innerHTML += `${n * 100} mm`;
        } else if (met.value === 'CM' && pote.value === 'Normal') {
            km.innerHTML += `${n / 100000} km`;
            hm.innerHTML += `${n / 10000} hm`;
            dam.innerHTML += `${n / 1000} dam`;
            m.innerHTML += `${n / 100} m`;
            dm.innerHTML += `${n / 10} dm`;
            cm.innerHTML += `${n} cm`;
            mm.innerHTML += `${n * 10} mm`;
        } else if (met.value === 'MM' && pote.value === 'Normal') {
            km.innerHTML += `${n / 1000000} km`;
            hm.innerHTML += `${n / 100000} hm`;
            dam.innerHTML += `${n / 10000} dam`;
            m.innerHTML += `${n / 1000} m`;
            dm.innerHTML += `${n / 100} dm`;
            cm.innerHTML += `${n / 10} cm`;
            mm.innerHTML += `${n} mm`;
        }
    } if (med.value === '') {
        window.alert('[ERRO] Medida inválida, coloque um valor e tente novamente!');
    } else {
        if (met.value === 'KM' && pote.value === 'AoQuadrado') {
            km.innerHTML += `${n} km²`;
            hm.innerHTML += `${n * 100} hm²`;
            dam.innerHTML += `${n * 10000} dam²`;
            m.innerHTML += `${n * 1000000} m²`;
            dm.innerHTML += `${n * 100000000} dm²`;
            cm.innerHTML += `${n * 10000000000} cm²`;
            mm.innerHTML += `${n * 1000000000000} mm²`;
        } else if (met.value === 'HM' && pote.value === 'AoQuadrado') {
            km.innerHTML += `${n / 100} km²`;
            hm.innerHTML += `${n} hm²`;
            dam.innerHTML += `${n * 100} dam²`;
            m.innerHTML += `${n * 10000} m²`;
            dm.innerHTML += `${n * 1000000} dm²`;
            cm.innerHTML += `${n * 100000000} cm²`;
            mm.innerHTML += `${n * 10000000000} mm²`;
        } else if (met.value === 'DAM' && pote.value === 'AoQuadrado') {
            km.innerHTML += `${n / 10000} km²`;
            hm.innerHTML += `${n / 100} hm²`;
            dam.innerHTML += `${n} dam²`;
            m.innerHTML += `${n * 100} m²`;
            dm.innerHTML += `${n * 10000} dm²`;
            cm.innerHTML += `${n * 1000000} cm²`;
            mm.innerHTML += `${n * 100000000} mm²`;
        } else if (met.value === 'METRO' && pote.value === 'AoQuadrado') {
            km.innerHTML += `${n / 1000000} km²`;
            hm.innerHTML += `${n / 10000} hm²`;
            dam.innerHTML += `${n / 1000} dam²`;
            m.innerHTML += `${n} m²`;
            dm.innerHTML += `${n * 100} dm²`;
            cm.innerHTML += `${n * 10000} cm²`;
            mm.innerHTML += `${n * 1000000} mm²`;
        } else if (met.value === 'DM' && pote.value === 'AoQuadrado') {
            km.innerHTML += `${n / 100000000} km²`;
            hm.innerHTML += `${n / 1000000} hm²`;
            dam.innerHTML += `${n / 100000} dam²`;
            m.innerHTML += `${n / 10000} m²`;
            dm.innerHTML += `${n} dm²`;
            cm.innerHTML += `${n * 100} cm²`;
            mm.innerHTML += `${n * 10000} mm²`;
        } else if (met.value === 'CM' && pote.value === 'AoQuadrado') {
            km.innerHTML += `${n / 10000000000} km²`;
            hm.innerHTML += `${n / 100000000} hm²`;
            dam.innerHTML += `${n / 10000000} dam²`;
            m.innerHTML += `${n / 1000000} m²`;
            dm.innerHTML += `${n / 100000} dm²`;
            cm.innerHTML += `${n} cm²`;
            mm.innerHTML += `${n * 100} mm²`;
        } else if (met.value === 'MM' && pote.value === 'AoQuadrado') {
            km.innerHTML += `${n / 1000000000000} km²`;
            hm.innerHTML += `${n / 10000000000} hm²`;
            dam.innerHTML += `${n / 1000000000} dam²`;
            m.innerHTML += `${n / 100000000} m²`;
            dm.innerHTML += `${n / 10000000} dm²`;
            cm.innerHTML += `${n / 1000000} cm²`;
            mm.innerHTML += `${n} mm²`;
        }
    } if (med.value === '') {
        window.alert('[ERRO] Medida inválida, coloque um valor e tente novamente!');
    } else {
        if (met.value === 'KM' && pote.value === 'AoCubo') {
            km.innerHTML += `${n} km³`;
            hm.innerHTML += `${n * 1000} hm³`;
            dam.innerHTML += `${n * 1000000} dam³`;
            m.innerHTML += `${n * 1000000000} m³`;
            dm.innerHTML += `${n * 1000000000000} dm³`;
            cm.innerHTML += `${n * 1000000000000000} cm³`;
            mm.innerHTML += `${n * 1000000000000000000} mm³`;
        } else if (met.value === 'HM' && pote.value === 'AoCubo') {
            km.innerHTML += `${n / 1000} km³`;
            hm.innerHTML += `${n} hm³`;
            dam.innerHTML += `${n * 1000} dam³`;
            m.innerHTML += `${n * 1000000} m³`;
            dm.innerHTML += `${n * 1000000000} dm³`;
            cm.innerHTML += `${n * 1000000000000} cm³`;
            mm.innerHTML += `${n * 1000000000000000} mm³`;
        } else if (met.value === 'DAM' && pote.value === 'AoCubo') {
            km.innerHTML += `${n / 1000000} km³`;
            hm.innerHTML += `${n / 1000} hm³`;
            dam.innerHTML += `${n} dam³`;
            m.innerHTML += `${n * 1000} m³`;
            dm.innerHTML += `${n * 1000000} dm³`;
            cm.innerHTML += `${n * 1000000000} cm³`;
            mm.innerHTML += `${n * 1000000000000} mm³`;
        } else if (met.value === 'METRO' && pote.value === 'AoCubo') {
            km.innerHTML += `${n / 1000000000} km³`;
            hm.innerHTML += `${n / 1000000} hm³`;
            dam.innerHTML += `${n / 1000} dam³`;
            m.innerHTML += `${n} m³`;
            dm.innerHTML += `${n * 1000} dm³`;
            cm.innerHTML += `${n * 1000000} cm³`;
            mm.innerHTML += `${n * 1000000000} mm³`;
        } else if (met.value === 'DM' && pote.value === 'AoCubo') {
            km.innerHTML += `${n / 1000000000000} km³`;
            hm.innerHTML += `${n / 1000000000} hm³`;
            dam.innerHTML += `${n / 1000000} dam³`;
            m.innerHTML += `${n / 1000} m³`;
            dm.innerHTML += `${n} dm³`;
            cm.innerHTML += `${n * 1000} cm³`;
            mm.innerHTML += `${n * 1000000} mm³`;
        } else if (met.value === 'CM' && pote.value === 'AoCubo') {
            km.innerHTML += `${n / 1000000000000000} km³`;
            hm.innerHTML += `${n / 1000000000000} hm³`;
            dam.innerHTML += `${n / 1000000000} dam³`;
            m.innerHTML += `${n / 1000000} m³`;
            dm.innerHTML += `${n / 1000} dm³`;
            cm.innerHTML += `${n} cm³`;
            mm.innerHTML += `${n * 1000} mm³`;
        } else if (met.value === 'MM' && pote.value === 'AoCubo') {
            km.innerHTML += `${n / 1000000000000000000} km³`;
            hm.innerHTML += `${n / 1000000000000000} hm³`;
            dam.innerHTML += `${n / 1000000000000} dam³`;
            m.innerHTML += `${n / 1000000000} m³`;
            dm.innerHTML += `${n / 1000000} dm³`;
            cm.innerHTML += `${n / 1000} cm³`;
            mm.innerHTML += `${n} mm³`;
        }
    }
}