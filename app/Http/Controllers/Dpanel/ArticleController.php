<?php

namespace App\Http\Controllers\Dpanel;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Http\Requests\StoreArticleRequest;
use App\Http\Requests\UpdateArticleRequest;

class ArticleController extends Controller
{
    
    public function index()
    {
        $articles = Article::latest()->paginate(20);

        return view('dpanel.articles', compact('articles'));
    }

   
    public function store(StoreArticleRequest $request)
    {
        $validated = $request->validated();
        $article = Article::create($validated);

        if ($request->hasFile('picture')) {
            $file = $request->file('picture');
            if ($file->isValid()) {
                $article->addMedia($file)->toMediaCollection('pictures');
            } else {
                return back()->withError('Invalid file');
            }
        }

        return back()->withSuccess('Article created successfully');
    }

  
    public function update(UpdateArticleRequest $request, Article $article)
    {
        $validated = $request->validated();
        $article->update($validated);

        if ($request->hasFile('picture')) {
            $article->clearMediaCollection('pictures');
            $file = $request->file('picture');
            if ($file->isValid()) {
                $article->addMedia($file)->toMediaCollection('pictures');
            } else {
                return back()->withError('Invalid file');
            }
        }

        return back()->withSuccess('Article updated successfully');
    }

   
    public function destroy(Article $article)
    {
        try {
            $article->clearMediaCollection('pictures');
            $article->delete();

            return back()->withSuccess('Article deleted successfully');
        } catch (\Throwable $th) {
            return back()->withError('Other data depend on this article');
        }
    }
}
