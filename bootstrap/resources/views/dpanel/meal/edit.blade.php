@extends('dpanel.layouts.app')

@section('title', 'Edit Meal')

@push('scripts')
    <script>
        const previewImage = (r, e) => {
            if (e.target.files.length > 0) {
                r.nextElementSibling.src = URL.createObjectURL(e.target.files[0]);
                let span = `<span onclick="deleteImage(this)" class="absolute top-1 right-1 cursor-pointer w-7 h-7 flex items-center justify-center bg-white hover:bg-red-500 bg-opacity-25 hover:bg-opacity-100 text-red-500 hover:text-white duration-300 shadow rounded-full">
                            <i class='bx bx-trash text-xl'></i>
                        </span>`;
                r.parentElement.insertAdjacentHTML('afterend', span);
                createImageElement();
            }
        }

        const createImageElement = () => {
            let id = 'img-' + Math.floor(Math.random() * 10000);
            let html = `<div class="relative">
                        <label for="${id}" class="flex items-center justify-center bg-white rounded-md shadow-md p-2 cursor-pointer">
                            <input id="${id}" type="file" name="additional_pics[]" accept="image/*" onchange="previewImage(this, event)" class="hidden">
                            <img src="https://placehold.jp/640x640.png?text=Add%20More%20Image" class="rounded-md aspect-square object-cover">
                        </label>
                    </div>`;
            document.getElementById('image_container').lastElementChild.insertAdjacentHTML("afterend", html);
        }

        const deleteImage = (r, id = null) => {
            if (id) {
                r.parentElement.outerHTML = `<input type="hidden" name="delete_images[]" value="${id}">`
            } else {
                r.parentElement.remove();
            }
        }
    </script>
@endpush

