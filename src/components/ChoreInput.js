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
    this.addEventListeners();
    this.renderContent();
  }

  // The method that gets called when the form is submitted
  submitTheForm(event) {
    event.preventDefault();
  }

  addEventListeners() {
    // Adding an eventListener for the submition of the form
    this.FormFromTheTemplate.addEventListener(
      'submit',
      this.submitTheForm.bind(this)
    );
  }

  // The renderContent method is what renderes the content, so i call the method in the constructor
  renderContent() {
    // insertAdjacentElement method inserts a given element node at a given position relative to the element it is invoked upon.
    this.RootAppDiv.insertAdjacentElement(
      //  Just inside the element, before its first child.
      'afterbegin',
      this.FormFromTheTemplate
    );
  }
}
