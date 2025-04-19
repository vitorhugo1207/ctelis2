<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SistemaGraduacao extends Seeder
{
    public function run(): void
    {
        $sistema_graduacaos = [
            ['name' => 'Jiu Jitsu'],
            ['name' => 'Muay Thai'],
            ['name' => 'KickBox']
        ];

        DB::table('sistema_graduacaos')->insert($sistema_graduacaos);
    }
}
