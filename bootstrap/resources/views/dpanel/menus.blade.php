@extends('dpanel.layouts.app')

@section('title', 'Menus')

@push('scripts')
    <script>
        const editMenu = (id, name, meals) => {
            document.getElementById('edit-form').action = `${window.location.href}/${id}`;
            document.getElementById('menu_name').value = name;
            
           
            const mealSelect = document.getElementById('menu_meals');
            Array.from(mealSelect.options).forEach(option => {
                option.selected = meals.includes(parseInt(option.value));
            });
            
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
        <h1 class="font-medium px-2">Menus</h1>
        <button onclick="showBottomSheet('bottomSheet')" class="bg-violet-500 rounded-r px-2 py-1">New</button>
    </div>

    <section class="mt-4">
        <x-dpanel::table>
            <x-slot:thead>
                <tr>
                    <th scope="col" class="pl-3 py-2 text-left w-12 ">#</th>
                    <th scope="col" class="pl-3 py-2 text-left font-medium tracking-wider">Menu Name</th>
                    <th scope="col" class="pl-3 py-2 text-left font-medium tracking-wider">Meals</th>
                    <th scope="col" class="pl-3 py-2 text-center font-medium tracking-wider">Action</th>
                </tr>
            </x-slot:thead>

            <x-slot:tbody>
                @foreach ($menus as $menu)
                    <tr>
                        <td class="pl-3 py-2">
                            {{ $menus->perPage() * ($menus->currentPage() - 1) + $loop->iteration }}
                        </td>
                        <td class="pl-3 py-2">{{ $menu->name }}</td>
                        <td class="pl-3 py-2">
                            @foreach ($menu->meals as $meal)
                                <span>{{ $meal->name }}</span><br>
                            @endforeach
                        </td>
                        <td class="px-4 py-2 flex justify-center items-center gap-2">
                            <button type="button"
                                onclick="editMenu('{{ $menu->id }}', '{{ $menu->name }}', [{{ $menu->meals->pluck('id')->implode(',') }}])"
                                class="text-blue-500">Edit</button>
                            <form action="{{ route('dpanel.menus.destroy', $menu) }}" method="post">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="text-red-500">Delete</button>
                            </form>
                        </td>
                    </tr>
                @endforeach
            </x-slot:tbody>

            <x-slot:pagination>
                {{ $menus->links('dpanel.layouts.pagination') }}
            </x-slot:pagination>
        </x-dpanel::table>
    </section>

    {{-- Table End --}}

    <x-dpanel::modal.bottom-sheet sheetId="bottomSheet" title="New Menu">
        <div class="flex justify-center items-center min-h-[30vh] md:min-h-[50vh]">

            <form method="POST" action="{{ route('dpanel.menus.store') }}" enctype="multipart/form-data">
                @csrf

                <div class="mb-3">
                    <label>Menu Name</label>
                    <input type="text" name="name" placeholder="Enter Menu Name" required
                        class="w-full px-2 bg-transparent border rounded focus:outline-none">
                </div>

                <div class="mb-3">
                    <label>Meals</label>
                    <select name="meal_ids[]" id="menu_meals" multiple required class="w-full px-2 bg-transparent border rounded focus:outline-none">
                        @foreach ($meals as $meal)
                            <option value="{{ $meal->id }}">{{ $meal->name }}</option>
                        @endforeach
                    </select>
                </div>

                <button class="bg-violet-500 px-2 py-1 rounded w-full text-center text-white">Save</button>
            </form>
        </div>
    </x-dpanel::modal.bottom-sheet>

    <x-dpanel::modal.bottom-sheet sheetId="editBottomSheet" title="Edit Menu">
        <div class="flex justify-center items-center min-h-[30vh] md:min-h-[50vh]">

            <form method="POST" id="edit-form" action="" enctype="multipart/form-data">
                @csrf
                @method('PUT')

                <div class="mb-3">
                    <label>Menu Name</label>
                    <input type="text" id="menu_name" name="name" placeholder="Enter Menu Name" required
                        class="w-full px-2 bg-transparent border rounded focus:outline-none">
                </div>

                <div class="mb-3">
                    <label>Meals</label>
                    <select name="meal_ids[]" id="menu_meals" multiple required class="w-full px-2 bg-transparent border rounded focus:outline-none">
                        @foreach ($meals as $meal)
                            <option value="{{ $meal->id }}">{{ $meal->name }}</option>
                        @endforeach
                    </select>
                </div>

                <button class="bg-violet-500 px-2 py-1 rounded w-full text-center text-white">Update</button>
            </form>
        </div>
    </x-dpanel::modal.bottom-sheet>

    <x-dpanel::modal.bottom-sheet-js hideOnClickOutside="true" />
@endsection
