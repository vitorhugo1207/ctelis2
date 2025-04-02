<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('graus', function (Blueprint $table) {
            $table->id();
            $table->foreignId('sistema_graduacao_id')->constrained('sistema_graduacaos')->cascadeOnDelete();
            $table->string('nome'); // Nome do grau (ex: faixa branca, faixa azul)
            $table->integer('nivel'); // Nível do grau (ex: 1, 2, 3)
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('graus');
    }
};
