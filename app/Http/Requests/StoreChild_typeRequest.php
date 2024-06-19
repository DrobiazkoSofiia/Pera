<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreChild_typeRequest extends FormRequest
{
    
    public function authorize()
    {
        return true;
    }

    
    public function rules()
    {
        return [
            'name' => 'required|string|max:255',
            'age' => 'required|string|max:255',
            'picture' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ];
    }
}
