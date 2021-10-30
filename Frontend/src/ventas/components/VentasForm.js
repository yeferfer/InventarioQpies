import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const VentasForm = ({ handleChange, handleClick, formValue }) => {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Fecha Venta</Form.Label>
        <Form.Control
          type="date"
          name="Fecha_Venta"
          onChange={handleChange}
          value={formValue.Fecha_Venta}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Referencia</Form.Label>
        <Form.Select
          aria-label="Default select example"
          name="referencia"
          onChange={handleChange}
          value={formValue.referencia}
        >
          <option>Seleccione una Referencia</option>
          <option>Por areglar</option>
          {/* {categorias.map((categoria) => (
            <option key={categoria._id} value={categoria._id}>
              {categoria.nombre}
            </option>
          ))} */}
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Color</Form.Label>
        <Form.Control
          type="text"
          name="Sucursal"
          onChange={handleChange}
          value={formValue.Sucursal}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Material</Form.Label>
        <Form.Control
          type="text"
          name="Sucursal"
          onChange={handleChange}
          value={formValue.Sucursal}
        />
      </Form.Group>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">
              <Form.Group className="mb-3">
                <Form.Label>Numero</Form.Label>
                <Form.Control
                  type="text"
                  name="Sucursal"
                  onChange={handleChange}
                  value={formValue.Sucursal}
                />
              </Form.Group>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Form.Group className="mb-3">
                <Form.Label>Cantidad</Form.Label>
                <Form.Control
                  type="number"
                  name="n43"
                  onChange={handleChange}
                  value={formValue.n43}
                />
              </Form.Group>
            </td>
          </tr>
        </tbody>
      </table>
      <Form.Group className="mb-3">
        <Form.Label>Vendedor</Form.Label>
        <Form.Control
          type="text"
          name="Vendedor"
          onChange={handleChange}
          value={formValue.Vendedor}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Sucursal</Form.Label>
        <Form.Control
          type="text"
          name="Sucursal"
          onChange={handleChange}
          value={formValue.Sucursal}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Precio</Form.Label>
        <Form.Control
          type="number"
          name="Precio"
          onChange={handleChange}
          value={formValue.Precio}
        />
      </Form.Group>
      <Button type="button" variant="danger">
        Cancelar
      </Button>
      <Button
        onClick={handleClick}
        type="button"
        variant="danger"
        className="float-end"
      >
        Guardar
      </Button>
    </Form>
  );
};

export default VentasForm;
