import { choreState } from '../state/ChoreState';

// This Class Is Responsible For Rendering The ChoreList To The Screen
export class ChoreList {
  // When I Instanciate This Class I want the form to be rendered
  constructor(Child) {
    // Setting an empty array to push the chores into
    this.assignedChores = [];
    // Setting this.Child to the Passed In Childs Name
    this.Child = Child;
    // So In the constructor I reach out to the template id to get the template Id for the form
    this.HTMLTemplateElement = document.getElementById('chore-list');
    // I reach out to the APP div, the div it is too be rendered in
    this.RootAppDiv = document.getElementById('app');

    // Then get the content of the template with document.importedNode and get the content of the template
    const ContentOfTheTemplate = document.importNode(
      this.HTMLTemplateElement.content,
      // The true being passed is for a deep clone
      true
    );
    // I can't render the template but the content of the template
    this.SectionFromTheTemplate = ContentOfTheTemplate.firstElementChild;
    // This just adds the Status - chores id to it for styling when it is rendered
    this.SectionFromTheTemplate.id = `${this.Child}-chores`;

    // This addListener function recieves a list of chores when it is called from inside the choreState
    choreState.addListener((chores) => {
      // Assigning the chore to it's specific box
      const relevantChores = chores.filter((chore) => {
        if (this.Child === 'Wesleigh') {
          return chore.child === 'Wesleigh';
        } else if (this.Child === 'Alexis') {
          return chore.child === 'Alexis';
        } else {
          return chore.child === 'Tommy';
        }
      });
      // After all the if statments will be assigned to assignedChores
      this.assignedChores = relevantChores;
      // Calling the _renderChores Method
      this._renderChores();
    });

    // Putting the methods in the constructor so they are registered when the class is instatiated
    this._renderContent();
    this._renderDynamicContent();
  }

  // Gets called from inside the choreState.addListener function Renders the List Item, each chore
  _renderChores() {
    // Get the element by it's ID
    const listEl = document.getElementById(`${this.Child}-chores-list`);
    // When a second item is added makes sure the html is reset
    listEl.innerHTML = '';
    // For Of loop adding the LI to the list
    for (const chrItem of this.assignedChores) {
      const listItem = document.createElement('li');
      listItem.textContent = chrItem.chore;
      listEl.appendChild(listItem);
    }
  }

  // The Method Responsible For Rendering The Dynamic Portions Of The ChoreLists
  // When ChoreList Is Instatiated With Childs Name A ChoreList For Each child will be added
  _renderDynamicContent() {
    const choreListId = `${this.Child}-chores-list`;
    this.SectionFromTheTemplate.querySelector('ul').id = choreListId;
    this.SectionFromTheTemplate.querySelector('h2').textContent =
      this.Child.toUpperCase() + "'S" + ' CHORES';
  }

  // The renderContent method is what renderes the content, so i call the method in the constructor
  _renderContent() {
    // insertAdjacentElement method inserts a given element node at a given position relative to the element it is invoked upon.
    this.RootAppDiv.insertAdjacentElement(
      //  Just inside the element, before its first child.
      'beforeend',
      this.SectionFromTheTemplate
    );
  }
}
