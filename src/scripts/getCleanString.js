/**
 * @function getCleanString
 * Esta función se encarga de limpiar cadenas para ser asignadas como atributos id's
 *
 * @param {string} string - Establece la cadena a formatear
 */
export default function getCleanString(string) {
  const specialChars = "!@#$^&%*()+=-[]/{}|:<>?,.";

  // Se eliminan caracteres especiales
  for (let i = 0; i < specialChars.length; i++) {
    string = string.replace(new RegExp("\\" + specialChars[i], "gi"), "");
  }

  // Se cambia cadena a solo minúsculas
  string = string.toLowerCase();

  // Se reemplazan espacios por guion
  string = string.replace(/ /g, "-");

  // Se reemplazan sílabas con acento por sílabas ordinarias
  string = string.replace(/á/gi, "a");
  string = string.replace(/é/gi, "e");
  string = string.replace(/í/gi, "i");
  string = string.replace(/ó/gi, "o");
  string = string.replace(/ú/gi, "u");
  string = string.replace(/ñ/gi, "n");

  return string;
}
