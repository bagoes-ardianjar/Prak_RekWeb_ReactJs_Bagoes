import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddMahasiswa= () => {
const [title, setTitle] = useState('');
const [nilai, setNilai] = useState('');
const history = useNavigate();
const saveMahasiswa = async(e) => {
e.preventDefault();
const mahasiswa = { title, nilai };
await fetch('http://localhost:8080/mahasiswas',{
method: "POST",
body: JSON.stringify(mahasiswa),
headers:{
'Content-Type': 'application/json'
}
});
history("/");
}
return (
<div>
<form onSubmit={saveMahasiswa}>
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
<button className="button is-primary">Save</button>
</div>
</div>
</form>
</div>
)
}
export default AddMahasiswa