@extends('dpanel.layouts.app')

@section('title', 'Meals')

@section('body_content')

    <div class="flex justify-between items-center bg-gray-800 rounded mb-3 text-white">
        <h1 class="font-medium px-2">Meals</h1>
        <a href="{{ route('dpanel.meals.create') }}" class="bg-violet-500 rounded-r px-2 py-1">New</a>
    </div>

    <section class="mt-4">
        <x-dpanel::table>
            <x-slot:thead>
                <tr>
                    <th scope="col" class="pl-3 py-2 text-left w-12 ">
                        #
                    </th>
                    <th scope="col" class="pl-3 py-2 text-left font-medium tracking-wider">
                        Image
                    </th>

                    <th scope="col" class="pl-3 py-2 text-left font-medium tracking-wider">
                        Name
                    </th>

                    <th scope="col" class="pl-3 py-2 text-left font-medium tracking-wider">
                        Description
                    </th>

                    <th scope="col" class="pl-3 py-2 text-left font-medium tracking-wider">
                        Category
                    </th>

                    <th scope="col" class="pl-3 py-2 text-left font-medium tracking-wider">
                        Price
                    </th>

                    <th scope="col" class="pl-3 py-2 text-center font-medium tracking-wider">
                        Action
                    </th>
                </tr>
            </x-slot:thead>

            <x-slot:tbody>
                @foreach ($meals as $meal)
                    <tr>
                        <td class="pl-3 py-2">
                            {{ $meals->perPage() * ($meals->currentPage() - 1) + $loop->iteration }}
                        </td>
                        <td class="pl-3 py-2">
                            @if ($meal->getFirstMediaUrl('images', 'thumbnail'))
                                <img src="{{ $meal->getFirstMediaUrl('images', 'thumbnail') }}" alt="{{ $meal->name }}" width="100">
                            @else
                                <img src="/path/to/default/image.png" alt="No Image" width="100">
                            @endif
                        </td>
                        <td class="pl-3 py-2">{{ $meal->name }}</td>
                        <td class="pl-3 py-2">{{ $meal->description }}</td>
                        <td class="pl-3 py-2">{{ $meal->meal_category }}</td>
                        <td class="pl-3 py-2">{{ $meal->price }}</td>

                        <td class="px-4 py-2 flex justify-center items-center gap-2">
                            <a href="{{ route('dpanel.meals.edit', $meal) }}" class="text-blue-500">Edit</a>
                            <form action="{{ route('dpanel.meals.destroy', $meal) }}" method="post">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="text-red-500">Delete</button>
                            </form>
                        </td>
                    </tr>
                @endforeach

            </x-slot:tbody>

            <x-slot:pagination>
                {{ $meals->links('dpanel.layouts.pagination') }}
            </x-slot:pagination>
        </x-dpanel::table>
    </section>

@endsection
