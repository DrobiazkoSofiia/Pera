<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateVideoRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'title' => 'string|max:255',
            'description' => 'nullable|string',
            'url' => 'string|max:255',
            'min_age' => 'integer',
            'cover_image' => 'nullable|image|max:2048'
        ];
    }
}
