// function removecommon(arrays){
//     const count={};
//     for(const array of arrays){
//         for(const num of arrays){
//             count[num]=(count[num] ||0)+1;
//         }
//     }
//     const result=[];
//     for (const array of arr){
//         const filter=arrays.filter(num=>count[num]===1);
//         result.push(filter);
//     }
//     return result;
// }
// let arrays=[[1,2,3],[4,5,6],[5,6,7]];
// const result=removecommon(arr);
// // console.log(result)

function removeCommon(arrays) {

    const counts = {};
    for (const array of arrays) {
      for (const num of array) {
        counts[num] = (counts[num] || 0) + 1;
      }
    }
    const result = [];
    for (const array of arrays) {
      const filteredArray = array.filter(num => counts[num] === 1);
      result.push(filteredArray);
    }
    return result;
  }
  const arrays = [[1, 2, 3,9], [2, 3, 4,7], [3, 4, 5,9,6]];
  const result = removeCommon(arrays);
  console.log(result);
  