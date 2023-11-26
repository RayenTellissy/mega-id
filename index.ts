// 190 characters
const characters = ["Α", "Β", "Γ", "Δ", "Ε", "Ζ", "Η", "Θ", "Ι", "Κ", "Λ", "Μ", "Ν", "Ξ", "Ο", "Π", "Ρ", "Σ", "Τ", "Υ", "Φ", "Χ", "Ψ", "Ω", "α", "β", "γ", "δ", "ε", "ζ", "η", "θ", "ι", "κ", "λ", "μ", "ν", "ξ", "ο", "π", "ρ", "σ", "τ", "υ", "φ", "χ", "ψ", "ω", "ϐ", "ϑ", "ϒ", "ϓ", "ϔ", "ϕ", "ϖ", "ϗ", "Ϙ", "ϙ", "Ϛ", "ϛ", "Ϝ", "ϝ", "Ϟ", "ϟ", "Ϡ", "ϡ", "Ϣ", "ϣ", "Ϥ", "ϥ", "Ϧ", "ϧ", "Ϩ", "ϩ", "Ϫ", "ϫ", "Ϭ", "ϭ", "Ϯ", "ϯ", "ϰ", "ϱ", "ϲ", "ϳ", "ϴ", "ϵ", "϶", "Ϸ", "ϸ", "Ϲ", "Ϻ", "ϻ", "ϼ", "Ͻ", "Ͼ", "Ͽ", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
"N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
"0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
"!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+",
"[", "]", "{", "}", ";", ":", "'", "\"", ",", ".", "<", ">", "/", "?", "|", "`", "~", " "]

export const sid = (length: number = 11) => {
  var id = ""
  for(var i = 0; i !== length; i++) {
    const random = Math.floor(Math.random() * 190)
    id += characters[random]
  }
  return id
}