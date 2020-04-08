import { instanceOfChoreState } from '../state/ChoreState';
import { Component } from './Component';

// This Class Is Responsible For Rendering The Form To The Screen
export class ChoreInput extends Component {
  // When I Instanciate This Class I want the form to be rendered
  constructor() {
    super('chore-input', 'app', true, 'user-input');

    // Get access to the childInputElement on the form
    this.childInputElement = this.element.querySelector('#children');
    // Get access to the choreInputElement on the form
    this.choreInputElement = this.element.querySelector('#chore');
    this.noteInputElement = this.element.querySelector('#notes');

    // Putting the methods in the constructor so they are registered when the class is instatiated
    this._addEventListeners();
  }

  // Clear All The Inputs When Form Is Submitted Set All Fields To Empty String
  _clearFormInputs() {
    this.childInputElement.value = '';
    this.choreInputElement.value = '';
    this.noteInputElement.value = '';
  }

  // Put All The User Inputs Into An Array
  _UserInputsToArray() {
    // Set Shorter Values to Variables
    let enteredChild = this.childInputElement.value;
    let enteredChore = this.choreInputElement.value;
    let enteredNote = this.noteInputElement.value;

    // Weak Form Validation
    if (!enteredChild || !enteredChore) {
      alert('Inputs Must Not Be Empty');
      // Set The Values To A Property On The Created Empty Object
    } else {
      // Returns an array so far
      return [enteredChild, enteredChore, enteredNote];
    }
  }

  // The method that gets called when the form is submitted
  _submitTheForm(event) {
    event.preventDefault();
    // Create A shorter constant from the UserInputs
    const userInputValues = this._UserInputsToArray();
    // Another If check checking for the inputs
    if (Array.isArray(userInputValues)) {
      const [child, chore, note] = userInputValues;
      // Calls the addChore methed on the choreState Class to pass these values to it
      instanceOfChoreState.addChore(child, chore, note);
      // Running the clearFormInputs method To clear the inputs after submiting and setting to local storage
      this._clearFormInputs();
    }
  }

  _addEventListeners() {
    // Adding an eventListener for the submition of the form
    this.element.addEventListener('submit', this._submitTheForm.bind(this));
  }
}
