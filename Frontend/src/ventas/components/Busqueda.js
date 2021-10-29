import Form from "react-bootstrap/Form";

const Busqueda = ({ ventas, setVentas }) => {
  const find = (event) => {
    const regex = new RegExp(".*" + event.target.value + ".*");
    const ventasFilter = ventas.filter((venta) => venta.Producto.match(regex));
    console.log(ventasFilter);
    setVentas(ventasFilter);
  };

  return <Form.Control onChange={find} type="text" placeholder="Buscar..." />;
};

export default Busqueda;
