<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMatricesPivot extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('matrices_pivot', function (Blueprint $table) {
            $table->unsignedBigInteger('matrix_id');
            $table->unsignedBigInteger('field_id');
            $table->morphs('pivot');
            $table->unsignedInteger('order')->default(0);

            $table->foreign('field_id')
                ->references('id')->on('fields')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('matrices_pivot');
    }
}
