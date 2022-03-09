<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pharmacie extends Model
{
    use HasFactory;


    
    public function product()
    {
        return $this->belongsToMany(Product::class, 'pharmacies_products', 'pharmacie_id', 'products_id')->withPivot('price');
    }
}
