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
            $table->string('name', 100);
            $table->date('birthDay')->nullable();
            $table->string('telephone', 21)->nullable();
            $table->string('address', 100)->nullable();
            $table->string('nameResponsible', 100)->nullable();
            $table->string('telephoneResponsible', 21)->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('alunos');
    }
};
