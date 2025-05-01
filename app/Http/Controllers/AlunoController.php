<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Aluno;
use Illuminate\Support\Facades\Log;

class AlunoController extends Controller
{
    public function __invoke()
    {
        return inertia('alunos/alunosList', ['alunos' => $this->getAllAlunos()]);
    }

    private function getAllAlunos()
    {
        $alunos = Aluno::limit(50)->get();
        return $alunos;
    }

    public function alunoSearch(Request $request)
    {
        $search = $request->input('search');

        $alunos = Aluno::when($search, function ($query, $search) {
            $query->where('name', 'like', "%{$search}%")
            ->orWhere('telefone', 'like', "%{$search}%")
            ->orWhere('endereco', 'like', "%{$search}%")
            ->orWhere('nomeResponsavel', 'like', "%{$search}%")
            ->orWhere('telefoneResponsavel', 'like', "%{$search}%");
        })->limit(50)->get();

        return response()->json(['alunos' => $alunos]);
    }

    public function destroy($id)
    {
        $aluno = Aluno::find($id);

        if (!$aluno) {
            return response()->json([
                'alunos' => $this->getAllAlunos(),
                'error' => 'Aluno não encontrado.'
            ], 404);
        }

        $aluno->delete();

        return response()->json(['alunos' => $this->getAllAlunos()]);
    }
}
