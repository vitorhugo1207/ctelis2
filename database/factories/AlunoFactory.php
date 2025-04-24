<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class AlunoFactory extends Factory
{
    public function definition(): array
    {
        return [
            'name' => $name = fake()->name(),
            'endereco' => fake()->address(),
            'telefone' => fake()->phoneNumber(),
            'dataNascimento' => fake()->date(),
            'nomeResponsavel' => fake()->name(),
            'telefoneResponsavel' => fake()->phoneNumber(),
        ];
    }
}
