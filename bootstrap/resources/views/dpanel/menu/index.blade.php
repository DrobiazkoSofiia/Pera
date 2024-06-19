@extends('dpanel.layouts.app')

@section('title', 'Menus')

@push('scripts')
    <script>
        const editMenu = (id, name, mealIds) => {
            document.getElementById('edit-form').action = `${window.location.href}/${id}`;
            document.getElementById('menu_name').value = name;
            document.getElementById('menu_meals').value = mealIds;
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
        <a href="{{ route('dpanel.menus.create') }}" class="bg-violet-500 rounded-r px-2 py-1">New</a>
    </div>

    <section class="mt-4">
        <x-dpanel::table>
            <x-slot:thead>
                <tr>
                    <th scope="col" class="pl-3 py-2 text-left w-12 ">
                        #
                    </th>
                    <th scope="col" class="pl-3 py-2 text-left font-medium tracking-wider">
                        Menu Name
                    </th>
                    <th scope="col" class="pl-3 py-2 text-center font-medium tracking-wider">
                        Action
                    </th>
                </tr>
            </x-slot:thead>

            <x-slot:tbody>
                @foreach ($menus as $menu)
                    <tr>
                        <td class="pl-3 py-2">
                            {{ $menus->perPage() * ($menus->currentPage() - 1) + $loop->iteration }}
                        </td>
                        <td class="pl-3 py-2">{{ $menu->name }}</td>
                        <td class="px-4 py-2 flex justify-center items-center gap-2">
                            <a href="{{ route('dpanel.menus.edit', $menu->id) }}" class="text-blue-500">Edit</a>
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
@endsection
