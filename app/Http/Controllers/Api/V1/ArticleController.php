<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function index()
    {
    
        $articles = Article::all()->map(function ($article) {
            $article->media_urls = $article->media_urls;
            return $article;
        });
        return response()->json($articles, 200);
    }

    public function show($id)
    {
        
        $article = Article::findOrFail($id);
        $article->media_urls = $article->media_urls;
        return response()->json($article, 200);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'min_age' => 'required|integer'
        ]);

        $article = Article::create($request->all());

        if ($request->hasFile('media')) {
            $article->addMedia($request->file('media'))->toMediaCollection('articles');
        }

        $article->media_urls = $article->media_urls;
        return response()->json($article, 201);
    }

    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'title' => 'string|max:255',
            'description' => 'string',
            'min_age' => 'integer'
        ]);

        $article = Article::findOrFail($id);
        $article->update($request->all());

        if ($request->hasFile('media')) {
            $article->clearMediaCollection('articles');
            $article->addMedia($request->file('media'))->toMediaCollection('articles');
        }

        $article->media_urls = $article->media_urls;
        return response()->json($article, 200);
    }

    public function destroy($id)
    {
        Article::findOrFail($id)->delete();
        return response()->json(null, 204);
    }
}
