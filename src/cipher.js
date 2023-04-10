const cipher = {
  encode: function (Offset, ObtenerInfoMensaje) {
    if (typeof Number(Offset) !== "number" || typeof ObtenerInfoMensaje !== "string") {
      throw TypeError("The arguments must be a string and a number.");
    }
    let result = "";
    for (let i = 0; i < ObtenerInfoMensaje.length; i++) {
      const letterASCII = ObtenerInfoMensaje[i].charCodeAt();
      if (letterASCII >= 65 && letterASCII <= 90) {
        result += String.fromCharCode(((letterASCII - 65 + Number(Offset)) % 26) + 65);
      } else if (letterASCII >= 97 && letterASCII <= 122) {
        result += String.fromCharCode(((letterASCII - 97 + Number(Offset)) % 26) + 97);
      } else {
        result += ObtenerInfoMensaje[i];
      }
    }
    return result;
  },
  decode: function (Offset, ObtenerInfoMensaje2) {
    if (typeof Number(Offset) !== "number" || typeof ObtenerInfoMensaje2 !== "string") {
      throw TypeError("The arguments must be a string and a number.");
    }
    while (Offset > 26) { //indagar sobre esto
      Offset -= 26;
      console.log("while")
    }
    let result2 = "";
    for (let i = 0; i <= ObtenerInfoMensaje2.length; i++) {
      console.log(ObtenerInfoMensaje2)
      const letterASCII = ObtenerInfoMensaje2.charCodeAt(i);
      if (letterASCII >= 65 && letterASCII <= 90) {
        result2 += String.fromCharCode(((letterASCII - 65 - Number(Offset) + 26) % 26) + 65);
      } else if (letterASCII >= 97 && letterASCII <= 122) {
        result2 += String.fromCharCode(((letterASCII - 97 - Number(Offset) + 26) % 26) + 97);
      }
    }
    return result2;
  },
};

export default cipher;