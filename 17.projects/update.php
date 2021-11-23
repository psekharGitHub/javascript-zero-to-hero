<?php
  echo '<pre>';
  var_dump($_POST);
  echo'</pre>';

  echo "<script>
    itemArray = JSON.parse(localStorage.getItem('itemsJSON'));
    console.log(itemArray);
    </script>
  ";
?>