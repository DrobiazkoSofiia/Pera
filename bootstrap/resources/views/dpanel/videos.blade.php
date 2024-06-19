@extends('dpanel.layouts.app')

@section('title', 'Videos')

@push('scripts')
    <script>
        const editVideo = (id, title, description, min_age, url, duration, likes_amount) => {
            document.getElementById('edit-form').action = `${window.location.href}/${id}`;
            document.getElementById('video_title').value = title;
            document.getElementById('video_description').value = description;
            document.getElementById('video_min_age').value = min_age;
            document.getElementById('video_url').value = url;
            document.getElementById('video_duration').value = duration;
            document.getElementById('video_likes_amount').value = likes_amount;
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
        <h1 class="font-medium px-2">Videos</h1>
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
                        URL
                    </th>
                    <th scope="col" class="pl-3 py-2 text-left font-medium tracking-wider">
                        Duration
                    </th>
                    <th scope="col" class="pl-3 py-2 text-left font-medium tracking-wider">
                        Likes
                    </th>
                    <th scope="col" class="pl-3 py-2 text-left font-medium tracking-wider">
                        Cover Image
                    </th>
                    <th scope="col" class="pl-3 py-2 text-center font-medium tracking-wider">
                        Action
                    </th>
                </tr>
            </x-slot>

            <x-slot name="tbody">
                @foreach ($videos as $video)
                    <tr>
                        <td class="pl-3 py-2">
                            {{ $videos->perPage() * ($videos->currentPage() - 1) + $loop->iteration }}
                        </td>
                        <td class="pl-3 py-2">{{ $video->title }}</td>
                        <td class="pl-3 py-2">{{ $video->description }}</td>
                        <td class="pl-3 py-2">{{ $video->min_age }}</td>
                        <td class="pl-3 py-2"><a href="{{ $video->url }}" target="_blank">{{ $video->url }}</a></td>
                        <td class="pl-3 py-2">{{ $video->duration }}</td>
                        <td class="pl-3 py-2">{{ $video->likes_amount }}</td>
                        <td class="pl-3 py-2">
                            @if ($video->getFirstMediaUrl('covers'))
                                <img src="{{ $video->getFirstMediaUrl('covers', 'thumb') }}" alt="cover image" class="w-10 h-10 rounded">
                            @else
                                No cover image
                            @endif
                        </td>
                        <td class="px-4 py-2 flex justify-center items-center gap-2">
                            <button type="button"
                                onclick="editVideo('{{ $video->id }}', '{{ $video->title }}', '{{ $video->description }}', '{{ $video->min_age }}', '{{ $video->url }}', '{{ $video->duration }}', '{{ $video->likes_amount }}')"
                                class="text-blue-500">Edit</button>
                            <form action="{{ route('dpanel.videos.destroy', $video) }}" method="post">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="text-red-500">Delete</button>
                            </form>
                        </td>
                    </tr>
                @endforeach
            </x-slot>

            <x-slot name="pagination">
                {{ $videos->links('dpanel.layouts.pagination') }}
            </x-slot>
        </x-dpanel::table>
    </section>

    {{-- Table End --}}

    <x-dpanel::modal.bottom-sheet sheetId="bottomSheet" title="New Video">
        <div class="flex justify-center items-center min-h-[30vh] md:min-h-[50vh]">
            <form method="POST" action="{{ route('dpanel.videos.store') }}" enctype="multipart/form-data">
                @csrf

                <div class="mb-3">
                    <label>Title</label>
                    <input type="text" name="title" placeholder="Enter Title" required
                        class="w-full px-2 bg-transparent border rounded focus:outline-none">
                </div>

                <div class="mb-3">
                    <label>Description</label>
                    <input type="text" name="description" placeholder="Enter Description" required
                        class="w-full px-2 bg-transparent border rounded focus:outline-none">
                </div>

                <div class="mb-3">
                    <label>Min Age</label>
                    <input type="text" name="min_age" placeholder="Enter Min Age" required
                        class="w-full px-2 bg-transparent border rounded focus:outline-none">
                </div>
                <div class="mb-3">
                    <label>URL</label>
                    <input type="url" id="url" name="url" placeholder="Enter URL" required
                        class="w-full px-2 bg-transparent border rounded focus:outline-none">
                </div>
                <div class="mb-3">
                    <label>Duration</label>
                    <input type="text" name="duration" placeholder="Enter Duration" class="w-full px-2 bg-transparent border rounded focus:outline-none">
                </div>
                <div class="mb-3">
                    <label>Likes Amount</label>
                    <input type="text" name="likes_amount" placeholder="Enter Likes Amount" class="w-full px-2 bg-transparent border rounded focus:outline-none">
                </div>
                <div class="mb-3">
                    <label>Cover Image</label>
                    <input type="file" name="cover_image" class="w-full px-2 bg-transparent border rounded focus:outline-none">
                </div>
                <button class="bg-violet-500 px-2 py-1 rounded w-full text-center text-white">Save</button>
            </form>
        </div>
    </x-dpanel::modal.bottom-sheet>

    <x-dpanel::modal.bottom-sheet sheetId="editBottomSheet" title="Edit Video">
        <div class="flex justify-center items-center min-h-[30vh] md:min-h-[50vh]">
            <form method="POST" id="edit-form" action="" enctype="multipart/form-data">
                @csrf
                @method('PUT')

                <div class="mb-3">
                    <label>Title</label>
                    <input type="text" id="video_title" name="title" placeholder="Enter Title" required
                        class="w-full px-2 bg-transparent border rounded focus:outline-none">
                </div>

                <div class="mb-3">
                    <label>Description</label>
                    <input type="text" id="video_description" name="description" placeholder="Enter Description" required
                        class="w-full px-2 bg-transparent border rounded focus:outline-none">
                </div>

                <div class="mb-3">
                    <label>Min Age</label>
                    <input type="text" id="video_min_age" name="min_age" placeholder="Enter Min Age" required
                        class="w-full px-2 bg-transparent border rounded focus:outline-none">
                </div>

                <div class="mb-3">
                    <label>URL</label>
                    <input type="url" id="video_url" name="url" placeholder="Enter URL" required
                        class="w-full px-2 bg-transparent border rounded focus:outline-none">
                </div>
                <div class="mb-3">
                    <label>Duration</label>
                    <input type="text" id="video_duration" name="duration" placeholder="Enter Duration" class="w-full px-2 bg-transparent border rounded focus:outline-none">
                </div>
                <div class="mb-3">
                    <label>Likes Amount</label>
                    <input type="text" id="video_likes_amount" name="likes_amount" placeholder="Enter Likes Amount" class="w-full px-2 bg-transparent border rounded focus:outline-none">
                </div>
                <div class="mb-3">
                    <label>Cover Image</label>
                    <input type="file" name="cover_image" class="w-full px-2 bg-transparent border rounded focus:outline-none">
                </div>
                <button class="bg-violet-500 px-2 py-1 rounded w-full text-center text-white">Update</button>
            </form>
        </div>
    </x-dpanel::modal.bottom-sheet>

    <x-dpanel::modal.bottom-sheet-js hideOnClickOutside="true" />
@endsection
