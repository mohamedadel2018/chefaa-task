<?php

namespace Database\Factories;
use App\Models\Pharmacie;

use Illuminate\Database\Eloquent\Factories\Factory;

class pharmacieFactory extends Factory
{

    protected $model = Pharmacie::class;
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            //
            'name' => $this->faker->name(),
            'location' => $this->faker->title(),
        ];
    }
}
