
# nedelcho-dinev-employees

- Live Site URL: [Link]([https://ned-mern-ecommerce-39b6ffde7c76.herokuapp.com](https://nedelcho-dinev-employees.vercel.app))

### Task

Pair of employees who have worked together<br/>
Create an application that identifies the pair of employees who have worked<br/>
together on common projects for the longest period of time.

Input data:<br/>
 A CSV file with data in the following format:<br/>
 EmpID, ProjectID, DateFrom, DateTo
 
Sample data:<br/>
143, 12, 2013-11-01, 2014-01-05<br/>
218, 10, 2012-05-16, NULL<br/>
143, 10, 2009-01-01, 2011-04-27<br/>
...

Sample output:<br/>
 143, 218, 8
 
<b>Specific requirements</b>

1) DateTo can be NULL, equivalent to today<br/>
2) The input data must be loaded to the program from a CSV file<br/>
3) Create an UI:<br/>
The user picks up a file from the file system and, after selecting it, all common<br/>
projects of the pair are displayed in datagrid with the following columns:<br/>
Employee ID #1, Employee ID #2, Project ID, Days worked<br/>
4) The task solution needs to be uploaded in github.com, repository name must be in<br/>
format: {FirstName}-{LastName}-employees

<b>Bonus points</b><br/>
1) More than one date format to be supported, extra points will be given if all date formats
are supported<br/>
<b>Delivery time</b><br/>
 One day after receiving the task.
 
 <hr/>

### How to import data

CSV test files with employees data are located at `root/src/data`

## P.S. There are several files with different types of data that the application can support:
- [EmployeesData.csv](https://github.com/NedDinev/nedelcho-dinev-employees/blob/main/src/data/EmployeesData.csv)
- [DifferentFormatData.csv](https://github.com/NedDinev/nedelcho-dinev-employees/blob/main/src/data/DifferentFormatData.csv)

### How to start

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


### Built with

- [ReactJS](https://www.npmjs.com/package/react)
- [React-Bootstrap](https://www.npmjs.com/package/react-bootstrap)
- [Papaparse](https://www.npmjs.com/package/papaparse)
- [Moment](https://www.npmjs.com/package/moment)
