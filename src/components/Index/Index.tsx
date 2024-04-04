import axios from 'axios';
import axios from 'axios';
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
    <div style={{ 
      backgroundImage: `url(http://4.bp.blogspot.com/-rf5TPOMiIVQ/VZJ6U22eecI/AAAAAAAAAfA/E1QP30963M0/s1600/Foto-construir-una-gran-empresa-6.png)`, // Establece la URL de la imagen de fondo
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      padding: '50px 0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{ maxWidth: '800px', backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '10px', padding: '30px', textAlign: 'center' }}>
        <h1 style={{ color: '#333', marginBottom: '30px' }}>Listado de Empresas</h1>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginLeft: 'auto', marginRight: 'auto' }}>
          <thead style={{ backgroundColor: '#f2f2f2' }}>
            <tr>
              <th style={{ padding: '15px', textAlign: 'center' }}>EMPRESA</th>
              <th style={{ padding: '15px', textAlign: 'center' }}>VER PÁGINA</th>
            </tr>
          </thead>
          <tbody>
            {empresas.map(empresa => (
              <tr key={empresa.id} style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '15px', textAlign: 'left', backgroundColor: '#fff' }}>{empresa.denominacion}</td>
                <td style={{ padding: '15px', textAlign: 'center', backgroundColor: '#fff' }}>
                  <a href={`home.html?id=${empresa.id}`} style={{ textDecoration: 'none', color: 'blue' }}>URL PÁGINA HOME</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <button> Hola </button>
      </div>
    </div>
  );
}

export default Index;

export default Index;
