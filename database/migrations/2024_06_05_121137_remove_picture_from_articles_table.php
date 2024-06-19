<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RemovePictureFromArticlesTable extends Migration
{
    public function up()
    {
        Schema::table('articles', function (Blueprint $table) {
            $table->dropColumn('picture');
        });
    }

    public function down()
    {
        Schema::table('articles', function (Blueprint $table) {
            $table->string('picture')->nullable();
        });
    }
}