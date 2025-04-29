<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class ArteMarcialSeeder extends Seeder
{
    public function run(): void
    {
        $arte_marcials = [
            ['name' => 'Jiu-Jitsu', 'sistema_graduacao_id' => 1],
            ['name' => 'Muay Thai', 'sistema_graduacao_id' => 2],
            ['name' => 'KickBox', 'sistema_graduacao_id' => 3],
            ['name' => 'Box', 'sistema_graduacao_id' => null],
            ['name' => 'Box Cardio', 'sistema_graduacao_id' => null],
            ['name' => 'MMA', 'sistema_graduacao_id' => null]
        ];

        DB::table('arte_marcials')->insert($arte_marcials);
    }
}
