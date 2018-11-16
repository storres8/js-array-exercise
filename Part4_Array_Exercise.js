var roster = []

// adds a new student through a prompt \
function addNew(){
  let newName = prompt("Enter name you would like to add");
  roster.push(newName)
}

// removes a student from the roster
function removeName(){
  let deleteName = prompt("What name would you like to remove?")

  let position = roster.indexOf(deleteName);

  roster.splice(index,1)
}

function display(){
  console.log(roster);
}
