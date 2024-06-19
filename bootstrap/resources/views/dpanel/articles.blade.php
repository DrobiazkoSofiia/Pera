@extends('dpanel.layouts.app')

@section('title', 'Articles')

@push('scripts')
    <script>
        const editArticle = (id, title, description, min_age) => {
            document.getElementById('edit-form').action = `${window.location.href}/${id}`;
            document.getElementById('article_title').value = title;
            document.getElementById('article_description').value = description;
            document.getElementById('article_min_age').value = min_age;
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
        <h1 class="font-medium px-2">Articles</h1>
        <button onclick="showBottomSheet('bottomSheet')" class="bg-violet-500 rounded-r px-2 py-1">New</button>
    </div>

    <section class="mt-4">
        <x-dpanel::table>
            <x-slot name="thead">
                <tr>
                    <th scope="col" class="pl-3 py-2 text-left w-12">
                        #
                    </th>
                    <th scope="col" class="pl-3 py-2 text-left font-medium tracking-wider">
                        Title
                    </th>
                    <th scope="col" class="pl-3 py-2 text-left font-medium tracking-wider">
                        Description
                    </th>
                    <th scope="col" class="pl-3 py-2 text-left font-medium tracking-wider">
                        Min Age
                    </th>
                    <th scope="col" class="pl-3 py-2 text-left font-medium tracking-wider">
                        Picture
                    </th>
                    <th scope="col" class="pl-3 py-2 text-center font-medium tracking-wider">
                        Action
                    </th>
                </tr>
            </x-slot>

            <x-slot name="tbody">
                @foreach ($articles as $article)
                    <tr>
                        <td class="pl-3 py-2">
                            {{ $articles->perPage() * ($articles->currentPage() - 1) + $loop->iteration }}
                        </td>
                        <td class="pl-3 py-2">{{ $article->title }}</td>
                        <td class="pl-3 py-2">{{ $article->description }}</td>
                        <td class="pl-3 py-2">{{ $article->min_age }}</td>
                        <td class="pl-3 py-2">
                            @if ($article->hasMedia('pictures'))
                                <img src="{{ $article->getFirstMediaUrl('pictures', 'thumb') }}" alt="{{ $article->title }}" class="w-10 h-10 object-cover">
                            @else
                                No image
                            @endif
                        </td>
                        <td class="px-4 py-2 flex justify-center items-center gap-2">
                            <button type="button"
                                onclick="editArticle('{{ $article->id }}', '{{ $article->title }}', '{{ $article->description }}', '{{ $article->min_age }}')"
                                class="text-blue-500">Edit</button>
                            <form action="{{ route('dpanel.articles.destroy', $article) }}" method="post">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="text-red-500">Delete</button>
                            </form>
                        </td>
                    </tr>
                @endforeach
            </x-slot>

            <x-slot name="pagination">
                {{ $articles->links('dpanel.layouts.pagination') }}
            </x-slot>
        </x-dpanel::table>
    </section>

    {{-- Table End --}}

    <x-dpanel::modal.bottom-sheet sheetId="bottomSheet" title="New Article">
        <div class="flex justify-center items-center min-h-[30vh] md:min-h-[50vh]">

            <form method="POST" action="{{ route('dpanel.articles.store') }}" enctype="multipart/form-data">
                @csrf

                <div class="mb-3">
                    <label>Title</label>
                    <input type="text" name="title" placeholder="Enter Title" required
                        class="w-full px-2 bg-transparent border rounded focus:outline-none">
                </div>

                <div class="mb-3">
                    <label>Description</label>
                    <textarea name="description" placeholder="Enter Description" required
                        class="w-full px-2 bg-transparent border rounded focus:outline-none"></textarea>
                </div>

                <div class="mb-3">
                    <label>Min Age</label>
                    <input type="number" name="min_age" placeholder="Enter Min Age" required
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

    <x-dpanel::modal.bottom-sheet sheetId="editBottomSheet" title="Edit Article">
        <div class="flex justify-center items-center min-h-[30vh] md:min-h-[50vh]">

            <form method="POST" id="edit-form" action="" enctype="multipart/form-data">
                @csrf
                @method('PUT')

                <div class="mb-3">
                    <label>Title</label>
                    <input type="text" id="article_title" name="title" placeholder="Enter Title" required
                        class="w-full px-2 bg-transparent border rounded focus:outline-none">
                </div>

                <div class="mb-3">
                    <label>Description</label>
                    <textarea id="article_description" name="description" placeholder="Enter Description" required
                        class="w-full px-2 bg-transparent border rounded focus:outline-none"></textarea>
                </div>

                <div class="mb-3">
                    <label>Min Age</label>
                    <input type="number" id="article_min_age" name="min_age" placeholder="Enter Min Age" required
                        class="w-full px-2 bg-transparent border rounded focus:outline-none">
                </div>

                <div class="mb-3">
                    <label>Picture</label>
                    <input type="file" id="article_picture" name="picture"
                        class="w-full px-2 bg-transparent border rounded focus:outline-none">
                </div>

                <button class="bg-violet-500 px-2 py-1 rounded w-full text-center text-white">Update</button>
            </form>
        </div>
    </x-dpanel::modal.bottom-sheet>

    <x-dpanel::modal.bottom-sheet-js hideOnClickOutside="true" />

@endsection
