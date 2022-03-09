<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;


    
    public function pharmacie()
    {
        return $this->belongsToMany(Pharmacie::class, 'pharmacies_products', 'products_id', 'pharmacie_id')->withPivot('price');
    }
}
