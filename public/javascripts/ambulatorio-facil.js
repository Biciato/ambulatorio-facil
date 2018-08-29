$(document).ready(function(){     

    // Inicialização do DATATable do MDB 
    $('.table').DataTable();
    $('.dataTables_length').addClass('bs-select');

    // Inicialização do Material Select  
    $('.mdb-select').material_select();

    // Escondendo as telas do menu
    $('#cadastroMenu').hide();
    $('#funcionariosTable').hide();
    $('#funcoesTable').hide();
    $('#examesTable').hide();
    $('#riscoAgentesTable').hide();   
    $('#credenciadosTable').hide();
    $('#segTable').hide();
    $('#medicinaTable').hide();
    $('#atendimentoTable').hide();
    $('#cadastroFuncForm').hide();
    $('#cadCredForm').hide();
    $('#pessoaJuridRow1').hide();  
    $('#pessoaJuridRow2').hide();  

    //Mascaras dos inputs
    $('#cepFunc').mask('00000-000');
    $('#cepCred').mask('00000-000');
    $('#tel').mask('(00) 0000-0000');
    $('#telCred').mask('(00) 0000-0000');
    $('#telFunc').mask('(00) 0000-0000');
    $('#tel2Func').mask('(00) 0000-0000');
    $('#tel2Cred').mask('(00) 0000-0000');
    $('#celFunc').mask('(00) 00000-0000');
    $('#celCred').mask('(00) 00000-0000');
    $('#cel2Func').mask('(00) 00000-0000');
    $('#cel2Cred').mask('(00) 00000-0000');
    $('#dataNascCred').mask('00/00/0000');
    $('#dataNascFunc').mask('00/00/0000');
    $('#cnpjCred').mask('000.00000/0000-0');
    $('#cnpj').mask('000.00000/0000-0');
    $('#cpf').mask('000.000.000-00');
    $('#cpfFunc').mask('000.000.000-00');
    $('#cpfCred').mask('000.000.000-00');
    $('#rg').mask('00.000.000-0');
    $('#rgFunc').mask('00.000.000-0');
    $('#rgCred').mask('00.000.000-0');

    // Mostrando os links mais interiores dos links do sidenav
    $('a').click(function(){
      var hide = $('#sidenav > ul > li > div').css('display','none');
      if (this.id == "home"){
        hide;
        $(this).siblings().css('display','block');
      }
      if (this.id == "atendimento"){
        hide;
        $(this).siblings().css('display','block');
      }
      if (this.id == "cadastro"){
        hide;
        $(this).siblings().css('display','block');
      }
      if (this.id == "documento"){
        hide;
        $(this).siblings().css('display','block');
      }
      if (this.id == "relImpressos"){
        hide;
        $(this).siblings().css('display','block');
      }
    });

    // Manipulação das telas dentro do NavTab
    $('#home').click(function() {
      $('#cadCredForm').hide();
      $('#cadastroFuncForm').hide();
      $('#atendimentoTable').hide();
      $('#medicinaTable').hide();
      $('#segTable').hide();
      $('#credenciadosTable').hide();
      $('#riscoAgentesTable').hide();   
      $('#examesTable').hide();
      $('#funcoesTable').hide();
      $('#funcionariosTable').hide();
      $('#cadastroMenu').hide();
      $('#cadastroMenuInicial').show();
    });
    
    // Manipulação das telas dentro do NavTab
    $('#minhaEmpresa').click(function() {
      $('#cadCredForm').hide();
      $('#cadastroFuncForm').hide();
      $('#atendimentoTable').hide();
      $('#medicinaTable').hide();
      $('#segTable').hide();
      $('#credenciadosTable').hide();
      $('#riscoAgentesTable').hide();   
      $('#examesTable').hide();
      $('#funcoesTable').hide();
      $('#funcionariosTable').hide();
      $('#cadastroMenuInicial').hide();
      $('#cadastroMenu').show();
    });

     // Manipulação das telas dentro do NavTab 
    $('#funcionarios').click(function() {
      $('#cadCredForm').hide();
      $('#cadastroFuncForm').hide();
      $('#atendimentoTable').hide();
      $('#medicinaTable').hide();
      $('#segTable').hide();
      $('#credenciadosTable').hide();
      $('#riscoAgentesTable').hide();   
      $('#examesTable').hide();
      $('#funcoesTable').hide();
      $('#cadastroMenuInicial').hide();
      $('#cadastroMenu').hide();
      $('#funcionariosTable').show();
    });

    // Manipulação das telas dentro do NavTab
    $('#funcao').click(function() {
      $('#cadCredForm').hide();
      $('#cadastroFuncForm').hide();
      $('#atendimentoTable').hide();
      $('#medicinaTable').hide();
      $('#segTable').hide();
      $('#credenciadosTable').hide();
      $('#riscoAgentesTable').hide();   
      $('#examesTable').hide();
      $('#cadastroMenuInicial').hide();
      $('#cadastroMenu').hide();
      $('#funcionariosTable').hide();
      $('#funcoesTable').show();
    });

    // Manipulação das telas dentro do NavTab
    $('#exames').click(function() {
      $('#cadCredForm').hide();
      $('#cadastroFuncForm').hide();
      $('#atendimentoTable').hide();
      $('#medicinaTable').hide();
      $('#segTable').hide();
      $('#credenciadosTable').hide();
      $('#riscoAgentesTable').hide();   
      $('#cadastroMenuInicial').hide();
      $('#cadastroMenu').hide();
      $('#funcionariosTable').hide();
      $('#funcoesTable').hide();
      $('#examesTable').show();
    });

    // Manipulação das telas dentro do NavTab
    $('#riscoAgentes').click(function() {
      $('#cadCredForm').hide();
      $('#cadastroFuncForm').hide();
      $('#atendimentoTable').hide();
      $('#medicinaTable').hide();
      $('#segTable').hide();
      $('#credenciadosTable').hide();
      $('#cadastroMenuInicial').hide();
      $('#cadastroMenu').hide();
      $('#funcionariosTable').hide();
      $('#funcoesTable').hide();
      $('#examesTable').hide();
      $('#riscoAgentesTable').show();   
    });

    // Manipulação das telas dentro do NavTab
    $('#credenciados').click(function() {
      $('#cadCredForm').hide();
      $('#cadastroFuncForm').hide();
      $('#atendimentoTable').hide();
      $('#medicinaTable').hide();
      $('#segTable').hide();
      $('#cadastroMenuInicial').hide();
      $('#cadastroMenu').hide();
      $('#funcionariosTable').hide();
      $('#funcoesTable').hide();
      $('#examesTable').hide();
      $('#riscoAgentesTable').hide(); 
      $('#credenciadosTable').show();  
    });

    // Manipulação das telas dentro do NavTab

    $('#seg').click(function() {
      $('#cadCredForm').hide();
      $('#cadastroFuncForm').hide();
      $('#atendimentoTable').hide();
      $('#medicinaTable').hide();
      $('#cadastroMenuInicial').hide();
      $('#cadastroMenu').hide();
      $('#funcionariosTable').hide();
      $('#funcoesTable').hide();
      $('#examesTable').hide();
      $('#riscoAgentesTable').hide(); 
      $('#credenciadosTable').hide();  
      $('#segTable').show();
    });

    // Manipulação das telas dentro do NavTab
    $('#med').click(function() {
      $('#cadCredForm').hide();
      $('#cadastroFuncForm').hide();
      $('#atendimentoTable').hide();
      $('#cadastroMenuInicial').hide();
      $('#cadastroMenu').hide();
      $('#funcionariosTable').hide();
      $('#funcoesTable').hide();
      $('#examesTable').hide();
      $('#riscoAgentesTable').hide(); 
      $('#credenciadosTable').hide();  
      $('#segTable').hide();
      $('#medicinaTable').show();
    });

    // Manipulação das telas dentro do NavTab
    $('#atendimento').click(function() {
      $('#cadCredForm').hide();
      $('#cadastroFuncForm').hide();
      $('#cadastroMenuInicial').hide();
      $('#cadastroMenu').hide();
      $('#funcionariosTable').hide();
      $('#funcoesTable').hide();
      $('#examesTable').hide();
      $('#riscoAgentesTable').hide(); 
      $('#credenciadosTable').hide();  
      $('#segTable').hide();
      $('#medicinaTable').hide();
      $('#atendimentoTable').show();
    });

    // Manipulação das telas dentro do NavTab
    $('#addFunc').click(function() {
      $('#cadCredForm').hide();
      $('#cadastroMenuInicial').hide();
      $('#cadastroMenu').hide();
      $('#funcionariosTable').hide();
      $('#funcoesTable').hide();
      $('#examesTable').hide();
      $('#riscoAgentesTable').hide(); 
      $('#credenciadosTable').hide();  
      $('#segTable').hide();
      $('#medicinaTable').hide();
      $('#atendimentoTable').hide();
      $('#cadastroFuncForm').show();
    });

    // Manipulação das telas dentro do NavTab
    $('#addCred').click(function() {
      $('#cadastroMenuInicial').hide();
      $('#cadastroMenu').hide();
      $('#funcionariosTable').hide();
      $('#funcoesTable').hide();
      $('#examesTable').hide();
      $('#riscoAgentesTable').hide(); 
      $('#credenciadosTable').hide();  
      $('#segTable').hide();
      $('#medicinaTable').hide();
      $('#atendimentoTable').hide();
      $('#cadastroFuncForm').hide();
      $('#cadCredForm').show();
    });

    //manipulação do form de credenciados
    $('.form-check-input').click(function(){
      if ($(this).attr('id') == 'pessoaFisica') {
        $('#pessoaJuridRow1').hide();  
        $('#pessoaJuridRow2').hide();  
        $('#pessoaFisicaRow1').show();     
        $('#pessoaFisicaRow2').show();         
      } else if ($(this).attr('id') == 'pessoaJurid') {
        $('#pessoaFisicaRow1').hide();     
        $('#pessoaFisicaRow2').hide();     
        $('#pessoaJuridRow1').show();  
        $('#pessoaJuridRow2').show();  
      }
    });

    // Evento que calcula a idade e joga a idade calculada no campo da idade
    $('#dataNascFunc').keyup(function(){
      if($(this).val().length == 10){

        var mdate = $("#dataNascFunc").val().toString();
        var yearThen = parseInt(mdate.substring(6), 10);
        var monthThen = parseInt(mdate.substring(3,5), 10);
        var dayThen = parseInt(mdate.substring(0,2), 10);

        var today = new Date();
        var birthday = new Date(yearThen, monthThen-1, dayThen);

        var differenceInMilisecond = today.valueOf() - birthday.valueOf();

        var year_age = Math.floor(differenceInMilisecond / 31536000000);

        var idade = $('#idadeLabel');
        idade.css({'font-size': '12.8px','line-weight': '19.2px','float':'left'});
        $('#idadeForm').val(year_age);
        $('#idadeLabel').attr('class','active');
        }
    });

    $('#dataNascCred').keyup(function(){
      if($(this).val().length == 10){

        var mdate = $("#dataNascCred").val().toString();
        var yearThen = parseInt(mdate.substring(6), 10);
        var monthThen = parseInt(mdate.substring(3,5), 10);
        var dayThen = parseInt(mdate.substring(0,2), 10);

        var today = new Date();
        var birthday = new Date(yearThen, monthThen-1, dayThen);

        var differenceInMilisecond = today.valueOf() - birthday.valueOf();

        var year_age = Math.floor(differenceInMilisecond / 31536000000);

        var idade = $('#idadeLabelCred');
        idade.css({'font-size': '12.8px','line-weight': '19.2px','float':'left'});
        $('#idadeFormCred').val(year_age);
        $('#idadeLabelCred').attr('class','active');
        }
    });

});
  