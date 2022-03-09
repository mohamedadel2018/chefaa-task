<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePharmaciesProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pharmacies_products', function (Blueprint $table) {
            $table->increments('id');

            $table->unsignedInteger('pharmacie_id')->nullable();
            $table->foreign('pharmacie_id')->references('id')->on('pharmacies')->onDelete('cascade');


            $table->unsignedInteger('products_id')->nullable();
            $table->foreign('products_id')->references('id')->on('products')->onDelete('cascade');

            $table->float('price')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pharmacies_products');
    }
}
