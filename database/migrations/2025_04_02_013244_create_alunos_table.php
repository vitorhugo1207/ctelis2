<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('alunos', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('endereco')->nullable();
            $table->string('telefone')->nullable();
            $table->string('dataNascimento')->nullable();
            $table->string('nomeResponsavel')->nullable();
            $table->string('telefoneResponsavel')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('alunos');
    }
};
