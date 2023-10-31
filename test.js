function mostrarGrid() {
  document.getElementById("grid_iframe").style.height = 360;
  document.getElementById("grid_iframe").style.display = "block";
}

function formSubmit() {
  var numero = document.form["tmp.numero"].value;
  var aditivo = document.form["tmp.aditivo"].value;
  var pedido = document.form["tmp.cod_pedido"].value;
  var exercicio = document.form["tmp.exercicio"].value;

  var opcao_to = document.form["tmp.opcao_to"].value;
  var opcao_pedido = document.form["tmp.opcao_pedido"].value;
  var opcao_aditivo = document.form["tmp.opcao_aditivo"].value;

  var evt = new WIEvent();

  if (
    (opcao_to != "" && numero != "") ||
    (opcao_pedido != "" && pedido != "" && exercicio != "") ||
    (opcao_aditivo != "" && aditivo != "")
  ) {
    if (opcao_to != "") {
      evt.writeobj("tmp.codigo", numero);
      evt.selectdb("evtAditivoTO");
    } else {
      if (opcao_pedido != "") {
        evt.writeobj("tmp.codigo", pedido);
        evt.writeobj("tmp.exercicio", exercicio);
        evt.selectdb("evtAditivoPedido");
      } else {
        if (opcao_aditivo != "") {
          evt.writeobj("tmp.codigo", aditivo);
          evt.selectdb("evtAditivoNum");
        }
      }
    }

    if (evt.rowcount() == 1) {
      evt.go(0);
      var codMensagem = evt.column(1);

      if (codMensagem == "0") {
        document.form["tmp.convenio"].value = false;
        document.form.action = "/sigaintranet_consultas/imprimiraditivo.do";
        document.form.target = "grid_iframe";
        document.form.submit();
        document.form.action = "/sigaintranet/|wi.page.id|.wsp";
        document.form.target = "";
      } else {
        if (codMensagem == "313") mensagem("mensagem.wsp?tmp.cod_msg=313");

        if (codMensagem == "320") mensagem("mensagem.wsp?tmp.cod_msg=320");

        return false;
      }
    } else {
      if (opcao_to != "") mensagem("mensagem.wsp?tmp.cod_msg=256");

      if (opcao_aditivo != "") mensagem("mensagem.wsp?tmp.cod_msg=320");

      if (opcao_pedido != "") mensagem("mensagem.wsp?tmp.cod_msg=367");
    }

    return true;
  } else {
    mensagem("mensagem.wsp?tmp.cod_msg=179");
    return false;
  }
}

function disableOptions(valor) {
  var opcao_to = document.form["tmp.opcao_to"].value;
  if (opcao_to == "S") {
    document.form["tmp.numero"].required = "true";
    document.form["tmp.cod_pedido"].required = "false";
    document.form["tmp.exercicio"].required = "false";
    document.form["tmp.aditivo"].required = "false";

    document.form["tmp.numero"].disabled = "";
    document.form["tmp.cod_pedido"].disabled = "true";
    document.form["tmp.exercicio"].disabled = "true";
    document.form["tmp.aditivo"].disabled = "true";

    document.form["tmp.opcao_pedido"].value = "";
    document.form["tmp.opcao_aditivo"].value = "";
  }

  var opcao_pedido = document.form["tmp.opcao_pedido"].value;
  if (opcao_pedido == "S") {
    document.form["tmp.numero"].required = "false";
    document.form["tmp.cod_pedido"].required = "true";
    document.form["tmp.exercicio"].required = "true";
    document.form["tmp.aditivo"].required = "false";

    document.form["tmp.numero"].disabled = "true";
    document.form["tmp.cod_pedido"].disabled = "";
    document.form["tmp.exercicio"].disabled = "";
    document.form["tmp.aditivo"].disabled = "true";

    document.form["tmp.opcao_to"].value = "";
    document.form["tmp.opcao_aditivo"].value = "";
  }

  var opcao_aditivo = document.form["tmp.opcao_aditivo"].value;
  if (opcao_aditivo == "S") {
    document.form["tmp.numero"].required = "false";
    document.form["tmp.cod_pedido"].required = "false";
    document.form["tmp.exercicio"].required = "false";
    document.form["tmp.aditivo"].required = "true";

    document.form["tmp.numero"].disabled = "true";
    document.form["tmp.cod_pedido"].disabled = "true";
    document.form["tmp.exercicio"].disabled = "true";
    document.form["tmp.aditivo"].disabled = "";

    document.form["tmp.opcao_pedido"].value = "";
    document.form["tmp.opcao_to"].value = "";
  }
}

function mensagemPagina(codigo) {
  mensagemRetorno(codigo);
}

function abrirAditivoOutro() {
  var evt = new WIEvent();
  var aditivo = document.form["tmp.aditivo"].value;
  if(aditivo){
    var type;
    evt.writeobj("tmp.aditivo", aditivo);
    evt.selectdb("evtAditivoSelectType");
    evt.go(0);
    var type = evt.column(1);
    if (type) {
      document.form["tmp.tipo_aditivo"].value = type;
      alert(type);
    }
  }
}

document.getElementById('Text15').addEventListener('click', ()=>{
  abrirAditivoOutro();
});
