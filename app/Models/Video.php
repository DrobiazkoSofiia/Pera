<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class Video extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;

    protected $fillable = [
        'title',
        'description',
        'min_age',
        'url',
        'duration', 
        'likes_amount',
    ];

    public function registerMediaConversions(Media $media = null): void
    {
        $this->addMediaConversion('thumb')
              ->width(50)
              ->height(50);
    }

    public function getMediaUrls()
    {
        $mediaItems = $this->getMedia();
        $mediaUrls = [];

        foreach ($mediaItems as $mediaItem) {
            $mediaUrls[] = $mediaItem->getUrl();
        }

        return $mediaUrls;
    }
}
