<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ArteMarcial extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
    ];

    public function sistemaGraduacao()
    {
        return $this->belongsTo(SistemaGraduacao::class);
    }


    public function graus()
    {
        return $this->hasMany(Grau::class);
    }

    public function alunos()
    {
        return $this->belongsToMany(Aluno::class, 'aluno_arte_marcial')
            ->withPivot('grau_id', 'data_inicio')
            ->withTimestamps();
    }
}
