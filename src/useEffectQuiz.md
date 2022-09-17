1. What is a "side effect" in React? What are some examples?

- UseEffect are task which React is not in charge of handling      
###      Examples      
-  API/ database interaction     
-  local storage     
-  syncing 2 different internal states  
-  Websockets   

2. What is NOT a "side effect" in React? Examples?
   
- All functionalities which is be handle by React   
- Maintaining state
- Update UI
- Render DOM element

3. When does React run your useEffect function? When does it NOT run the effect function?
   
- When the UI components gets render on the page
- When the is not change in state

4. How would you explain what the "dependencies array" is?
   
- Its and option parameter for the 
  useEffect method which manages state  
  of the component allow the callBack
  function to run when state changes   