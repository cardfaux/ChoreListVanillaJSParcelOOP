// This Class Is Responsible For Rendering The Form To The Screen
export class ChoreInput {
  // When I Instanciate This Class I want the form to be rendered
  constructor() {
    // So In the constructor I reach out to the template id to get the template Id for the form
    this.HTMLTemplateElement = document.getElementById('chore-input');
    // I reach out to the APP div, the div it is too be rendered in
    this.RootAppDiv = document.getElementById('app');

    // Then get the content of the template with document.importedNode and get the content of the template
    const ContentOfTheTemplate = document.importNode(
      this.HTMLTemplateElement.content,
      // The true being passed is for a deep clone
      true
    );
    // I can't render the template but the content of the template
    this.FormFromTheTemplate = ContentOfTheTemplate.firstElementChild;
    // This just adds the user-input id to it for styling when it is rendered
    this.FormFromTheTemplate.id = 'user-input';

    // Get access to the childInputElement on the form
    this.childInputElement = this.FormFromTheTemplate.querySelector(
      '#children'
    );
    // Get access to the choreInputElement on the form
    this.choreInputElement = this.FormFromTheTemplate.querySelector('#chore');
    // Get access to the noteInputElement on the form
    this.noteInputElement = this.FormFromTheTemplate.querySelector('#notes');

    // Putting the methods in the constructor so they are registered when the class is instatiated
    this._addEventListeners();
    this._renderContent();
  }

  // Clear All The Inputs When Form Is Submitted Set All Fields To Empty String
  _clearFormInputs() {
    this.childInputElement.value = '';
    this.choreInputElement.value = '';
    this.noteInputElement.value = '';
  }

  // Put All The User Inputs Into An Object
  _UserInputsToObject() {
    // Set Shorter Values to Variables
    let enteredChild = this.childInputElement.value;
    let enteredChore = this.choreInputElement.value;
    let enteredNotes = this.noteInputElement.value;

    // Create An Empty Object
    const EnteredChores = {};

    // Weak Form Validation
    if (!enteredChild || !enteredChore || !enteredNotes) {
      alert('Inputs Must Not Be Empty');
      // Set The Values To A Property On The Created Empty Object
    } else {
      EnteredChores.Child = enteredChild;
      EnteredChores.Chore = enteredChore;
      EnteredChores.Note = enteredNotes;
      //returned the EnteredChores Object From The Method
      //This Does Create An Object In An Object, Kinda It's fine for me but you may want to change it
      return { EnteredChores };
      // return [enteredChild, enteredChore, enteredNotes];
    }
  }

  // The method that gets called when the form is submitted
  _submitTheForm(event) {
    event.preventDefault();
    // Create A shorter constant from the UserInputs
    const userInputValues = this._UserInputsToObject();
    // Another If check checking for the object
    if (userInputValues) {
      // const [child, chore, note] = userInputValues;
      // choreState.addChore(child, chore, note);
      // Set The UserInput Object Into localStorage with ChoreObject Key
      // This Does Create An Object In An Object Kinda It's fine for me but you may want to change it
      localStorage.setItem('ChoreObject', JSON.stringify(userInputValues));
      // Running the clearFormInputs method To clear the inputs after submiting and setting to local storage
      this._clearFormInputs();
    }
  }

  _addEventListeners() {
    // Adding an eventListener for the submition of the form
    this.FormFromTheTemplate.addEventListener(
      'submit',
      this._submitTheForm.bind(this)
    );
  }

  // The renderContent method is what renderes the content, so i call the method in the constructor
  _renderContent() {
    // insertAdjacentElement method inserts a given element node at a given position relative to the element it is invoked upon.
    this.RootAppDiv.insertAdjacentElement(
      //  Just inside the element, before its first child.
      'afterbegin',
      this.FormFromTheTemplate
    );
  }
}
