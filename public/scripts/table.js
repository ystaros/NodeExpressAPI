const createTab = () => {
    const table = document.getElementById('table');

    table.innerHTML = `
    <h2 class="text-center">Users List</h2>
      <div class="container">
          <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Age</th>
                  <th scope="col">ID</th>
                </tr>
              </thead>
              <tbody id="usersList">
                <!-- <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>32</td>
                  <td>86e6bc2d-d03f-4c08-a291-bc748985d34a</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>40</td>
                  <td>86e6bc2d-d03f-4c08-a291-bc748985d38a</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>50</td>
                  <td>86e6bc2d-d03f-4c08-a291-bc748985d52a</td>
                </tr> -->
              </tbody>
            </table>
      </div>
    `;
}

createTab();