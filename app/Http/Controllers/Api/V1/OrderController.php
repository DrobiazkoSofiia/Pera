<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function index()
    {
        $orders = Order::all();
        return response()->json($orders, 200);
    }

    public function show($id)
    {
        $order = Order::findOrFail($id);
        return response()->json($order, 200);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'user_id' => 'required|integer|exists:users,id',
            'menu_id' => 'required|integer|exists:menus,id',
            'total_price' => 'required|numeric',
            'date' => 'required|date',
        ]);

        $order = Order::create($request->all());
        return response()->json($order, 201);
    }

    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'user_id' => 'integer|exists:users,id',
            'menu_id' => 'integer|exists:menus,id',
            'total_price' => 'numeric',
            'date' => 'date',
        ]);

        $order = Order::findOrFail($id);
        $order->update($request->all());
        return response()->json($order, 200);
    }

    public function destroy($id)
    {
        Order::findOrFail($id)->delete();
        return response()->json(null, 204);
    }
}
