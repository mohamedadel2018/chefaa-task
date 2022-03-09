<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;


use App\Models\Pharmacie;
use App\Models\Product;
use App\Models\Pharmacies_products;


class ProductSearch extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'products:search-cheapest {id}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'get cheapest products';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
       

        $productId = $this->argument('id');

        $allPharmacytId = Pharmacies_products::where('products_id',$productId)->orderBy('price')->take(5)->get('pharmacie_id');

        $Pharmacy =  Pharmacie::whereIn('id',$allPharmacytId)->with(['product' => function ($query) {
            $query->select('price');
           }]
           )->get(['id','name']);

        $this->info($Pharmacy);
        
        return 0;

    }
}
