<?php ?>


<!DOCTYPE html>

<html>
    <head>
        <title>Exs AJAX</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <h1>Exs AJAX</h1>




        <input id="sendButton" type="button" value="envoyer"/>
        <input id="textField" type="text"/>

        <p id="result_1">
            pas de données pour result 1
        </p>



        <form action="lieux.php" method="post" id="formLieux">
            <fieldset>
                <legend>"pays", "régions" et "communes"</legend>



                <div>pays</div>
                <select id="pays_select" name="pays_select" > 
                    <?php
                    $pays_array = array("belgique", "italie", "france");
                    foreach ($pays_array as $key):
                        ?>
                        <option value=<?php echo "'" . $key . "'"; ?> >
                            <?php echo $key; ?>
                        </option> 
                    <?php endforeach; ?>
                </select>



                <div>regions</div>
                <select id="regions_select" name="regions_select"> 
                    <?php
                    $regions_array = array();
                    foreach ($regions_array as $key => $value):
                        ?>
                        <option value=<?php echo "'" . $value['profile'] . "'"; ?> >
                            <?php echo $value['profile']; ?>
                        </option> 
                    <?php endforeach; ?>
                </select>



                <div>communes</div>
                <select id="communes_select" name="communes_select"> 
                    <?php
                    $rvilles_array = array();
                    foreach ($villes_array as $key => $value):
                        ?>
                        <option value=<?php echo "'" . $value['profile'] . "'"; ?> >
                            <?php echo $value['profile']; ?>
                        </option> 
                    <?php endforeach; ?>
                </select>







            </fieldset>
        </form>









        <script src="js/main.js" type="text/javascript"></script>
    </body>
</html>
