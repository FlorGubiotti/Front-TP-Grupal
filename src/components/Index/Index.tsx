import axios from "axios";
import { useState, useEffect } from "react";

interface Empresa {
  id: number,
  denominacion: string,
  telefono: number,
  horarioAtencion: string,
  quienesSomos: string,
  latitud: number,
  longitud: number,
  domicilio: string,
  email: string
};

const Index = () => {

  const [empresas, setEmpresas] = useState<Empresa[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/empresas');
        setEmpresas(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
      <table style={{ width: '50%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ backgroundColor: '#f2f2f2', padding: '8px', textAlign: 'center' }}><b>EMPRESA</b></th>
            <th style={{ backgroundColor: '#f2f2f2', padding: '8px', textAlign: 'center' }}><b>VER PAGINA</b></th>
          </tr>
        </thead>
        <tbody>
          {empresas.map(empresa => (
            <tr key={empresa.id}>
              <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>{empresa.denominacion}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><a href={`home.html?id=${empresa.id}`} style={{ textDecoration: 'none', color: 'blue' }}>URL PAGINA HOME</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
  )
}

export default Index