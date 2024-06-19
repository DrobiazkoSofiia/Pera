<?php

namespace App\Http\Middleware;

use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Illuminate\Http\Request;

class Authenticate extends Middleware
{
   
    protected function redirectTo(Request $request): ?string
    {

        return $request->expectsJson() ?
            null
            : ($request->segment(1) == config('dpanel.prefix')
                ?
                route(config('dpanel.prefix') . '.login')
                :
                route('login')
            );
    }
}