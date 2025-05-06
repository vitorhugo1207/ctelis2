<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Aluno;

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
        $arteId = $request->input('arte');

        $alunos = Aluno::join('aluno_arte_marcial', 'alunos.id', '=', 'aluno_arte_marcial.aluno_id')
            ->join('arte_marcials', 'aluno_arte_marcial.arte_marcial_id', '=', 'arte_marcials.id')
            ->when($arteId > 0, function ($query) use ($arteId) {
                $query->where('arte_marcials.id', $arteId);
            })
            ->where(function ($query) use ($search) {
                $query->where('alunos.name', 'like', "%{$search}%")
                    ->orWhere('alunos.telefone', 'like', "%{$search}%")
                    ->orWhere('alunos.endereco', 'like', "%{$search}%")
                    ->orWhere('alunos.nomeResponsavel', 'like', "%{$search}%")
                    ->orWhere('alunos.telefoneResponsavel', 'like', "%{$search}%");
            })
            ->select('alunos.*')
            ->distinct()
            ->limit(50)
            ->get();

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
