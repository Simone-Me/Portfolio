<?php
include 'config.php';
include 'header.php';
?>

<body>
    <?php
$bdd = connect();
$sql = "SELECT idExp, titre, photo, dateDebut, dateFin, lieu.nom FROM `exposition` NATURAL JOIN lieu";
$result = $bdd->query($sql);
?>

<table class="table">
  <thead>
    <tr>
      <th scope="col">Affiche</th>
      <th scope="col">Nom Exposition</th>
      <th scope="col"></th>
      <th scope="col">Lieu</th>
      <th scope="col">Date debut</th>
      <th scope="col">Date fin</th>
    </tr>
  </thead>
  <?php
while($expo = $result->fetch(PDO::FETCH_OBJ)){ 
     ?>
  <tbody>
    <tr>
      <th scope="row"><img class="colomn affiche w-25 h-75" src="Images/<?= $expo->photo?>" alt="affiche expo de <?= $expo->titre?>"></th>
      <td class="colomn"><?= $expo->titre?></i></td>
      <td class="colomn"><a href="detail.php?id=<?=$expo->idExp?>"><i class="bi bi-info-circle"></i></a> <a href="reservation.php?id=<?=$expo->idExp?>"><i class="bi bi-bag"></i></a></td>
      <td class="colomn"><?= $expo->nom?></td>
      <td class="colomn"><?= $expo->dateDebut?></td>
      <td class="colomn"><?= $expo->dateFin?></td>
      <?php } ?>
    </tr>
    </tbody>
</table>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js" integrity="sha384-qKXV1j0HvMUeCBQ+QVp7JcfGl760yU08IQ+GpUo5hlbpg51QRiuqHAJz8+BrxE/N" crossorigin="anonymous"></script>
  </body>
</html>
