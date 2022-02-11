<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP</title>
</head>
<body>

  <p>Задание 3.1</p>
  <?php
    function plus($sum, $time, $add) {
      return $sum + $time*$add/12;
    }
    echo plus(200, 12, 10);
  ?>


  <p>Задание 3.2</p>

  <?php
     function text($day, $month) {
      $year = [1=>'января', 
                2=>'февраля',
                3=>'марта',
                4=>'января',
                5=>'января',
                6=>'января',
                7=>'января',
                8=>'января',
                9=>'января',
                10=>'января',
                11=>'января',
                12=>'января',];
      return $day.$year[$month];
    }
    echo text(13, 11);
  ?>


  <p>Задание 3.3</p>

  <?php
    echo 'не выполнено (только начал изучать PHP)';
  ?>


  <p>Задание 3.4</p>

  <?php
    echo 'не выполнено (только начал изучать PHP)';
  ?>


  <p>Задание 3.5</p>
  <?php
    function clock_ang ($h, $m)
    {
        $angleh = ($h*60+$m)*360/720;
        $anglem = $m*360/60;
        if (abs($angleh-$anglem) < abs(360-$angleh-$anglem)) {
          echo abs($angleh-$anglem);
        } else {
          echo abs(360-$angleh-$anglem);
        }
  }
    echo clock_ang(8, 44);
  ?>




</body>
</html>