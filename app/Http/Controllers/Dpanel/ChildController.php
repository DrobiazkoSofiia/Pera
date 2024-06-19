<?php

namespace App\Http\Controllers\Dpanel;

use App\Http\Controllers\Controller;
use App\Models\Child;
use App\Http\Requests\StoreChildRequest;
use App\Http\Requests\UpdateChildRequest;
use Illuminate\Support\Facades\Auth;

class ChildController extends Controller
{
   
    public function index()
    {
        $children = Child::latest()->paginate(20);

        return view('dpanel.children', compact('children'));
    }

    
    public function store(StoreChildRequest $request)
    {
        $validated = $request->validated();
        $validated['user_id'] = Auth::id();  

        $child = Child::create($validated);

        if ($request->hasFile('picture')) {
            $child->addMedia($request->file('picture'))->toMediaCollection('pictures');
        }

        return back()->withSuccess('Child created successfully');
    }


    public function update(UpdateChildRequest $request, Child $child)
    {
        $validated = $request->validated();

        $child->update($validated);

        if ($request->hasFile('picture')) {
            $child->clearMediaCollection('pictures');
            $child->addMedia($request->file('picture'))->toMediaCollection('pictures');
        }

        return back()->withSuccess('Child updated successfully');
    }

   
    public function destroy(Child $child)
    {
        try {
            $child->clearMediaCollection('pictures');
            $child->delete();

            return back()->withSuccess('Child deleted successfully');
        } catch (\Throwable $th) {
            return back()->withError('Other data depend on this child');
        }
    }
}