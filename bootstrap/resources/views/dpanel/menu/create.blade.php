@extends('dpanel.layouts.app')

@section('title', 'Create Menu')

@section('body_content')
    <div class="flex justify-between items-center bg-gray-800 rounded mb-3 text-white">
        <h1 class="font-medium px-2">Create Menu</h1>
    </div>

    <section class="mt-4">
        <form method="POST" action="{{ route('dpanel.menus.store') }}">
            @csrf

            <div class="mb-3">
                <label>Menu Name</label>
                <input type="text" name="name" placeholder="Enter Menu Name" required
                    class="w-full px-2 bg-transparent border rounded focus:outline-none">
            </div>

            <div class="mb-3">
                <label>Breakfast</label>
                <select name="breakfast" required class="w-full px-2 bg-transparent border rounded focus:outline-none">
                    @foreach($meals as $meal)
                        <option value="{{ $meal->id }}">{{ $meal->name }}</option>
                    @endforeach
                </select>
            </div>

            <div class="mb-3">
                <label>Snack 1</label>
                <select name="snack1" required class="w-full px-2 bg-transparent border rounded focus:outline-none">
                    @foreach($meals as $meal)
                        <option value="{{ $meal->id }}">{{ $meal->name }}</option>
                    @endforeach
                </select>
            </div>

            <div class="mb-3">
                <label>Snack 2</label>
                <select name="snack2" required class="w-full px-2 bg-transparent border rounded focus:outline-none">
                    @foreach($meals as $meal)
                        <option value="{{ $meal->id }}">{{ $meal->name }}</option>
                    @endforeach
                </select>
            </div>

            <div class="mb-3">
                <label>Lunch</label>
                <select name="lunch" required class="w-full px-2 bg-transparent border rounded focus:outline-none">
                    @foreach($meals as $meal)
                        <option value="{{ $meal->id }}">{{ $meal->name }}</option>
                    @endforeach
                </select>
            </div>

            <div class="mb-3">
                <label>Snack 3</label>
                <select name="snack3" required class="w-full px-2 bg-transparent border rounded focus:outline-none">
                    @foreach($meals as $meal)
                        <option value="{{ $meal->id }}">{{ $meal->name }}</option>
                    @endforeach
                </select>
            </div>

            <div class="mb-3">
                <label>Dinner</label>
                <select name="dinner" required class="w-full px-2 bg-transparent border rounded focus:outline-none">
                    @foreach($meals as $meal)
                        <option value="{{ $meal->id }}">{{ $meal->name }}</option>
                    @endforeach
                </select>
            </div>

            <button class="bg-violet-500 px-2 py-1 rounded w-full text-center text-white">Save</button>
        </form>
    </section>
@endsection
