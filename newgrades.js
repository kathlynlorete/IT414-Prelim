rl.question('\nEnter your Grade? ', (answer) => {
  // TODO: Log the answer in a database
  
  var age = parseInt(answer);
  addAge(grades,5);
 
  rl.close();
});

function addgrades(grades,increment){
    
    var grades = grades + increment;
    
    
if(grades < 74)
  console.log('your grades is low');


else if(grades <75)
  console.log('your new grades is');


}