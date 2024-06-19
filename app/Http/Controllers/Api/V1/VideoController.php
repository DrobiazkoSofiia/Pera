<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Video;
use Illuminate\Http\Request;

class VideoController extends Controller
{
    public function index()
    {
        $videos = Video::all()->map(function ($video) {
            $video->media_urls = $video->getMediaUrls();
            return $video;
        });

        return response()->json($videos, 200);
    }

    public function show($id)
    {
        $video = Video::findOrFail($id);
        $video->media_urls = $video->getMediaUrls();
        
        return response()->json($video, 200);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'url' => 'required|string|max:255',
            'min_age' => 'required|integer',
            'duration' => 'nullable|integer',
            'likes_amount' => 'nullable|integer',
            'cover_picture' => 'nullable|string', 
        ]);

        $video = Video::create($request->all());
        return response()->json($video, 201);
    }

    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'url' => 'string|max:255',
            'min_age' => 'integer',
            'duration' => 'nullable|integer',
            'likes_amount' => 'nullable|integer',
            'cover_picture' => 'nullable|string', 
        ]);

        $video = Video::findOrFail($id);
        $video->update($request->all());
        return response()->json($video, 200);
    }

    public function destroy($id)
    {
        $video = Video::findOrFail($id);
        $video->delete();
        return response()->json(null, 204);
    }
}
