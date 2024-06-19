<?php

namespace App\Http\Controllers\Dpanel;

use App\Http\Controllers\Controller;
use App\Models\Meal;
use App\Http\Requests\StoreMealRequest;
use App\Http\Requests\UpdateMealRequest;
use App\Models\Child_type;
use App\Models\Diet_type;
use Illuminate\Http\Request;

class MealController extends Controller
{
   
    public function index()
    {
        $meals = Meal::with([
            'child_type:id,name',
            'diet_types:id,name',
            'media'
        ])
            ->paginate(20);

        return view('dpanel.meal.index', compact('meals'));
    }

   
    public function create()
    {
        $child_types = Child_type::orderBy('name', 'asc')->get(['id', 'name']);
        $diet_types = Diet_type::orderBy('name', 'asc')->get(['id', 'name']);

        return view('dpanel.meal.create', compact('child_types', 'diet_types'));
    }

  
    public function store(StoreMealRequest $request)
    {
        $meal = Meal::create($request->safe()->only([
            'name', 'description', 'meal_category', 'child_type_id', 'calories', 'preparation_time', 'meat_percentage', 'vegetables_percentage', 'fruit_percentage', 'cereals_percentage', 'price', 'ingredients', 'created_by'
        ]));

     
        if ($request->diet_type_ids) {
            $meal->diet_types()->attach($request->diet_type_ids);
        }

      
        if ($request->hasFile('main_picture')) {
            $meal->addMedia($request->main_picture)->toMediaCollection('images');
        }

        if ($request->hasFile('additional_pics')) {
            foreach ($request->additional_pics as $image) {
                $meal->addMedia($image)->toMediaCollection('images');
            }
        }

        return redirect()->route('dpanel.meals.index')->withSuccess('Meal Added Successfully.');
    }

    
    public function show(Meal $meal)
    {
        //
    }

    
    public function edit(Meal $meal)
    {
        $child_types = Child_type::orderBy('name', 'asc')->get(['id', 'name']);
        $diet_types = Diet_type::orderBy('name', 'asc')->get(['id', 'name']);

        $meal->loadMissing('diet_types:id', 'media');

        return view('dpanel.meal.edit', compact('child_types', 'diet_types', 'meal'));
    }

   
    public function update(UpdateMealRequest $request, Meal $meal)
    {
        $meal->update($request->safe()->only([
            'name', 'description', 'meal_category', 'child_type_id', 'calories', 'preparation_time', 'meat_percentage', 'vegetables_percentage', 'fruit_percentage', 'cereals_percentage', 'price', 'ingredients', 'created_by'
        ]));

        $meal->diet_types()->sync($request->diet_type_ids);

        if ($request->has('delete_images')) {
            foreach ($request->delete_images as $image) {
                $meal->media()->where('id', $image)->delete();
            }
        }

        if ($request->hasFile('main_picture')) {
            $meal->addMedia($request->main_picture)->toMediaCollection('images');
        }

        if ($request->hasFile('additional_pics')) {
            foreach ($request->additional_pics as $image) {
                $meal->addMedia($image)->toMediaCollection('images');
            }
        }

        return redirect()->route('dpanel.meals.index')->withSuccess('Meal Updated Successfully.');
    }

   
    public function destroy(Meal $meal)
    {
        try {
            $meal->delete();
            return back()->withSuccess('Meal deleted successfully.');
        } catch (\Throwable $th) {
            return back()->withError('Other data depends on this Meal.');
        }
    }
}
