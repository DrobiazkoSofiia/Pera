<?php

namespace App\Http\Controllers\Dpanel;

use App\Http\Controllers\Controller;
use App\Models\Video;
use App\Http\Requests\StoreVideoRequest;
use App\Http\Requests\UpdateVideoRequest;
use Illuminate\Http\Request;

class VideoController extends Controller
{
   
    public function index()
    {
        $videos = Video::latest()->paginate(20);

        return view('dpanel.videos', compact('videos'));
    }

   
    public function store(StoreVideoRequest $request)
    {
        $validated = $request->validated();

   
        $video = Video::create($validated);

        
        if ($request->hasFile('cover_image')) {
            $video->addMedia($request->file('cover_image'))->toMediaCollection('covers');
        }

        return back()->withSuccess('Video created successfully');
    }

   
    public function update(UpdateVideoRequest $request, Video $video)
    {
        $validated = $request->validated();

       
        $video->update($validated);


        if ($request->hasFile('cover_image')) {
            $video->clearMediaCollection('covers');
            $video->addMedia($request->file('cover_image'))->toMediaCollection('covers');
        }

        return back()->withSuccess('Video updated successfully');
    }

   
    public function destroy(Video $video)
    {
        try {

            $video->clearMediaCollection('covers');
            $video->delete();
            return back()->withSuccess('Video deleted successfully');
        } catch (\Throwable $th) {
            return back()->withError('Other data depend on this video');
        }
    }
}
