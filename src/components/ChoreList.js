import { instanceOfChoreState } from '../state/ChoreState';
import { BaseChoreComponent } from './BaseChoreComponent';
import { ChoreItem } from './ChoreItem';

export class ChoreList extends BaseChoreComponent {
  constructor(Child) {
    super('chore-list', 'app', false, `${Child}-chores`);

    this.assignedChoresArray = [];

    this.Child = Child;

    // This is what determines the box that the chore goes ito
    instanceOfChoreState.addFunction((chores) => {
      const childChoresArray = chores.filter((chore) => {
        if (this.Child === 'Wesleigh') {
          return chore.child === 'Wesleigh';
        } else if (this.Child === 'Alexis') {
          return chore.child === 'Alexis';
        } else {
          return chore.child === 'Tommy';
        }
      });
      this.assignedChoresArray = childChoresArray;
      this._renderChoresItem();
    });

    this._renderDynamicContent();
  }

  _renderChoresItem() {
    const listElement = document.getElementById(`${this.Child}-chores-list`);
    listElement.innerHTML = '';
    for (const choreItem of this.assignedChoresArray) {
      new ChoreItem(this.element.querySelector('ul').id, choreItem);
    }
  }

  _renderDynamicContent() {
    const choreListId = `${this.Child}-chores-list`;
    this.element.querySelector('ul').id = choreListId;
    this.element.querySelector('h2').textContent =
      this.Child.toUpperCase() + "'S" + ' CHORES';
  }
}
