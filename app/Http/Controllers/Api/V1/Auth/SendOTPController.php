<?php

namespace App\Http\Controllers\Api\V1\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Notifications\SendEmailOTP;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class SendOTPController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $request->validate([
            'email' => 'required|email'
        ]);

        $user = User::firstOrCreate(['email' => $request->email]);

        # Generate OTP
        $user->generateOTP();

        # Send OTP via Email
        $user->notify(new SendEmailOTP());

        return response()->json(['message' => 'OTP send successfully.'], Response::HTTP_ACCEPTED);
    }
}
