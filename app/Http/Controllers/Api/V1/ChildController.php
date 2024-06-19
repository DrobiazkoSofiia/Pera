<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Child;
use Illuminate\Http\Request;

class ChildController extends Controller
{
    public function index()
    {
        return response()->json(Child::all(), 200);
    }

    public function show($id)
    {
        $child = Child::findOrFail($id);
        return response()->json($child, 200);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|string|max:255',
            'gender' => 'required|string|max:10',
            'picture' => 'nullable|string',
            'age' => 'required|integer',
            'diet_type_id' => 'required|integer|exists:diet_types,id',
            'user_id' => 'required|integer|exists:users,id',
            'child_type_id' => 'required|integer|exists:child_types,id'
        ]);

        $child = Child::create($request->all());
        return response()->json($child, 201);
    }

    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'name' => 'string|max:255',
            'gender' => 'string|max:10',
            'picture' => 'nullable|string',
            'age' => 'integer',
            'diet_type_id' => 'integer|exists:diet_types,id',
            'user_id' => 'integer|exists:users,id',
            'child_type_id' => 'integer|exists:child_types,id'
        ]);

        $child = Child::findOrFail($id);
        $child->update($request->all());
        return response()->json($child, 200);
    }

    public function destroy($id)
    {
        Child::findOrFail($id)->delete();
        return response()->json(null, 204);
    }
}
