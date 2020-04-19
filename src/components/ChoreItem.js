import { BaseChoreComponent } from './BaseChoreComponent';
import { instanceOfChoreState } from '../state/ChoreState';

// The class to render each chore item
export class ChoreItem extends BaseChoreComponent {
  constructor(hostId, chore) {
    // Everything the base class needs
    super('single-chore', hostId, false, chore.id);
    this.chore = chore;

    this._addEventListeners();
    this.renderContent();
  }

  renderContent() {
    this.element.querySelector('h2').textContent = this.chore.chore;
    this.element.querySelector('p').textContent = this.chore.note;
    this.element.querySelector('button').textContent = 'DONE';
  }

  // This method deletes the selected chore and removes it from the array in the state
  _deleteTheChore() {
    const element = document.getElementById(this.chore.id);
    // Removes the element from the DOM
    element.remove();
    const choresArray = instanceOfChoreState.chores;
    const removeIndex = choresArray.map((item) => item.id).indexOf(element);
    // Removes it from the Array
    choresArray.splice(removeIndex, 1);
  }

  _addEventListeners() {
    // Adding an eventListener for the submission of the form
    this.element.addEventListener('click', this._deleteTheChore.bind(this));
  }
}
