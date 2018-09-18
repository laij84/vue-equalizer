export default function chunk(a, number) {
    const temp = a.slice();
    const arr = [];
  
    while (temp.length) {
      arr.push(temp.splice(0,number));
    }
  
    return arr;
}