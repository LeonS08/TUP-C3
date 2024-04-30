let contactos = [
    { id: 1, nombre: 'Elena Rodríguez', telefono: '5551234567' },
    { id: 2, nombre: 'Tomás Herrera', telefono: '3129876543' },
    { id: 3, nombre: 'Sofia Gutiérrez', telefono: '4085617890' },
    { id: 4, nombre: 'Leonardo Vázquez', telefono: '2124659821'}
];

const App = () =>  (
    <div>
        <h1>Contactos</h1>
        <ul>
        {contactos.map(contacto => (
          <li class="contactos" key={contacto.id}>
            <div className="nombre del contacto">Nombre: {contacto.nombre}</div>
            <div className="numero de contacto">Telefono: {contacto.telefono}</div>
          </li>
        ))}
      </ul>
    </div>
)

ReactDOM.render(<App />, document.getElementById('root'))