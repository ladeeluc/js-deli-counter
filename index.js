
function takeANumber(line, person){
  line.push(person)
  
    return(`Welcome, ${person}. You are number ${line.length} in line.`)
    console.log(line)
}
function nowServing(line){
  console.log(line)
  if (line.length == ""){
  return (`There is nobody waiting to be served!`)
}
//line.shift()
return(`Currently serving ${line.shift()}.`)

}
//Pseudocode
// procedure: array of index and element into string output

// if( array == “”){
// Return (`The line is currently empty.`);
// }else array.forEach (index, item) => {
// Return ( `The line is currently: ${index} . ${item}, `);

function currentLine(line){
  //console.log(katzDeliLine)
  if( line  == "" ){
    return(`The line is currently empty.`)

  } 
    var array = []
    for(let i = 0, l = line.length; i < l; i++){
      array.push(`${i + 1}. ${line[i]}`)
    }
      
      return(`The line is currently: ${array.join(', ')}`)
    };


    // katzDeliLine.forEach((index, name) => {
    // return array.push( `The line is currently: ${index} . ${name}.`);
    // }); 
