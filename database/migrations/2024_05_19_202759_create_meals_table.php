<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('meals', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique();
            $table->string('name');
            $table->string('description');
            $table->string('main_picture')->nullable();
            $table->string('cover_picture')->nullable();
            $table->string('meal_category');
            $table->longText('ingredients');
            $table->foreignId('child_type_id')->constrained()->onDelete('cascade');
            $table->string('calories');
            $table->string('preparation_time');
            $table->string('meat_percentage');
            $table->string('vegetables_percentage');
            $table->string('fruit_percentage');
            $table->string('cereals_percentage');
            $table->string('additional_pic1')->nullable();
            $table->string('additional_pic2')->nullable();
            $table->string('additional_pic3')->nullable();
            $table->string('additional_pic4')->nullable();
            $table->string('created_by');
            $table->decimal('price',10,2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('meals');
    }
};
