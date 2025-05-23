<?php

use App\Http\Controllers\Auth\DestroyAccountController;
use App\Http\Controllers\AlunoController;
use App\Http\Controllers\ArteMarcialController;
use App\Http\Controllers\Auth\SecurityController;
use App\Http\Controllers\Auth\UserController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
    Route::get('/', HomeController::class)->name('home');

    Route::get('dashboard', DashboardController::class)->middleware(['verified'])->name('dashboard');

    Route::controller(ProfileController::class)->group(function () {
        Route::get('profile', 'index')->name('profile.index');
        Route::patch('profile', 'update')->name('profile.update');
    });

    Route::controller(SecurityController::class)->group(function () {
        Route::get('security', 'index')->name('security.index');
        Route::patch('security', 'update')->name('security.update');
    });

    Route::controller(DestroyAccountController::class)->group(function () {
        Route::get('danger', 'index')->name('danger.index');
        Route::delete('danger', 'destroy')->name('danger.destroy');
    });

    Route::controller(UserController::class)->group(function () {
        Route::get('users', 'index')->name('users.index');
        Route::get('users/{user}', 'show')->name('users.show');
        Route::delete('users/{user}', 'destroy')->name('users.destroy');
    });

    Route::controller(AlunoController::class)->group(function () {
        Route::get('alunos', '__invoke')->name('alunos');
        Route::get('alunoSearch', 'alunoSearch')->name('alunoSearch');
        Route::delete('deleteAluno/{id}', 'destroy')->name('deleteAluno');
        Route::get('aluno/{id}', 'getAluno')->name('aluno');
    });

    Route::get('allArtesMarciais', [ArteMarcialController::class, 'getAllArtesMarciais'])->name('allArtesMarciais');
});

require __DIR__ . '/auth.php';
