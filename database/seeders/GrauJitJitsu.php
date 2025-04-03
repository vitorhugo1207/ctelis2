<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class GrauJitJitsu extends Seeder
{
    public function run(): void
    {
        $graus = [
            ['nome' => 'Branca', 'nivel' => 1, 'sistema_graduacao_id' => 1],
            ['nome' => 'Amarela', 'nivel' => 2, 'sistema_graduacao_id' => 1],
            ['nome' => 'Laranja', 'nivel' => 3, 'sistema_graduacao_id' => 1],
            ['nome' => 'Verde', 'nivel' => 4, 'sistema_graduacao_id' => 1],
            ['nome' => 'Azul', 'nivel' => 5, 'sistema_graduacao_id' => 1],
            ['nome' => 'Roxa', 'nivel' => 6, 'sistema_graduacao_id' => 1],
            ['nome' => 'Marrom', 'nivel' => 7, 'sistema_graduacao_id' => 1],
            ['nome' => 'Preta', 'nivel' => 8, 'sistema_graduacao_id' => 1]
        ];

        DB::table('graus')->insert($graus);
    }
}
