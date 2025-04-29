<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        $user = [
            ['name' => 'Vitor Hugo (Dev)', 'password_reset_next_login' => true, 'password' => Hash::make('vitor123'), 'email' => 'vitor@gmail.com.br', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Elies Junior (Sensei)', 'password_reset_next_login' => true, 'password' => Hash::make('elies123'), 'email' => 'elies@gmail.com.br', 'created_at' => now(), 'updated_at' => now()],
        ];

        DB::table('users')->insert($user);
    }
}
