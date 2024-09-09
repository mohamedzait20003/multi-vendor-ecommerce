<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use Illuminate\Session\Middleware\StartSession;
use Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse;
use Illuminate\View\Middleware\ShareErrorsFromSession;

Route::post('/register', [UserController::class, 'register']);

Route::middleware([StartSession::class, AddQueuedCookiesToResponse::class, ShareErrorsFromSession::class])->group(function () {
    Route::post('/login', [UserController::class, 'login']);
    Route::middleware('auth:sanctum')->get('/user-details', [UserController::class, 'getUserDetails']);
});