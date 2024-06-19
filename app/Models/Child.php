<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class Child extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;

    protected $fillable = [
        'name',
        'gender',
        'age',
        'diet_type_id',
        'child_type_id',
        'user_id'
    ];


    public function dietType()
    {
        return $this->belongsTo(Diet_type::class);
    }


    public function childType()
    {
        return $this->belongsTo(Child_type::class);
    }


    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function registerMediaConversions(Media $media = null): void
    {
        $this->addMediaConversion('thumb')
              ->width(50)
              ->height(50);
    }
}