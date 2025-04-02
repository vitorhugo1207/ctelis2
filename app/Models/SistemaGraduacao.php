<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SistemaGraduacao extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
    ];


    public function artesMaciais()
    {
        return $this->hasMany(ArteMarcial::class);
    }


    public function graus()
    {
        return $this->hasMany(Grau::class);
    }
}
