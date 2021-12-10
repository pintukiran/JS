let emp=[
    {id:101, name:"Rahul", number:"7892100795", salary:45000, place:"blr"},
    {id:102, name:"RAjesh", number:"7899400795", salary:45000, place:"blr"},
    {id:103, name:"Ramesh", number:"7899190795", salary:45000, place:"blr"},
];
function display(){
    let rows="";
    emp.forEach((ktm)=>{
        rows=rows+
        `<tr>
        <td>${ktm.id}</td>
        <td>${ktm.name}</td>
        <td>${ktm.number}</td>
        <td>${ktm.salary}</td>
        <td>${ktm.place}</td>
        </tr>`
    });
    document.getElementById("table").innerHTML=rows;
}