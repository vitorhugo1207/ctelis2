<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('arte_marcials', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->foreignId('sistema_graduacao_id')->nullable()->constrained('sistema_graduacaos')->cascadeOnDelete();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('arte_macials');
    }
};
