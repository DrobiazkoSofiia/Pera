<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class Article extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;

    protected $fillable = [
        'title',
        'description',
        'min_age',
    ];

    public function registerMediaConversions(Media $media = null): void
    {
        $this->addMediaConversion('thumb')
              ->width(50)
              ->height(50);
    }

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('articles');
    }

    public function getMediaUrlsAttribute()
    {
        return $this->getMedia('articles')->map(function ($media) {
            return $media->getUrl();
        });
    }
}
