let Emp=[
    {id:101,name:"Bhanu",place:"blr"},
    {id:102,name:"Bhargav",place:"blr"},
    {id:103,name:"ravi",place:"blr"},
]
function kiran(){
    let rows="";
    Emp.map((obj)=>{
        rows=
        rows+
        `<tr><td>${obj.id}</td>
        <td>${obj.name}</td>
        <td>${obj.place}</td>
        </tr>`
    });
    document.getElementById("table").innerHTML=rows;
}