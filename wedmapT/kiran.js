let Student=[
    {id:01,name:"Kiran",usn:"1GD19EC052"},
    {id:02, name: "Bhanu", usn: "1GD19EC004"},
    {id:03, name: "Pavan", usn: "1GD19EC051"},
    {id:04, name: "Tendul", usn: "1GD19EC027"},
    {id:05, name: "saikiran", usn: "1GD19EC015"},
    {id:06, name: "Anjaih", usn: "1GD19EC029"},
    {id:07, name: "Bhargav", usn: "1GD19EC038"},
    {id:08, name: "Ravichand", usn: "1GD19EC040"},
    {id:09, name: "Bhaskar", usn: "1GD18EC013"},
];
function display(){
   let rows="";
    Student.forEach((study)=>{
        rows =
        rows +
        `<tr>
        <td>${study.id}</td>
        <td>${study.name}</td>
        <td>${study.usn}</td>
        </tr>`;
    });
    document.getElementById("table").innerHTML=rows;
}