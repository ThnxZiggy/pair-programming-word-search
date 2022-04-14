const transpose = function(matrix) {
    let newMatrix = [];

    for (let i = 0; i < matrix[0].length; i++) {
      let arr = [];
      
      for (let j = 0; j < matrix.length; j++) {
       arr.push(matrix[j][i]);
      }
      newMatrix.push(arr);
    }
    return newMatrix;
   };


const wordSearch = (letters, word) => { 
    const vertical = transpose(letters).map(ls => ls.join(""));
      //  console.log(verticalJoin);
    //const vertical = verticalJoin.map(ls => ls.join(''));
        //map(letters => letters.join (''))
    for (l of vertical) {
        if (l.includes(word)) {
            return true
        }
    }
  
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        //console.log(l)
        if (l.includes(word)) {
            return true;
        } 
    }
    return false;
};

module.exports = wordSearch