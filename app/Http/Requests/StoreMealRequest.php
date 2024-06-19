<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreMealRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize():bool
    {
        return true; 
    }

    /**
     * Get the validation rules that apply to the request.
     * @return array<string,
     */



    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'main_picture' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'cover_picture' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'meal_category' => 'required|string|max:255',
            'ingredients' => 'required|string',
            'child_type_id' => 'required|exists:child_types,id',
            'calories' => 'required|string|max:255',
            'preparation_time' => 'required|string|max:255',
            'meat_percentage' => 'required|numeric',
            'vegetables_percentage' => 'required|numeric',
            'fruit_percentage' => 'required|numeric',
            'cereals_percentage' => 'required|numeric',
            'additional_pic1' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'additional_pic2' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'additional_pic3' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'additional_pic4' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'created_by' => 'required|string|max:255',
            'price' => 'required|numeric|min:0',
            'images' => 'sometimes|array',
            'images.*' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048'
        ];
    }
}