@section('body_content')
    <div class="flex justify-between items-center bg-gray-800 rounded mb-3 text-white">
        <h1 class="font-medium px-2 py-1">Edit Meal</h1>
    </div>

    <x-dpanel::input-error-msg />

    <form action="{{ route('dpanel.meals.update', $meal) }}" method="post" enctype="multipart/form-data">
        @csrf
        @method('PUT')

        <h3 class="text-gray-900 text-sm font-thin underline font-mono">Meal Basic Detail</h3>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-3 mb-5">
            <div>
                <label class="mb-2 text-gray-500 text-sm">Name <span class="text-red-500">*</span></label>
                <input type="text" name="name" value="{{ $meal->name }}" placeholder="Write meal name..."
                    maxlength="100"
                    class="w-full p-1 rounded bg-white shadow-lg shadow-gray-200 placeholder:text-sm focus-within:outline-none"
                    required>
            </div>
            <div>
                <label class="mb-2 text-gray-500 text-sm">Description <span class="text-red-500">*</span></label>
                <textarea name="description" placeholder="Write meal description..." maxlength="255"
                    class="w-full p-1 rounded bg-white shadow-lg shadow-gray-200 placeholder:text-sm focus-within:outline-none"
                    required>{{ $meal->description }}</textarea>
            </div>
            <div>
                <label class="mb-2 text-gray-500 text-sm">Category <span class="text-red-500">*</span></label>
                <input type="text" name="meal_category" value="{{ $meal->meal_category }}" placeholder="Enter meal category"
                    class="w-full p-1 rounded bg-white shadow-lg shadow-gray-200 placeholder:text-sm focus-within:outline-none"
                    required>
            </div>
            <div>
                <label class="mb-2 text-gray-500 text-sm">Calories <span class="text-red-500">*</span></label>
                <input type="number" name="calories" value="{{ $meal->calories }}" placeholder="Enter meal calories"
                    class="w-full p-1 rounded bg-white shadow-lg shadow-gray-200 placeholder:text-sm focus-within:outline-none"
                    required>
            </div>
            <div>
                <label class="mb-2 text-gray-500 text-sm">Preparation Time <span class="text-red-500">*</span></label>
                <input type="text" name="preparation_time" value="{{ $meal->preparation_time }}" placeholder="Enter preparation time"
                    class="w-full p-1 rounded bg-white shadow-lg shadow-gray-200 placeholder:text-sm focus-within:outline-none"
                    required>
            </div>
            <div>
                <label class="mb-2 text-gray-500 text-sm">Price <span class="text-red-500">*</span></label>
                <input type="number" name="price" value="{{ $meal->price }}" placeholder="Enter meal price"
                    class="w-full p-1 rounded bg-white shadow-lg shadow-gray-200 placeholder:text-sm focus-within:outline-none"
                    required>
            </div>
        </div>

        <h3 class="text-gray-900 text-sm font-thin underline font-mono">Meal Images</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 mb-5" id="image_container">
            @if ($meal->main_picture)
                <div class="relative">
                    <img src="{{ asset('storage/' . $meal->main_picture) }}" class="rounded-md aspect-square object-cover">
                    <span onclick="deleteImage(this, '{{ $meal->main_picture }}')"
                        class="absolute top-1 right-1 cursor-pointer w-7 h-7 flex items-center justify-center bg-white hover:bg-red-500 bg-opacity-25 hover:bg-opacity-100 text-red-500 hover:text-white duration-300 shadow rounded-full">
                        <i class='bx bx-trash text-xl'></i>
                    </span>
                </div>
            @endif

            @foreach ([$meal->additional_pic1, $meal->additional_pic2, $meal->additional_pic3, $meal->additional_pic4] as $additional_pic)
                @if ($additional_pic)
                    <div class="relative">
                        <img src="{{ asset('storage/' . $additional_pic) }}" class="rounded-md aspect-square object-cover">
                        <span onclick="deleteImage(this, '{{ $additional_pic }}')"
                            class="absolute top-1 right-1 cursor-pointer w-7 h-7 flex items-center justify-center bg-white hover:bg-red-500 bg-opacity-25 hover:bg-opacity-100 text-red-500 hover:text-white duration-300 shadow rounded-full">
                            <i class='bx bx-trash text-xl'></i>
                        </span>
                    </div>
                @endif
            @endforeach

            <div class="relative">
                <label for="add_image" class="flex items-center justify-center bg-white rounded-md shadow-md p-2 cursor-pointer">
                    <input id="add_image" type="file" name="additional_pics[]" accept="image/*" onchange="previewImage(this, event)" class="hidden">
                    <img src="https://placehold.jp/640x640.png?text=Add%20More%20Image" class="rounded-md aspect-square object-cover">
                </label>
            </div>
        </div>

        <div class="mb-3">
            <label class="mb-2 text-gray-500 text-sm">Meat Percentage</label>
            <input type="number" name="meat_percentage" value="{{ $meal->meat_percentage }}" placeholder="Enter meat percentage"
                class="w-full p-1 rounded bg-white shadow-lg shadow-gray-200 placeholder:text-sm focus-within:outline-none">
        </div>

        <div class="mb-3">
            <label class="mb-2 text-gray-500 text-sm">Vegetables Percentage</label>
            <input type="number" name="vegetables_percentage" value="{{ $meal->vegetables_percentage }}" placeholder="Enter vegetables percentage"
                class="w-full p-1 rounded bg-white shadow-lg shadow-gray-200 placeholder:text-sm focus-within:outline-none">
        </div>

        <div class="mb-3">
            <label class="mb-2 text-gray-500 text-sm">Fruit Percentage</label>
            <input type="number" name="fruit_percentage" value="{{ $meal->fruit_percentage }}" placeholder="Enter fruit percentage"
                class="w-full p-1 rounded bg-white shadow-lg shadow-gray-200 placeholder:text-sm focus-within:outline-none">
        </div>

        <div class="mb-3">
            <label class="mb-2 text-gray-500 text-sm">Cereals Percentage</label>
            <input type="number" name="cereals_percentage" value="{{ $meal->cereals_percentage }}" placeholder="Enter cereals percentage"
                class="w-full p-1 rounded bg-white shadow-lg shadow-gray-200 placeholder:text-sm focus-within:outline-none">
        </div>

        <button type="submit"
            class="hover:bg-gray-800 bg-white border border-gray-800 duration-300 text-center text-gray-800 hover:text-white w-full rounded shadow-md uppercase">Update</button>
    </form>
@endsection
