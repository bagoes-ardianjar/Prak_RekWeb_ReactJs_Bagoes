import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
const EditMahasiswa = () => {
const [title, setTitle] = useState('');
const [nilai, setNilai] = useState('');
const history = useNavigate();
const { id } = useParams();
useEffect(() => {
getMahasiswaById();
}, []);
const getMahasiswaById = async() => {
const response = await fetch(`http://localhost:8080/mahasiswas/${id}`);
const data = await response.json();
setTitle(data.title);
setNilai(data.nilai);
}
const updateMahasiswa = async(e) => {
e.preventDefault();
const mahasiswa = { title, nilai };
await fetch(`http://localhost:8080/mahasiswas/${id}`,{
method: "PUT",
body: JSON.stringify(mahasiswa),
headers:{
'Content-Type': 'application/json'
}
});
history("/");
}
return (
<div>
<form onSubmit={updateMahasiswa}>
<div className="field">
<label className="label">Title</label>
<div className="control">
<input className="input" value={title} onChange={(e) => setTitle(e.target.value)}
type="text" placeholder="Title" />
</div>
</div>
<div className="field">
<label className="label">Nilai</label>
<div className="control">
<input className="input" value={nilai} onChange={(e) => setNilai(e.target.value)}
type="text" placeholder="Nilai" />
</div>
</div>
<div className="field">
<div className="control">
<button className="button is-primary">Update</button>
</div>
</div>
</form>
</div>
)
}
export default EditMahasiswa