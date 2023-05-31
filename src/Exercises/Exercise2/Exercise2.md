# Use this file to add your custom notes while resolving the exercise.
- The useState hook was used to store the value of the input.
- The onChange was used on the input element, so every time the input value changes,  the onChange prop on the input element, so every time its value changes, the Setstate function gets invoked.
- To disable the button, the 'disabled' prop was used on the button element. The button disables if the variable or condition passed is true, so the logical NOT (!) operator was used on the 'text' variable, because when the variable is not empty it returns true, so we negate the variable so when 'text' is true(not empty), it returns false and the button will not be disabled.
  
- Another way to disable the button: 
  <button disabled={!text}>Submit</button>
It's pretty much the same thing, just in a shorter form.