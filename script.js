
$(document).ready(() => {

    $('.retorno').hide()
    //Fechar o consulta
    $('.retorno-span').on('click', function(){
        $('.retorno').fadeOut('slow')
    })
    

    //Niveis
    var n = document.getElementById('n')
    //Quantas vezes
    var v = document.getElementById('v')
    //Botão
    var btn = document.getElementById('btn')
    //Dia , mês e ano dos selects
    var dia = document.getElementById('dia')
    var mes = document.getElementById('mes')
    var ano = document.getElementById('ano')


    btn.addEventListener('click', () => {


        if (n.value == "" && v.value == "") {
            var info = document.getElementById('info')
            info.innerText = 'Selecione todos os campos!'
        } else {
            $('.retorno').show()
            //Inicializando as datas através das capturas
            let dataEspecifica = new Date(ano.value, mes.value, dia.value);
            //Transformando as data em milisegundos
            let timestamp = dataEspecifica.getTime();
            //Multiplicando os dias por milisegundos
            let diasMilissegundos = n.value * 86400000;
            let diasMilissegundos2 = (n.value * 86400000 * 2);
            let diasMilissegundos3 = (n.value * 86400000 * 3);
            //Recebendo os resultados de acordo com os níveis
            let novoTimestamp = timestamp + diasMilissegundos;
            let novoTimestamp2 = timestamp + diasMilissegundos2;
            let novoTimestamp3 = timestamp + diasMilissegundos3;

            //Formatando as datas para padrão brasileiro
            //1x
            let novaData = new Date(novoTimestamp);
            let diaFormatado = novaData.getDate().toString().padStart(2, '0');
            let mesFormatado = (novaData.getMonth() + 1).toString().padStart(2, '0');
            let anoFormatado = novaData.getFullYear().toString();
            let dataFormatada1 = `${diaFormatado}/${mesFormatado}/${anoFormatado}`;
            console.log(dataFormatada1)

            //2x
            let novaData2 = new Date(novoTimestamp2);
            let diaFormatado2 = novaData2.getDate().toString().padStart(2, '0');
            let mesFormatado2 = (novaData2.getMonth() + 1).toString().padStart(2, '0');
            let anoFormatado2 = novaData2.getFullYear().toString();
            let dataFormatada2 = `${diaFormatado2}/${mesFormatado2}/${anoFormatado2}`;

            //3x
            let novaData3 = new Date(novoTimestamp3);
            let diaFormatado3 = novaData3.getDate().toString().padStart(2, '0');
            let mesFormatado3 = (novaData3.getMonth() + 1).toString().padStart(2, '0');
            let anoFormatado3 = novaData3.getFullYear().toString();
            let dataFormatada3 = `${diaFormatado3}/${mesFormatado3}/${anoFormatado3}`;


            var mostrarData = document.getElementById('res1')
            var mostrarData2 = document.getElementById('res2')
            var mostrarData3 = document.getElementById('res3')
            var msgRetorno = document.getElementById('msgRetorno')

            //Enviando para a view
            if (v.value == 1) {
                msgRetorno.innerHTML = ''
                mostrarData.innerText = 'Data de vencimento: \n \n ' + dataFormatada1
                mostrarData2.innerText = ''
                mostrarData3.innerText = ''
            } else if (v.value == 2) {
                msgRetorno.innerHTML = ''
                mostrarData.innerText = 'Datas de vencimentos \n\nPrimeiro boleto dia: ' + dataFormatada1
                mostrarData2.innerText = 'Segundo boleto dia: ' + dataFormatada2
                mostrarData3.innerText = ''

            } else {
                msgRetorno.innerHTML = ''
                mostrarData.innerText = 'Datas de vencimento \n\nPrimeiro boleto dia: ' + dataFormatada1
                mostrarData2.innerText = 'Segundo boleto dia: ' + dataFormatada2
                mostrarData3.innerText = 'Terceiro boleto dia: ' + dataFormatada3
            }

        }
    })


})
