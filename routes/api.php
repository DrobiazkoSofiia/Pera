<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\V1;
use App\Http\Controllers\Api\V1\ArticleController;
use App\Http\Controllers\Api\V1\VideoController;
use App\Http\Controllers\Api\V1\ChildController;
use App\Http\Controllers\Api\V1\MealController;
use App\Http\Controllers\Api\V1\MenuController;
use App\Http\Controllers\Api\V1\UserController;
use App\Http\Controllers\Api\V1\OrderController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('/auth/send-otp', V1\Auth\SendOTPController::class);
Route::post('/auth/validate-otp', V1\Auth\ValidateOTPController::class);

Route::get('/articles', [ArticleController::class, 'index']);
Route::get('/articles/{id}', [ArticleController::class, 'show']);
Route::post('/articles', [V1\ArticleController::class, 'store']);
Route::put('/articles/{id}', [V1\ArticleController::class, 'update']);
Route::delete('/articles/{id}', [V1\ArticleController::class, 'destroy']);

Route::get('/videos', [VideoController::class, 'index']);
Route::get('/videos/{id}', [VideoController::class, 'show']);
Route::post('/videos', [VideoController::class, 'store']);
Route::put('/videos/{id}', [VideoController::class, 'update']);
Route::delete('/videos/{id}', [VideoController::class, 'destroy']);


Route::get('/children', [ChildController::class, 'index']);
Route::get('/children/{id}', [ChildController::class, 'show']);
Route::post('/children', [ChildController::class, 'store']);
Route::put('/children/{id}', [ChildController::class, 'update']);
Route::delete('/children/{id}', [ChildController::class, 'destroy']);


Route::get('/meals', [MealController::class, 'index']);
Route::get('/meals/{id}', [MealController::class, 'show']);
Route::post('/meals', [MealController::class, 'store']);
Route::put('/meals/{id}', [MealController::class, 'update']);
Route::delete('/meals/{id}', [MealController::class, 'destroy']);


Route::apiResource('menus', MenuController::class);
Route::post('/menus/{menu_id}/meals', [MenuController::class, 'addMeal']);
Route::delete('/menus/{menu_id}/meals', [MenuController::class, 'removeMeal']);
Route::get('/menus/{id}/meals', [MenuController::class, 'getMenuWithMeals']);
Route::post('/menus/{menu_id}/users', [MenuController::class, 'addUser']);
Route::delete('/menus/{menu_id}/users', [MenuController::class, 'removeUser']);



Route::post('users', [UserController::class, 'store']);
Route::get('/users', [UserController::class, 'index']);
Route::get('/users/{id}', [UserController::class, 'show']);
Route::put('/users/{id}', [UserController::class, 'update']);
Route::delete('/users/{id}', [UserController::class, 'destroy']);

Route::get('/orders', [OrderController::class, 'index']);
Route::get('/orders/{id}', [OrderController::class, 'show']);
Route::post('/orders', [OrderController::class, 'store']);
Route::put('/orders/{id}', [OrderController::class, 'update']);
Route::delete('/orders/{id}', [OrderController::class, 'destroy']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/auth/profile', [V1\Auth\ProfileController::class, 'show']);
    Route::put('/auth/profile', [V1\Auth\ProfileController::class, 'update']);
});
