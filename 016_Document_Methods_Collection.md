### 016 importNode()
> The Document object's ```importNode()``` method creates a copy of a Node or ```DocumentFragment``` from another document, to be inserted into the current document later. The imported node is not yet included in the document tree. To include it, you need to call an insertion method such as ```appendChild()``` or ```insertBefore``` with a node that is currently in the document tree.

>'true' will render everything inside this template

**Example**
```html
<template id="task-template">
    <div class="task">
      <input type="checkbox" />
      <label>
        <span class="custom-checkbox"></span>
      </label>
    </div>
</template>
```
```javascript
  const taskTemplate = document.getElementById('task-template');
  const taskElement = document.importNode(taskTemplate.content, true);
  const taskCheckbox = taskElement.querySelector('input');
  taskCheckbox.id = task.id;
  taskCheckbox.checked = task.complete;

  // label is the place to display the task
  const label = taskElement.querySelector('label');
  label.htmlFor = task.id;
  label.append(task.name);
  tasksContainer.appendChild(taskElement);
```
