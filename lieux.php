<?php

$result = [];

$lieux = [
    "belgique" => [
        "hainaut" => [
            "charleroi" => ["ecaussines", "charleroi"],
            "charleroi2" => ["ecaussines2", "charleroi2"],
        ],
        "liege" => [
            "soumagne" => ["micheroux", "ayeneux"],
            "verviers" => ["dison", "heusy"],
        ],
        "namur" => [
            "namur" => ["namur", "namur2"],
        ],
    ],
    "france" => [
        "bretagne" => [
            "morbihan" => ["lorient", "vannes"],
            "finistere" => ["brest", "quimper"],
        ],
        "corse" => [
            "corse-sud" => ["ajaccio", "bonifacio"],
            "haute-corse" => ["canari", "macinaggio"],
        ],
        "lorraine" => [
            "meuse" => ["verdun", "bar-le-duc"],
            "vosges" => ["epinal", "gerardmer"],
        ],
    ],
    "italie" => [
        "abruzzes" => [
            "aquila" => ["aquila", "garde"],
            "pescara" => ["rosciano", "popoli"],
        ],
        "pouilles" => [
            "bari" => ["bari", "corato"],
            "lecce" => ["lecce", "copertino"],
        ],
        "lombardie" => [
            "milan" => ["milan", "rho"],
            "bergame" => ["bergame", "seriate"],
        ],
    ],
];

if (isset($_GET["pays"])) {
    $pays = $_GET["pays"];
    if (isset($_GET["regions"])) {
        $regions = $_GET["regions"];
        if (isset($_GET["communes"])) {
            $communes = $_GET["communes"];
            // Cas où on retourne les localités
            $result = ["localites" => $lieux[$pays][$regions][$communes]];
        } else {
            // Cas où on retourne les communes
            $result = ["communes" => array_keys($lieux[$pays][$regions])];
        }
    } else {
        // Cas où on retourne les régions
        $result = ["regions" => array_keys($lieux[$pays])];
    }
}
else{
    $result = ["pays" => array_keys($lieux)];
}
echo json_encode($result);
