<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
Route::get('/', function () {
    return view('welcome');
});
$testwork = 34;
function myBaseFun(Request $request)
{
    echo("im work for you! ");
    $a = $request->input('one');
    $b = $request->input('two');
    $myresult = $a + $b;
    return $myresult;
}
Route::POST('/first', function (Request $request) {
    $result = myBaseFun($request);

    return view('firstWork', [
    'value' => $result
    ]);
});