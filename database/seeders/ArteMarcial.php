<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ArteMarcial extends Seeder
{
    public function run(): void
    {
        $aluno_arte_marcial = [
            ['nome' => 'JiuJitsu', 'sistema_graduacao_id' => 1],
            ['nome' => 'Muay Thai', 'sistema_graduacao_id' => 1],
            ['nome' => 'KickBox'],
            ['nome' => 'Box'],
            ['nome' => 'Box Cardio'],
            ['nome' => 'MMA']
        ];

        DB::table('aluno_arte_marcial')->insert($aluno_arte_marcial);
    }
}
