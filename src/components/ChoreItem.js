import { Component } from './Component';

export class ChoreItem extends Component {
  constructor(hostId, chore) {
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

  _submitTheForm(event) {
    event.preventDefault();
    const elem = document.getElementById(this.chore.id);
    elem.remove();
  }

  _addEventListeners() {
    // Adding an eventListener for the submition of the form
    this.element.addEventListener('click', this._submitTheForm.bind(this));
  }
}
