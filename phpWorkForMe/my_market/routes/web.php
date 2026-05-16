<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});
$testwork = 34;
function myBaseFun()
{
    echo("im work for you! ");
    return 67;
}
Route::get('/first', function () {
    $result = myBaseFun();

    return view('firstWork', [
    'value' => $result
    ]);
});