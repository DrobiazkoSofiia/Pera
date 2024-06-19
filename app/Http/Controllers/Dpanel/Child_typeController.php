<?php

namespace App\Http\Controllers\Dpanel;

use App\Http\Controllers\Controller;
use App\Models\Child_type;
use App\Http\Requests\StoreChild_typeRequest;
use App\Http\Requests\UpdateChild_typeRequest;

class Child_typeController extends Controller
{
   
    public function index()
    {
        $child_types = Child_type::latest()->paginate(20);

        return view('dpanel.child_types', compact('child_types'));
    }

   
    public function store(StoreChild_typeRequest $request)
    {
        $validated = $request->validated();
        $childType = Child_type::create($validated);

        if ($request->hasFile('picture')) {
            $childType->addMedia($request->file('picture'))->toMediaCollection('pictures');
        }

        return back()->withSuccess('Child Type created successfully');
    }

    public function update(UpdateChild_typeRequest $request, Child_type $child_type)
    {
        $validated = $request->validated();
        $child_type->update($validated);

        if ($request->hasFile('picture')) {
            $child_type->clearMediaCollection('pictures');
            $child_type->addMedia($request->file('picture'))->toMediaCollection('pictures');
        }

        return back()->withSuccess('Child Type updated successfully');
    }

    
    public function destroy(Child_type $child_type)
    {
        try {
            $child_type->clearMediaCollection('pictures');
            $child_type->delete();

            return back()->withSuccess('Child Type deleted successfully');
        } catch (\Throwable $th) {
            return back()->withError('Other data depend on this child type');
        }
    }
}

