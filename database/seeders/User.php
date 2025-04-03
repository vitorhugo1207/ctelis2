<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class User extends Seeder
{
    public function run(): void
    {
        $user = [
            ['name' => 'Vitor Hugo (Dev)', 'password_reset_next_login' => true, 'password' => 'vi123', 'email' => 'vitor@gmail.com.br'],
            ['name' => 'Elies Junior (Sensei)', 'password_reset_next_login' => true, 'password' => 'eli123', 'email' => 'elies@gmail.com.br'],
        ];

        DB::table('users')->insert($user);
    }
}
