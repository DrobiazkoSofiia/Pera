<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreArticleRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'min_age' => 'required|integer|min:0',
            'picture' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ];
    }
}
