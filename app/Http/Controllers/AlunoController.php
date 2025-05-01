<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Models\Aluno;

class AlunoController extends Controller
{
    public function __invoke()
    {
        $alunos = Aluno::limit(50)->get();
        return inertia('alunos/alunosList', ['alunos' => $alunos]);
    }

    public function alunoSearch(Request $request)
    {
        $search = $request->input('search');

        Log::info('Valor de search:', ['search' => $search]);

        $alunos = Aluno::when($search, function ($query, $search) {
            $query->where('name', 'like', "%{$search}%")
            ->orWhere('telefone', 'like', "%{$search}%")
            ->orWhere('endereco', 'like', "%{$search}%")
            ->orderBy('name');
        })->limit(50)->get();

        return response()->json(['alunos' => $alunos]);
    }
}
