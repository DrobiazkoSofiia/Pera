<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class Meal extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia, HasSlug;

    protected $fillable = [
        'name',
        'description',
        'cover_picture',
        'main_picture',
        'meal_category',
        'ingredients',
        'child_type_id',
        'calories',
        'preparation_time',
        'meat_percentage',
        'vegetables_percentage',
        'fruit_percentage',
        'cereals_percentage',
        'additional_pic1',
        'additional_pic2',
        'additional_pic3',
        'additional_pic4',
        'created_by',
        'ingredients',
        'price',
    ];

    protected static function booted()
    {
        static::deleting(function ($meal) {
            $meal->diet_types()->detach();
            $meal->menus()->detach();
        });
    }

    public function child_type()
    {
        return $this->belongsTo(Child_type::class, 'child_type_id');
    }

    public function menus()
    {
        return $this->belongsToMany(Menu::class, 'menu_meal_links')
            ->withTimestamps();
    }

    public function diet_types()
    {
        return $this->belongsToMany(Diet_type::class, 'meal_diet_links')
            ->withTimestamps();
    }

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('images')
             ->useFallbackUrl('/path/to/default/image.png')
             ->useFallbackPath(public_path('/path/to/default/image.png'));
    }

    public function getSlugOptions(): SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('name')
            ->saveSlugsTo('slug');
    }

    public function registerMediaConversions(Media $media = null): void
    {
        $this
            ->addMediaConversion('thumbnail')
            ->keepOriginalImageFormat()
            ->width(100);
    }
}
