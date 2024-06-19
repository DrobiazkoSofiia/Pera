@extends('dpanel.layouts.app')

@section('title', 'New Meal')

@push('scripts')
    <script>
        const addMore = (e) => {
            let html = `<div class="grid grid-cols-1 md:grid-cols-4 gap-3 bg-gray-200 p-2 rounded">
                <input type="text" name="ingredients[]" required placeholder="Enter ingredient"
                    class="w-full px-1 rounded bg-white shadow-lg shadow-gray-200 placeholder:text-sm focus-within:outline-none">

                <input type="text" name="quantity[]" required placeholder="Enter quantity" pattern="[0-9]+"
                    class="w-full px-1 rounded bg-white shadow-lg shadow-gray-200 placeholder:text-sm focus-within:outline-none">

                <div class="flex">
                    <button type="button" onclick="addMore(this)"
                        class="hover:bg-gray-800 bg-white border border-gray-800 duration-300 text-center text-gray-800 hover:text-white w-full rounded-l shadow-md uppercase">Add
                        More</button>

                    <button type="button" onclick="remove(this)"
                        class="hover:bg-red-500 bg-white border border-red-500 duration-300 text-center text-red-500 hover:text-white w-full rounded-r shadow-md uppercase">Remove</button>
                </div>
            </div>`;

            e.parentElement.parentElement.insertAdjacentHTML('afterend', html);
            e.parentElement.innerHTML =
                `<button type="button" onclick="remove(this)" 
            class="hover:bg-red-500 bg-white border border-red-500 duration-300 text-center text-red-500 hover:text-white w-full rounded shadow-md uppercase">Remove</button>`;
        }

        const remove = (e) => e.parentElement.parentElement.remove();

        const previewImage = (r, e) => {
            if (e.target.files.length > 0) {
                r.nextElementSibling.src = URL.createObjectURL(e.target.files[0]);
                let span = `<span onclick="deleteImage(this)" class="absolute top-1 right-1 cursor-pointer w-7 h-7 flex items-center justify-center bg-white hover:bg-red-500 bg-opacity-25 hover:bg-opacity-100 text-red-500 hover:text-white duration-300 shadow rounded-full">
                            <i class='bx bx-trash text-xl'></i>
                        </span>`;
                r.parentElement.insertAdjacentHTML('afterend', span);
                createImageElement()
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

        const deleteImage = (r) => r.parentElement.remove();
    </script>
@endpush

@section('body_content')
    <div class="flex justify-between items-center bg-gray-800 rounded mb-3 text-white">
        <h1 class="font-medium px-2 py-1">New Meal</h1>
    </div>

    <x-dpanel::input-error-msg />

    <form action="{{ route('dpanel.meals.store') }}" method="post" enctype="multipart/form-data">
        @csrf

        <h3 class="text-gray-900 text-sm font-thin underline font-mono">Meal Basic Detail</h3>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-3 mb-5">
            <div>
                <label class="mb-2 text-gray-500 text-sm">Name <span class="text-red-500">*</span></label>
                <input type="text" name="name" value="{{ old('name') }}" placeholder="Write meal name..."
                    maxlength="100"
                    class="w-full p-1 rounded bg-white shadow-lg shadow-gray-200 placeholder:text-sm focus-within:outline-none"
                    required>
            </div>

            <div>
                <label class="mb-2 text-gray-500 text-sm">Description <span class="text-red-500">*</span></label>
                <textarea name="description" placeholder="Write meal description..."
                    class="w-full px-1 rounded bg-white shadow-lg shadow-gray-200 placeholder:text-sm focus-within:outline-none" required>{{ old('description') }}</textarea>
            </div>

            <div>
                <label class="mb-2 text-gray-500 text-sm">Category <span class="text-red-500">*</span></label>
                <input type="text" name="meal_category" value="{{ old('meal_category') }}" placeholder="Write meal category..."
                    class="w-full p-1 rounded bg-white shadow-lg shadow-gray-200 placeholder:text-sm focus-within:outline-none"
                    required>
            </div>

            <div>
                <label class="mb-2 text-gray-500 text-sm">Child Type <span class="text-red-500">*</span></label>
                <select name="child_type_id"
                    class="w-full p-1 rounded bg-white shadow-lg shadow-gray-200 focus-within:outline-none" required>
                    <option value="">Select child type</option>
                    @foreach ($child_types as $item)
                        <option value="{{ $item->id }}" @selected($item->id == old('child_type_id'))>{{ $item->name }}</option>
                    @endforeach
                </select>
            </div>

            <div>
                <label class="mb-2 text-gray-500 text-sm">Calories <span class="text-red-500">*</span></label>
                <input type="text" name="calories" value="{{ old('calories') }}" placeholder="Enter meal calories..."
                    class="w-full p-1 rounded bg-white shadow-lg shadow-gray-200 placeholder:text-sm focus-within:outline-none"
                    required>
            </div>

            <div>
                <label class="mb-2 text-gray-500 text-sm">Preparation Time <span class="text-red-500">*</span></label>
                <input type="text" name="preparation_time" value="{{ old('preparation_time') }}" placeholder="Enter preparation time..."
                    class="w-full p-1 rounded bg-white shadow-lg shadow-gray-200 placeholder:text-sm focus-within:outline-none"
                    required>
            </div>

            <div>
                <label class="mb-2 text-gray-500 text-sm">Price <span class="text-red-500">*</span></label>
                <input type="text" name="price" value="{{ old('price') }}" placeholder="Enter meal price..."
                    class="w-full p-1 rounded bg-white shadow-lg shadow-gray-200 placeholder:text-sm focus-within:outline-none"
                    required>
            </div>

            <div>
                <label class="mb-2 text-gray-500 text-sm">Ingredients <span class="text-red-500">*</span></label>
                <textarea name="ingredients" placeholder="List the ingredients..."
                    class="w-full px-1 rounded bg-white shadow-lg shadow-gray-200 placeholder:text-sm focus-within:outline-none" required>{{ old('ingredients') }}</textarea>
            </div>
            <div class="mb-3">
            <label class="mb-2 text-gray-500 text-sm">Meat Percentage</label>
            <input type="number" name="meat_percentage" value="{{ old('meat_percentage') }}" placeholder="Enter meat percentage"
                class="w-full p-1 rounded bg-white shadow-lg shadow-gray-200 placeholder:text-sm focus-within:outline-none">
        </div>

        <div class="mb-3">
            <label class="mb-2 text-gray-500 text-sm">Vegetables Percentage</label>
            <input type="number" name="vegetables_percentage" value="{{ old('vegetables_percentage') }}" placeholder="Enter vegetables percentage"
                class="w-full p-1 rounded bg-white shadow-lg shadow-gray-200 placeholder:text-sm focus-within:outline-none">
        </div>

        <div class="mb-3">
            <label class="mb-2 text-gray-500 text-sm">Fruit Percentage</label>
            <input type="number" name="fruit_percentage" value="{{ old('fruit_percentage') }}" placeholder="Enter fruit percentage"
                class="w-full p-1 rounded bg-white shadow-lg shadow-gray-200 placeholder:text-sm focus-within:outline-none">
        </div>
        <div class="mb-3">
            <label class="mb-2 text-gray-500 text-sm">Cereals Percentage</label>
            <input type="number" name="cereals_percentage" value="{{ old('cereals_percentage') }}" placeholder="Enter cereals percentage"
                class="w-full p-1 rounded bg-white shadow-lg shadow-gray-200 placeholder:text-sm focus-within:outline-none">
        </div>
            <div>
                <label class="mb-2 text-gray-500 text-sm">Created By <span class="text-red-500">*</span></label>
                <input type="text" name="created_by" value="{{ old('created_by') }}" placeholder="Enter creator..."
                    class="w-full p-1 rounded bg-white shadow-lg shadow-gray-200 placeholder:text-sm focus-within:outline-none"
                    required>
            </div>
        </div>

        <h3 class="text-gray-900 text-sm font-thin underline font-mono mb-2">Meal Images</h3>
        <div class="grid grid-cols-1 md:grid-cols-5 gap-3 mb-5" id="image_container">
            <div class="relative">
                <label for="main_picture"
                    class="flex items-center justify-center bg-white rounded-md shadow-md p-1 cursor-pointer">
                    <input id="main_picture" onchange="previewImage(this, event)" type="file" name="main_picture"
                        accept="image/*" class="hidden">
                    <img src="https://placehold.jp/640x640.png?text=Add%20Main%20Picture"
                        class="rounded-md aspect-square object-cover">
                </label>
            </div>
            <div class="relative">
                <label for="additional_pic1"
                    class="flex items-center justify-center bg-white rounded-md shadow-md p-1 cursor-pointer">
                    <input id="additional_pic1" onchange="previewImage(this, event)" type="file" name="additional_pics[]"
                        accept="image/*" class="hidden">
                    <img src="https://placehold.jp/640x640.png?text=Add%20Additional%20Picture"
                        class="rounded-md aspect-square object-cover">
                </label>
            </div>
        </div>

        <div class="md:col-span-4">
            <label>&nbsp</label>
            <button class="bg-gray-800 text-center text-white font-medium w-full py-1 rounded shadow-md uppercase">Add
                Meal</button>
        </div>
    </form>
@endsection
