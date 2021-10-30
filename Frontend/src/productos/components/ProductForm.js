import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useParams, useHistory } from "react-router-dom";

const ProductForm = ({ handleChange, handleClick, formValue }) => {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Fecha</Form.Label>
        <Form.Control
          type="date"
          name="fecha"
          onChange={handleChange}
          value={formValue.fecha}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Referencia</Form.Label>
        <Form.Control
          type="text"
          name="title"
          onChange={handleChange}
          value={formValue.title}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Color</Form.Label>
        <Form.Control
          type="text"
          name="color"
          onChange={handleChange}
          value={formValue.color}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Material</Form.Label>
        <Form.Control
          type="text"
          name="material"
          onChange={handleChange}
          value={formValue.material}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>URL Imagen</Form.Label>
        <Form.Control
          type="text"
          name="url"
          onChange={handleChange}
          value={formValue.url}
        />
      </Form.Group>
      Numeracion
      <table class="table">
        <thead>
          <tr>
            <th scope="col">43</th>
            <th scope="col">42</th>
            <th scope="col">41</th>
            <th scope="col">40</th>
            <th scope="col">39</th>
            <th scope="col">38</th>
            <th scope="col">37</th>
            <th scope="col">36</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Form.Group className="mb-3">
                <Form.Control
                  type="number"
                  name="n43"
                  onChange={handleChange}
                  value={formValue.n43}
                />
              </Form.Group>
            </td>
            <td>
              <Form.Group className="mb-3">
                <Form.Control
                  type="number"
                  name="n42"
                  onChange={handleChange}
                  value={formValue.n42}
                />
              </Form.Group>
            </td>
            <td>
              <Form.Group className="mb-3">
                <Form.Control
                  type="number"
                  name="n41"
                  onChange={handleChange}
                  value={formValue.n41}
                />
              </Form.Group>
            </td>
            <td>
              <Form.Group className="mb-3">
                <Form.Control
                  type="number"
                  name="n40"
                  onChange={handleChange}
                  value={formValue.n40}
                />
              </Form.Group>
            </td>
            <td>
              <Form.Group className="mb-3">
                <Form.Control
                  type="number"
                  name="n39"
                  onChange={handleChange}
                  value={formValue.n39}
                />
              </Form.Group>
            </td>
            <td>
              <Form.Group className="mb-3">
                <Form.Control
                  type="number"
                  name="n38"
                  onChange={handleChange}
                  value={formValue.n38}
                />
              </Form.Group>
            </td>
            <td>
              <Form.Group className="mb-3">
                <Form.Control
                  type="number"
                  name="n37"
                  onChange={handleChange}
                  value={formValue.n37}
                />
              </Form.Group>
            </td>
            <td>
              <Form.Group className="mb-3">
                <Form.Control
                  type="number"
                  name="n36"
                  onChange={handleChange}
                  value={formValue.n36}
                />
              </Form.Group>
            </td>
          </tr>
        </tbody>
      </table>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">35</th>
            <th scope="col">34</th>
            <th scope="col">33</th>
            <th scope="col">32</th>
            <th scope="col">31</th>
            <th scope="col">30</th>
            <th scope="col">29</th>
            <th scope="col">28</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Form.Group className="mb-3">
                <Form.Control
                  type="number"
                  name="n35"
                  onChange={handleChange}
                  value={formValue.n35}
                />
              </Form.Group>
            </td>
            <td>
              <Form.Group className="mb-3">
                <Form.Control
                  type="number"
                  name="n34"
                  onChange={handleChange}
                  value={formValue.n34}
                />
              </Form.Group>
            </td>
            <td>
              <Form.Group className="mb-3">
                <Form.Control
                  type="number"
                  name="n33"
                  onChange={handleChange}
                  value={formValue.n33}
                />
              </Form.Group>
            </td>
            <td>
              <Form.Group className="mb-3">
                <Form.Control
                  type="number"
                  name="n32"
                  onChange={handleChange}
                  value={formValue.n32}
                />
              </Form.Group>
            </td>
            <td>
              <Form.Group className="mb-3">
                <Form.Control
                  type="number"
                  name="n31"
                  onChange={handleChange}
                  value={formValue.n31}
                />
              </Form.Group>
            </td>
            <td>
              <Form.Group className="mb-3">
                <Form.Control
                  type="number"
                  name="n30"
                  onChange={handleChange}
                  value={formValue.n30}
                />
              </Form.Group>
            </td>
            <td>
              <Form.Group className="mb-3">
                <Form.Control
                  type="number"
                  name="n29"
                  onChange={handleChange}
                  value={formValue.n29}
                />
              </Form.Group>
            </td>
            <td>
              <Form.Group className="mb-3">
                <Form.Control
                  type="number"
                  name="n28"
                  onChange={handleChange}
                  value={formValue.n28}
                />
              </Form.Group>
            </td>
          </tr>
        </tbody>
      </table>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">27</th>
            <th scope="col">26</th>
            <th scope="col">25</th>
            <th scope="col">24</th>
            <th scope="col">23</th>
            <th scope="col">22</th>
            <th scope="col">21</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Form.Group className="mb-3">
                <Form.Control
                  type="number"
                  name="n27"
                  onChange={handleChange}
                  value={formValue.n27}
                />
              </Form.Group>
            </td>
            <td>
              <Form.Group className="mb-3">
                <Form.Control
                  type="number"
                  name="n26"
                  onChange={handleChange}
                  value={formValue.n26}
                />
              </Form.Group>
            </td>
            <td>
              <Form.Group className="mb-3">
                <Form.Control
                  type="number"
                  name="n25"
                  onChange={handleChange}
                  value={formValue.n25}
                />
              </Form.Group>
            </td>
            <td>
              <Form.Group className="mb-3">
                <Form.Control
                  type="number"
                  name="n24"
                  onChange={handleChange}
                  value={formValue.n24}
                />
              </Form.Group>
            </td>
            <td>
              <Form.Group className="mb-3">
                <Form.Control
                  type="number"
                  name="n23"
                  onChange={handleChange}
                  value={formValue.n23}
                />
              </Form.Group>
            </td>
            <td>
              <Form.Group className="mb-3">
                <Form.Control
                  type="number"
                  name="n22"
                  onChange={handleChange}
                  value={formValue.n22}
                />
              </Form.Group>
            </td>
            <td>
              <Form.Group className="mb-3">
                <Form.Control
                  type="number"
                  name="n21"
                  onChange={handleChange}
                  value={formValue.n21}
                />
              </Form.Group>
            </td>
          </tr>
        </tbody>
      </table>
      <Button type="button" variant="danger">
        Cancelar
      </Button>
      <Button
        onClick={handleClick}
        type="button"
        variant="primary"
        className="float-end"
      >
        Guardar
      </Button>
    </Form>
  );
};

export default ProductForm;
