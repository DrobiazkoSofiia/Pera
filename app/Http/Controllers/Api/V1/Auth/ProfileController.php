<?php

namespace App\Http\Controllers\Api\V1\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Symfony\Component\HttpFoundation\Response;

class ProfileController extends Controller
{
    public function show(Request $request)
    {
        return response()->json($request->user()->only('name', 'email'), Response::HTTP_ACCEPTED);
    }

    public function update(Request $request)
    {
        $data = $request->validate([
            'name' => ['required', 'string'],
            'email' => ['required', 'email', Rule::unique('users')->ignore(auth()->user())],
        ]);

        auth()->user()->update($data);

        return response()->json($data, Response::HTTP_ACCEPTED);
    }
}
