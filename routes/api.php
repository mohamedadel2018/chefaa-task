<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Treatment\productsController;
use App\Http\Controllers\Treatment\pharmaciesController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});




Route::apiResource('apiproducts', productsController::class);

Route::apiResource('apipharmacies', pharmaciesController::class);



Route::get('/getallproducts', [productsController::class,'getallproducts']);

Route::get('/getpharmacies', [productsController::class,'getpharmacies']);

Route::post('/addproductTopharmacy', [productsController::class,'addproductTopharmacy']);

