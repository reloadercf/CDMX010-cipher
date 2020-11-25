const cipher = {
  alphabetOrigin:["A","B","C","D","E","F","G","H","I","J","k","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
};

cipher.searchLiteral=(literal)=>{
  let position=cipher.alphabetOrigin.indexOf(literal)
  return position
}

cipher.encryptLiteral=(encryptedAlphabet,position)=>{
  return encryptedAlphabet[position]
}

cipher.sortAlphabet=(direction)=>{
  let newAlphabet=[]
  for(let i=direction; i<cipher.alphabetOrigin.length; i++){
    newAlphabet.push(cipher.alphabetOrigin[i])
  }
  for(let i=0; i<direction; i++){
    newAlphabet.push(cipher.alphabetOrigin[i])
  }
  return newAlphabet
}

cipher.encode=(offset,text)=>{
  let textEncrypt=[]
  let newEncryptedAlphabet=cipher.sortAlphabet(offset)

  for(let i=0; i<text.length; i++){
    textEncrypt.push(cipher.encryptLiteral(newEncryptedAlphabet,cipher.searchLiteral(text.charAt(i))))
  }
  return textEncrypt.join("")
}

export default cipher;
