<?php

namespace App\Http\Controllers\Treatment;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Pharmacie;


class pharmaciesController extends Controller
{

    
    public function showView()
    {
        return view('Treatment.pharmacies');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //

        $pharmacies = Pharmacie::paginate(15);
       
        return response()->json($pharmacies, 200);
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
            'addpharmacyform.name' => 'required' ,
            'addpharmacyform.location' => 'required' ,
         ]);

        $Pharmacie = new Pharmacie;
        $Pharmacie->name =  $request->addpharmacyform['name'];
        $Pharmacie->location =  $request->addpharmacyform['location'];
        $Pharmacie->save();

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
            'Editpharmacyform.name' => 'required' ,
            'Editpharmacyform.location' => 'required' ,
         ]);


        $Pharmacie = Pharmacie::find($id);
        $Pharmacie->name =  $request->Editpharmacyform['name'];
        $Pharmacie->location =  $request->Editpharmacyform['location'];
        $Pharmacie->update();

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

        Pharmacie::find($id)->delete();
        return response()->json('Done', 200);
    }
}
