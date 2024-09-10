<?php
namespace App\Http\Controllers;

// Libraries
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Laravel\Socialite\Facades\Socialite;
use Tymon\JWTAuth\Facades\JWTAuth;

// Specific Requests
use App\Http\Requests\StoreUserRequest;

// Models
use App\Models\User;

class UserController extends Controller
{
    public function register(StoreUserRequest $request)
    {
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role' => 'Client',
            'google_id' => $request->google_id,
        ]);

        return response()->json(['message' => 'User registered successfully'], 201);
    }

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $token = JWTAuth::fromUser($user);

            // Start a session
            $request->session()->regenerate();

            return response()->json([
                'message' => 'Login successful',
                'token' => $token
            ], 200);
        }

        return response()->json(['message' => 'Invalid login credentials'], 401);
    }

    public function getUserDetails(Request $request)
    {
        $user = Auth::user();

        if ($user) {
            return response()->json(['user' => $user], 200);
        }

        return response()->json(['message' => 'User not authenticated'], 401);
    }
}