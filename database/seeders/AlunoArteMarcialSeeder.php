<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Aluno;
use Illuminate\Support\Facades\DB;

class AlunoArteMarcialSeeder extends Seeder
{
    public function run(): void
    {
        // Get all Aluno IDs
        $alunoIds = Aluno::pluck('id')->toArray();

        // Get all ArteMarcial IDs
        $arteMarcialIds = DB::table('arte_marcials')->pluck('id')->toArray();

        // Prepare pivot data
        $pivotData = [];
        foreach ($alunoIds as $alunoId) {
            // Assign 1 to 3 random artesMarciais to each Aluno
            $randomArteMarcialIds = array_rand(array_flip($arteMarcialIds), rand(1, 3));
            foreach ((array) $randomArteMarcialIds as $arteMarcialId) {
                $pivotData[] = [
                    'aluno_id' => $alunoId,
                    'arte_marcial_id' => $arteMarcialId,
                    'grau_id' => null, // Set default value or customize as needed
                    'data_inicio' => now(),
                    'created_at' => now(),
                    'updated_at' => now(),
                ];
            }
        }

        // Insert into pivot table
        DB::table('aluno_arte_marcial')->insert($pivotData);
    }
}
