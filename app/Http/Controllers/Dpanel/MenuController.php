<?php

namespace App\Http\Controllers\Dpanel;

use App\Http\Controllers\Controller;
use App\Models\Menu;
use App\Models\Meal;
use Illuminate\Http\Request;

class MenuController extends Controller
{
    public function index()
    {
        $menus = Menu::with('meals')->paginate(10);
        return view('dpanel.menu.index', compact('menus'));
    }

    public function create()
    {
        $meals = Meal::all();
        return view('dpanel.menu.create', compact('meals'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'breakfast' => 'required|integer|exists:meals,id',
            'snack1' => 'required|integer|exists:meals,id',
            'snack2' => 'required|integer|exists:meals,id',
            'lunch' => 'required|integer|exists:meals,id',
            'snack3' => 'required|integer|exists:meals,id',
            'dinner' => 'required|integer|exists:meals,id',
        ]);

        $menu = Menu::create($request->only('name'));
        $menu->meals()->sync([
            $request->breakfast,
            $request->snack1,
            $request->snack2,
            $request->lunch,
            $request->snack3,
            $request->dinner
        ]);

        return redirect()->route('dpanel.menus.index')->with('success', 'Menu created successfully.');
    }

    public function edit(Menu $menu)
    {
        $meals = Meal::all();
        return view('dpanel.menu.edit', compact('menu', 'meals'));
    }

    public function update(Request $request, Menu $menu)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'breakfast' => 'required|integer|exists:meals,id',
            'snack1' => 'required|integer|exists:meals,id',
            'snack2' => 'required|integer|exists:meals,id',
            'lunch' => 'required|integer|exists:meals,id',
            'snack3' => 'required|integer|exists:meals,id',
            'dinner' => 'required|integer|exists:meals,id',
        ]);

        $menu->update($request->only('name'));
        $menu->meals()->sync([
            $request->breakfast,
            $request->snack1,
            $request->snack2,
            $request->lunch,
            $request->snack3,
            $request->dinner
        ]);

        return redirect()->route('dpanel.menus.index')->with('success', 'Menu updated successfully.');
    }

    public function destroy(Menu $menu)
    {
        $menu->meals()->detach();
        $menu->delete();

        return redirect()->route('dpanel.menus.index')->with('success', 'Menu deleted successfully.');
    }
}
