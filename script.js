
function  validadorCPF(){
    var input = document.getElementById('floatingInput').value;
    
    if(input.length == 0){
        alert("Por favor, insira seu CPF!");
        var protocolo = document.getElementById("protocolo1").innerHTML;
        if(protocolo != " "){
        protocolo = " ";
        document.getElementById("protocolo1").innerHTML = protocolo;
        }

    }
    else if(input.length > 0 && input.length < 11){
        alert("Digite um CPF válido!");
        var protocolo = document.getElementById("protocolo1").innerHTML;
        if(protocolo != " "){
        protocolo = " ";
        document.getElementById("protocolo1").innerHTML = protocolo;
        }
    }
    
    

    if(input.length == 11){
        geradorProtocolo()
        radioEscolhido();
        geradorData();
        desfazRadio(); 
        limparInput();  
    }
   
}


function geradorProtocolo(){
    var protocolo = document.getElementById("protocolo1").innerHTML;
    if(protocolo != " "){
        protocolo = " ";
        document.getElementById("protocolo1").innerHTML = protocolo;
    }
    var data = new Date();
    var protocoloNum = (" 0" + data.getDate()).substr(-2)+(" 0" + (data.getMonth() + 1)).substr(-2)+data.getFullYear()+Math.floor(1000 + Math.random() * 9000);

    stringProto = protocolo + protocoloNum;

    if(document.getElementById("flexRadioDefault1").checked == true){
        document.getElementById("protocolo1").innerHTML = stringProto;
    }
    else if(document.getElementById("flexRadioDefault2").checked == true){
        document.getElementById("protocolo1").innerHTML = stringProto;
    }
    
    if(document.getElementById("flexRadioDefault1").checked == false && document.getElementById("flexRadioDefault2").checked == false){
        alert("Por favor, escolha o tipo de atendimento!");
    }  
}

function generateRan(){
    var max = 500;
    var random = [];
    for(var i = 0;i<max ; i++){
        var temp = Math.floor(Math.random()*max);
        if(random.indexOf(temp) == -1){
            random.push(temp);
        }
        else{
            i--;
        }
        return temp;
    }   
}

function radioEscolhido(){
  var senha = document.getElementById('nSenha').innerHTML;
  if(document.getElementById("flexRadioDefault1").checked == true){
      senha = 'CN' + generateRan();
      document.getElementById('nSenha').innerHTML = senha;
    }
  else if(document.getElementById("flexRadioDefault2").checked == true){
      senha = 'AA' + generateRan();
      document.getElementById('nSenha').innerHTML = senha;
    }
    limparInput();
}

function desfazRadio(){
    if(document.getElementById("flexRadioDefault1").checked == true){
        document.getElementById("flexRadioDefault1").checked  = false;
    }
    else if(document.getElementById("flexRadioDefault2").checked == true){
        document.getElementById("flexRadioDefault2").checked  = false;
    }
}

function dataAtualFormatada(){
    let data = new Date(),
        dia  = data.getDate().toString().padStart(2, '0'),
        mes  = (data.getMonth()+1).toString().padStart(2, '0'),
        ano  = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
}

function horaAtualFormatada(){
    let horario = new Date(),
    hora = horario.getHours().toString().padStart(2, '0'),
    minutos = horario.getMinutes().toString().padStart(2, '0'),
    segundos = horario.getSeconds().toString().padStart(2, '0');
    return `${hora}:${minutos}:${segundos}`;
}

function geradorData(){
    var data = new Date();
    /*var dia = data.getDay();
    var mes = data.getMonth();
    var ano = data.getFullYear();*/
    var hora = data.getHours();
    var min = data.getMinutes();
    var second = data.getSeconds();

    /*var str_data = dia + '/' + (mes+1) + '/' + ano;*/
    //var str_hora  = hora + ':' + min + ':' + second;

    var stringHora = document.getElementById("hora").innerHTML;

    if(stringHora != " "){
        stringHora = " ";
        stringHora =  dataAtualFormatada() + ' ' + horaAtualFormatada();

        if(document.getElementById("flexRadioDefault1").checked == true){
            document.getElementById("hora").innerHTML = stringHora;
        }
        else if(document.getElementById('flexRadioDefault2').checked == true){
            document.getElementById("hora").innerHTML = stringHora;
        }
    }
}

function limparInput(){
    var input = document.getElementById('floatingInput').value;
    if(input != ""){
        input = "";
       document.getElementById('floatingInput').value = input;
    }
}

