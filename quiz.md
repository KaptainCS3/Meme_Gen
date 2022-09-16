1. In a vanilla JS app, at what point in the form submission process do you gather all the data from the filled-out form?
   
- When the user triggers the submit button

2. In a React app, when do you gather all the data from the filled-out form?
   
- As the form is being fill-out and data is held in local state

3. which attribute in the form elements (value, name, onChange, etc.) should match the property name being held in state for that input?
   
- name property.

4. What's different about saving the data from a checkbox element vs other form elements?

- checkbox stores boolean values which requires a checked property to control it.
  while other input element use the value property instead

5. How do you watch for a form submit? How can you trigger a form submit?

- By setting up an onSubmit event handler
- By placing a button or input of type submit to submit the form