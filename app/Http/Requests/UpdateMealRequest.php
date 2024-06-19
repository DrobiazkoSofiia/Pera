<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateMealRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
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
            'name' => 'sometimes|required|string|max:255',
            'description' => 'sometimes|required|string',
            'main_picture' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'cover_picture' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'meal_category' => 'sometimes|required|string|max:255',
            'ingredients' => 'sometimes|required|string',
            'child_type_id' => 'sometimes|required|exists:child_types,id',
            'calories' => 'sometimes|required|string|max:255',
            'preparation_time' => 'sometimes|required|string|max:255',
            'meat_percentage' => 'sometimes|required|numeric',
            'vegetables_percentage' => 'sometimes|required|numeric',
            'fruit_percentage' => 'sometimes|required|numeric',
            'cereals_percentage' => 'sometimes|required|numeric',
            'additional_pic1' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'additional_pic2' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'additional_pic3' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'additional_pic4' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'created_by' => 'sometimes|required|string|max:255',
            'price' => 'sometimes|required|numeric|min:0',
            'images' => 'sometimes|array',
            'images.*' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'delete_images' => 'sometimes|array',
            'delete_images.*' => 'integer|exists:media,id'
        ];
    }
}
