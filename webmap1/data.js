let Employees=[
    {id:101, name:"Rahul", salary:45000},
    {id:102, name:"suresh", salary:45000},
    {id:103, name:"Rajesh", salary:45000},
    {id:104, name:"Ramesh", salary:45000},
    {id:105, name:"RAjesh", salary:45000},
    {id:106, name:"priyanka", salary:45000},
];
function display(){
    let rows = "";
    Employees.forEach((employee) => {
      rows =
        rows +
        `<tr> <td>${employee.id}</td>
              <td>${employee.name}</td>
              <td>${employee.salary+ 100}</td>
       </tr>`;
    });
    document.getElementById("table_body").innerHTML = rows;
   
}