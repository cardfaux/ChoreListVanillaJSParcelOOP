// This Class Is Responsible For Rendering The Form To The Screen
class ChoreInput {
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

    this.renderContent();
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

// This Instanciation Is Rendering The Form
new ChoreInput();
