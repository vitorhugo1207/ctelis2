<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Aluno;

class AlunoController extends Controller
{
    public function __invoke()
    {
        $alunos = Aluno::limit(50)->get();
        return inertia('alunos/alunosList', ['alunos' => $alunos]);
    }
}