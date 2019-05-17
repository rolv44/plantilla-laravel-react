<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            // 'id'=>1,
            'name'=>"oliver",
            'email' => 'lorv44@gmail.com',
            'tipo' => 1,
            'email_verified_at' => null,
            'password' => bcrypt('admin'),
            'remember_token' => str_random(60)
        ]);
        DB::table('users')->insert([
            // 'id'=>1,
            'name'=>"oliver",
            'email' => 'tree@gmail.com',
            'tipo' => 2,
            'email_verified_at' => null,
            'password' => bcrypt('admin'),
            'remember_token' => str_random(60)
        ]);
    }
}
