<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = ['user_id', 'menu_id', 'total_price', 'date']; 

    public function user() {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function menu() {
        return $this->belongsTo(Menu::class);
    }
}
