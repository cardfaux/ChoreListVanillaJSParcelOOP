// This Class Is Responsible For Rendering The ChoreList To The Screen
export class ChoreList {
  // When I Instanciate This Class I want the form to be rendered
  constructor(Child) {
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

    // Putting the methods in the constructor so they are registered when the class is instatiated
    this._renderContent();
    this._renderDynamicContent();
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
