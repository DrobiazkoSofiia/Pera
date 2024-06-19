@extends('dpanel.layouts.app')

@section('title', 'Child Types')

@push('scripts')
    <script>
        const editChild_type = (id, name, age) => {
            document.getElementById('edit-form').action = `${window.location.href}/${id}`;
            document.getElementById('child_type_name').value = name;
            document.getElementById('child_type_age').value = age;
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
        <h1 class="font-medium px-2">Child Types</h1>
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
                        Child Type Name
                    </th>
                    <th scope="col" class="pl-3 py-2 text-left font-medium tracking-wider">
                        Age
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
                @foreach ($child_types as $child_type)
                    <tr>
                        <td class="pl-3 py-2">
                            {{ $child_types->perPage() * ($child_types->currentPage() - 1) + $loop->iteration }}
                        </td>
                        <td class="pl-3 py-2">{{ $child_type->name }}</td>
                        <td class="pl-3 py-2">{{ $child_type->age }}</td>
                        <td class="pl-3 py-2">
                            @if ($child_type->hasMedia('pictures'))
                                <img src="{{ $child_type->getFirstMediaUrl('pictures', 'thumb') }}" alt="{{ $child_type->name }}" class="w-10 h-10 object-cover">
                            @else
                                No image
                            @endif
                        </td>
                        <td class="px-4 py-2 flex justify-center items-center gap-2">
                            <button type="button"
                                onclick="editChild_type('{{ $child_type->id }}', '{{ $child_type->name }}', '{{ $child_type->age }}')"
                                class="text-blue-500">Edit</button>
                            <form action="{{ route('dpanel.child_types.destroy', $child_type) }}" method="post">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="text-red-500">Delete</button>
                            </form>
                        </td>
                    </tr>
                @endforeach
            </x-slot:tbody>

            <x-slot:pagination>
                {{ $child_types->links('dpanel.layouts.pagination') }}
            </x-slot:pagination>
        </x-dpanel::table>
    </section>

    {{-- Table End --}}

    <x-dpanel::modal.bottom-sheet sheetId="bottomSheet" title="New Child Type">
        <div class="flex justify-center items-center min-h-[30vh] md:min-h-[50vh]">

            <form method="POST" action="{{ route('dpanel.child_types.store') }}" enctype="multipart/form-data">
                @csrf

                <div class="mb-3">
                    <label>Child Type Name</label>
                    <input type="text" name="name" placeholder="Enter Child Type Name" required
                        class="w-full px-2 bg-transparent border rounded focus:outline-none">
                </div>

                <div class="mb-3">
                    <label>Age</label>
                    <input type="text" name="age" placeholder="Enter Age" required
                        class="w-full px-2 bg-transparent border rounded focus:outline-none">
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

    <x-dpanel::modal.bottom-sheet sheetId="editBottomSheet" title="Edit Child Type">
        <div class="flex justify-center items-center min-h-[30vh] md:min-h-[50vh]">

            <form method="POST" id="edit-form" action="" enctype="multipart/form-data">
                @csrf
                @method('PUT')

                <div class="mb-3">
                    <label>Child Type Name</label>
                    <input type="text" id="child_type_name" name="name" placeholder="Enter Child Type Name" required
                        class="w-full px-2 bg-transparent border rounded focus:outline-none">
                </div>

                <div class="mb-3">
                    <label>Age</label>
                    <input type="text" id="child_type_age" name="age" placeholder="Enter Age" required
                        class="w-full px-2 bg-transparent border rounded focus:outline-none">
                </div>

                <div class="mb-3">
                    <label>Picture</label>
                    <input type="file" id="child_type_picture" name="picture"
                        class="w-full px-2 bg-transparent border rounded focus:outline-none">
                </div>

                <button class="bg-violet-500 px-2 py-1 rounded w-full text-center text-white">Update</button>
            </form>
        </div>
    </x-dpanel::modal.bottom-sheet>

    <x-dpanel::modal.bottom-sheet-js hideOnClickOutside="true" />
@endsection
