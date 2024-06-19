<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Meal;
use Illuminate\Http\Request;

class MealController extends Controller
{
    public function index()
    {
        return response()->json(Meal::all(), 200);
    }

    public function show($id)
    {
        $meal = Meal::findOrFail($id);
        return response()->json($meal, 200);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'main_picture' => 'nullable|string',
            'meal_category' => 'required|string|max:255',
            'child_type_id' => 'required|integer|exists:child_types,id',
            'calories' => 'required|integer',
            'preparation_time' => 'required|integer',
            'meat_percentage' => 'required|integer',
            'vegetables_percentage' => 'required|integer',
            'fruit_percentage' => 'required|integer',
            'cereals_percentage' => 'required|integer',
            'additional_pic1' => 'nullable|string',
            'additional_pic2' => 'nullable|string',
            'additional_pic3' => 'nullable|string',
            'additional_pic4' => 'nullable|string',
            'price' => 'required|numeric',
            'ingredients' => 'nullable|string'
        ]);

        $meal = Meal::create($request->all());
        return response()->json($meal, 201);
    }

    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'name' => 'string|max:255',
            'description' => 'nullable|string',
            'main_picture' => 'nullable|string',
            'meal_category' => 'string|max:255',
            'child_type_id' => 'integer|exists:child_types,id',
            'calories' => 'integer',
            'preparation_time' => 'integer',
            'meat_percentage' => 'integer',
            'vegetables_percentage' => 'integer',
            'fruit_percentage' => 'integer',
            'cereals_percentage' => 'integer',
            'additional_pic1' => 'nullable|string',
            'additional_pic2' => 'nullable|string',
            'additional_pic3' => 'nullable|string',
            'additional_pic4' => 'nullable|string',
            'price' => 'numeric',
            'ingredients' => 'nullable|string', 
        ]);

        $meal = Meal::findOrFail($id);
        $meal->update($request->all());
        return response()->json($meal, 200);
    }

    public function destroy($id)
    {
        Meal::findOrFail($id)->delete();
        return response()->json(null, 204);
    }
}
