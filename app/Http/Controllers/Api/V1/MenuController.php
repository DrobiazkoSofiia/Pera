<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Menu;
use App\Models\User;
use Illuminate\Http\Request;

class MenuController extends Controller
{
    public function index()
    {
        $menus = Menu::with('meals', 'users')->get();
        return response()->json($menus, 200);
    }

    public function show($id)
    {
        $menu = Menu::with('meals', 'users')->findOrFail($id);
        return response()->json($menu, 200);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|string|max:255',
        ]);

        $menu = Menu::create($request->all());
        return response()->json($menu, 201);
    }

    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'name' => 'string|max:255',
        ]);

        $menu = Menu::findOrFail($id);
        $menu->update($request->all());
        return response()->json($menu, 200);
    }

    public function destroy($id)
    {
        Menu::findOrFail($id)->delete();
        return response()->json(null, 204);
    }

    public function addMeal(Request $request, $id)
    {
        $this->validate($request, [
            'meal_id' => 'required|integer|exists:meals,id',
        ]);

        $menu = Menu::findOrFail($id);
        $menu->meals()->attach($request->meal_id);
        return response()->json($menu->meals, 201);
    }

    public function removeMeal($menuId, $mealId)
    {
        $menu = Menu::findOrFail($menuId);
        $menu->meals()->detach($mealId);
        return response()->json(null, 204);
    }

    public function addUser(Request $request, $id)
    {
        $this->validate($request, [
            'user_id' => 'required|integer|exists:users,id',
        ]);

        $menu = Menu::findOrFail($id);
        $menu->users()->attach($request->user_id, ['date' => now()]);
        return response()->json($menu->users, 201);
    }

    public function removeUser($menuId, $userId)
    {
        $menu = Menu::findOrFail($menuId);
        $menu->users()->detach($userId);
        return response()->json(null, 204);
    }

    public function getMenuWithMeals($menu)
    {
        $menu = Menu::with('meals')->findOrFail($menu);

        return response()->json($menu, 200);
    }
}
