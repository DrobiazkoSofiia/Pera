@extends('dpanel.layouts.app')

@section('title', 'Diet_types')

@push('scripts')
    <script>
        const editDiet_type = (id, name, description) => {
            document.getElementById('edit-form').action = `${window.location.href}/${id}`;
            document.getElementById('diet_type_name').value = name;
            document.getElementById('diet_type_description').value = description;
            showBottomSheet('editBottomSheet');
        }
        @if ($errors->any())
            let errMsg = '';
            @foreach ($errors->all() as $error)
                errMsg = "{{ $error }}";
            @endforeach
            cuteToast({
                type: "error",
                message: errMsg,
            })
        @endif
    </script>
@endpush

@section('body_content')
    <div class="flex justify-between items-center bg-gray-800 rounded mb-3 text-white">
        <h1 class="font-medium px-2">Diet Types</h1>
        <button onclick="showBottomSheet('bottomSheet')" class="bg-violet-500 rounded-r px-2 py-1">New</button>
    </div>

    <section class="mt-4">
        <x-dpanel::table>
            <x-slot:thead>
                <tr>
                    <th scope="col" class="pl-3 py-2 text-left w-12 ">
                        #
                    </th>
                    <th scope="col" class="pl-3 py-2 text-left font-medium tracking-wider">
                        Diet Type Name
                    </th>
                    <th scope="col" class="pl-3 py-2 text-left font-medium tracking-wider">
                        Description
                    </th>
                    <th scope="col" class="pl-3 py-2 text-left font-medium tracking-wider">
                        Picture
                    </th>
                    <th scope="col" class="pl-3 py-2 text-center font-medium tracking-wider">
                        Action
                    </th>
                </tr>
            </x-slot:thead>

            <x-slot:tbody>
                @foreach ($diet_types as $diet_type)
                    <tr>
                        <td class="pl-3 py-2">
                            {{ $diet_types->perPage() * ($diet_types->currentPage() - 1) + $loop->iteration }}
                        </td>
                        <td class="pl-3 py-2">{{ $diet_type->name }}</td>
                        <td class="pl-3 py-2">{{ $diet_type->description }}</td>
                        <td class="pl-3 py-2">
                            @if ($diet_type->hasMedia('pictures'))
                                <img src="{{ $diet_type->getFirstMediaUrl('pictures', 'thumb') }}" alt="{{ $diet_type->name }}" class="w-10 h-10 object-cover">
                            @else
                                No image
                            @endif
                        </td>
                        <td class="px-4 py-2 flex justify-center items-center gap-2">
                            <button type="button"
                                onclick="editDiet_type('{{ $diet_type->id }}', '{{ $diet_type->name }}', '{{ $diet_type->description }}')"
                                class="text-blue-500">Edit</button>
                            <form action="{{ route('dpanel.diet_types.destroy', $diet_type) }}" method="post">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="text-red-500">Delete</button>
                            </form>
                        </td>
                    </tr>
                @endforeach
            </x-slot:tbody>

            <x-slot:pagination>
                {{ $diet_types->links('dpanel.layouts.pagination') }}
            </x-slot:pagination>
        </x-dpanel::table>
    </section>

    {{-- Table End --}}

    <x-dpanel::modal.bottom-sheet sheetId="bottomSheet" title="New Diet Type">
        <div class="flex justify-center items-center min-h-[30vh] md:min-h-[50vh]">

            <form method="POST" action="{{ route('dpanel.diet_types.store') }}" enctype="multipart/form-data">
                @csrf

                <div class="mb-3">
                    <label>Diet Type Name</label>
                    <input type="text" name="name" placeholder="Enter Diet Type Name" required
                        class="w-full px-2 bg-transparent border rounded focus:outline-none">
                </div>

                <div class="mb-3">
                    <label>Description</label>
                    <textarea name="description" placeholder="Enter Description" required
                        class="w-full px-2 bg-transparent border rounded focus:outline-none"></textarea>
                </div>

                <div class="mb-3">
                    <label>Picture</label>
                    <input type="file" name="picture" required
                        class="w-full px-2 bg-transparent border rounded focus:outline-none">
                </div>

                <button class="bg-violet-500 px-2 py-1 rounded w-full text-center text-white">Save</button>
            </form>
        </div>
    </x-dpanel::modal.bottom-sheet>

    <x-dpanel::modal.bottom-sheet sheetId="editBottomSheet" title="Edit Diet Type">
        <div class="flex justify-center items-center min-h-[30vh] md:min-h-[50vh]">

            <form method="POST" id="edit-form" action="" enctype="multipart/form-data">
                @csrf
                @method('PUT')

                <div class="mb-3">
                    <label>Diet Type Name</label>
                    <input type="text" id="diet_type_name" name="name" placeholder="Enter Diet Type Name" required
                        class="w-full px-2 bg-transparent border rounded focus:outline-none">
                </div>

                <div class="mb-3">
                    <label>Description</label>
                    <textarea id="diet_type_description" name="description" placeholder="Enter Description" required
                        class="w-full px-2 bg-transparent border rounded focus:outline-none"></textarea>
                </div>

                <div class="mb-3">
                    <label>Picture</label>
                    <input type="file" id="diet_type_picture" name="picture"
                        class="w-full px-2 bg-transparent border rounded focus:outline-none">
                </div>

                <button class="bg-violet-500 px-2 py-1 rounded w-full text-center text-white">Update</button>
            </form>
        </div>
    </x-dpanel::modal.bottom-sheet>

    <x-dpanel::modal.bottom-sheet-js hideOnClickOutside="true" />

@endsection
