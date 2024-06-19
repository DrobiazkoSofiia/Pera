<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreVideoRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'url' => 'required|string|max:255',
            'min_age' => 'required|integer',
            'cover_image' => 'nullable|image|max:2048', 
        ];
    }
}