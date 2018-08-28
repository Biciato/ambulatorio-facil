$(document).ready(function(){     

    // Inicialização do DATATable do MDB 
    $('.table').DataTable();
    $('.dataTables_length').addClass('bs-select');

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
});
  