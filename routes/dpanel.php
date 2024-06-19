<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Dpanel;

Route::get('/dashboard', [Dpanel\DashboardController::class, 'index'])->name('dashboard');


Route::apiResource('diet_types', Dpanel\Diet_typeController::class)->except('show');

Route::apiResource('child_types', Dpanel\Child_typeController::class)->except('show');

Route::apiResource('children', Dpanel\ChildController::class)->except('show');

Route::apiResource('articles', Dpanel\ArticleController::class)->except('show');

Route::apiResource('videos', Dpanel\VideoController::class)->except('show');

Route::Resource('meals', Dpanel\MealController::class);

Route::Resource('menus', Dpanel\MenuController::class);


Route::get('/logout', [\DD4You\Dpanel\Http\Controllers\AuthController::class, 'logout'])->name('logout');
Route::resource('global-settings', \DD4You\Dpanel\Http\Controllers\GlobalSettingController::class)->only('index', 'store');

