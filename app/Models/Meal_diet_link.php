<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Meal_diet_link extends Model
{
    use HasFactory;

    public function meal() {
        return $this->belongsTo(Meal::class, 'meal_id');
    }

    public function diet() {
        return $this->belongsTo(Diet_type::class, 'diet_type_id');
    }
}
