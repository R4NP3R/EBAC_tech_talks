AOS.init();

const dataDoEvento = new Date("Dec 12, 2023 19:00:00");
const timeStampEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaDoEvento = timeStampEvento - timeStampAtual;

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaDoEvento / diasEmMs);
    const horasAteOEvento = Math.floor((distanciaDoEvento % diasEmMs) / horasEmMs);
    const minutosAteOEvento = Math.floor((distanciaDoEvento % horasEmMs) / minutosEmMs);
    const segundoAteOEvento = Math.floor((distanciaDoEvento % minutosEmMs) / 1000);


    if (distanciaDoEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('expirado').innerHTML = `já começou`
        document.getElementById('contador').innerHTML = ``
    } else {
        document.getElementById('expirado').innerHTML = `começa em`
        document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundoAteOEvento}s`
    }
}, 1000)