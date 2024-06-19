<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;



class Diet_type extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;
    protected $guarded = [];


    public function meals()
    {
        return $this->belongsToMany(Meal::class, 'meal_diet_links', 'diet_type_id', 'meal_id');
    }

    public function registerMediaConversions(Media $media = null): void
    {
        $this->addMediaConversion('thumb')
              ->width(50)
              ->height(50);
    }
}
