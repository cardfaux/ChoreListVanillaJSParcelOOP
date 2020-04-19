// This is the Base Component All Other Components Inherit from
export class BaseChoreComponent {
  constructor(templateId, elementId, whereToInsert, newId) {
    // The Id Of The Template In index.html file each template has it's own Id
    this.templateElementId = document.getElementById(templateId);
    // The Id of where the component should be rendered
    this.renderElementId = document.getElementById(elementId);

    // The content of the template
    const templateContent = document.importNode(
      this.templateElementId.content,
      // deep clone
      true
    );

    // The element in the template
    this.element = templateContent.firstElementChild;
    if (newId) {
      this.element.id = newId;
    }

    // Calling the method to render the content
    this.render(whereToInsert);
  }

  // This method renders the content of the template
  render(insertBeginning) {
    this.renderElementId.insertAdjacentElement(
      // This tells where it should be rendered
      insertBeginning ? 'afterbegin' : 'beforeend',
      // The element being rendered
      this.element
    );
  }
}
