$(document).ready(function () {
    $('#sectionTitle').hide(0);
    $('#sectionContent').hide(0);
    $('#image1').hide(0);
    $('#image2').hide(0);
    $('#image3').hide(0);
    $('#image4').hide(0);
    $('#image5').hide(0);

    $('#sectionTitle').show(250);
    $('#sectionContent').show(500);
    $('#image1').show(500);
    $('#image2').show(1000);
    $('#image3').show(1500);
    $('#image4').show(2000);
    $('#image5').show(2500);

    $('#image1').click(function () {
        $('#image1').hide(500);
    });

    $('#image2').click(function () {
        $('#image2').hide(500);
    });

    $('#image3').click(function () {
        $('#image3').hide(500);
    });

    $('#image4').click(function () {
        $('#image4').hide(500);
    });

    $('#image5').click(function () {
        $('#image5').hide(500);
    });

    $('p').mouseover(function () {
        $('p').css('background-color', 'yellow');
    });

    $('p').mouseout(function () {
        $('p').css('background-color', 'rgb(204,255,255)');
    });

    $('#section1').click(function () {
        $(this).css('background-color', 'black');
    });

    $('#section2').click(function () {
        $(this).css('background-color', 'black');
    });

    $('#section3').click(function () {
        $(this).css('background-color', 'black');
    });

    $('#section4').click(function () {
        $(this).css('background-color', 'black');
    });

    $('#section5').click(function () {
        $(this).css('background-color', 'black');
    });

    let counter = 0;
    const mainTitle = document.getElementById('mainTitle');

    mainTitle.onmouseover = OnMouseOverEventHandler;
    mainTitle.onclick = OnclickEventLHandler;

    function OnMouseOverEventHandler() {
        counter++;
        console.log(counter);
    }

    function OnclickEventLHandler() {
        alert('You clicked on Izmir!');
    }
});
