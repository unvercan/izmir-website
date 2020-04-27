<?php

$sections = array(
    'General Information' => 'info',
    'History' => 'history',
    'Cuisine' => 'cuisine',
    'Climate' => 'climate',
    'Beach' => 'beach'
);

function buildSectionMenu($sections)
{
    $menuHtml = '';
    $index = 1;

    foreach ($sections as $key => $value) {
        $menuHtml .= '<td> <a style="text-decoration: none" id="section' . $index . '" href="index.php?section=' . $value . '"> ' . $key . ' </a> </td>';
        $index += 1;
    }

    return $menuHtml;
}

function showSection($sections)
{
    $sectionFound = false;

    foreach ($sections as $key => $value) {
        if (isset($_GET['section']) && $_GET['section'] == $value) {
            $path = $value . '.php';

            if (file_exists($path)) {
                /** @noinspection PhpIncludeInspection */
                include $path;
                $sectionFound = true;
            }
        }
    }

    if (!$sectionFound) {
        if (!isset($_GET['section'])) {
            include 'info.php';
        } else {
            include 'error.php';
        }
    }
}

?>

<!DOCTYPE html>

<html lang=tr>

<head>
    <meta charset="utf-8">

    <title>Izmir</title>

    <link rel="stylesheet" href="/css/main.css">

    <script src="https://code.jquery.com/jquery-1.12.4.min.js"
            integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ="
            crossorigin="anonymous">
    </script>
    <script src="/js/main.js"></script>
</head>

<body>

<h1 id="mainTitle">Izmir</h1>

<table>
    <tr>
        <?php echo buildSectionMenu($sections); ?>
    </tr>
</table>

<?php showSection($sections); ?>
</body>
</html>
