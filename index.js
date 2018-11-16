var roster = []

// adds a new student through a prompt \
function addNew(){
  let newName = prompt("Enter name you would like to add");
  roster.push(newName)
}

//displayes the current array with the student names
function display(){
  console.log(roster);
}

// removes a student from the roster
function removeName(){
  let deleteName = prompt("What name would you like to remove?")

  let position = roster.indexOf(deleteName);

  if(position >= 0){
    roster.splice(position,1)
  }else{
    alert("Invalid name, please try again.")
    removeName()
    console.log(roster)
  }
}


let start = prompt("Would you like to start the roster app? Enter either yes or no")
let request = "empty";

if(start[0].toLowerCase() === "y"){
  while(request !== "quite"){
    request = prompt("Please select an action: add, remove, display, or quite.")
    if(request === "add"){
      addNew();
    }else if(request === "display"){
      display();
    }else if(request === "remove"){
      removeName();
    }
  }
}
alert("Thanks for using the app!")
