<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AlunoController extends Controller
{
    public function __invoke()
    {
        return inertia('alunos/alunosList');
    }
}
