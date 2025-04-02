<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Grau extends Model
{
    use HasFactory;

    protected $fillable = [
        'nome',
        'nivel',
    ];


    public function sistemaGraduacao()
    {
        return $this->belongsTo(SistemaGraduacao::class);
    }

    public function artesMaciais()
    {
        return $this->belongsTo(ArteMarcial::class);
    }
}
