<?php

namespace App\Http\Controllers\Treatment;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Pharmacie;
use App\Models\Product;
use App\Models\Pharmacies_products;



class productsController extends Controller
{



    public function showView()
    {
        return view('Treatment.products');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $Product = Product::with('pharmacie')->orderBy('id','DESC')->paginate(15);
       
        return response()->json($Product, 200);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $request->validate([
            'addproductform.title' => 'required' ,
            'addproductform.description' => 'required' ,
         ]);

        $product = new Product;
        $product->title =  $request->addproductform['title'];
        $product->description =  $request->addproductform['description'];
        $product->save();

        return response()->json('Done', 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $request->validate([
            'EditProductform.title' => 'required' ,
            'EditProductform.description' => 'required' ,
         ]);

        $product = Product::find($id);
        $product->title =  $request->EditProductform['title'];
        $product->description =  $request->EditProductform['description'];
        $product->update();

        return response()->json('Done', 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
     
        Product::find($id)->delete();

        return response()->json('Done', 200);
    }



    public function getallproducts(Request $request)
    {
        $Product =  Product::all();
   
        return response()->json($Product, 200);


    }



    public function getpharmacies(Request $request)
    {
        $Pharmacies =  Pharmacie::all();
   
        return response()->json($Pharmacies, 200);


    }



    public function addproductTopharmacy(Request $request)
    { 
        
        
        $request->validate([
        'addproductTopharmacyform.pharmacie_id' => 'required' ,
        'addproductTopharmacyform.products_id' => 'required' ,
        'addproductTopharmacyform.price' => 'required' ,
     ]);

        $Pharmacies_products = new Pharmacies_products;
        $Pharmacies_products->pharmacie_id  = $request->addproductTopharmacyform['pharmacie_id'];
        $Pharmacies_products->products_id  = $request->addproductTopharmacyform['products_id'];
        $Pharmacies_products->price  = $request->addproductTopharmacyform['price'];
        $Pharmacies_products->save();

        return response()->json('Done', 200);

        


    }
}
