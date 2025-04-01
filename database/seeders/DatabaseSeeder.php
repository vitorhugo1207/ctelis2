<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        User::factory()->create([
            'name' => 'Vitor Hugo',
            'email' => 'vitorhugo@gmail.com',
            'password' => 'vitor123',
        ]);

        User::factory()->create([
            'name' => 'Élis Junior',
            'email' => 'elies@gmail.com',
            'password' => 'eli123',
        ]);
    }
}
