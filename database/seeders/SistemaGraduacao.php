<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SistemaGraduacao extends Seeder
{
    public function run(): void
    {
        $sistema_graduacaos = [
            ['nome' => 'JiuJitsu'],
            ['nome' => 'MuayThai']
        ];

        DB::table('sistema_graduacaos')->insert($sistema_graduacaos);
    }
}
