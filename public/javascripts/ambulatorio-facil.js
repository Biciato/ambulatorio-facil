$(document).ready(function(){

    $('.table').DataTable();
    $('.dataTables_length').addClass('bs-select');

    $('#cadastroMenu').hide();
    $('#funcionariosTable').hide();
    $('#funcoesTable').hide();
    $('#examesTable').hide();
    $('#riscoAgentesTable').hide();   
    $('#credenciadosTable').hide();
    $('#segTable').hide();
    $('#medicinaTable').hide();
    $('#atendimentoTable').hide();
  
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
  