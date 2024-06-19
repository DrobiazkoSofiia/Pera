<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    public function meals()
    {
        return $this->belongsToMany(Meal::class, 'menu_meal_links', 'menu_id', 'meal_id');
    }

    public function users()
    {
        return $this->belongsToMany(User::class, 'user_menu_links', 'menu_id', 'user_id')->withPivot('date');
    }

    public function orders()
    {
        return $this->hasMany(Order::class);
    }
}
