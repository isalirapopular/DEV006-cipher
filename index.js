import cipher from './cipher.js';
// CIFRADO //
const BtnCifrar = document.getElementById('BtnCifrar');
BtnCifrar.addEventListener('click', function () {
  const NombreUsuaria = document.getElementById('NomUsuaria').value;
  console.log(NombreUsuaria)
  const ObtenerInfoMensaje = document.getElementById('MensajeUsuaria').value;
  const Offset = document.getElementById('offset').value;
  console.log(Offset)
  const MsjeCifrado = cipher.encode(Offset, ObtenerInfoMensaje);
  console.log(MsjeCifrado)
  const result = document.getElementById('MensajeCifrado')
  console.log(result)
  result.value = MsjeCifrado;
})
// DECIFRADO //
const BtnDescifrar = document.getElementById("BtnDescifrar")
BtnDescifrar.addEventListener('click', function () {
  const ObtenerInfoMensaje2 = document.getElementById('MensajeCifrado').value;
  const Offset = document.getElementById('offset').value;
  console.log(Offset)
  const MsjeDecifrado = cipher.decode(Offset, ObtenerInfoMensaje2);
  console.log(MsjeDecifrado)
  const result2 = document.getElementById('MensajeDecifrado')
  console.log(result2)
  result2.value = MsjeDecifrado;
});

