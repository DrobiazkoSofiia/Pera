@extends('dpanel.layouts.app')

@section('title', 'Children')

@push('scripts')
    <script>
        const editChild = (id, name, gender, age) => {
            document.getElementById('edit-form').action = `${window.location.href}/${id}`;
            document.getElementById('child_name').value = name;
            document.getElementById('child_gender').value = gender;
            document.getElementById('child_age').value = age;
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
        <h1 class="font-medium px-2">Children</h1>
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
                        Child Name
                    </th>
                    <th scope="col" class="pl-3 py-2 text-left font-medium tracking-wider">
                        Gender
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
                @foreach ($children as $child)
                    <tr>
                        <td class="pl-3 py-2">
                            {{ $children->perPage() * ($children->currentPage() - 1) + $loop->iteration }}
                        </td>
                        <td class="pl-3 py-2">{{ $child->name }}</td>
                        <td class="pl-3 py-2">{{ $child->gender }}</td>
                        <td class="pl-3 py-2">{{ $child->age }}</td>
                        <td class="pl-3 py-2">
                            @if ($child->hasMedia('pictures'))
                                <img src="{{ $child->getFirstMediaUrl('pictures', 'thumb') }}" alt="{{ $child->name }}" class="w-10 h-10 object-cover">
                            @else
                                No image
                            @endif
                        </td>
                        <td class="px-4 py-2 flex justify-center items-center gap-2">
                            <button type="button"
                                onclick="editChild('{{ $child->id }}', '{{ $child->name }}', '{{ $child->gender }}', '{{ $child->age }}')"
                                class="text-blue-500">Edit</button>
                            <form action="{{ route('dpanel.children.destroy', $child) }}" method="post">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="text-red-500">Delete</button>
                            </form>
                        </td>
                    </tr>
                @endforeach
            </x-slot:tbody>

            <x-slot:pagination>
                {{ $children->links('dpanel.layouts.pagination') }}
            </x-slot:pagination>
        </x-dpanel::table>
    </section>

    {{-- Table End --}}

    <x-dpanel::modal.bottom-sheet sheetId="bottomSheet" title="New Child">
        <div class="flex justify-center items-center min-h-[30vh] md:min-h-[50vh]">

            <form method="POST" action="{{ route('dpanel.children.store') }}" enctype="multipart/form-data">
                @csrf

                <div class="mb-3">
                    <label>Child Name</label>
                    <input type="text" name="name" placeholder="Enter Child Name" required
                        class="w-full px-2 bg-transparent border rounded focus:outline-none">
                </div>

                <div class="mb-3">
                    <label>Gender</label>
                    <input type="text" name="gender" placeholder="Enter Gender" required
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

                <div class="mb-3">
                    <label>Diet Type</label>
                    <input type="number" name="diet_type_id" placeholder="Enter Diet Type ID" required
                        class="w-full px-2 bg-transparent border rounded focus:outline-none">
                </div>

                <div class="mb-3">
                    <label>Child Type</label>
                    <input type="number" name="child_type_id" placeholder="Enter Child Type ID" required
                        class="w-full px-2 bg-transparent border rounded focus:outline-none">
                </div>

                <button class="bg-violet-500 px-2 py-1 rounded w-full text-center text-white">Save</button>
            </form>
        </div>
    </x-dpanel::modal.bottom-sheet>

    <x-dpanel::modal.bottom-sheet sheetId="editBottomSheet" title="Edit Child">
        <div class="flex justify-center items-center min-h-[30vh] md:min-h-[50vh]">

            <form method="POST" id="edit-form" action="" enctype="multipart/form-data">
                @csrf
                @method('PUT')

                <div class="mb-3">
                    <label>Child Name</label>
                    <input type="text" id="child_name" name="name" placeholder="Enter Child Name" required
                        class="w-full px-2 bg-transparent border rounded focus:outline-none">
                </div>

                <div class="mb-3">
                    <label>Gender</label>
                    <input type="text" id="child_gender" name="gender" placeholder="Enter Gender" required
                        class="w-full px-2 bg-transparent border rounded focus:outline-none">
                </div>

                <div class="mb-3">
                    <label>Age</label>
                    <input type="text" id="child_age" name="age" placeholder="Enter Age" required
                        class="w-full px-2 bg-transparent border rounded focus:outline-none">
                </div>

                <div class="mb-3">
                    <label>Picture</label>
                    <input type="file" id="child_picture" name="picture"
                        class="w-full px-2 bg-transparent border rounded focus:outline-none">
                </div>

                <div class="mb-3">
                    <label>Diet Type</label>
                    <input type="number" id="diet_type_id" name="diet_type_id" placeholder="Enter Diet Type ID" required
                        class="w-full px-2 bg-transparent border rounded focus:outline-none">
                </div>

                <div class="mb-3">
                    <label>Child Type</label>
                    <input type="number" id="child_type_id" name="child_type_id" placeholder="Enter Child Type ID" required
                        class="w-full px-2 bg-transparent border rounded focus:outline-none">
                </div>

                <div class="mb-3">
                    <label>User</label>
                    <input type="number" id="user_id" name="user_id" placeholder="Enter User ID" required
                        class="w-full px-2 bg-transparent border rounded focus:outline-none">
                </div>

                <button class="bg-violet-500 px-2 py-1 rounded w-full text-center text-white">Update</button>
            </form>
        </div>
    </x-dpanel::modal.bottom-sheet>

    <x-dpanel::modal.bottom-sheet-js hideOnClickOutside="true" />

@endsection
