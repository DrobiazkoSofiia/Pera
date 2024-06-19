<?php

namespace App\Models;

use App\Enums\UserRole;
use DD4You\Dpanel\Traits\HasRoles;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles;

    protected $guarded = [
       
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'otp_expires_at' => 'datetime',
        'role' => UserRole::class,
    ];

    public function generateOTP(): void
    {
        $this->timestamps = false;
        $this->otp = rand(100000, 999999);
        $this->otp_expires_at = now()->addMinutes(10);
        $this->save();
    }

    public function resetOTPCode(): void
    {
        $this->timestamps = false;
        $this->otp = null;
        $this->otp_expires_at = null;
        $this->save();
    }

    public function orders()
    {
        return $this->hasMany(Order::class);
    }

    public function menus()
    {
        return $this->belongsToMany(Menu::class, 'user_menu_links')->withPivot('date');
    }
}
