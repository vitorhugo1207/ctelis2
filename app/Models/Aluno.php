<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Aluno extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'endereco',
        'telefone',
        'dataNascimento',
        'nomeResponsavel',
        'telefoneResponsavel',
    ];

    public function artesMarciais()
    {
        return $this->belongsToMany(ArteMarcial::class, 'aluno_arte_marcial')
            ->withPivot('grau_id', 'data_inicio')
            ->withTimestamps();
    }
}
