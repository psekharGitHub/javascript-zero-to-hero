<?php


?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Todo test</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>
</head>
<body>
    <div class="container-fluid" id="navbar-container">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">Todo Practice</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                  </li>
                </ul>
                <form class="d-flex">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                  <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>
    </div>
    <div class="container-fluid" id="form-container" style="padding-left: 300px;padding-right: 300px;">
        <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Title</label>
              <input type="email"  class="form-control" id="title" name="title" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Description</label>
              <div class="form-floating">
                <textarea class="form-control" placeholder="" name="description" id="description" style="height: 100px"></textarea>
                <label for="floatingTextarea2"></label>
              </div>
            <button type="button" class="add-btn btn btn-primary" id="add-btn" style="margin-top: 5px;" onclick="add()">Add Note</button>
            <button type="button" class="clear-btn btn btn-primary" id="clear-btn" style="margin-top: 5px;" onclick="clearStorage()">Clear List</button>
          </form>
    </div>
    <div class="table-container">
        <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody class="tbody" id="tbody">
            </tbody>
          </table>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="updateModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="updateModalLabel">Update Note</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div class="modal-body">
            <form>
              <input type="hidden" class="snoEdit" id="snoEdit">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Title</label>
                <input type="email"  class="form-control" id="mtitle" name="mtitle" aria-describedby="emailHelp">
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Description</label>
                <div class="form-floating">
                  <textarea class="form-control" placeholder="" name="mdescription" id="mdescription" style="height: 100px"></textarea>
                  <label for="floatingTextarea2"></label>
                </div>
            </form>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" id="update" name="update"  data-bs-dismiss="modal" onclick="editNote()">Save changes</button>
          </div>
        </div>
      </div>
    </div>
</body>

<script>
  update();

    function update(params) {
      //Populate table
      itemList = JSON.parse(localStorage.getItem('itemsJSON'));
        str ="";
        itemList.forEach((element, index) => {
            str += `
                    <tr>
                    <td>${index + 1}</td>
                    <td>${element[0]}</td>
                    <td>${element[1]}</td>
                    <td>
                        <button class="edit btn btn-sm btn-warning" onclick="populateModal()">Edit</button>
                        <button class="btn btn-sm btn-danger" onclick="deleted(${index})">Delete</button></td> 
                    </tr>`;
        });
        tbody.innerHTML = str;
    }
    function add(element) {
        let tbody = document.getElementById('tbody');
        let tit = document.getElementById('title').value;
        let desc = document.getElementById('description').value;

        if (localStorage.getItem('itemsJSON') == null) {
            itemsArray = [];
            itemsArray.push([tit, desc]);
            localStorage.setItem('itemsJSON', JSON.stringify(itemsArray));
        } else {
            itemsJSONarray = JSON.parse(localStorage.getItem('itemsJSON'));
            itemsJSONarray.push([tit, desc]);
            localStorage.setItem('itemsJSON', JSON.stringify(itemsJSONarray));
        }
        update();
    }

    function editNote(element) {
      let tit = document.getElementById('mtitle').value;
      let desc = document.getElementById('mdescription').value;
      let id = document.getElementById('snoEdit').value;
      console.log(tit);
      console.log(desc);
      console.log(id);

      let itemsArray = JSON.parse(localStorage.getItem('itemsJSON'));
      let current_item = itemsArray[id-1];
      // console.log(current_item);
      current_item[0] = tit;
      current_item[1] = desc;
      // console.log(current_item);
      localStorage.setItem('itemsJSON', JSON.stringify(itemsArray))      
      update();

    }

    function deleted(index) {
      itemArray = JSON.parse(localStorage.getItem('itemsJSON'));
      itemArray.splice(index, 1);
      localStorage.setItem('itemsJSON', JSON.stringify(itemArray));
      update();
    }

    function clearStorage() {
      console.log("Pressed clear list");
      localStorage.clear();
      let tbody = document.getElementById('tbody');
      tbody.innerHTML = "";
    }

    function populateModal() {
      //console.log(editsArray);
      edits = document.getElementsByClassName('edit');
      console.log(edits);
      Array.from(edits).forEach(element => {
        element.addEventListener('click', (e)=>{
          console.log('triggered');

           tr = e.target.parentNode.parentNode;
           id = tr.getElementsByTagName("td")[0].innerText;
           title = tr.getElementsByTagName("td")[1].innerText;
           description = tr.getElementsByTagName("td")[2].innerText;

           snoEdit.value = id;
           mtitle.value = title;
           mdescription.value = description;
        });
      });
      var myModal = new bootstrap.Modal(document.getElementById('updateModal'), {
              keyboard: false
           })
           myModal.toggle()
    }


</script>
</html>