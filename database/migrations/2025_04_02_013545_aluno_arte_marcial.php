<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('aluno_arte_marcial', function (Blueprint $table) {
            $table->id();
            $table->foreignId('aluno_id')->constrained('alunos')->cascadeOnDelete();
            $table->foreignId('arte_marcial_id')->constrained('arte_marcials')->cascadeOnDelete();
            $table->foreignId('grau_id')->constrained('graus')->cascadeOnDelete()->nullable();
            $table->date('data_inicio')->nullable();
            $table->timestamps();

        });
    }

    public function down(): void
    {
        Schema::dropIfExists('aluno_arte_marcial');
    }
};
