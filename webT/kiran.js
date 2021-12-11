let emp=[
    {id:101,name:bhanu,place:bangllore },
    {id:101,name:kiran,place:hyderabad },
]
function bhanu(){
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
    

