import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const MahasiswaList = () => {
const [mahasiswas, setMahasiswas] = useState([]);
useEffect(() => {
fetchData();
}, []);
const fetchData = async() => {
const response = await fetch('http://localhost:8080/mahasiswas');
const data = await response.json();
setMahasiswas(data);
}
const deleteMahasiswa = async(id) => {
await fetch(`http://localhost:8080/mahasiswas/${id}`,{
method: "DELETE",
headers:{
'Content-Type': 'application/json'
}
});
fetchData();
}
return (
<div>
<Link to="/add" className="button is-primary mt-5">Add New</Link>
<table className="table is-striped is-fullwidth">
<thead>
<tr>
<th>No</th>
<th>Title</th>
<th>Nilai</th>
<th>Actions</th>
</tr>
</thead>
<tbody>
{mahasiswas.map((mahasiswa, index) => (
<tr key={mahasiswa.id}>
<td>{ index + 1 }</td>
<td>{ mahasiswa.title }</td>
<td>{ mahasiswa.nilai }</td>
<td>
<Link to={`/edit/${mahasiswa.id}`} className="button is-small is-info">Edit</Link>
<button onClick={() => deleteMahasiswa(mahasiswa.id)} className="button is-small isdanger">Delete</button>
</td>
</tr>
))}
</tbody>
</table>
</div>
)
}
export default MahasiswaList