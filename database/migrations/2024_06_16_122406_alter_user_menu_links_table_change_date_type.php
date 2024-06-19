<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class AlterUserMenuLinksTableChangeDateType extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('user_menu_links', function (Blueprint $table) {
            // Drop the old column
            $table->dropColumn('date');
        });

        Schema::table('user_menu_links', function (Blueprint $table) {
            // Add the new column with the correct type
            $table->timestamp('date')->default(DB::raw('CURRENT_TIMESTAMP'));
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('user_menu_links', function (Blueprint $table) {
            $table->dropColumn('date');
        });

        Schema::table('user_menu_links', function (Blueprint $table) {
            $table->date('date')->default(DB::raw('CURRENT_DATE'));
        });
    }
}
