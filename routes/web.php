<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Treatment\productsController;
use App\Http\Controllers\Treatment\pharmaciesController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('Treatment.products');
// });

Auth::routes(['register' => false,'login'=>false]);

// Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');




Route::get('/', [productsController::class,'showView'])->name('products');


Route::get('/Pharmacies', [pharmaciesController::class,'showView'])->name('Pharmacies');



