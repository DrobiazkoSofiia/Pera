<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        return response()->json($users, 200);
    }

    public function show($id)
    {
        $user = User::findOrFail($id);
        return response()->json($user, 200);
    }


    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'phone_number' => 'nullable|string|max:20',
            'password' => 'required|string|min:8',
        ]);

        $userData = $request->all();
        $userData['password'] = bcrypt($request->password);

        $user = User::create($userData);

        return response()->json($user, 201);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'string|max:255',
            'email' => 'string|email|max:255|unique:users,email,' . $id,
            'phone_number' => 'nullable|string|max:20',
            'password' => 'nullable|string|min:8',
        ]);

        $user = User::findOrFail($id);

        $userData = $request->all();
        if ($request->has('password')) {
            $userData['password'] = bcrypt($request->password);
        }

        $user->update($userData);
        return response()->json($user, 200);
    }

    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();
        return response()->json(null, 204);
    }
}
