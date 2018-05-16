/*
$('#input').val('');
$('#output').val('');
$('#pass').val('');
*/
$("#rs").html("42");
$("input").val("");

$("#range").val("42");

$('#input, #range, #bip39es, #bip39en').on("change input paste copy cut keyup keydown select", function() {
  $('#pass').text($("#input").val()).change();
  var md5 = $("#output").val(CryptoJS.SHA256($("#input").val())).change();

  //var md5 = $("#output").val(asmCrypto.SHA256.hex($("#input").val())).change();
  //$("#output").Ascii85.encode($("#input").val());
  //$(ascii85).val();

  var range= parseInt($("#range").val());
  //range = $("#range").val() + 2;
  $('#rs').text(parseInt(range + 2));
  var out = $('#output').val(ascii85.encode($(md5).val()).slice(0, range));
  $('#qrcode').empty();
  
  // Set Size to Match User Input
  $('#qrcode').css({
  'width' : 256,
  'height' : 256
  })
  
  // Generate and Output QR Code
  $('#qrcode').qrcode({width: 256,height: 256,text: $('#output').val()}).change();
  var clipboard = new Clipboard('#ctc');
    clipboard.on('success', function(e) {
    });
    clipboard.on('error', function(e) {
    });
    var clipboard = new Clipboard('#cpCmd');
    clipboard.on('success', function(e) {
    });
    clipboard.on('error', function(e) {
    });
    $("#ownPass").click(function(event){
        event.preventDefault();
        $('#input').val("").prop("disabled", false); // Element(s) are now enabled.
     });
     
  
});
$("#bip39en").bind("click", function() {
    var m = new Mnemonic("english");
    var words = m.generate();
    $("#input").val(words).change();
   
  }).change();
  $("#bip39es").bind("click", function() {
    var m = new Mnemonic("spanish");
    var words = m.generate();
    $("#input").val(words).change();
  
  }).change();
  $("#pdf").bind("click", function() {

    $('header, .input-field, #length, #qrcode, #cmdPrint').printThis({
      printDelay:2000,
      importCSS: true,
      loadCSS: "../css/printThis.css",
      header: "",
      base: true,
      canvas:true
  })
}).change();
$('#range').on("change input", function(){
$('#amount').val($(this).val());
})
      
     
      