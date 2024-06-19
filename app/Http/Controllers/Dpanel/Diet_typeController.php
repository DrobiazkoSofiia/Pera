<?php

namespace App\Http\Controllers\Dpanel;

use App\Http\Controllers\Controller;
use App\Models\Diet_type;
use App\Http\Requests\StoreDiet_typeRequest;
use App\Http\Requests\UpdateDiet_typeRequest;
use Illuminate\Support\Facades\Storage;

class Diet_typeController extends Controller
{

    public function index()
    {
        $diet_types = Diet_type::latest()->paginate(20);

        return view('dpanel.diet_types', compact('diet_types'));
    }

   
    public function store(StoreDiet_typeRequest $request)
    {
        $validated = $request->validated();
        $dietType = Diet_type::create($validated);

        if ($request->hasFile('picture')) {
            $dietType->addMedia($request->file('picture'))->toMediaCollection('pictures');
        }

        return back()->withSuccess('Diet Type created successfully');
    }

   
    public function update(UpdateDiet_typeRequest $request, Diet_type $diet_type)
    {
        $validated = $request->validated();
        $diet_type->update($validated);

        if ($request->hasFile('picture')) {
            $diet_type->clearMediaCollection('pictures');
            $diet_type->addMedia($request->file('picture'))->toMediaCollection('pictures');
        }

        return back()->withSuccess('Diet Type updated successfully');
    }

  
    public function destroy(Diet_type $diet_type)
    {
        try {
            $diet_type->clearMediaCollection('pictures');
            $diet_type->delete();

            return back()->withSuccess('Diet Type deleted successfully');
        } catch (\Throwable $th) {
            return back()->withError('Other data depend on this diet type');
        }
    }
}