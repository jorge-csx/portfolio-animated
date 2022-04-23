export default function getCleanString(string) {
    const specialChars = "!@#$^&%*()+=-[]\/{}|:<>?,."

    for (let i = 0; i < specialChars.length; i++) {
        string = string.replace(new RegExp("\\" + specialChars[i], "gi"), "")
    }

    string = string.toLowerCase()

    string = string.replace(/ /g, "-")

    string = string.replace(/á/gi, "a")
    string = string.replace(/é/gi, "e")
    string = string.replace(/í/gi, "i")
    string = string.replace(/ó/gi, "o")
    string = string.replace(/ú/gi, "u")
    string = string.replace(/ñ/gi, "n")

    return string
} 