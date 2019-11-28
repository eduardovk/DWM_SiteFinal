
function validaC(){
    var nomeC = document.getElementById("name_completo").value;
    var emailC = document.getElementById("email_contato").value;
    var msgC = document.getElementById("msg").value;

    if(nomeC =="" || emailC =="" || msgC ==""){
        alert(" ERRO : Campos em branco!!")

    }else{
    

    alert("Agradecemos pelo contato Srº" + nomeC);
    }
}






function validaCad(){

    var nomeCad = document.getElementById("name").value;
    var emailCad = document.getElementById("email").value;
    var sobrenome = document.getElementById("sobrenome").value;
    var cpf = document.getElementById("cpf").value;
    var endereco = document.getElementById("endereco").value;
    var num = document.getElementById("num").value;
    var cep = document.getElementById("cep").value;
    var tel1 = document.getElementById("tel1").value;
    

    if(nomeCad =="" || emailCad ==""||sobrenome==""||cpf==""||endereco=="" ||num==""||cep=="" || tel1==""){
        alert(" ERRO : Campos em branco!!")
    }else{
        alert("Cadastro efetuado com sucesso!! agradecemo pela preferencia Srº" + nomeCad);
    }
}


       