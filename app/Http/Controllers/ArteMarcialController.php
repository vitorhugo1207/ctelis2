<?php

namespace App\Http\Controllers;

use App\Models\ArteMarcial;

class ArteMarcialController extends Controller
{
    public function getAllArtesMarciais()
    {
        $artesMarciais = ArteMarcial::all();
        return response()->json($artesMarciais);
    }
}
