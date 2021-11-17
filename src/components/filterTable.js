import Prodotti from '../dati/Prodotti.json';
import{useState} from 'react';

const SearchTable = () => {
    const [searchTerm, setsearchTerm]= useState("")
    return(
        <div className="container">
            <input type="text" placeholder="Search.." 
            className="form-control" 
            style={{marginTop:50,marginBottom:20,width:"40%"}}
            onChange = {(e) =>{
                setsearchTerm(e.target.value);
            }}
            />
            <table className="table table-bordered">
                <thead className="table-info">
                    <tr>
                        <th>Nome</th>
                        <th>Prezzo</th>
                        <th>Disponibilità</th>
                    </tr>
                </thead>
                <tbody>
                    {Prodotti.filter((val) => {
                        if(searchTerm === ""){
                            return val;
                        }else if(
                            val.nome.toLowerCase().includes(searchTerm.toLowerCase())||
                            val.prezzo.toLowerCase().includes(searchTerm.toLowerCase())||
                            val.disponibile.toLowerCase().includes(searchTerm.toLowerCase())
                            ){
                            return val;
                        }
                        }).map ((m)=>(
                        <tr key={m.id}>
                        <td> {m.nome}</td>
                        <td> {m.prezzo}</td>
                        <td> {m.disponibile}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default SearchTable;