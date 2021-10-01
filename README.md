# Daily-Planner
## Process used to complete my Daily Planner
---
### Boostrap
The daily planner began by figuring out how to handle the columns in Boostrap to functionally create HTML that reflects the mockup. Adjusting the col-sm and col-lg values to reflect the correct sizing of the text areas, save button, and the row for the time block. After completing the proper sizing for hours 9-5 using the class of time-block I adjusted the CSS to match the starter code classes, as well as my own. 
---
### J-Query & JS
For the first step I created global variables to be used throughout my JS. Next I created a function to call moment to format the current day/time with a set interval of 1 second by setting it to 1000 milliseconds. Following that I had to create a function to save input into the text area to save that input to local storage, and persist the date on refresh. Data is continiously saved in local storage. Following the storage of the input in the text area, I leveraged the use of moment as a global variable to change the text area with dynamic css as part of the classes past, present and future using if else to determine time of day, and assigning the respective CSS class. 
---
### Deployment Link & Screenshot
---
### [Password Generator](https://cole-cochran.github.io/daily-planner/)

### [Screenshot](https://github.com/cole-cochran/daily-planner/blob/main/assets/images/screencapture-cole-cochran-github-io-daily-planner-2021-10-01-16_10_07.png?raw=true)
