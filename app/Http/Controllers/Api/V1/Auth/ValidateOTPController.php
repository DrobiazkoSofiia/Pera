<?php

namespace App\Http\Controllers\Api\V1\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ValidateOTPController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'otp' => 'required|max:6',
        ]);

        $user = User::where('email', $request->email)->first();

        if ($user->otp && ($user->otp_expires_at > now())) {
            if ($user->otp != $request->otp) {
                return response()->json(['message' => 'Invalid OTP. Please try again.'], Response::HTTP_FORBIDDEN);
            }

            $user->resetOTPCode();

            $device = substr($request->userAgent() ?? '', 0, 255);

            $expiredAt = $request->remember ? null : now()->addMinutes(config('session.lifetime'));

            return response()->json([
                'access_token' => $user->createToken($device, expiresAt: $expiredAt)->plainTextToken
            ], Response::HTTP_ACCEPTED);
        }

        return response()->json(['message' => 'The OTP has expired. Please try again.'], Response::HTTP_FORBIDDEN);
    }
}