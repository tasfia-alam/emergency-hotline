
### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
 => GetElementById: means its only finds the element that matches the Id. An Id is unique and that is only one in a    page.
    getElementsByClassName: Smililarly its finds the element that matches with class. A class name can be many and same in a page.
    querySelector: It uses CSS selector to find an element. It returend the only first matches element.
    querySelectorAll: It also uses CSS selector to find an element. but it returens all matches element in a list

2. How do you **create and insert a new element into the DOM**?

=> const newDiv = document.createElement("div"); // create a new element
  newDiv.textContent = "Hello, I am a new div!"; // new element
  container.appendChild(newDiv);  // insert the dom


3. What is **Event Bubbling** and how does it work?
=> Event bubbling is an event that works on a element like example mouseenter, click etc. there are so many event.
  It works a specific element that u are selected by Id, class etc. Example:

  document.getElementById("child").addEventListener("click", () => {
  alert("Child button clicked!");
  });
  when u click ta button its shows a popup where write this child button clicked. Firstly we have to call a Id then called click fuction and shows the alert message. 

4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

---

